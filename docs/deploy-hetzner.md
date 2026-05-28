# Deploy en Hetzner: `pxndev.roda.st`

Guía para publicar la landing **sin afectar** otros sitios (`ventas.roda.st`, `creditos.roda.st`, etc.) en la misma VM.

## Por qué no rompe nada

| Otros sitios (ej. lumina-panel) | PXNDEV landing |
|--------------------------------|----------------|
| Flask + Gunicorn en `/var/www/lumina_panel` | Solo archivos estáticos en `/var/www/pxndev` |
| Nginx hace `proxy_pass` al socket | Nginx sirve `root` + `try_files` |
| Config: `ventas.roda.st`, `creditos.roda.st`, … | Config **nueva**: solo `server_name pxndev.roda.st` |

Nginx elige el `server` por **hostname**. Un archivo nuevo en `sites-available/pxndev.roda.st` no modifica los demás.

**No tocar:** configs de `ventas`, `creditos`, Gunicorn, Supervisor/systemd del panel, `.env` de lumina.

---

## Orden recomendado (DNS al final)

1. En el servidor: carpeta `/var/www/pxndev` y permisos.
2. Subir el build (`dist/`) — ver script más abajo.
3. Crear y activar **solo** el sitio nginx de `pxndev.roda.st`.
4. `sudo nginx -t` → `reload` (sin restart brusco de nginx si no hace falta).
5. Certificado SSL: `certbot` solo para `pxndev.roda.st`.
6. Probar por IP con header `Host` (sin DNS público aún).
7. **Último paso:** registro DNS en Cloudflare.

---

## 1. Carpeta en el servidor

```bash
sudo mkdir -p /var/www/pxndev
sudo chown -R $USER:www-data /var/www/pxndev   # ajustá usuario si deployás con otro
```

Contenido esperado tras el deploy: `index.html`, `assets/`, `favicon.svg`, etc. (raíz = contenido de `dist/`, no la carpeta `dist` anidada).

---

## 2. Subir build desde tu Mac (recomendado)

En tu máquina, con Node instalado:

```bash
cd /Users/nicolasoderigo/Documents/Cursor/landing-api
npm ci
npm run build

# Reemplazá USUARIO y IP_HOST por tu SSH de Hetzner (el mismo que usás para lumina)
rsync -avz --delete dist/ USUARIO@IP_HOST:/var/www/pxndev/
```

O usá el script: `DEPLOY_USER=... DEPLOY_HOST=... ./scripts/deploy-to-hetzner.sh`

**Ventaja:** en el servidor no hace falta Node/npm; solo nginx sirve archivos.

---

## 3. Nginx (archivo nuevo)

Copiá [`deploy/nginx.pxndev.roda.st.conf`](../deploy/nginx.pxndev.roda.st.conf) al servidor:

```bash
sudo cp nginx.pxndev.roda.st.conf /etc/nginx/sites-available/pxndev.roda.st
sudo ln -sf /etc/nginx/sites-available/pxndev.roda.st /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Antes del certificado, podés usar solo el bloque `:80` para pruebas, o ejecutar certbot que suele ajustar SSL.

---

## 4. SSL (Let's Encrypt)

Mismo patrón que `creditos.roda.st` (ver `lumina-panel/docs/deploy_creditos_landing.md`):

```bash
sudo certbot certonly --nginx -d pxndev.roda.st
sudo nginx -t && sudo systemctl reload nginx
```

Paths típicos:

- `/etc/letsencrypt/live/pxndev.roda.st/fullchain.pem`
- `/etc/letsencrypt/live/pxndev.roda.st/privkey.pem`

Descomentá las líneas `ssl_certificate` en el `.conf` si el template las trae comentadas post-certbot.

---

## 5. Probar **sin** DNS (importante)

Desde tu Mac (IP = la del servidor Hetzner):

```bash
curl -sI -H "Host: pxndev.roda.st" http://IP_HOST/
# Debe devolver 200 y content-type text/html

curl -sI -H "Host: pxndev.roda.st" https://IP_HOST/ -k
# Tras tener SSL, sin -k si el cert ya es válido para pxndev.roda.st
```

Verificá que **ventas** y **creditos** siguen bien:

```bash
curl -sI https://ventas.roda.st/ | head -1
curl -sI https://creditos.roda.st/ | head -1
```

---

## 6. DNS en Cloudflare (último paso)

En la zona **roda.st**:

| Tipo | Nombre | Contenido | Proxy |
|------|--------|-----------|--------|
| `A` | `pxndev` | IP pública del servidor Hetzner (la misma que `ventas` / `creditos` si comparten VM) | Naranja (recomendado) o gris |

- **Proxy naranja:** Cloudflare termina HTTPS al visitante; en el servidor igual conviene tener certificado válido (modo SSL **Full (strict)** en Cloudflare).
- **Proxy gris:** el tráfico va directo al servidor; Let's Encrypt en nginx alcanza.

No cambies registros de otros subdominios.

Propagación: suele ser rápida. Probá `https://pxndev.roda.st`.

---

## 7. Actualizaciones futuras

```bash
# Local
npm run build
rsync -avz --delete dist/ USUARIO@IP_HOST:/var/www/pxndev/
```

No requiere reiniciar Gunicorn ni lumina-panel.

Opcional en el servidor: clonar el repo en `/var/www/pxndev-src`, hacer `git pull` + build allí — solo si querés compilar en la VM (necesitás Node 20+).

---

## Checklist

- [ ] `/var/www/pxndev` con archivos de `dist/`
- [ ] Sitio nginx **solo** `pxndev.roda.st` activo
- [ ] `sudo nginx -t` OK
- [ ] Certbot para `pxndev.roda.st`
- [ ] Prueba con `curl -H "Host: pxndev.roda.st"`
- [ ] `ventas` / `creditos` siguen respondiendo
- [ ] Registro DNS `pxndev` → IP Hetzner
- [ ] `https://pxndev.roda.st` carga la SPA

---

## Rollback

```bash
sudo rm /etc/nginx/sites-enabled/pxndev.roda.st
sudo nginx -t && sudo systemctl reload nginx
```

Los demás sitios no se ven afectados. Podés borrar `/var/www/pxndev` cuando quieras.
