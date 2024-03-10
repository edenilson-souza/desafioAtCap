import { navigateToDashboard } from "@/lib/actions";
import Button from "../basic/button";
import Logo from "../basic/logo";
import Image from "next/image";

export function Content({ children }: any) {
    return <div className='flex flex-col w-full h-full bg-[#F9F9F9]'>{children}</div>;
}

export function SideMenu() {
    return (
        <div className='flex flex-col w-[16%] min-w-[200px] h-full border-2'>
            <div className='flex w-full h-20 justify-center items-center'>
                <div className='flex w-[50%]'>
                    <Logo height={400} width={400} />
                </div>
            </div>

            <ButtonMenu>
                <Image src='/product.png' alt='Help' className='w-5 h-5 m-3' width={150} height={150} />
                <div>Produtos</div>
            </ButtonMenu>
        </div>
    );
}

function ButtonMenu({ children }: { children?: any }) {
    return (
        <div className='flex mx-2 relative'>
            <Button className='w-full h-12 bg-[#E9E9E9] text-black font-semibold text-left items-center justify-start' onClick={navigateToDashboard}>
                {children}
            </Button>
        </div>
    );
}
