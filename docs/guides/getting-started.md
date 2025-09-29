# 🚀 Быстрый старт

Руководство по настройке и запуску Portfolio App для новых разработчиков.

## 📋 Предварительные требования

### Системные требования:
- **Node.js** 18+ 
- **npm** или **yarn**
- **Git**
- **Современный браузер** (Chrome, Firefox, Safari)

### Аккаунты:
- **GitHub** - для доступа к репозиторию
- **Supabase** - для работы с базой данных и авторизацией

## 🛠️ Настройка проекта

### 1. Клонирование репозитория
```bash
git clone https://github.com/your-org/portfolio.git
cd portfolio
```

### 2. Установка зависимостей
```bash
npm install
# или
yarn install
```

### 3. Настройка переменных окружения
```bash
# Скопируйте файл с примером
cp env.example .env.local

# Отредактируйте .env.local и добавьте ваши значения:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Где взять ключи Supabase:**
1. Откройте [Supabase Dashboard](https://supabase.com/dashboard)
2. Выберите ваш проект
3. Перейдите в Settings → API
4. Скопируйте URL и anon/public key

### 4. Первый запуск
```bash
npm run dev
# или  
yarn dev
```

Приложение запустится на `http://localhost:3000`

## ✅ Проверка установки

### 1. Откройте приложение
Перейдите по адресу `http://localhost:3000`

### 2. Проверьте авторизацию
- Должна отображаться страница входа
- Попробуйте зарегистрировать тестового пользователя
- Проверьте почту для подтверждения

### 3. Проверьте консоль
- Не должно быть критических ошибок в браузерной консоли
- В терминале не должно быть ошибок сборки

## 🏗️ Структура проекта

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── login/             # Страница авторизации
│   │   └── auth/callback/     # Обработка email подтверждения
│   ├── components/            # React компоненты
│   │   └── auth/             # Компоненты авторизации
│   ├── lib/                   # Утилиты и конфигурация
│   │   ├── supabase/         # Клиенты Supabase
│   │   └── types/            # TypeScript типы
│   └── middleware.ts          # Next.js middleware
├── docs/                      # Документация
├── public/                    # Статические файлы
└── package.json              # Зависимости проекта
```

## 🔧 Полезные команды

### Разработка:
```bash
npm run dev          # Запуск dev сервера
npm run build        # Сборка для production
npm run start        # Запуск production сборки
npm run lint         # Проверка кода линтером
```

### Отладка:
```bash
# Проверка переменных окружения
echo $NEXT_PUBLIC_SUPABASE_URL

# Очистка кеша Next.js
rm -rf .next

# Переустановка зависимостей
rm -rf node_modules package-lock.json
npm install
```

## 📖 Следующие шаги

После успешной настройки изучите:

1. **[Руководство по авторизации](./authentication-guide.md)** - как работает система auth
2. **[Архитектура](../architecture/authentication.md)** - техническая реализация
3. **[Решение проблем](../troubleshooting/authentication.md)** - если что-то не работает

## 🆘 Частые проблемы при установке

### Проблема: "Module not found"
**Решение:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Проблема: "Invalid Supabase URL"
**Решение:**
- Проверьте правильность URL в .env.local
- Убедитесь что файл называется именно .env.local
- Перезапустите dev сервер

### Проблема: "Cannot connect to Supabase"
**Решение:**
- Проверьте интернет соединение
- Убедитесь что Supabase проект активен
- Проверьте правильность anon key

### Проблема: Middleware redirect loop
**Решение:**
- Очистите cookies в браузере
- Проверьте настройки middleware.ts
- Перезапустите приложение

## 📞 Получение помощи

Если возникли проблемы:

1. **Проверьте [Troubleshooting](../troubleshooting/)** - возможно проблема уже документирована
2. **Создайте Issue** в репозитории с детальным описанием
3. **Обратитесь к команде** через корпоративные каналы

## 🎯 Готовность к разработке

После выполнения всех шагов у вас должно быть:

- ✅ Запущенное приложение на localhost:3000
- ✅ Работающая система авторизации
- ✅ Настроенная связь с Supabase
- ✅ Понимание структуры проекта
- ✅ Доступ к документации

**Поздравляем! Вы готовы к разработке! 🎉**

---

*Руководство по быстрому старту обновлено: ${new Date().toLocaleDateString('ru-RU')}*
