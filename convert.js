import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtém o arquivo de entrada dos argumentos da linha de comando
const inputFile = process.argv[2];

if (!inputFile) {
    console.error('Uso: node convert.js <caminho-da-imagem>');
    process.exit(1);
}

const ext = path.extname(inputFile);
const outputFile = inputFile.replace(ext, '.webp');

sharp(inputFile)
    .resize(800, null, { // Largura padrão de 800px, altura automática
        withoutEnlargement: true // Não aumenta se a imagem for menor
    })
    .webp({
        quality: 80,
        smartSubsample: true
    })
    .toFile(outputFile)
    .then(info => {
        console.log(`✅ Imagem convertida: ${outputFile}`);
        console.log(`📊 Tamanho: ${(info.size / 1024).toFixed(2)} KB`);
        console.log(`📐 Dimensões: ${info.width}x${info.height}`);
    })
    .catch(err => {
        console.error('❌ Erro ao converter:', err);
    });
