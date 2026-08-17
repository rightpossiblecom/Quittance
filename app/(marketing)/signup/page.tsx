import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/auth-form";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Sign up — ${BRAND}`,
    description: `Open a ${BRAND} house account.`,
};

export default function SignupPage() {
    return (
        <MarketingPageFrame>
            <main className="py-16 lg:container">
                <AuthForm mode="signup" />
            </main>
        </MarketingPageFrame>
    );
}
