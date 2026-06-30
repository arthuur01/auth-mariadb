"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function signInAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await auth.api.signInEmail({
        body: { email, password },
        headers: await headers(), // necessário para o better-auth setar o cookie de sessão corretamente
    });
    

    redirect("/dashboard");
}