const withNextIntl = require("next-intl/plugin")("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DEMO_MODE: process.env.DEMO_MODE || "1",
        NEXT_PUBLIC_DEMO_MODE: process.env.NEXT_PUBLIC_DEMO_MODE || "1",
    },
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "inline",
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },
    serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
    webpack: (config) => {
        config.module.rules.push({
            test: /\.map$/,
            use: "ignore-loader",
        });
        return config;
    },
};

// Bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(withNextIntl(nextConfig));
