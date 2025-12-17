import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
    { name: 'home', url: 'http://localhost:5173/' },
    { name: 'ansiedade', url: 'http://localhost:5173/experiencia/ansiedade' },
    { name: 'autoestima', url: 'http://localhost:5173/experiencia/autoestima' },
    { name: 'burnout', url: 'http://localhost:5173/experiencia/burnout' },
    { name: 'depressao', url: 'http://localhost:5173/experiencia/depressao' },
    { name: 'relacionamento', url: 'http://localhost:5173/experiencia/relacionamento' },
    { name: 'grupos-e-rodas', url: 'http://localhost:5173/servicos/grupos-e-rodas' },
    { name: 'laudos-psicologicos', url: 'http://localhost:5173/servicos/laudos-psicologicos' },
    { name: 'psicoterapia-individual', url: 'http://localhost:5173/servicos/psicoterapia-individual' },
    { name: 'supervisao-profissional', url: 'http://localhost:5173/servicos/supervisao-profissional' },
    { name: 'terapia-de-casal', url: 'http://localhost:5173/servicos/terapia-de-casal' },
    { name: 'terapia-online', url: 'http://localhost:5173/servicos/terapia-online' },
    { name: 'jardim-da-penha', url: 'http://localhost:5173/localizacao/psicologo-jardim-da-penha' },
    { name: 'praia-do-canto', url: 'http://localhost:5173/localizacao/psicologo-praia-do-canto' },
    { name: 'serra-es', url: 'http://localhost:5173/localizacao/psicologo-serra-es' },
    { name: 'vila-velha', url: 'http://localhost:5173/localizacao/psicologo-vila-velha' },
    { name: 'vitoria-es', url: 'http://localhost:5173/localizacao/psicologo-vitoria-es' },
    { name: 'blog', url: 'http://localhost:5173/blog' },
    { name: 'contato', url: 'http://localhost:5173/contato' },
    { name: 'sobre', url: 'http://localhost:5173/sobre' },
    { name: 'agendar', url: 'http://localhost:5173/agendar' },
];

const resultsDir = './lighthouse-results';
if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
}

const results = [];

for (const page of pages) {
    const outputPath = path.join(resultsDir, `${page.name}.json`);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
        console.log(`Reading existing results for ${page.name}...`);
        try {
            const data = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
            results.push({
                name: page.name,
                url: page.url,
                performance: Math.round((data.categories?.performance?.score || 0) * 100),
                accessibility: Math.round((data.categories?.accessibility?.score || 0) * 100),
                bestPractices: Math.round((data.categories?.['best-practices']?.score || 0) * 100),
                seo: Math.round((data.categories?.seo?.score || 0) * 100)
            });
        } catch (e) {
            console.log(`Error reading ${page.name}: ${e.message}`);
        }
        continue;
    }

    console.log(`Auditing ${page.name}...`);
    try {
        execSync(
            `lighthouse "${page.url}" --output json --output-path "${outputPath}" --chrome-flags="--headless --no-sandbox" --quiet`,
            { stdio: 'inherit', timeout: 120000 }
        );

        const data = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
        results.push({
            name: page.name,
            url: page.url,
            performance: Math.round((data.categories?.performance?.score || 0) * 100),
            accessibility: Math.round((data.categories?.accessibility?.score || 0) * 100),
            bestPractices: Math.round((data.categories?.['best-practices']?.score || 0) * 100),
            seo: Math.round((data.categories?.seo?.score || 0) * 100)
        });
    } catch (e) {
        console.log(`Error auditing ${page.name}: ${e.message}`);
        results.push({
            name: page.name,
            url: page.url,
            error: e.message
        });
    }
}

// Output summary
console.log('\n=== LIGHTHOUSE AUDIT RESULTS ===\n');
console.log('Page | Performance | Accessibility | Best Practices | SEO');
console.log('-----|-------------|---------------|----------------|----');

for (const r of results) {
    if (r.error) {
        console.log(`${r.name} | ERROR: ${r.error}`);
    } else {
        const perfFlag = r.performance < 95 ? '⚠️' : '✓';
        const a11yFlag = r.accessibility < 97 ? '⚠️' : '✓';
        const bpFlag = r.bestPractices < 97 ? '⚠️' : '✓';
        const seoFlag = r.seo < 97 ? '⚠️' : '✓';
        console.log(`${r.name} | ${r.performance}% ${perfFlag} | ${r.accessibility}% ${a11yFlag} | ${r.bestPractices}% ${bpFlag} | ${r.seo}% ${seoFlag}`);
    }
}

fs.writeFileSync(path.join(resultsDir, 'summary.json'), JSON.stringify(results, null, 2));
console.log('\nResults saved to lighthouse-results/summary.json');
