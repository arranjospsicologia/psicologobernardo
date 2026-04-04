export interface SiteProfile {
    siteUrl: string;
    siteName: string;
    clinicalBrandName: string;
    personName: string;
    fullName: string;
    description: string;
    crp: string;
    logoUrl: string;
    ogImageUrl: string;
    phoneHref: string;
    phoneDisplay: string;
    whatsappNumber: string;
    officialEmail: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    address: {
        streetAddress: string;
        extendedAddress: string;
        neighborhood: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    hours: {
        displayDays: string;
        displayTime: string;
        opens: string;
        closes: string;
    };
    sessionMinutes: {
        individual: number;
        couple: number;
    };
    reviews: {
        ratingValue: string;
        reviewCount: string;
    };
    externalLinks: {
        doctoralia: string;
        googleReviews: string;
        instagram: string;
        facebook: string;
        googleMapsPlace: string;
        googleMapsQuery: string;
        googleMapsEmbed: string;
        arranjos: string;
        arranjosProjects: string;
    };
}

export const schemaIds = {
    website: "https://psicologobernardo.com.br/#website",
    organization: "https://psicologobernardo.com.br/#organization",
    person: "https://psicologobernardo.com.br/sobre/#person",
    serviceIndividual:
        "https://psicologobernardo.com.br/servicos/psicoterapia-individual/#service",
    serviceCouple:
        "https://psicologobernardo.com.br/servicos/terapia-de-casal/#service",
    serviceOnline:
        "https://psicologobernardo.com.br/servicos/terapia-online/#service",
} as const;

export const siteProfile: SiteProfile = {
    siteUrl: "https://psicologobernardo.com.br",
    siteName: "Psicólogo Bernardo",
    clinicalBrandName: "Bernardo Carielo Psicólogo",
    personName: "Bernardo Carielo",
    fullName: "Bernardo Carielo Macedo de Oliveira Pinto",
    description:
        "Psicólogo em Vitória ES, com consultório em Jardim da Penha, em frente à UFES, atendimento presencial e online e foco principal em psicoterapia individual.",
    crp: "CRP 16/5527",
    logoUrl: "https://psicologobernardo.com.br/images/logo.png",
    ogImageUrl: "https://psicologobernardo.com.br/images/og-image.png",
    phoneHref: "tel:+5527998331228",
    phoneDisplay: "(27) 99833-1228",
    whatsappNumber: "5527998331228",
    officialEmail: "contato@psicologobernardo.com.br",
    coordinates: {
        latitude: -20.2798925,
        longitude: -40.3009252,
    },
    address: {
        streetAddress: "Rua Darcy Grijó, 50",
        extendedAddress: "Sala 409, Ed. Madison Office Tower",
        neighborhood: "Jardim da Penha",
        city: "Vitória",
        state: "ES",
        postalCode: "29060-500",
        country: "BR",
    },
    hours: {
        displayDays: "Segunda a sexta",
        displayTime: "13:30 às 21:00",
        opens: "13:30",
        closes: "21:00",
    },
    sessionMinutes: {
        individual: 60,
        couple: 75,
    },
    reviews: {
        ratingValue: "5.0",
        reviewCount: "27",
    },
    externalLinks: {
        doctoralia:
            "https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria",
        googleReviews:
            "https://www.google.com/maps/place/Psic%C3%B3logo+-+Bernardo+Carielo+Macedo+de+Oliveira+Pinto/@-20.2796937,-40.3010992,17z/data=!4m17!1m8!3m7!1s0xb8171b61b8e13b:0x5bab77942d3119e5!2sPsic%C3%B3logo+-+Bernardo+Carielo+Macedo+de+Oliveira+Pinto!8m2!3d-20.2798925!4d-40.3009252!10e5!16s%2Fg%2F11hdqw304k!3m7!1s0xb8171b61b8e13b:0x5bab77942d3119e5!8m2!3d-20.2798925!4d-40.3009252!9m1!1b1!16s%2Fg%2F11hdqw304k?entry=ttu",
        instagram: "https://www.instagram.com/bcarielo",
        facebook: "https://www.facebook.com/bcarielo",
        googleMapsPlace:
            "https://www.google.com/maps/place/Bernardo+Carielo+Psic%C3%B3logo/@-20.2798925,-40.3009252,1019m/data=!3m2!1e3!4b1!4m6!3m5!1s0xb8171b61b8e13b:0x5bab77942d3119e5!8m2!3d-20.2798925!4d-40.3009252!16s%2Fg%2F11hdqw304k?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
        googleMapsQuery:
            "https://maps.google.com/?q=Rua+Darcy+Grij%C3%B3,+50,+Jardim+da+Penha,+Vit%C3%B3ria,+ES",
        googleMapsEmbed:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.2565968762556!2d-40.29407481177918!3d-20.279014427004878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8171b61b8e13b%3A0x5bab77942d3119e5!2sPsic%C3%B3logo%20-%20Bernardo%20Carielo%20Macedo%20de%20Oliveira%20Pinto!5e0!3m2!1spt-BR!2sbr!4v1763333002406!5m2!1spt-BR!2sbr",
        arranjos: "https://arranjospsicologia.com.br",
        arranjosProjects: "https://arranjospsicologia.com.br/projetos",
    },
};

export const siteSameAs = [
    siteProfile.externalLinks.instagram,
    siteProfile.externalLinks.facebook,
    siteProfile.externalLinks.doctoralia,
    siteProfile.externalLinks.googleMapsPlace,
] as const;

export function buildWhatsAppUrl(text: string) {
    return `https://wa.me/${siteProfile.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getFullStreetAddress() {
    return `${siteProfile.address.streetAddress}, ${siteProfile.address.extendedAddress}`;
}

export function getDisplayAddress() {
    return `${getFullStreetAddress()} - ${siteProfile.address.neighborhood}, ${siteProfile.address.city} - ${siteProfile.address.state}`;
}

export function getDisplayAddressWithPostalCode() {
    return `${getDisplayAddress()}, CEP ${siteProfile.address.postalCode}`;
}
