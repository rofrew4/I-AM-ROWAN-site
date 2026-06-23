#!/usr/bin/env bash
set -e

PORT="${PORT:-3000}"

# Free the port if a previous dev server is still running.
if lsof -ti:"$PORT" >/dev/null 2>&1; then
  echo "Stopping existing process on port $PORT..."
  lsof -ti:"$PORT" | xargs kill -9 2>/dev/null || true
fi

TURBO_FLAG="--turbo"
if [[ "${1:-}" == "--webpack" ]]; then
  TURBO_FLAG=""
fi

echo "Starting dev server at http://localhost:$PORT"
exec npx next dev -p "$PORT" $TURBO_FLAG
