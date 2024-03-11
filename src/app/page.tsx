/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Loading from "@/app/components/basic/loading";
import useAuthentication from "@/hooks/useAuthentication";
import { navigateToDashboard, navigateToLogin } from "@/lib/actions";
import { useEffect } from "react";

export default function Home() {
    const auth = useAuthentication();

    useEffect(() => {
        if (auth.checkAuthentication()) {
            navigateToDashboard();
        } else {
            navigateToLogin();
        }
    }, []);

    return (
        <>
            <div className='flex w-full h-screen justify-center items-center'>
                <Loading></Loading>
            </div>
        </>
    );
}
