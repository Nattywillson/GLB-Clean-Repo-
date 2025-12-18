#!/bin/bash

echo "🌟 Global Women Rising - Ubuntu Installation"
echo "============================================"

# Check Node.js version
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Installing Node.js 18..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✅ Node.js found: $(node --version)"
fi

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Installing npm..."
    sudo apt-get install -y npm
else
    echo "✅ npm found: $(npm --version)"
fi

# Install dependencies and build
echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project..."
npm run build

echo "📁 Setting up server files..."
mkdir -p server/public
cp -r dist/public/* server/public/

# Make scripts executable
chmod +x start.sh
chmod +x stop.sh

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
fi

echo ""
echo "✅ Installation Complete!"
echo ""
echo "🚀 Start server: ./start.sh"
echo "🛑 Stop server:  ./stop.sh"
echo "🌐 URL: http://localhost:5000"