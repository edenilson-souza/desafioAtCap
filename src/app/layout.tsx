import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Atos Capital",
    description: "Atos Capital"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pt'>
            <Head>
                <link rel='shortcut icon' href='./favicon.ico' />
            </Head>
            <body className={inter.className}>{children}</body>
            <ToastContainer />
        </html>
    );
}
