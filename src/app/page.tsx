import Image from "next/image";

export default function Home() {
    return (
        <>
            <Image src='/logo.svg' alt='Atos Capital Logo' width={72} height={16} />
            <h1>My Homepage</h1>
            <p>Welcome to my homepage!</p>
        </>
    );
}
