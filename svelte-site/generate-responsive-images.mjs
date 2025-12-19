/**
 * Generate responsive image variants using Sharp
 * Run: node generate-responsive-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATIC_DIR = path.join(__dirname, 'static/images');

// Image configurations
const configs = [
    // Hero images - need 300w and 450w variants
    {
        source: 'hero/hero-600x800.jpg',
        outputs: [
            { width: 300, suffix: '-300w', formats: ['avif', 'webp'] },
            { width: 450, suffix: '-450w', formats: ['avif', 'webp'] },
        ]
    },
    // Experiencia images - need 200w variants
    {
        source: 'experiencia/ansiedade.png',
        outputs: [
            { width: 200, suffix: '-200', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'experiencia/autoestima.png',
        outputs: [
            { width: 200, suffix: '-200', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'experiencia/burnout.png',
        outputs: [
            { width: 200, suffix: '-200', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'experiencia/depressao.png',
        outputs: [
            { width: 200, suffix: '-200', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'experiencia/relacionamento.png',
        outputs: [
            { width: 200, suffix: '-200', formats: ['avif', 'webp'] },
        ]
    },
    // Fachada madison - need WebP version + responsive variants
    {
        source: 'consultorio/fachada-madison.jpg',
        outputs: [
            { width: 400, suffix: '-400w', formats: ['webp'] },
            { width: 800, suffix: '-800w', formats: ['webp'] },
            { width: 1200, suffix: '', formats: ['webp'] }, // Base size
        ]
    },
    // Sobre image - need 225w variant
    {
        source: 'sobre/bernardo-profissional.webp',
        outputs: [
            { width: 225, suffix: '-225w', formats: ['webp'] },
        ]
    },
];

async function generateImages() {
    console.log('🖼️  Starting responsive image generation...\n');

    for (const config of configs) {
        const sourcePath = path.join(STATIC_DIR, config.source);

        if (!existsSync(sourcePath)) {
            console.log(`⚠️  Source not found: ${config.source}`);
            continue;
        }

        const dir = path.dirname(sourcePath);
        const baseName = path.basename(config.source, path.extname(config.source));

        for (const output of config.outputs) {
            const image = sharp(sourcePath);
            const resized = image.resize(output.width, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });

            for (const format of output.formats) {
                const outputName = `${baseName}${output.suffix}.${format}`;
                const outputPath = path.join(dir, outputName);

                try {
                    if (format === 'avif') {
                        await resized.clone().avif({ quality: 80 }).toFile(outputPath);
                    } else if (format === 'webp') {
                        await resized.clone().webp({ quality: 85 }).toFile(outputPath);
                    }
                    console.log(`✅ Generated: ${path.relative(STATIC_DIR, outputPath)}`);
                } catch (err) {
                    console.log(`❌ Error generating ${outputName}: ${err.message}`);
                }
            }
        }
    }

    console.log('\n🎉 Image generation complete!');
}

generateImages().catch(console.error);
