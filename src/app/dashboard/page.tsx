"use client";
import Button from "@/components/basic/button";
import useAuthentication from "@/hooks/useAuthentication";
import Image from "next/image";

export default function Dashboard() {
    const auth = useAuthentication();

    if (!auth.authenticated) {
        return null;
    }

    return (
        <>
            <Image src='/logo.svg' alt='Atos Capital Logo' width={72} height={16} />
            <h1>My Homepage</h1>
            <p>Welcome to my homepage!</p>
            <Button className='w-96' onClick={() => auth.logout()}>
                Logout
            </Button>
        </>
    );
}
