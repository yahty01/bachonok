# 🛠️ Решение проблем авторизации

## Часто задаваемые вопросы (FAQ)

### ❓ Общие вопросы

#### **Q: Где хранятся токены авторизации?**
**A:** Токены хранятся в **HTTP-only cookies**, а не в localStorage. Это более безопасный подход для SSR приложений.

**Как проверить:**
1. Откройте DevTools (F12)
2. Перейдите в Application → Cookies
3. Найдите cookies с префиксом `sb-[project-ref]-auth-token`

#### **Q: Почему после авторизации меня перенаправляет обратно на /login?**
**A:** Возможные причины:
- Cookies не установились (проверьте DevTools)
- Middleware не может прочитать cookies
- Проблемы с HTTPS/HTTP в development
- Неправильные переменные окружения

#### **Q: Не приходит email для подтверждения регистрации**
**A:** Проверьте:
1. **Spam папку** в почте
2. **Email templates** в Supabase Dashboard
3. **SMTP настройки** в Supabase (если используете кастомный SMTP)
4. **Правильность emailRedirectTo** в коде

## 🚨 Типичные ошибки и решения

### 1. "Invalid login credentials"

**Причина:** Неверный email или пароль

**Решение:**
```typescript
// Добавьте детальную обработку ошибок
const { error } = await supabase.auth.signInWithPassword({ email, password })

if (error) {
  switch (error.message) {
    case 'Invalid login credentials':
      setMessage('Проверьте правильность email и пароля')
      break
    case 'Email not confirmed':
      setMessage('Подтвердите email перед входом')
      break
    default:
      setMessage(`Ошибка: ${error.message}`)
  }
}
```

### 2. "Email not confirmed"

**Причина:** Пользователь не подтвердил email после регистрации

**Решение:**
```typescript
// Добавьте повторную отправку email
const resendConfirmation = async () => {
  const { error } = await supabase.auth.resend({
    type: 'signup',
    email: email
  })
  
  if (!error) {
    setMessage('Email подтверждения отправлен повторно')
  }
}
```

### 3. Cookies не сохраняются

**Причина:** Проблемы с настройкой cookies в development

**Решение:**
```typescript
// Проверьте настройки в middleware.ts
const supabase = createServerClient(url, key, {
  cookies: {
    getAll() {
      return request.cookies.getAll()
    },
    setAll(cookiesToSet) {
      // ВАЖНО: правильная установка cookies
      cookiesToSet.forEach(({ name, value }) => 
        request.cookies.set(name, value)
      )
      supabaseResponse = NextResponse.next({ request })
      cookiesToSet.forEach(({ name, value, options }) =>
        supabaseResponse.cookies.set(name, value, options)
      )
    }
  }
})
```

### 4. Middleware loop (бесконечные перенаправления)

**Причина:** Неправильная логика исключений в middleware

**Решение:**
```typescript
// Убедитесь, что исключения настроены правильно
if (
  !user &&
  !request.nextUrl.pathname.startsWith('/login') &&
  !request.nextUrl.pathname.startsWith('/auth') &&
  !request.nextUrl.pathname.startsWith('/_next') // Добавьте это
) {
  return NextResponse.redirect(new URL('/login', request.url))
}
```

### 5. "Session expired" при refresh

**Причина:** Refresh token истек или невалиден

**Решение:**
```typescript
// Добавьте обработку истечения сессии
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT' && !session) {
    // Принудительный logout
    router.push('/login')
    router.refresh()
  }
})
```

## 🔧 Диагностика проблем

### Пошаговая диагностика

#### **Шаг 1: Проверка переменных окружения**
```bash
# Проверьте .env.local
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
```

**Должны быть установлены:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### **Шаг 2: Проверка Supabase проекта**
1. Откройте [Supabase Dashboard](https://supabase.com/dashboard)
2. Перейдите в Authentication → Settings
3. Проверьте:
   - **Site URL** должен соответствовать вашему домену
   - **Redirect URLs** должны включать `${your-domain}/auth/callback`

#### **Шаг 3: Проверка Network запросов**
1. Откройте DevTools → Network
2. Попробуйте войти
3. Найдите запросы к `supabase.co/auth/v1/`
4. Проверьте статус коды и ответы

#### **Шаг 4: Проверка консоли браузера**
```javascript
// Добавьте debug логи
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 10) + '...')
```

### Debug режим

Добавьте debug информацию в ваши компоненты:

```typescript
// В login/page.tsx добавьте
useEffect(() => {
  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    console.log('Current session:', session)
  }
  checkSession()
}, [])
```

## 🛡️ Проблемы безопасности

### Распространенные уязвимости

#### **1. XSS через localStorage**
❌ **Неправильно:**
```typescript
localStorage.setItem('token', accessToken) // Уязвимо к XSS
```

✅ **Правильно:**
```typescript
// Используйте HTTP-only cookies через @supabase/ssr
// Токены недоступны JavaScript
```

#### **2. CSRF атаки**
❌ **Неправильно:**
```typescript
// Cookies без SameSite защиты
document.cookie = "token=abc123"
```

✅ **Правильно:**
```typescript
// Supabase автоматически устанавливает SameSite: 'lax'
// Дополнительной настройки не требуется
```

#### **3. Session fixation**
✅ **Защита встроена:**
- Supabase автоматически ротирует session ID
- JWT токены содержат уникальный session_id
- Refresh tokens обновляются при каждом использовании

## 📊 Мониторинг и логирование

### Добавление метрик

```typescript
// Создайте utility для мониторинга
export const authMetrics = {
  trackLogin: (success: boolean, error?: string) => {
    console.log('Login attempt:', { success, error, timestamp: new Date() })
    // Отправьте в вашу систему аналитики
  },
  
  trackSessionDuration: (startTime: number) => {
    const duration = Date.now() - startTime
    console.log('Session duration:', duration)
  }
}

// Используйте в компонентах
const handleAuth = async () => {
  const startTime = Date.now()
  try {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    authMetrics.trackLogin(!error, error?.message)
  } catch (err) {
    authMetrics.trackLogin(false, err.message)
  }
}
```

### Логирование ошибок

```typescript
// Создайте централизованный error handler
export const authErrorHandler = {
  log: (error: Error, context: string) => {
    console.error(`Auth Error [${context}]:`, {
      message: error.message,
      stack: error.stack,
      timestamp: new Date(),
      userAgent: navigator.userAgent
    })
    
    // Отправьте в систему мониторинга (Sentry, LogRocket и т.д.)
  }
}
```

## 🔄 Миграция и обновления

### Обновление @supabase/ssr

```bash
# Проверьте текущую версию
npm list @supabase/ssr

# Обновите до последней версии
npm update @supabase/ssr

# Проверьте breaking changes в changelog
```

### Миграция с localStorage на cookies

Если у вас есть старый код с localStorage:

```typescript
// Старый подход (удалите)
const token = localStorage.getItem('supabase.auth.token')

// Новый подход (используйте)
const { data: { session } } = await supabase.auth.getSession()
```

## 📞 Получение помощи

### Ресурсы для решения проблем

1. **Supabase Documentation**: https://supabase.com/docs/guides/auth
2. **Next.js SSR Guide**: https://supabase.com/docs/guides/auth/server-side-rendering
3. **GitHub Issues**: https://github.com/supabase/supabase/issues
4. **Discord Community**: https://discord.supabase.com

### Создание bug report

При создании issue включите:

```markdown
## Bug Report

**Environment:**
- Next.js version: 14.x.x
- @supabase/ssr version: 0.7.0
- Browser: Chrome/Firefox/Safari
- OS: macOS/Windows/Linux

**Steps to reproduce:**
1. ...
2. ...
3. ...

**Expected behavior:**
...

**Actual behavior:**
...

**Console errors:**
```
[вставьте ошибки из консоли]
```

**Network requests:**
[скриншот Network tab]
```

---

*Руководство по решению проблем обновлено: ${new Date().toLocaleDateString('ru-RU')}*
