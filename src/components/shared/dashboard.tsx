import Container from "../basic/container";
import { Header } from "./header";
import { Content, SideMenu } from "./side_menu";

export function DashboardPage({ children, buttonOrClose }: any) {
    return (
        <Container className='flex flex-row'>
            <SideMenu />
            <div className='flex flex-col w-full h-[100%] relative'>
                <Header />
                <Content>
                    <div className='flex flex-col w-full h-[100%] relative'>
                        <div className='flex flex-row w-full justify-between px-14 py-10 '>
                            <BemVindo />
                            {buttonOrClose}
                        </div>

                        <div className='block items-center px-14 py-6 no-scrollbar overflow-y-auto border-t  border-gray-20'>{children}</div>
                    </div>
                </Content>
            </div>
        </Container>
    );
}

export function BemVindo() {
    return (
        <div>
            <h1 className='font-[Poppins] text-4xl font-extrabold my-2'>Olá Usuário!</h1>
            <h6 className='font-[Poppins] text-sm text-[#898989]'>Seja bem vindo!</h6>
        </div>
    );
}
