"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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

export function AuthForm({ mode }: AuthFormProps) {
    const router = useRouter();
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
            router.push("/invoice");
        }, 700);
    };

    return (
        <Card className="mx-auto w-full max-w-md">
            <CardHeader>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    {BRAND}
                </p>
                <CardTitle>{isSignup ? "Open a house account" : "Log in to the ledger"}</CardTitle>
                <CardDescription>
                    {isSignup
                        ? "Any email and password. You land in the invoice builder with the house ledger already full."
                        : "Enter the email you used for the house. Any password works on this ledger."}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={onSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
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
                                ? "Opening the house…"
                                : "Opening the ledger…"
                            : isSignup
                              ? "Sign up"
                              : "Log in"}
                    </Button>
                </form>
                <p className="text-muted-foreground mt-4 text-sm">
                    {isSignup ? (
                        <>
                            Already on the ledger?{" "}
                            <Link href="/login" className="text-foreground underline">
                                Log in
                            </Link>
                        </>
                    ) : (
                        <>
                            New house?{" "}
                            <Link href="/signup" className="text-foreground underline">
                                Sign up
                            </Link>
                        </>
                    )}
                </p>
            </CardContent>
        </Card>
    );
}
