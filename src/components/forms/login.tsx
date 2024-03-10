"use client";
import { navigate } from "@/lib/actions";
import Button from "../basic/button";
import Divider from "../basic/divider";
import Input from "../basic/input";
import Label from "../basic/label";
import { useState } from "react";
import AccountGatewayHttp from "@/infra/gateway/AccountGatewayHttp";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        AccountGatewayHttp.login({ email, password });
        // navigate("/");
    };

    return (
        <div className='w-[300px] h-full max-h-[60%] sm:w-[300px]'>
            <div className='flex flex-col sm:w-[280px]'>
                <Label className='text-3xl font-["Poppins"] mb-8'>Olá! 👋</Label>
                <Label className='text-xl font-["Poppins"] mb-8 text-[#313957]'>Faça login para começar a gerenciar seus produtos.</Label>
            </div>
            <Label className='text-sm font-medium'>Email</Label>
            <Input type='email' className='mt-1 mb-4' placeholder='seuemail@email.com' onChange={handleEmailChange} value={email}></Input>
            <Label className='text-sm font-medium'>Senha</Label>
            <Input type='password' className='mt-1 mb-6' placeholder='Digite sua senha...' onChange={handlePasswordChange} value={password}></Input>
            <Button onClick={handleSubmit}>Login</Button>
            <Divider>Ou</Divider>
            <Signup></Signup>
        </div>
    );
}

function Signup() {
    const handleSignup = () => {
        navigate("/signup");
    };
    return (
        <div className='flex mt-8 justify-center items-center'>
            <div>Não possui conta?</div>
            <a className='text-blue-600 ml-2' onClick={handleSignup}>
                Cadastre-se!
            </a>
        </div>
    );
}
