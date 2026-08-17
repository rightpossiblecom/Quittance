import { ReactNode } from "react";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import {
    alexBrush,
    dancingScript,
    greatVibes,
    outfit,
    parisienne,
} from "@/lib/fonts";
import { BRAND, BRAND_LINE } from "@/lib/marketing/content";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: `${BRAND} — AI collections for African firms`,
    description: BRAND_LINE,
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${outfit.className} ${dancingScript.variable} ${parisienne.variable} ${greatVibes.variable} ${alexBrush.variable} antialiased bg-slate-100 dark:bg-slate-800`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
