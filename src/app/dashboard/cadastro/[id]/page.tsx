/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { navigateToDashboard } from "@/lib/actions";
import Container from "@/app/components/basic/container";
import Loading from "@/app/components/basic/loading";
import { DashboardPage } from "@/app/components/shared/dashboard";
import ProductsEdit from "@/app/components/feature/productsEdit";
import Close from "@/app/components/basic/close";
import ViewHeader from "@/app/components/basic/viewHeader";

export default function Dashboard({ params: { id } }: any) {
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
                <ViewHeader title='Editar Produto' />
                <ProductsEdit id={id} />
            </DashboardPage>
        </>
    );
}
