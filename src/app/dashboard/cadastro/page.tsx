/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { navigateToDashboard } from "@/lib/actions";
import Container from "@/components/basic/container";
import Loading from "@/components/basic/loading";
import { DashboardPage } from "@/components/shared/dashboard";

export default function Dashboard() {
    const auth = useAuthentication();

    const closeCadastro = () => {
        navigateToDashboard();
    };

    if (!auth.authenticated) {
        return (
            <>
                <Container className='flex flex-row  h-[100vh] items-center justify-center'>
                    <Loading></Loading>
                </Container>
            </>
        );
    }

    return (
        <>
            <DashboardPage buttonOrClose={<Close onClick={closeCadastro}></Close>}>
                <h1>2</h1>
            </DashboardPage>
        </>
    );
}

function Close({ onClick }: any) {
    return (
        <a className='text-xl text-[#898989] h-full flex justify-center items-center' onClick={onClick}>
            <div className='flex relative w-10 h-10 justify-center items-center ml-4'>
                <div className='absolute left-0 w-1/2 h-1 bg-slate-400 transform rotate-45 rounded-xl'></div>
                <div className='absolute left-0 w-1/2 h-1 bg-slate-400 transform -rotate-45 rounded-xl'></div>
            </div>
        </a>
    );
}
