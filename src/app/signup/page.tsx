/* eslint-disable react-hooks/exhaustive-deps */
import SignupForm from "@/app/components/forms/signup";
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
            <SignupForm />
        </ContainerAuth>
    );
}
