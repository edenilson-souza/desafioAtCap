import Container from "@/components/basic/container";
import LoginForm from "@/components/forms/login";
import Image from "next/image";

export default function Login() {
    return (
        <ContainerAuth>
            <LoginForm />
        </ContainerAuth>
    );
}

export function ContainerAuth({ children }: any) {
    return (
        <Container className='px-2 py-2 sm:px-6 sm:py-6 '>
            <div className='block w-full h-full sm:flex sm:flex-row no-scrollbar overflow-y-auto'>
                <div className='flex flex-col w-full h-full min-h-[700px] justify-center items-center p-8'>
                    <div className='h-1/5 sm:h-1/4'></div>
                    <div className=''>{children}</div>
                    <Image className='h-1/2 mt-6 sm:h-1/3' src='/logo.svg' alt='Atos Capital Logo' width={150} height={25} />
                </div>
                <div className='flex w-full h-full min-h-[700px] '>
                    <div className='flex w-full h-full relative preserve-3d '>
                        <Image className='rounded-3xl' src='/login_image.svg' alt='Logo Image' fill={true} layout='fill' object-fit='cover' />
                    </div>
                </div>
            </div>
        </Container>
    );
}
