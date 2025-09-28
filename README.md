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
├── app/                    # Next.js App Router
│   ├── globals.css        # Глобальные стили
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница
├── components/
│   └── auth/              # Компоненты аутентификации
│       ├── login-form.tsx # Форма входа/регистрации
│       └── user-nav.tsx   # Навигация пользователя
├── lib/
│   ├── supabase/          # Supabase клиенты
│   │   ├── client.ts      # Браузерный клиент
│   │   └── server.ts      # Серверный клиент
│   └── types/
│       └── database.ts    # TypeScript типы для БД
└── middleware.ts          # Next.js middleware для auth
```

## 🔐 Аутентификация

Проект включает готовую систему аутентификации:

- **Регистрация** - создание нового аккаунта
- **Вход** - аутентификация существующего пользователя
- **Выход** - завершение сессии
- **Защищенные маршруты** - автоматическое перенаправление на страницу входа

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

### TypeScript типы

Файл `src/lib/types/database.ts` содержит типы для вашей базы данных. Обновите его после создания таблиц в Supabase.

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