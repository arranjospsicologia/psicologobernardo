import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = './static/images/experiencia';
const images = ['ansiedade', 'autoestima', 'burnout', 'depressao', 'relacionamento'];

// Target size based on Lighthouse: 327x327 display, we use 350x350 for slight flexibility
const targetSize = 350;

console.log('Starting image optimization...\n');

for (const imageName of images) {
    const inputPath = path.join(imagesDir, `${imageName}.png`);

    if (!fs.existsSync(inputPath)) {
        console.log(`⚠️ ${imageName}.png not found, skipping...`);
        continue;
    }

    const originalSize = fs.statSync(inputPath).size;
    console.log(`Processing ${imageName}.png (${(originalSize / 1024).toFixed(1)} KB)...`);

    try {
        // AVIF - best compression, modern format
        await sharp(inputPath)
            .resize(targetSize, targetSize, { fit: 'cover' })
            .avif({ quality: 70, effort: 6 })
            .toFile(path.join(imagesDir, `${imageName}-350.avif`));

        const avifSize = fs.statSync(path.join(imagesDir, `${imageName}-350.avif`)).size;
        console.log(`  ✓ AVIF: ${(avifSize / 1024).toFixed(1)} KB (${((1 - avifSize / originalSize) * 100).toFixed(0)}% reduction)`);

        // WebP - fallback for older browsers
        await sharp(inputPath)
            .resize(targetSize, targetSize, { fit: 'cover' })
            .webp({ quality: 80 })
            .toFile(path.join(imagesDir, `${imageName}-350.webp`));

        const webpSize = fs.statSync(path.join(imagesDir, `${imageName}-350.webp`)).size;
        console.log(`  ✓ WebP: ${(webpSize / 1024).toFixed(1)} KB (${((1 - webpSize / originalSize) * 100).toFixed(0)}% reduction)`);

    } catch (e) {
        console.log(`  ❌ Error: ${e.message}`);
    }
}

console.log('\n✅ Image optimization complete!');
console.log('Next step: Update Svelte components to use <picture> elements with these new images.');
