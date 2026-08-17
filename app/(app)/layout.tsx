import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { BaseFooter, BaseNavbar } from "@/app/components";
import { HouseRail } from "@/components/app/house-rail";
import Providers from "@/contexts/Providers";
import en from "@/i18n/locales/en.json";

export default function AppGroupLayout({ children }: { children: ReactNode }) {
    return (
        <NextIntlClientProvider locale="en" messages={en}>
            <Providers>
                <div className="pt-4">
                    <HouseRail />
                    <BaseNavbar />
                </div>
                <div className="flex flex-col">{children}</div>
                <BaseFooter />
            </Providers>
        </NextIntlClientProvider>
    );
}
