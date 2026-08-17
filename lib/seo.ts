import { AUTHOR_WEBSITE, BASE_URL } from "@/lib/variables";
import { BRAND, BRAND_LINE } from "@/lib/marketing/content";

export const ROOTKEYWORDS = [
    "invoice",
    "African invoice",
    "Lagos invoice",
    "Nairobi invoice",
    "Accra invoice",
    "family firm ledger",
];

export const JSONLD = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: BRAND,
    description: BRAND_LINE,
    keywords: ROOTKEYWORDS,
    url: BASE_URL,
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#website`,
    },
    author: {
        "@type": "Organization",
        name: BRAND,
        url: AUTHOR_WEBSITE,
    },
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${BASE_URL}/#website`,
            url: `${BASE_URL}`,
        },
    ],
};
