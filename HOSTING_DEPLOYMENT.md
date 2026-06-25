# Guía de Despliegue en Colombia Hosting

## ✅ Requisitos del Proyecto

Tu aplicación es **React + Vite**, que genera **archivos estáticos** listos para hosting compartido.

### Stack Tecnológico
- **Frontend**: React 19.2.5
- **Build Tool**: Vite 8.0.10
- **Output**: Carpeta `dist/` con HTML, CSS, JS estáticos
- **Node.js**: No se requiere en producción

---

## 🚀 Pasos para Desplegar en Colombia Hosting

### 1. **Preparar la Aplicación (Local)**

Antes de subir archivos, debes compilar el proyecto:

```bash
# Instalar dependencias
npm install

# Compilar para producción
npm run build
```

Esto genera una carpeta `dist/` con todos los archivos listos.

### 2. **Archivos a Subir**

✅ **SÍ subir:**
- Contenido completo de la carpeta `dist/` (todos los archivos compilados)

❌ **NO subir:**
- Carpeta `node_modules/` (es muy pesada y no se necesita)
- Carpeta `src/` (código fuente, no necesario en producción)
- Archivos `.env.local`, `.env.development` (datos sensibles)
- `package.json`, `package-lock.json` (no se necesitan en hosting básico)
- Archivos de configuración: `vite.config.js`, `eslint.config.js`

---

## ⚠️ Posibles Conflictos y Soluciones

### **Conflicto 1: Rutas SPA (Single Page Application)**
**Problema**: React Router (si lo uses) requiere que todas las rutas apunten a `index.html`.

**Tu caso**: Revisando el código, **NO usas React Router**, solo scroll/anclas (`#inicio`, `#noticias`).
- ✅ **No hay conflicto**, funciona directamente.

---

### **Conflicto 2: URLs de Recursos Locales**
**Problema**: Los PDFs y otros archivos estáticos referenciados en el código.

**Tu caso**: Referencias como:
- `/SST_SUSTANCIAS.pdf`
- `/guia.pdf`
- Imágenes en `src/assets/`

**Solución**:
1. Los archivos `.pdf` deben estar en la carpeta **pública** del hosting (generalmente `public/` que Vite copia a `dist/`).
2. Verifica que todos los PDFs estén en la carpeta `public/` localmente:

```
public/
├── SST_SEG_VIAL.pdf
├── SST_SEG_Y_SALUD.pdf
├── SST_SUSTANCIAS.pdf
├── guia.pdf
├── Agenda al reglamento interno de trabajo.pdf
├── Política desconexión laboral.pdf
├── Política De Genero.pdf
├── Politica de prevencion acoso laboral.pdf
├── Politica hora extras.pdf
└── Politica Prevención, Protección y Atención del Acoso Sexual.pdf
```

3. Luego ejecuta `npm run build` para compilar.

---

### **Conflicto 3: CORS (Cross-Origin Requests)**
**Problema**: Si tienes APIs externas (WhatsApp, links externos).

**Tu caso**: 
- WhatsApp: `https://wa.me/...` ✅ No hay conflicto (link externo)
- Plataforma Alianza: `https://alianzainfo.net/...` ✅ No hay conflicto (link externo)
- PDFs: Links internos, sin conflicto

**Conclusión**: ✅ **Sin conflictos CORS**.

---

### **Conflicto 4: Variables de Entorno**
**Problema**: El código usa variables hardcodeadas (WhatsApp, URLs).

**Tu caso**: Todo está hardcodeado, sin variables `.env`.
- ✅ **Sin conflicto**, pero si necesitas cambiar números o URLs después, edita en el hosting.
- **Recomendación futura**: Implementar `.env` para fácil actualización.

---

### **Conflicto 5: Compatibilidad del Navegador**
**Problema**: Vite genera código moderno (ES2015+).

**Solución**: Colombia Hosting soporta navegadores modernos.
- ✅ **Sin conflicto** en navegadores recientes (Chrome, Firefox, Safari, Edge).

---

## 🛠️ Ajustes Recomendados Antes de Subir

### **1. ✅ Carpeta `public/` - Ya Verificada**

✅ **Tu proyecto ya tiene todos los PDFs en la carpeta `public/`:**

```
PeopleSolutions-master/
├── public/
│   ├── SST_SEG_VIAL.pdf ✓
│   ├── SST_SEG_Y_SALUD.pdf ✓
│   ├── SST_SUSTANCIAS.pdf ✓
│   ├── guia.pdf ✓
│   ├── Agenda al reglamento interno de trabajo.pdf ✓
│   ├── Política desconexión laboral.pdf ✓
│   ├── Política De Genero.pdf ✓
│   ├── Politica de prevencion acoso laboral.pdf ✓
│   ├── Politica hora extras.pdf ✓
│   ├── Politica Prevención, Protección y Atención del Acoso Sexual.pdf ✓
│   ├── favicon.svg
│   ├── icons.svg
│   └── WhatsApp-Loginho.png
├── src/
├── vite.config.js
├── package.json
└── index.html
```

**No necesitas hacer nada aquí** — cuando ejecutes `npm run build`, Vite copiará automáticamente estos archivos a `dist/`.

### **2. Verificar `vite.config.js`**

Quita la configuración de `allowedHosts` que es solo para desarrollo:

```javascript
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
```

### **3. Archivo `.htaccess` (Opcional pero Recomendado)**

Si Colombia Hosting usa Apache, crea un archivo `.htaccess` en la carpeta `dist/` después del build:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Si la solicitud no es un archivo o carpeta
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Redirige todas las rutas a index.html (por si implementas router en el futuro)
  RewriteRule ^ index.html [QSA,L]
</IfModule>
```

Guarda esto como `dist/.htaccess` antes de subir.

### **4. Compilación Final**

```bash
npm install
npm run build
```

Luego sube **solo el contenido de la carpeta `dist/`** al hosting.

---

## 📋 Checklist de Despliegue

- [ ] Copiar todos los PDFs a la carpeta `public/`
- [ ] Ejecutar `npm run build`
- [ ] Crear `.htaccess` en `dist/` (opcional)
- [ ] Subir contenido de `dist/` a la raíz del hosting (o carpeta designada)
- [ ] Verificar que `index.html` está en la raíz
- [ ] Probar la web: `https://tudominio.com`
- [ ] Verificar PDFs: `https://tudominio.com/SST_SUSTANCIAS.pdf`
- [ ] Probar WhatsApp: click en botón
- [ ] Verificar responsivo en móvil

---

## 🆘 Errores Comunes en Hosting

| Error | Causa | Solución |
|-------|-------|----------|
| "No encontrado" en rutas | SPA routing mal configurado | Crear `.htaccess` |
| PDFs no cargan | Archivos no en `public/` | Copiar PDFs a `public/` antes de build |
| CSS/JS no cargan | Rutas relativas incorrectas | Verificar que Vite generó `dist/` correctamente |
| Página blanca | Problema en `index.html` | Subir completa la carpeta `dist/` |

---

## 💡 Recomendaciones Adicionales

1. **Versioning**: Agrega versionado a URLs para cachés:
   - Vite lo hace automáticamente con hash en nombres de archivos

2. **Monitoreo**: Revisa logs de error del hosting

3. **Dominio**: Configura correctamente en Colombia Hosting:
   - Apunta dominio a carpeta `dist/` o donde subiste los archivos

4. **HTTPS**: Colombia Hosting ofrece SSL gratuito, actívalo

---

## ✨ Resumen Final

✅ **Tu aplicación es 100% compatible con hosting básico** porque:
- Genera archivos estáticos (HTML, CSS, JS)
- No necesita Node.js en producción
- No usa base de datos
- No usa APIs complejas
- URLs solo son internas y externas (sin conflictos CORS)

**Próximos pasos**:
1. Asegúrate de que los PDFs están en `public/`
2. Ejecuta `npm run build`
3. Sube la carpeta `dist/` a Colombia Hosting
4. Configura el dominio
5. ¡Listo! 🚀

¿Necesitas ayuda con algún paso específico?
