import { InvoiceMain } from "@/app/components";
import type { Metadata } from "next";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Invoice — ${BRAND}`,
    description: "Write the note. Watch the live preview. Generate the PDF.",
};

export default function InvoicePage() {
    return (
        <main className="py-10 lg:container">
            <InvoiceMain />
        </main>
    );
}
