"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { writeSession } from "@/lib/demo/auth";
import { BRAND } from "@/lib/marketing/content";

type AuthFormProps = {
    mode: "login" | "signup";
};

const APP_HOMES = ["/inbox", "/collect", "/invoice", "/invoices"];

function safeNext(value: string | null) {
    if (!value) return "/inbox";
    if (APP_HOMES.some((home) => value === home || value.startsWith(`${home}/`))) {
        return value;
    }
    return "/inbox";
}

export function AuthForm({ mode }: AuthFormProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const isSignup = mode === "signup";

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!email || !password) return;
        setLoading(true);
        window.setTimeout(() => {
            writeSession(email);
            router.push(safeNext(searchParams.get("next")));
        }, 700);
    };

    return (
        <Card className="mx-auto w-full max-w-md">
            <CardHeader>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    {BRAND}
                </p>
                <CardTitle>{isSignup ? "Create your house" : "Welcome back"}</CardTitle>
                <CardDescription>
                    {isSignup
                        ? "Open an account to reach Inbox, Collect, and the ledger."
                        : "Sign in to continue to your collections house."}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={onSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="email">Work email</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="books@iroko.ng"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            autoComplete={isSignup ? "new-password" : "current-password"}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading
                            ? isSignup
                                ? "Creating your house…"
                                : "Signing in…"
                            : isSignup
                              ? "Create account"
                              : "Sign in"}
                    </Button>
                </form>
                <p className="text-muted-foreground mt-4 text-sm">
                    {isSignup ? (
                        <>
                            Already have an account?{" "}
                            <Link href="/login" className="text-foreground underline">
                                Sign in
                            </Link>
                        </>
                    ) : (
                        <>
                            New to Quittance?{" "}
                            <Link href="/signup" className="text-foreground underline">
                                Create an account
                            </Link>
                        </>
                    )}
                </p>
            </CardContent>
        </Card>
    );
}
