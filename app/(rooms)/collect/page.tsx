import type { Metadata } from "next";
import { CollectBoard } from "@/components/app/collect-board";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Collect — ${BRAND}`,
    description: "Chase on Paystack, M-Pesa, bank, and WhatsApp.",
};

export default function CollectPage() {
    return (
        <main className="py-6 lg:container">
            <h1 className="mb-1 text-2xl font-semibold tracking-tight">Collect</h1>
            <p className="text-muted-foreground mb-6 text-sm">
                The rails. Nudge. Mark paid. Keep the wealth in the house.
            </p>
            <CollectBoard />
        </main>
    );
}
