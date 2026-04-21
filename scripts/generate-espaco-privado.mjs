/**
 * Gera variantes responsivas de static/images/consultorio/espaco-privado.jpg
 * Uso: node scripts/generate-espaco-privado.mjs
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'static/images/consultorio/espaco-privado.jpg');
const OUT_DIR = path.join(ROOT, 'static/images/consultorio');

const SIZES = [300, 400, 600, 800];

async function main() {
    const meta = await sharp(SRC).metadata();
    console.log(`📷 espaco-privado.jpg (${meta.width}x${meta.height})`);
    for (const width of SIZES) {
        if (width > meta.width) continue;
        for (const format of ['webp', 'avif']) {
            const out = path.join(OUT_DIR, `espaco-privado-${width}w.${format}`);
            const pipeline = sharp(SRC).resize(width, null, {
                withoutEnlargement: true,
                fit: 'inside',
            });
            const encoded =
                format === 'webp'
                    ? pipeline.webp({ quality: 85 })
                    : pipeline.avif({ quality: 70 });
            await encoded.toFile(out);
            console.log(`  ✅ ${path.relative(ROOT, out)}`);
        }
    }
    // Base AVIF sem sufixo (como o hero-600x800.avif existente)
    await sharp(SRC).avif({ quality: 70 }).toFile(path.join(OUT_DIR, 'espaco-privado.avif'));
    console.log(`  ✅ static/images/consultorio/espaco-privado.avif`);
}
main().catch((e) => { console.error(e); process.exit(1); });
