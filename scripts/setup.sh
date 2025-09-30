#!/bin/bash

# Скрипт для первоначальной настройки проекта
echo "🚀 Setting up Bochonok App..."

# Проверяем, существует ли файл .env.local
if [ ! -f .env.local ]; then
    # Если .env.local не найден, создаём его на основе шаблона
    echo "📝 Creating .env.local from template..."
    cp env.example .env.local
    echo "✅ .env.local created. Please edit it with your Supabase credentials."
else
    # Если файл уже существует, уведомляем пользователя
    echo "⚠️  .env.local already exists."
fi

# Проверяем, установлены ли зависимости (наличие папки node_modules)
if [ ! -d node_modules ]; then
    # Если зависимости не установлены, запускаем установку через npm
    echo "📦 Installing dependencies..."
    npm install
else
    # Если зависимости уже установлены, уведомляем пользователя
    echo "✅ Dependencies already installed."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your Supabase project URL and anon key"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "Need help? Check the README.md file for detailed instructions."
