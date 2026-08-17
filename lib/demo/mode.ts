export function isDemoMode() {
    return (
        process.env.DEMO_MODE === "1" ||
        process.env.VERCEL === "1" ||
        process.env.NEXT_PUBLIC_DEMO_MODE === "1"
    );
}
