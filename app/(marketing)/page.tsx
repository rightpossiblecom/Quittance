import type { Metadata } from "next";
import { MarketingLanding } from "@/components/marketing/landing";
import { BRAND, BRAND_LINE } from "@/lib/marketing/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: `${BRAND} — Invoice house for African firms`,
    description: BRAND_LINE,
};

export default function LandingPage() {
    return <MarketingLanding />;
}
