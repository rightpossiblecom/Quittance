import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthForm } from "@/components/auth/auth-form";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Log in — ${BRAND}`,
    description: `Log in to the ${BRAND} collections house.`,
};

export default function LoginPage() {
    return (
        <MarketingPageFrame>
            <main className="py-16 lg:container">
                <Suspense fallback={null}>
                    <AuthForm mode="login" />
                </Suspense>
            </main>
        </MarketingPageFrame>
    );
}
