/**
 * Converte vitória-jardim-da-penha.png para variantes responsivas WebP e AVIF.
 * Saída: static/images/localizacao/
 *
 * Uso: node scripts/process-vitoria-jardim-da-penha.mjs
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SOURCE = path.join(ROOT, 'vitória-jardim-da-penha.png');
const OUT_DIR = path.join(ROOT, 'static/images/localizacao');
const BASE_NAME = 'vitoria-jardim-da-penha';

const SIZES = [225, 450, 900];
const QUALITY = { webp: 85, avif: 70 };

mkdirSync(OUT_DIR, { recursive: true });

const meta = await sharp(SOURCE).metadata();
console.log(`\n📷 ${path.basename(SOURCE)} (${meta.width}x${meta.height})`);

for (const width of SIZES) {
    if (width > meta.width) {
        console.log(`  ⏭️  ${width}w ignorado (maior que o original)`);
        continue;
    }

    for (const format of ['webp', 'avif']) {
        const pipeline = sharp(SOURCE).resize(width, null, {
            withoutEnlargement: true,
            fit: 'inside',
        });

        const encoded =
            format === 'webp'
                ? pipeline.webp({ quality: QUALITY.webp })
                : pipeline.avif({ quality: QUALITY.avif });

        const outPath = path.join(OUT_DIR, `${BASE_NAME}-${width}w.${format}`);
        await encoded.toFile(outPath);
        console.log(`  ✅ ${path.relative(ROOT, outPath)}`);
    }
}

console.log('\n🎉 Finalizado.');
