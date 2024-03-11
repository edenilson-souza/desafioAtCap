/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import LoginForm from "@/app/components/forms/login";
import { ContainerAuth } from "@/app/components/shared/container";
import useAuthentication from "@/hooks/useAuthentication";
import { useEffect } from "react";

export default function Login() {
    const auth = useAuthentication();

    useEffect(() => {
        auth.logout();
    }, []);

    return (
        <ContainerAuth>
            <LoginForm />
        </ContainerAuth>
    );
}
