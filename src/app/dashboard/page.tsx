/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { navigateToCadastro } from "@/lib/actions";
import Container from "@/app/components/basic/container";
import Loading from "@/app/components/basic/loading";
import { DashboardPage } from "@/app/components/shared/dashboard";
import Button from "@/app/components/basic/button";
import ProductsList from "@/app/components/feature/productsList";
import { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
    const auth = useAuthentication();
    const [totalCount, setTotalCount] = useState(0);
    const [lastUpdate, setLastUpdate] = useState(new Date());

    const openCadastro = () => {
        navigateToCadastro();
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
            <DashboardPage buttonOrClose={<NovoProdutoButton openCadastro={openCadastro} />}>
                <ViewHeader totalCount={totalCount} />
                <div className='flex flex-row justify-between my-10'>
                    <SearchInput />
                    <div className='text-xs font-[Poppins] text-gray-400 '>
                        Última atualização: {lastUpdate.toLocaleDateString()} às {lastUpdate.toLocaleTimeString()}
                    </div>
                </div>
                <ProductsList setTotalCount={(total: number) => setTotalCount(total)} lastUpdate={(date: Date) => setLastUpdate(date)} />
            </DashboardPage>
        </>
    );
}

function SearchInput() {
    return (
        <div className='flex justify-between items-center  w-60 h-9  bg-white rounded-lg px-8'>
            <input
                type='text'
                placeholder='Procurar...'
                className=' h-[70%] w-[80%] bg-white placeholder-[#898989] placeholder-sx border-none focus:border-transparent focus:outline-none'
            />
            <Image src='/search.svg' alt='Profile' className='w-5 h-5 rounded-full' width={150} height={150} />
        </div>
    );
}

export function ViewHeader({ totalCount }: { totalCount: number }) {
    return (
        <div className='flex flex-row justify-between p-1 items-center '>
            <h3 className='font-[Poppins] text-2xl font-extrabold my-2'>Seus cadastros</h3>
            <div className=' flex w-48 h-16 px-4 text-sm font-[Poppins] bg-white justify-around items-center rounded-xl'>
                <div className='text-black text-2xl font-[Poppins] font-extrabold'>
                    <div>{totalCount === 0 ? 0 : totalCount}</div>
                </div>
                Total de cadastros
            </div>
        </div>
    );
}

function NovoProdutoButton({ openCadastro }: { openCadastro: any }) {
    return (
        <>
            <Button className='w-36 h-10 rounded-lg text-xs' onClick={openCadastro}>
                + Novo Produto
            </Button>
        </>
    );
}
