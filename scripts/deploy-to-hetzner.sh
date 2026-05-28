#!/usr/bin/env bash
# Build local + rsync de dist/ al servidor Hetzner.
# Uso:
#   export DEPLOY_USER=root          # o tu usuario SSH
#   export DEPLOY_HOST=123.456.789.0 # IP del servidor
#   ./scripts/deploy-to-hetzner.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE_PATH="${DEPLOY_PATH:-/var/www/pxndev}"

if [[ -z "${DEPLOY_USER:-}" || -z "${DEPLOY_HOST:-}" ]]; then
  echo "Definí DEPLOY_USER y DEPLOY_HOST (IP o hostname SSH)." >&2
  echo "Ejemplo: DEPLOY_USER=deploy DEPLOY_HOST=1.2.3.4 $0" >&2
  exit 1
fi

echo "→ Build en $ROOT"
cd "$ROOT"
npm ci
npm run build

echo "→ Rsync a ${DEPLOY_USER}@${DEPLOY_HOST}:${REMOTE_PATH}/"
rsync -avz --delete dist/ "${DEPLOY_USER}@${DEPLOY_HOST}:${REMOTE_PATH}/"

echo "✓ Deploy de archivos listo. Verificá nginx en el servidor (docs/deploy-hetzner.md)."
