import Image from "next/image";

export default function Logo({ width = 72, height = 16 }) {
    return (
        <>
            <Image src='/logo.svg' alt='Atos Capital Logo' width={width} height={height} />
        </>
    );
}
