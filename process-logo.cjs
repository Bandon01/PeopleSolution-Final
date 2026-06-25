const sharp = require('sharp');

// Procesar logo
const logoPath = './src/assets/logo.png';
const outputWebp = './src/assets/logo.webp';
const outputPng = './src/assets/logo-transparent.png';

async function processLogo() {
  try {
    console.log('🎨 Procesando logo...\n');

    // Aumentar tamaño a 400x400 y remover fondo
    const image = sharp(logoPath);

    // Versión WebP optimizada (más pequeña)
    await image
      .resize(400, 400, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .webp({ quality: 90 })
      .toFile(outputWebp);

    console.log('✅ Logo WebP creado: 400x400px');

    // Versión PNG con fondo transparente
    await sharp(logoPath)
      .resize(400, 400, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(outputPng);

    console.log('✅ Logo PNG transparente creado: 400x400px');

    // Versión grande para diferentes tamaños
    const sizes = [80, 120, 160];

    for (const size of sizes) {
      await sharp(logoPath)
        .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .webp({ quality: 90 })
        .toFile(`./src/assets/logo-${size}.webp`);
      console.log(`✅ Logo ${size}x${size}px creado`);
    }

    console.log('\n✨ ¡Logo procesado exitosamente!');

  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

processLogo();
