# Portfolio App - Next.js + Supabase

Стартовый проект для создания современного веб-приложения с использованием Next.js и Supabase.

## 🚀 Технологии

- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - Утилитарный CSS фреймворк
- **Supabase** - Открытая альтернатива Firebase
- **ESLint** - Линтер для JavaScript/TypeScript

## 📦 Установка и настройка

### 1. Клонирование и установка зависимостей

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### 2. Настройка Supabase

1. Создайте проект на [supabase.com](https://supabase.com)
2. Перейдите в Settings → API
3. Скопируйте Project URL и Public Anon Key

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```bash
cp .env.local.example .env.local
```

Заполните переменные окружения:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Supabase Service Role Key (for admin operations)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Запуск проекта

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🏗️ Структура проекта

```
src/
├── app/                           # Next.js App Router
│   ├── auth/
│   │   └── callback/
│   │       └── route.ts          # Обработка OAuth callback от Supabase
│   ├── login/
│   │   └── page.tsx              # Страница входа/регистрации
│   ├── globals.css               # Глобальные стили Tailwind
│   ├── layout.tsx                # Корневой layout приложения
│   └── page.tsx                  # Главная страница (защищенная)
├── components/
│   └── auth/                     # Компоненты аутентификации
│       ├── login-form.tsx        # Форма входа/регистрации
│       └── user-nav.tsx          # Навигация пользователя (профиль/выход)
├── lib/
│   ├── supabase/                 # Supabase клиенты
│   │   ├── client.ts             # Браузерный клиент (для Client Components)
│   │   └── server.ts             # Серверный клиент (для Server Components)
│   └── types/
│       ├── database.ts           # Автогенерированные типы Supabase
│       └── database-simplified.ts # Упрощенная версия для новичков
└── middleware.ts                 # Next.js middleware для защиты маршрутов
```

### 📁 Подробное описание файлов

#### **App Router (`src/app/`)**
- `layout.tsx` - Основной макет приложения, подключает шрифты и стили
- `page.tsx` - Главная страница, показывает информацию о пользователе (требует авторизации)
- `login/page.tsx` - Страница входа с формой регистрации/авторизации
- `auth/callback/route.ts` - API роут для обработки OAuth редиректов от Supabase

#### **Компоненты (`src/components/`)**
- `auth/login-form.tsx` - Интерактивная форма с кнопками "Войти" и "Зарегистрироваться"
- `auth/user-nav.tsx` - Компонент навигации для авторизованных пользователей

#### **Библиотеки (`src/lib/`)**
- `supabase/client.ts` - Создает клиент Supabase для браузера (Client Components)
- `supabase/server.ts` - Создает клиент Supabase для сервера (Server Components, API)
- `types/database.ts` - Типы TypeScript для всех таблиц БД (автогенерируется)
- `types/database-simplified.ts` - Упрощенная версия типов для новичков

#### **Middleware (`src/middleware.ts`)**
- Проверяет авторизацию пользователя на каждом запросе
- Перенаправляет неавторизованных на `/login`
- Обновляет токены авторизации автоматически

## 🔐 Аутентификация

Проект включает готовую систему аутентификации с Supabase:

### 🚪 Как это работает

1. **Регистрация нового пользователя:**
   - Пользователь заполняет email и пароль
   - Supabase отправляет письмо с подтверждением
   - После подтверждения создается аккаунт

2. **Вход существующего пользователя:**
   - Пользователь вводит email и пароль
   - Supabase проверяет данные и создает сессию
   - Пользователь перенаправляется на главную страницу

3. **Защита маршрутов:**
   - `middleware.ts` проверяет каждый запрос
   - Если пользователь не авторизован → редирект на `/login`
   - Если авторизован → доступ к защищенным страницам

### 🔧 Компоненты аутентификации

- **LoginForm** (`login-form.tsx`):
  - Форма с полями email/password
  - Кнопки "Войти" и "Зарегистрироваться"
  - Обработка ошибок и успешных действий

- **UserNav** (`user-nav.tsx`):
  - Показывает информацию о пользователе
  - Кнопка выхода из аккаунта
  - Отображается только для авторизованных

### 🛡️ Безопасность

- Пароли хешируются автоматически Supabase
- JWT токены для поддержания сессии
- Автоматическое обновление токенов
- Row Level Security (RLS) в базе данных

## 📝 Доступные команды

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm start

# Линтинг кода
npm run lint
```

## 🔧 Конфигурация

### Supabase Client

Проект использует два типа клиентов:

- **Browser Client** (`src/lib/supabase/client.ts`) - для клиентских компонентов
- **Server Client** (`src/lib/supabase/server.ts`) - для серверных компонентов и API

### Middleware

Middleware (`src/middleware.ts`) автоматически:
- Проверяет аутентификацию пользователя
- Перенаправляет неавторизованных пользователей на страницу входа
- Обновляет токены аутентификации

### TypeScript типы для базы данных

Файл `src/lib/types/database.ts` содержит автоматически сгенерированные типы для работы с Supabase. Давайте разберем что там происходит:

#### 🤔 Что содержится в database.ts

**1. Базовый тип `Json`** - описывает все возможные JSON данные
```typescript
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]
```

**2. Основной тип `Database`** - "карта" всей вашей базы данных
- `__InternalSupabase` - техническая информация Supabase (можно игнорировать)
- `public` - основная схема БД
- `Tables` - все ваши таблицы
- `profiles` - таблица профилей пользователей

**3. Структура таблицы `profiles`:**
- `Row` - как выглядят данные при чтении (id, user_id, full_name, avatar_url, created_at)
- `Insert` - что нужно при создании записи (большинство полей опциональны)
- `Update` - что можно изменить при обновлении (все поля опциональны)

**4. Сложные utility типы** - `Tables<>`, `TablesInsert<>`, `TablesUpdate<>` и др.
- Это сложные TypeScript помощники для извлечения типов
- Для новичков могут быть слишком сложными
- Позволяют писать `Tables<'profiles'>` вместо длинного пути к типу

#### 💡 Что действительно нужно новичку?

Большая часть файла - это автоматически сгенерированный код от Supabase CLI. Для начала достаточно понимать:

1. **Тип `Json`** - оставляем, он нужен для безопасности
2. **Тип `Database`** - основа всего, обязательно нужен  
3. **Структуру таблиц** - описывает ваши данные
4. **Простые типы** для удобства:
```typescript
// Вместо сложных utility типов можно использовать простые:
export type Profile = Database['public']['Tables']['profiles']['Row']
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']
```

#### 🛠️ Упрощенная версия

Создана упрощенная версия в `src/lib/types/database-simplified.ts` - она содержит только самое необходимое без сложной магии TypeScript.

#### 🔄 Как обновлять типы

Когда вы добавите новые таблицы в Supabase, обновите типы командой:
```bash
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/lib/types/database.ts
```

## 🚀 Следующие шаги

1. **Создайте таблицы в Supabase** - используйте SQL Editor или Table Editor
2. **Обновите типы** - добавьте типы ваших таблиц в `database.ts`
3. **Настройте RLS** - включите Row Level Security для безопасности
4. **Добавьте новые компоненты** - создайте UI для вашего приложения
5. **Деплой** - разверните на Vercel, Netlify или другой платформе

## 📚 Полезные ссылки

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Поддержка

Если у вас есть вопросы или проблемы, создайте issue в репозитории.