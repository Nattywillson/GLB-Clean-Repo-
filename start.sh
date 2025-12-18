#!/bin/bash

echo "🚀 Starting Global Women Rising..."

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Set defaults
export NODE_ENV=${NODE_ENV:-production}
export PORT=${PORT:-5000}

# Check if build exists
if [ ! -d "server/public" ]; then
    echo "🔨 Building project..."
    npm run build
    mkdir -p server/public
    cp -r dist/public/* server/public/
fi

# Start server
echo "🌐 Starting server on port $PORT..."
nohup node dist/index.js > server.log 2>&1 &
echo $! > server.pid

sleep 2

if ps -p $(cat server.pid) > /dev/null; then
    echo "✅ Server started successfully!"
    echo "🌐 Visit: http://localhost:$PORT"
    echo "📄 Logs: tail -f server.log"
else
    echo "❌ Failed to start server. Check server.log"
    cat server.log
fi