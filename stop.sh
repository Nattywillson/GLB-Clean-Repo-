#!/bin/bash

echo "🛑 Stopping Global Women Rising..."

if [ -f server.pid ]; then
    PID=$(cat server.pid)
    if ps -p $PID > /dev/null; then
        kill $PID
        echo "✅ Server stopped (PID: $PID)"
    else
        echo "⚠️ Server was not running"
    fi
    rm server.pid
else
    echo "⚠️ No PID file found"
    pkill -f "node dist/index.js"
fi

echo "✅ Cleanup complete"