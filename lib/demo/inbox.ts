import { InvoiceType } from "@/types";
import { LOCAL_STORAGE_INVOICE_DRAFT_KEY } from "@/lib/variables";
import { readCollections } from "@/lib/demo/collections";
import {
    readSavedInvoices,
    SEEDED_INVOICES,
    upsertSavedInvoice,
} from "@/lib/demo/seed-invoices";

export const INBOX_KEY = "quittance:inbox";
export const INBOX_EVENT = "quittance-inbox";

export type InboxKind = "whatsapp" | "voice" | "photo";

export type InboxThread = {
    id: string;
    kind: InboxKind;
    from: string;
    city: string;
    preview: string;
    time: string;
    extracted: boolean;
    invoiceNumber: string;
};

export const SEEDED_THREADS: InboxThread[] = [
    {
        id: "yaba-stairs",
        kind: "whatsapp",
        from: "Iroko Joinery · Yaba",
        city: "Lagos",
        preview:
            "stairs done, 4.2m landing + shelves 980k x3, Adeyemi Trust, GTBank 0128842291",
        time: "14:22",
        extracted: false,
        invoiceNumber: "QT-1044",
    },
    {
        id: "osu-cloth",
        kind: "voice",
        from: "Maison Sika · Osu",
        city: "Accra",
        preview:
            "Voice · 0:41 — eight kente wrappers, gold thread, Nkrumah House, Absa",
        time: "11:08",
        extracted: false,
        invoiceNumber: "QT-1108",
    },
    {
        id: "ngong-ward",
        kind: "photo",
        from: "Ward Supply · Ngong Road",
        city: "Nairobi",
        preview:
            "Photo of a handwritten bill — 120 linen, 18 trays, Kileleshwa Clinic",
        time: "Yesterday",
        extracted: false,
        invoiceNumber: "QT-2219",
    },
];

function emit() {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event(INBOX_EVENT));
}

export function readInbox(): InboxThread[] {
    if (typeof window === "undefined") return SEEDED_THREADS;
    try {
        const raw = window.localStorage.getItem(INBOX_KEY);
        if (!raw) {
            window.localStorage.setItem(INBOX_KEY, JSON.stringify(SEEDED_THREADS));
            return SEEDED_THREADS;
        }
        const parsed = JSON.parse(raw) as InboxThread[];
        if (!Array.isArray(parsed) || parsed.length === 0) {
            window.localStorage.setItem(INBOX_KEY, JSON.stringify(SEEDED_THREADS));
            return SEEDED_THREADS;
        }
        return parsed;
    } catch {
        return SEEDED_THREADS;
    }
}

export function writeInbox(threads: InboxThread[]) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(INBOX_KEY, JSON.stringify(threads));
    emit();
}

export function invoiceForThread(thread: InboxThread): InvoiceType {
    const match = SEEDED_INVOICES.find(
        (row) => row.details.invoiceNumber === thread.invoiceNumber
    );
    return match ?? SEEDED_INVOICES[0];
}

export function extractThread(id: string): InvoiceType | null {
    const threads = readInbox();
    const thread = threads.find((row) => row.id === id);
    if (!thread) return null;
    const invoice = invoiceForThread(thread);
    if (typeof window !== "undefined") {
        window.localStorage.setItem(
            LOCAL_STORAGE_INVOICE_DRAFT_KEY,
            JSON.stringify(invoice)
        );
    }
    upsertSavedInvoice(invoice);
    writeInbox(
        threads.map((row) =>
            row.id === id ? { ...row, extracted: true } : row
        )
    );
    return invoice;
}

export function hydrateHouse() {
    readInbox();
    readCollections();
    readSavedInvoices();
}
