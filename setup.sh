#!/usr/bin/env bash
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"
mkdir -p logs apk/output
[ -f .env ] || cp .env.example .env
npm install
node server/src/cli/seed.js || true
echo "Done. Start server: npm run dev"
echo "Admin CLI: node server/src/cli/admin-cli.js"
