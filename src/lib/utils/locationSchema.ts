// src/lib/utils/locationSchema.ts
// Helper que constrói o JSON-LD para páginas de localização.
// Recebe canonical (não slug) para evitar bug de URL dupla no hub.

import type { LocationFaqItem } from "$lib/data/locations";

const SITE_URL = "https://psicologobernardo.com.br";

type BuildLocationJsonLdParams = {
    canonical: string;           // com ou sem trailing slash
    pageName: string;            // ex: loc.h1 (sem pipe "| Bernardo Carielo")
    pageDescription: string;
    faqItems?: LocationFaqItem[];
    mode?: "location" | "hub";   // default: "location"
    areaServedCity?: string;     // quando presente, adiciona nó ProfessionalService com areaServed
};

export function buildLocationJsonLd({
    canonical,
    pageName,
    pageDescription,
    faqItems = [],
    mode = "location",
    areaServedCity,
}: BuildLocationJsonLdParams) {
    // Remove trailing slash para formar os @id corretamente
    const base = canonical.endsWith("/")
        ? canonical.slice(0, -1)
        : canonical;

    // mode === "hub": @type vira array ["WebPage", "CollectionPage"] para
    // sinalizar que esta página agrega subpáginas de localização.
    // mode === "location" (default): @type permanece "WebPage".
    const webPageType =
        mode === "hub" ? ["WebPage", "CollectionPage"] : "WebPage";

    const webPageNode: Record<string, unknown> = {
        "@type": webPageType,
        "@id": `${base}/#webpage`,
        url: `${base}/`,
        name: pageName,
        description: pageDescription,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
    };

    const graph: unknown[] = [webPageNode];

    if (faqItems.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${base}/#faq`,
            inLanguage: "pt-BR",
            mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer, // texto limpo no JSON-LD (links ficam só no visual)
                },
            })),
        });
    }

    if (areaServedCity) {
        graph.push({
            "@type": "ProfessionalService",
            "@id": `${base}/#service`,
            name: `Atendimento Psicológico – ${areaServedCity}`,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: {
                "@type": "City",
                name: areaServedCity,
                containedInPlace: {
                    "@type": "State",
                    name: "Espírito Santo",
                    identifier: "ES",
                },
            },
            serviceArea: {
                "@type": "City",
                name: areaServedCity,
            },
        });
    }

    return {
        "@context": "https://schema.org",
        "@graph": graph,
    };
}
