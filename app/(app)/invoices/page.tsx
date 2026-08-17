"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SavedInvoicesList } from "@/app/components";
import { LedgerStrip } from "@/components/app/ledger-strip";

export default function InvoicesPage() {
    const [, setModalState] = useState(true);

    return (
        <main className="py-10 lg:container">
            <LedgerStrip />
            <Card>
                <CardHeader>
                    <CardTitle>Invoices</CardTitle>
                    <CardDescription>
                        The house ledger. Load a note into the{" "}
                        <Link href="/invoice" className="underline">
                            invoice
                        </Link>{" "}
                        builder, or generate the PDF from here.
                    </CardDescription>
                </CardHeader>
                <div className="px-6 pb-6">
                    <SavedInvoicesList
                        setModalState={setModalState}
                        listClassName="max-h-[70vh]"
                    />
                </div>
            </Card>
        </main>
    );
}
