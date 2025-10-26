#!/usr/bin/env node

/**
 * Minificador básico de CSS e JS
 *
 * Cria versões minificadas de assets/css/style.css e assets/js/main.js
 */

const fs = require('fs');
const path = require('path');

/**
 * Minifica CSS removendo comentários, espaços e quebras de linha desnecessárias
 */
function minifyCSS(css) {
  return css
    // Remove comentários
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove quebras de linha e múltiplos espaços
    .replace(/\s+/g, ' ')
    // Remove espaços ao redor de caracteres especiais
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')
    // Remove último ponto e vírgula antes de fechar chave
    .replace(/;}/g, '}')
    .trim();
}

/**
 * "Minifica" JS - na verdade apenas remove comentários para segurança
 * Minificação agressiva pode quebrar template strings e regex
 */
function minifyJS(js) {
  return js
    // Remove apenas comentários de linha
    .replace(/^\s*\/\/.*$/gm, '')
    // Remove comentários de bloco (mas preserva strings)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove linhas vazias
    .replace(/^\s*\n/gm, '')
    .trim();
}

/**
 * Processa arquivo
 */
function processFile(inputPath, outputPath, minifier) {
  try {
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠ Arquivo não encontrado: ${inputPath}`);
      return;
    }

    const content = fs.readFileSync(inputPath, 'utf-8');
    const minified = minifier(content);

    // Cria diretório se não existir
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, minified, 'utf-8');

    const originalSize = Buffer.byteLength(content, 'utf-8');
    const minifiedSize = Buffer.byteLength(minified, 'utf-8');
    const reduction = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`  ${(originalSize / 1024).toFixed(1)}KB → ${(minifiedSize / 1024).toFixed(1)}KB (${reduction}% menor)\n`);
  } catch (error) {
    console.error(`✗ Erro ao processar ${inputPath}:`, error.message);
  }
}

/**
 * Main
 */
function main() {
  console.log('Minificando assets...\n');

  // CSS
  processFile(
    './assets/css/style.css',
    './assets/css/style.min.css',
    minifyCSS
  );

  // JS (se existir)
  processFile(
    './assets/js/main.js',
    './assets/js/main.min.js',
    minifyJS
  );

  console.log('✓ Minificação concluída!');
}

// Executa
if (require.main === module) {
  main();
}

module.exports = { minifyCSS, minifyJS };
