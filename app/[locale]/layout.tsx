import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { BaseFooter, BaseNavbar } from "@/app/components";
import Providers from "@/contexts/Providers";
import { LOCALES } from "@/lib/variables";

export function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale: locale.code }));
}

export default async function LocaleLayout(props: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await props.params;
    let messages;
    try {
        messages = (await import(`@/i18n/locales/${locale}.json`)).default;
    } catch {
        notFound();
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
                <div className="pt-4">
                    <BaseNavbar />
                </div>
                <div className="flex flex-col">{props.children}</div>
                <BaseFooter />
            </Providers>
        </NextIntlClientProvider>
    );
}
