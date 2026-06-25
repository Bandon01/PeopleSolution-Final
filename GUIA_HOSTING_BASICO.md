# 📱 Guía de Despliegue - PeopleSolution en Hosting Básico

## ✅ Estado del Proyecto
**Tu aplicación es 100% compatible con hosting compartido**

---

## 🚀 Paso 1: Compilar Localmente

```bash
# En tu computadora, abre PowerShell/Terminal en la carpeta del proyecto

# Instala dependencias (si no lo has hecho)
npm install

# Compila para producción
npm run build
```

**Resultado**: Se genera carpeta `dist/` con los archivos listos para subir

---

## 📦 Paso 2: Archivos a Subir al Hosting

**✅ SUBIR (contenido completo de `dist/`):**
```
dist/
├── index.html
├── assets/
│   ├── index-*.css
│   ├── index-*.js
│   └── [imágenes procesadas]
├── SST_SEG_VIAL.pdf
├── SST_SEG_Y_SALUD.pdf
├── SST_SUSTANCIAS.pdf
├── guia.pdf
├── Agenda al reglamento interno de trabajo.pdf
├── Política desconexión laboral.pdf
├── Política De Genero.pdf
├── Politica de prevencion acoso laboral.pdf
├── Politica hora extras.pdf
├── Politica Prevención, Protección y Atención del Acoso Sexual.pdf
├── WhatsApp-Loginho.png
└── .htaccess (crear manualmente - ver abajo)
```

**❌ NO SUBIR:**
- `src/` (código fuente)
- `node_modules/` (muy pesado, no necesario)
- `package.json`, `package-lock.json`
- `vite.config.js`, `eslint.config.js`
- `.env*` archivos
- `public/` (ya está incluido en `dist/`)

---

## 🔧 Paso 3: Crear `.htaccess` en `dist/`

Después de compilar, copia el archivo `.htaccess` que ya está en la raíz del proyecto a la carpeta `dist/`:

**Ubicación final**: `dist/.htaccess`

Este archivo:
- ✅ Configura reescritura de URLs para React
- ✅ Activa compresión (archivos más rápidos)
- ✅ Configura cacheo eficiente

---

## 📤 Paso 4: Subir a Hosting Básico (Colombia Hosting, etc.)

### Opción A: Usando FTP/SFTP (más común)
1. Abre tu cliente FTP (FileZilla, WinSCP, etc.)
2. Conecta con datos del hosting
3. Navega a la raíz pública (`public_html`, `www`, `htdocs`, según el hosting)
4. **Sube SOLO el contenido de `dist/`** (no la carpeta `dist` en sí)

### Opción B: Panel de Control del Hosting (cPanel, Plesk)
1. Accede al administrador de archivos
2. Ve a raíz pública
3. Carga los archivos de `dist/`

### Opción C: Git Deploy (si tu hosting lo soporta)
```bash
git push origin main
# El hosting detecta cambios y despliega automáticamente
```

---

## ✅ Paso 5: Verificación Post-Despliegue

Después de subir, verifica:

```
[ ] index.html accesible: https://tudominio.com
[ ] Estilos cargan: https://tudominio.com (página con colores/formato)
[ ] PDFs funcionan: https://tudominio.com/SST_SUSTANCIAS.pdf
[ ] Botón WhatsApp: click abre chat (https://wa.me/...)
[ ] Link Alianza: https://alianzainfo.net funciona
[ ] Responsivo: Prueba en móvil
[ ] Página blanca? → Revisar console (F12)
```

---

## 🐛 Solución de Problemas

| Problema | Causa | Solución |
|----------|-------|----------|
| Página blanca en hosting | `.htaccess` no está o está mal | Copiar `.htaccess` a `dist/` antes de subir |
| PDFs no se encuentran | No están en `dist/` | Verificar que estén en `public/` antes de compilar |
| CSS/JS no cargan | Rutas incorrectas | Verificar nombres en `dist/assets/` coincidan |
| Error 404 en rutas | SPA routing no configurado | El `.htaccess` debe reescribir a `index.html` |
| Lento al cargar | Caché del navegador | Limpiar caché (Ctrl+F5) |

---

## 💡 Consejos de Optimización

1. **Minificación**: Vite ya lo hace automáticamente ✅
2. **Caché**: El `.htaccess` ya lo configura ✅
3. **Compresión**: El `.htaccess` ya la activa ✅
4. **CDN**: Para futuro (no necesario ahora)

---

## 🔐 Seguridad

- ✅ Sin credenciales en el código
- ✅ Sin base de datos
- ✅ Links externos (WhatsApp, Alianza) seguros
- ✅ SSL gratuito: Actívalo en tu hosting

---

## 📞 Próximos Pasos

1. Ejecuta: `npm run build`
2. Copia `.htaccess` a `dist/`
3. Sube contenido de `dist/` al hosting
4. Prueba en navegador
5. ¡Listo! 🎉

---

**¿Preguntas?** Si hay errores después de subir, revisa la consola (F12 en navegador) para ver qué falla.
