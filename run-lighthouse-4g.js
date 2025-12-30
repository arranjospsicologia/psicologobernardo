import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All pages to test on production build
const pages = [
    { name: 'home', url: 'http://localhost:4173/' },
    { name: 'ansiedade', url: 'http://localhost:4173/experiencia/ansiedade' },
    { name: 'autoestima', url: 'http://localhost:4173/experiencia/autoestima' },
    { name: 'burnout', url: 'http://localhost:4173/experiencia/burnout' },
    { name: 'depressao', url: 'http://localhost:4173/experiencia/depressao' },
    { name: 'relacionamento', url: 'http://localhost:4173/experiencia/relacionamento' },
    { name: 'grupos-e-rodas', url: 'http://localhost:4173/servicos/grupos-e-rodas' },
    { name: 'laudos-psicologicos', url: 'http://localhost:4173/servicos/laudos-psicologicos' },
    { name: 'psicoterapia-individual', url: 'http://localhost:4173/servicos/psicoterapia-individual' },
    { name: 'supervisao-profissional', url: 'http://localhost:4173/servicos/supervisao-profissional' },
    { name: 'terapia-de-casal', url: 'http://localhost:4173/servicos/terapia-de-casal' },
    { name: 'terapia-online', url: 'http://localhost:4173/servicos/terapia-online' },
    { name: 'jardim-da-penha', url: 'http://localhost:4173/localizacao/psicologo-jardim-da-penha' },
    { name: 'praia-do-canto', url: 'http://localhost:4173/localizacao/psicologo-praia-do-canto' },
    { name: 'serra-es', url: 'http://localhost:4173/localizacao/psicologo-serra-es' },
    { name: 'vila-velha', url: 'http://localhost:4173/localizacao/psicologo-vila-velha' },
    { name: 'vitoria-es', url: 'http://localhost:4173/localizacao/psicologo-vitoria-es' },
    { name: 'blog', url: 'http://localhost:4173/blog' },
    { name: 'contato', url: 'http://localhost:4173/contato' },
    { name: 'sobre', url: 'http://localhost:4173/sobre' },
    { name: 'agendar', url: 'http://localhost:4173/agendar' },
];

const resultsDir = './lighthouse-4g-results';
if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
}

const results = [];
const slowPages = [];

for (const page of pages) {
    const outputPath = path.join(resultsDir, `${page.name}.json`);

    console.log(`Testing ${page.name} with 4G throttling...`);
    try {
        // Run Lighthouse with mobile preset and 4G throttling
        // --preset=desktop would disable throttling, we use mobile (default)
        execSync(
            `lighthouse "${page.url}" --output json --output-path "${outputPath}" ` +
            `--chrome-flags="--headless --no-sandbox" ` +
            `--only-categories=performance ` +
            `--form-factor=mobile ` +
            `--throttling-method=simulate ` +
            `--screenEmulation.mobile=true ` +
            `--screenEmulation.width=375 ` +
            `--screenEmulation.height=667 ` +
            `--quiet`,
            { stdio: 'inherit', timeout: 180000 }
        );

        const data = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
        const audits = data.audits || {};

        // Key timing metrics
        const fcp = audits['first-contentful-paint']?.numericValue || 0;
        const lcp = audits['largest-contentful-paint']?.numericValue || 0;
        const si = audits['speed-index']?.numericValue || 0;
        const tti = audits['interactive']?.numericValue || 0;
        const tbt = audits['total-blocking-time']?.numericValue || 0;
        const cls = audits['cumulative-layout-shift']?.numericValue || 0;

        const result = {
            name: page.name,
            url: page.url,
            performance: Math.round((data.categories?.performance?.score || 0) * 100),
            // Times in ms
            firstContentfulPaint: Math.round(fcp),
            largestContentfulPaint: Math.round(lcp),
            speedIndex: Math.round(si),
            timeToInteractive: Math.round(tti),
            totalBlockingTime: Math.round(tbt),
            cumulativeLayoutShift: cls.toFixed(3),
        };

        results.push(result);

        // Check if page takes > 2s (2000ms) on 4G
        // Using LCP as the main "page load" indicator
        if (lcp > 2000) {
            slowPages.push({
                ...result,
                diagnostics: {
                    renderBlocking: audits['render-blocking-resources']?.details?.items || [],
                    unusedCSS: audits['unused-css-rules']?.details?.items || [],
                    unusedJS: audits['unused-javascript']?.details?.items || [],
                    largeImages: audits['uses-optimized-images']?.details?.items || [],
                    unoptimizedImages: audits['modern-image-formats']?.details?.items || [],
                    textCompression: audits['uses-text-compression']?.details?.items || [],
                    efficientCache: audits['uses-long-cache-ttl']?.details?.items || [],
                    thirdParty: audits['third-party-summary']?.details?.items || [],
                    mainThread: audits['mainthread-work-breakdown']?.details?.items || [],
                }
            });
        }

    } catch (e) {
        console.log(`Error testing ${page.name}: ${e.message}`);
    }
}

// Output results summary
console.log('\n' + '='.repeat(80));
console.log('LIGHTHOUSE 4G MOBILE PERFORMANCE AUDIT - PRODUCTION BUILD');
console.log('='.repeat(80) + '\n');

console.log('All Pages Summary:');
console.log('-'.repeat(80));
console.log('Page'.padEnd(25) + 'Perf'.padEnd(8) + 'FCP'.padEnd(10) + 'LCP'.padEnd(10) + 'SI'.padEnd(10) + 'TTI'.padEnd(10) + 'TBT');
console.log('-'.repeat(80));

for (const r of results) {
    const lcpFlag = r.largestContentfulPaint > 2000 ? ' ⚠️' : ' ✓';
    console.log(
        r.name.padEnd(25) +
        (r.performance + '%').padEnd(8) +
        (r.firstContentfulPaint + 'ms').padEnd(10) +
        (r.largestContentfulPaint + 'ms' + lcpFlag).padEnd(10) +
        (r.speedIndex + 'ms').padEnd(10) +
        (r.timeToInteractive + 'ms').padEnd(10) +
        r.totalBlockingTime + 'ms'
    );
}

console.log('\n' + '='.repeat(80));
console.log(`PAGES EXCEEDING 2s LCP ON 4G MOBILE: ${slowPages.length} of ${results.length}`);
console.log('='.repeat(80) + '\n');

if (slowPages.length > 0) {
    for (const page of slowPages) {
        console.log(`\n${'#'.repeat(60)}`);
        console.log(`# ${page.name.toUpperCase()}`);
        console.log(`${'#'.repeat(60)}`);
        console.log(`URL: ${page.url}`);
        console.log(`LCP: ${page.largestContentfulPaint}ms (exceeds 2000ms threshold)`);
        console.log(`Performance Score: ${page.performance}%`);
        console.log(`\nKey Metrics:`);
        console.log(`  - First Contentful Paint: ${page.firstContentfulPaint}ms`);
        console.log(`  - Speed Index: ${page.speedIndex}ms`);
        console.log(`  - Time to Interactive: ${page.timeToInteractive}ms`);
        console.log(`  - Total Blocking Time: ${page.totalBlockingTime}ms`);
        console.log(`  - Cumulative Layout Shift: ${page.cumulativeLayoutShift}`);
    }
} else {
    console.log('All pages load within 2 seconds on 4G mobile! 🎉');
}

// Save detailed results
fs.writeFileSync(path.join(resultsDir, 'summary.json'), JSON.stringify(results, null, 2));
fs.writeFileSync(path.join(resultsDir, 'slow-pages.json'), JSON.stringify(slowPages, null, 2));
console.log('\nResults saved to lighthouse-4g-results/');
