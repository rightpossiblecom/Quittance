import type { Metadata } from "next";
import { InboxDesk } from "@/components/app/inbox-desk";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Inbox — ${BRAND}`,
    description: "WhatsApp, voice, and photo — drafted into an invoice.",
};

export default function InboxPage() {
    return (
        <main className="py-6 lg:container">
            <h1 className="mb-1 text-2xl font-semibold tracking-tight">Inbox</h1>
            <p className="text-muted-foreground mb-6 text-sm">
                The chat the shop already sent. Turn it into paper.
            </p>
            <InboxDesk />
        </main>
    );
}
