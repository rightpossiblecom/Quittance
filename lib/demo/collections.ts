export const COLLECTIONS_KEY = "quittance:collections";
export const COLLECTIONS_EVENT = "quittance-collections";

export type Rail = "paystack" | "mpesa" | "bank" | "whatsapp";
export type CollectStatus = "paid" | "chasing" | "overdue" | "scheduled";

export type CollectionRow = {
    invoiceNumber: string;
    client: string;
    city: string;
    amount: string;
    currency: string;
    status: CollectStatus;
    rail: Rail;
    railLabel: string;
    lastNudge: string;
    due: string;
    transcript: string[];
};

export const SEEDED_COLLECTIONS: CollectionRow[] = [
    {
        invoiceNumber: "QT-1044",
        client: "Adeyemi Family Trust",
        city: "Lagos",
        amount: "7,760,500",
        currency: "NGN",
        status: "chasing",
        rail: "whatsapp",
        railLabel: "WhatsApp · day 11",
        lastNudge: "Yesterday 16:40 WAT",
        due: "1 Aug 2026",
        transcript: [
            "Sent: The stairs are in. QT-1044 is ₦7.14m, due 1 Aug. GTBank 0128842291.",
            "Seen. No reply.",
        ],
    },
    {
        invoiceNumber: "QT-1108",
        client: "Nkrumah House",
        city: "Accra",
        amount: "22,698",
        currency: "GHS",
        status: "overdue",
        rail: "bank",
        railLabel: "Absa Ghana · overdue",
        lastNudge: "3 days ago",
        due: "18 Jul 2026",
        transcript: [
            "Sent: Cloth is folded. QT-1108 is GH₵22,698 to Absa 0042281193.",
        ],
    },
    {
        invoiceNumber: "QT-2219",
        client: "Kileleshwa Clinic",
        city: "Nairobi",
        amount: "395,652",
        currency: "KES",
        status: "paid",
        rail: "mpesa",
        railLabel: "M-Pesa · paid",
        lastNudge: "Paid 24 Jul",
        due: "20 Aug 2026",
        transcript: [
            "Sent: Ward linen delivered. QT-2219 KSh 395,652.",
            "Paid via M-Pesa. Ref NDL7KX441.",
        ],
    },
    {
        invoiceNumber: "QT-3301",
        client: "Mokoena Family Office",
        city: "Johannesburg",
        amount: "290,200",
        currency: "ZAR",
        status: "paid",
        rail: "paystack",
        railLabel: "Paystack · paid",
        lastNudge: "Paid 14 May",
        due: "8 Jun 2026",
        transcript: [
            "Sent: Mezzanine steel tagged. QT-3301 R290,200.",
            "Paystack settled. Receipt PS-88291.",
        ],
    },
    {
        invoiceNumber: "QT-4412",
        client: "Kampala Import House",
        city: "Kigali",
        amount: "4,366,000",
        currency: "RWF",
        status: "scheduled",
        rail: "bank",
        railLabel: "Bank of Kigali · tomorrow 9:00 WAT",
        lastNudge: "Scheduled",
        due: "27 Aug 2026",
        transcript: [
            "Queued: Two containers sealed. QT-4412 Frw 4.37m. Reminder tomorrow 9:00 WAT.",
        ],
    },
    {
        invoiceNumber: "QT-5506",
        client: "Alexandria Kin Trust",
        city: "Cairo",
        amount: "60,274",
        currency: "EGP",
        status: "overdue",
        rail: "bank",
        railLabel: "CIB Egypt · overdue",
        lastNudge: "6 days ago",
        due: "11 May 2026",
        transcript: [
            "Sent: Courtyard stone is cut. QT-5506 E£60,274 to CIB 1000228841.",
        ],
    },
];

function emit() {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event(COLLECTIONS_EVENT));
}

export function readCollections(): CollectionRow[] {
    if (typeof window === "undefined") return SEEDED_COLLECTIONS;
    try {
        const raw = window.localStorage.getItem(COLLECTIONS_KEY);
        if (!raw) {
            window.localStorage.setItem(
                COLLECTIONS_KEY,
                JSON.stringify(SEEDED_COLLECTIONS)
            );
            return SEEDED_COLLECTIONS;
        }
        const parsed = JSON.parse(raw) as CollectionRow[];
        if (!Array.isArray(parsed) || parsed.length === 0) {
            window.localStorage.setItem(
                COLLECTIONS_KEY,
                JSON.stringify(SEEDED_COLLECTIONS)
            );
            return SEEDED_COLLECTIONS;
        }
        return parsed;
    } catch {
        return SEEDED_COLLECTIONS;
    }
}

export function writeCollections(rows: CollectionRow[]) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(rows));
    emit();
}

export function nudgeCollection(invoiceNumber: string) {
    const rows = readCollections();
    const next = rows.map((row) => {
        if (row.invoiceNumber !== invoiceNumber) return row;
        return {
            ...row,
            status: (row.status === "paid" ? "paid" : "chasing") as CollectStatus,
            rail: "whatsapp" as const,
            railLabel: "WhatsApp · just now",
            lastNudge: "Just now",
            transcript: [
                ...row.transcript,
                `Sent: Reminder on ${row.invoiceNumber}. The house is waiting on ${row.currency} ${row.amount}.`,
            ],
        };
    });
    writeCollections(next);
    return next;
}

export function markCollectionPaid(invoiceNumber: string) {
    const rows = readCollections();
    const next = rows.map((row) => {
        if (row.invoiceNumber !== invoiceNumber) return row;
        return {
            ...row,
            status: "paid" as const,
            lastNudge: "Paid just now",
            railLabel: `${row.railLabel.split("·")[0].trim()} · paid`,
            transcript: [
                ...row.transcript,
                `Paid. ${row.invoiceNumber} is closed on the house ledger.`,
            ],
        };
    });
    writeCollections(next);
    return next;
}

export function collectionCounts(rows: CollectionRow[]) {
    return {
        paid: rows.filter((row) => row.status === "paid").length,
        chasing: rows.filter((row) => row.status === "chasing").length,
        overdue: rows.filter((row) => row.status === "overdue").length,
        scheduled: rows.filter((row) => row.status === "scheduled").length,
    };
}
