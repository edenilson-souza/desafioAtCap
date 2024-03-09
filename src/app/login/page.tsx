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
        <Container className='px-2 py-2 sm:px-6 sm:py-6 overflow-auto'>
            <div className='flex flex-col w-full h-full sm:flex-row'>
                <div className='flex flex-col w-1/2 min-w-[350px] h-full min-h-[750px] justify-center items-center  sm:w-full  '>
                    <div className='h-1/5 sm:h-1/4'></div>
                    {children}
                    <Image className='h-1/3 mb-6 sm:mb-12' src='/logo.svg' alt='Atos Capital Logo' width={150} height={25} />
                </div>
                <div className='flex flex-col w-1/2 min-w-[350px] h-full min-h-[400px] sm:min-h-[750px] sm:w-full'>
                    <div className='w-[100%] h-[100%] relative preserve-3d'>
                        <Image className='rounded-3xl' src='/login_image.svg' alt='Logo Image' fill={true} layout='fill' object-fit='cover' />
                    </div>
                </div>
            </div>
        </Container>
    );
}
