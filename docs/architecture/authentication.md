# 🔧 Техническая архитектура авторизации

## Обзор технологического стека

### Основные компоненты

| Компонент | Технология | Версия | Назначение |
|-----------|------------|--------|------------|
| **Frontend** | Next.js | 14+ | App Router, SSR/SSG |
| **Auth Provider** | Supabase Auth | Latest | JWT токены, управление пользователями |
| **SSR Integration** | @supabase/ssr | 0.7.0 | Cookie-based session management |
| **State Management** | React useState | 18+ | Локальное состояние форм |
| **Routing** | Next.js Router | 14+ | Навигация и перенаправления |

## Архитектура клиентов Supabase

### 1. Browser Client (`lib/supabase/client.ts`)

```typescript
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

**Назначение:**
- Используется в **Client Components**
- Работает в браузере
- Автоматически синхронизируется с cookies
- Обеспечивает реактивность состояния авторизации

**Технические особенности:**
- Автоматическое чтение токенов из cookies
- Обновление localStorage при изменении токенов
- Обработка refresh token rotation
- WebSocket подключения для real-time обновлений

### 2. Server Client (`lib/supabase/server.ts`)

```typescript
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Игнорируем ошибки в Server Components
            // Middleware обновит cookies
          }
        }
      }
    }
  )
}
```

**Назначение:**
- Используется в **Server Components** и **API Routes**
- Работает на сервере
- Читает и устанавливает HTTP-only cookies
- Обеспечивает SSR совместимость

**Технические особенности:**
- Доступ к cookies через Next.js `cookies()` API
- Безопасная установка HTTP-only cookies
- Обработка ошибок при попытке записи в Server Components
- Синхронизация с middleware

## Middleware архитектура

### Конфигурация (`middleware.ts`)

```typescript
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

**Что защищается:**
- ✅ Все страницы приложения
- ✅ API роуты
- ❌ Статические файлы (`_next/static`, `_next/image`)
- ❌ Изображения (svg, png, jpg, etc.)
- ❌ favicon.ico

### Логика защиты

```typescript
const { data: { user } } = await supabase.auth.getUser()

if (
  !user &&
  !request.nextUrl.pathname.startsWith('/login') &&
  !request.nextUrl.pathname.startsWith('/auth')
) {
  const url = request.nextUrl.clone()
  url.pathname = '/login'
  return NextResponse.redirect(url)
}
```

**Алгоритм:**
1. **Извлечение пользователя** из cookies
2. **Проверка авторизации**: если пользователь НЕ авторизован
3. **Проверка исключений**: если НЕ на `/login` или `/auth/*`
4. **Перенаправление** на `/login`

## Управление сессией

### Cookie Configuration

Supabase автоматически настраивает cookies со следующими параметрами:

```javascript
// Автоматически устанавливаемые Supabase
{
  name: `sb-${project_ref}-auth-token`,
  value: "encrypted_jwt_token",
  options: {
    httpOnly: true,        // Защита от XSS
    secure: true,          // Только HTTPS (в production)
    sameSite: 'lax',       // CSRF protection
    path: '/',             // Доступны на всем сайте
    maxAge: 3600,          // 1 час (access token)
  }
}
```

### JWT Token Structure

**Access Token (короткий срок жизни - 1 час):**
```json
{
  "aud": "authenticated",
  "exp": 1640995200,
  "sub": "user-uuid-here",
  "email": "user@example.com",
  "role": "authenticated",
  "session_id": "session-uuid"
}
```

**Refresh Token (длительный срок жизни - 30 дней):**
```json
{
  "exp": 1643587200,
  "sub": "user-uuid-here",
  "session_id": "session-uuid"
}
```

## Процессы авторизации

### 1. Процесс входа (Sign In)

#### Клиентская сторона
```typescript
// app/login/page.tsx
const { error } = await supabase.auth.signInWithPassword({
  email,
  password,
})
```

#### Серверная обработка
1. **Supabase Auth API** проверяет credentials
2. **Создание JWT токенов** (access + refresh)
3. **Установка cookies** через browser client
4. **Синхронизация** с server client через middleware

#### Сетевые запросы
```http
POST https://your-project.supabase.co/auth/v1/token?grant_type=password
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "user_password"
}
```

**Ответ:**
```json
{
  "access_token": "eyJ...",
  "refresh_token": "abc123...",
  "expires_in": 3600,
  "token_type": "bearer",
  "user": { ... }
}
```

### 2. Процесс регистрации (Sign Up)

#### Клиентская сторона
```typescript
// app/login/page.tsx
const { error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    emailRedirectTo: `${location.origin}/auth/callback`,
  },
})
```

#### Email Confirmation Flow
1. **Отправка email** с confirmation link
2. **Клик по ссылке** → `/auth/callback?code=confirmation_code`
3. **Обработка callback** в `auth/callback/route.ts`
4. **Обмен кода на сессию** через `exchangeCodeForSession()`

#### Callback обработка
```typescript
// auth/callback/route.ts
export async function handleAuthCallback(request: NextRequest) {
  const code = requestUrl.searchParams.get('code')
  
  if (code) {
    const supabase = createServerClient(/* ... */)
    await supabase.auth.exchangeCodeForSession(code)
  }
  
  return NextResponse.redirect(requestUrl.origin)
}
```

### 3. Автоматическое обновление токенов

Supabase SDK автоматически обрабатывает:
- **Проверку истечения** access token
- **Использование refresh token** для получения нового access token
- **Обновление cookies** с новыми токенами
- **Retry логику** для неудачных запросов

```typescript
// Автоматически выполняется SDK
if (accessToken.isExpired) {
  const { data } = await supabase.auth.refreshSession()
  // Cookies автоматически обновляются
}
```

## Безопасность

### Защита от атак

| Тип атаки | Защита | Реализация |
|-----------|--------|------------|
| **XSS** | HTTP-only cookies | Токены недоступны JavaScript |
| **CSRF** | SameSite cookies | `sameSite: 'lax'` |
| **Session Hijacking** | Secure cookies | `secure: true` в production |
| **Token Replay** | Short-lived tokens | Access token живет 1 час |
| **Brute Force** | Rate limiting | Встроено в Supabase Auth |

### Validation Chain

```
Request → Middleware → Cookie Check → JWT Validation → 
User Extraction → Route Access → Component Render
```

### Error Handling

```typescript
// Типичная обработка ошибок
try {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  
  if (error) {
    // Supabase предоставляет детальные ошибки
    switch (error.message) {
      case 'Invalid login credentials':
        setMessage('Неверный email или пароль')
        break
      case 'Email not confirmed':
        setMessage('Подтвердите email перед входом')
        break
      default:
        setMessage('Произошла ошибка авторизации')
    }
  }
} catch (networkError) {
  setMessage('Проблемы с сетью. Попробуйте позже.')
}
```

## Performance Considerations

### Оптимизации

1. **Cookie размер**: JWT токены разбиваются на несколько cookies если превышают лимит
2. **Caching**: Server Components кешируют результат `getUser()`
3. **Prefetching**: Next.js prefetch защищенных роутов после авторизации
4. **Bundle size**: `@supabase/ssr` оптимизирован для SSR

### Мониторинг

```typescript
// Можно добавить метрики
const startTime = performance.now()
const { data: { user } } = await supabase.auth.getUser()
const endTime = performance.now()

console.log(`Auth check took ${endTime - startTime}ms`)
```

---

*Последнее обновление: ${new Date().toLocaleDateString('ru-RU')}*
