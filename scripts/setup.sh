#!/bin/bash

echo "🚀 Setting up Portfolio App..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.local.example .env.local
    echo "✅ .env.local created. Please edit it with your Supabase credentials."
else
    echo "⚠️  .env.local already exists."
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    npm install
else
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
