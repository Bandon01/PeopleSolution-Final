const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = './src/assets';

const imageConfigs = {
  // Banners/Heroes - 1920x1080
  '31374469_m-BANNER-HOME.jpg': { width: 1920, height: 1080, output: 'banner-home' },

  // Service cards - 600x400
  'outsourcing-de-nomina.jpg': { width: 600, height: 400, output: 'service-nomina' },
  'seleccion y evaluacion.jpg': { width: 600, height: 400, output: 'service-seleccion' },

  // Team/People images - 800x600
  'mujer-1.jpg': { width: 800, height: 600, output: 'team-mujer' },
  'office-meeting.jpg': { width: 800, height: 600, output: 'team-office' },
  'portrait-of-multi-cultural-business-team-in-7A8NFVB.jpg': { width: 1200, height: 800, output: 'team-multicultural' },
  'PS-HP-Approach-scaled.jpeg': { width: 1200, height: 800, output: 'approach' },

  // About section - 800x600
  '14735134_m-Nosotros.jpg': { width: 800, height: 600, output: 'nosotros-team' },
  '14735134_m-Nosotros (1).jpg': { width: 800, height: 600, output: 'nosotros-team-alt' },

  // Description/Detail images - 1200x800
  'LIDERAZGO-EMPRESARIAL-.jpg': { width: 1200, height: 800, output: 'liderazgo' },
  '22197615_m-NOSOTROS-2.jpg': { width: 800, height: 600, output: 'nosotros-detail' },
};

async function optimizeImages() {
  console.log('🖼️  Optimizando imágenes...\n');

  for (const [filename, config] of Object.entries(imageConfigs)) {
    const inputPath = path.join(assetsDir, filename);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  No encontrado: ${filename}`);
      continue;
    }

    try {
      // Obtener info de la imagen
      const metadata = await sharp(inputPath).metadata();
      console.log(`📷 ${filename}`);
      console.log(`   Original: ${metadata.width}x${metadata.height}, ${Math.round(fs.statSync(inputPath).size / 1024)}KB`);

      // Optimizar a WebP
      const webpOutput = path.join(assetsDir, `${config.output}.webp`);
      const webpStats = await sharp(inputPath)
        .resize(config.width, config.height, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(webpOutput);

      // Optimizar a JPEG como fallback
      const jpgOutput = path.join(assetsDir, `${config.output}.jpg`);
      const jpgStats = await sharp(inputPath)
        .resize(config.width, config.height, { fit: 'cover' })
        .jpeg({ quality: 88, progressive: true })
        .toFile(jpgOutput);

      const webpSize = Math.round(webpStats.size / 1024);
      const jpgSize = Math.round(jpgStats.size / 1024);
      console.log(`   ✅ WebP: ${config.width}x${config.height}, ${webpSize}KB`);
      console.log(`   ✅ JPG:  ${config.width}x${config.height}, ${jpgSize}KB\n`);

    } catch (err) {
      console.log(`   ❌ Error: ${err.message}\n`);
    }
  }

  console.log('✨ ¡Optimización completada!');
}

optimizeImages().catch(console.error);
