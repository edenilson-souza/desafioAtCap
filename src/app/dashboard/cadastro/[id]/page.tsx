/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { navigateToDashboard } from "@/lib/actions";
import Container from "@/app/components/basic/container";
import Loading from "@/app/components/basic/loading";
import { DashboardPage } from "@/app/components/shared/dashboard";
import ProductsCreate from "@/app/components/feature/productsCreate";
import ProductsEdit from "@/app/components/feature/productsEdit";

export default function Dashboard({ params: { id } }: { params: { id: number } }) {
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
                <ViewHeader />
                <ProductsEdit id={id} />
            </DashboardPage>
        </>
    );
}

export function ViewHeader() {
    return (
        <div className='flex flex-row justify-between p-1 items-center '>
            <h3 className='font-[Poppins] text-2xl font-extrabold my-2'>Editar Produto</h3>
            <div className=' flex w-48 h-16 px-4 text-sm font-[Poppins]  justify-around items-center rounded-xl'></div>
        </div>
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
