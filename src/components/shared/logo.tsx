import Image from "next/image";

export default function LogoImage() {
    return (
        <div className=' w-[50%] h-[100%] min-h-[50%] md:w-1/2'>
            <div className='w-[100%] h-[100%] relative preserve-3d'>
                <Image className='rounded-3xl' src='/login_image.svg' alt='Logo Image' fill={true} layout='fill' object-fit='cover' />
            </div>
        </div>
    );
}
