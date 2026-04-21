/**
 * Gera variantes responsivas para as novas fotos profissionais usando Sharp.
 * Saída: static/images/sobre/
 *
 * Uso: node scripts/process-new-photos.mjs
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'static/images/sobre');

const SIZES = [225, 450, 900];
const QUALITY = { webp: 85, avif: 70 };

const jobs = [
    {
        source: 'foto-profissional-psicologo-bernardo.jpg',
        baseName: 'foto-profissional-psicologo-bernardo1',
    },
    {
        source: 'foto-profissional-psicologo-bernardo2.png',
        baseName: 'foto-profissional-psicologo-bernardo2',
    },
    {
        source: 'foto-profissional-psicologo-bernardo3.jpg',
        baseName: 'foto-profissional-psicologo-bernardo3',
        // Also overwrites canonical /sobre image names.
        aliases: ['bernardo-profissional'],
    },
];

async function processJob(job) {
    const sourcePath = path.join(ROOT, job.source);
    if (!existsSync(sourcePath)) {
        console.log(`⚠️  Origem não encontrada: ${job.source}`);
        return;
    }

    const meta = await sharp(sourcePath).metadata();
    console.log(`\n📷 ${job.source} (${meta.width}x${meta.height})`);

    for (const width of SIZES) {
        if (width > meta.width) continue;

        for (const format of ['webp', 'avif']) {
            const pipeline = sharp(sourcePath).resize(width, null, {
                withoutEnlargement: true,
                fit: 'inside',
            });
            const encoded =
                format === 'webp'
                    ? pipeline.webp({ quality: QUALITY.webp })
                    : pipeline.avif({ quality: QUALITY.avif });

            const outputs = [
                path.join(OUT_DIR, `${job.baseName}-${width}w.${format}`),
            ];

            // canonical aliases: base (largest, no suffix) and -225w
            if (job.aliases) {
                for (const alias of job.aliases) {
                    if (width === Math.max(...SIZES.filter((w) => w <= meta.width))) {
                        outputs.push(path.join(OUT_DIR, `${alias}.${format}`));
                    }
                    if (width === 225) {
                        outputs.push(path.join(OUT_DIR, `${alias}-225w.${format}`));
                    }
                    if (width === 450) {
                        outputs.push(path.join(OUT_DIR, `${alias}-450w.${format}`));
                    }
                }
            }

            const buffer = await encoded.toBuffer();
            for (const out of outputs) {
                await sharp(buffer).toFile(out);
                console.log(`  ✅ ${path.relative(ROOT, out)}`);
            }
        }
    }
}

async function main() {
    console.log('🖼️  Gerando variantes das novas fotos profissionais...');
    for (const job of jobs) {
        await processJob(job);
    }
    console.log('\n🎉 Finalizado.');
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
