"use server";
import { redirect } from "next/navigation";

export async function navigate(url: string) {
    redirect(`${url}`);
}

export async function navigateToHome() {
    redirect("/");
}

export async function navigateToLogin() {
    redirect("/login");
}

export async function navigateToDashboard() {
    redirect("/dashboard");
}

export async function navigateToCadastro() {
    redirect("/dashboard/cadastro");
}
