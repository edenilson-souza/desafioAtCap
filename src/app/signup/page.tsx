/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import SignupForm from "@/app/components/forms/signup";
import { ContainerAuth } from "@/app/components/shared/container";
import useAuthentication from "@/hooks/useAuthentication";
import { useEffect } from "react";

export default function SignUp() {
    const auth = useAuthentication();

    useEffect(() => {
        auth.logout();
    }, []);

    return (
        <ContainerAuth>
            <SignupForm />
        </ContainerAuth>
    );
}
