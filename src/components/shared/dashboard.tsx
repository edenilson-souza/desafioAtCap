import Container from "../basic/container";
import { Header } from "./header";
import { Content, SideMenu } from "./side_menu";

export function DashboardPage({ children, buttonOrClose }: any) {
    return (
        <Container className='flex flex-row'>
            <SideMenu />
            <div className='flex flex-col w-full h-full'>
                <Header />
                <Content>
                    <div className='w-full h-full px-14 py-10'>
                        <div className='flex flex-row w-full justify-between'>
                            <BemVindo />
                            {buttonOrClose}
                        </div>

                        <div className='flex items-center mt-8'>
                            <div className='flex-1 border-t border-gray-200'>{children}</div>
                        </div>
                    </div>
                </Content>
            </div>
        </Container>
    );
}

export function BemVindo() {
    return (
        <div>
            <h1 className='font-[Poppins] text-3xl font-extrabold my-2'>Olá Usuário!</h1>
            <h6 className='font-[Poppins] text-xs text-[#898989]'>Seja bem vindo!</h6>
        </div>
    );
}
