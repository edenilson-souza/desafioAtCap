/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { navigateToCadastro } from "@/lib/actions";
import Container from "@/components/basic/container";
import Loading from "@/components/basic/loading";
import { DashboardPage } from "@/components/shared/dashboard";
import Button from "@/components/basic/button";

export default function Dashboard() {
    const auth = useAuthentication();

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
                <h1>1</h1>
            </DashboardPage>
        </>
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