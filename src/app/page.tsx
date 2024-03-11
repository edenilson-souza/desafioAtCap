"use client";
import Loading from "@/app/components/basic/loading";
import useAuthentication from "@/hooks/useAuthentication";
import { useEffect } from "react";

export default function Home() {
    const auth = useAuthentication();

    useEffect(() => {
        if (auth.authenticated) {
            auth.login("token");
        } else {
            auth.redirectTo("/login");
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
