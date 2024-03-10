"use client";
import useAuthentication from "@/hooks/useAuthentication";
import Container from "@/components/basic/container";
import { Header } from "@/components/shared/header";
import { Content, SideMenu } from "@/components/shared/sideMenu";

export default function Dashboard() {
    const auth = useAuthentication();

    if (!auth.authenticated) {
        return null;
    }

    return (
        <>
            <Container className='flex flex-row'>
                <SideMenu />
                <div className='flex flex-col w-full h-full'>
                    <Header />
                    <Content>
                        <h1>Dashboard</h1>
                    </Content>
                </div>
            </Container>
        </>
    );
}
