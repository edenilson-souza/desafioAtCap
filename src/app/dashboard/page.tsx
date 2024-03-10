/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { navigateToCadastro } from "@/lib/actions";
import Container from "@/components/basic/container";
import Loading from "@/components/basic/loading";
import { DashboardPage } from "@/components/shared/dashboard";
import Button from "@/components/basic/button";
import ProductsList from "@/components/feature/productsList";
import { useState } from "react";

export default function Dashboard() {
    const auth = useAuthentication();
    const [totalCount, setTotalCount] = useState(0);

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
            <DashboardPage buttonOrClose={<NovoProdutoButton openCadastro={openCadastro}></NovoProdutoButton>}>
                <ViewHeaderCadastrados totalCount={totalCount}></ViewHeaderCadastrados>
                <ProductsList setTotalCount={(total: number) => setTotalCount(total)}></ProductsList>
            </DashboardPage>
        </>
    );
}

export function ViewHeaderCadastrados({ totalCount }: { totalCount: number }) {
    return (
        <div>
            <h3 className='font-[Poppins] text-xl font-extrabold my-2'>Seus cadastros</h3>
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
