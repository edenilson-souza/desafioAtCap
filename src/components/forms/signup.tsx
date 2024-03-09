"use client";
import Button from "../basic/button";
import Input from "../basic/input";
import Label from "../basic/label";
import { navigate } from "@/lib/actions";

export default function SignupForm() {
    const handleSignup = () => {
        navigate("/login");
    };
    return (
        <div className='w-[300px] sm:w-[300px] h-full max-h-[60%]'>
            <div className='flex flex-col sm:w-[280px]'>
                <Label className='text-3xl font-["Poppins"] mb-8'>Cadastre-se</Label>
                <Label className='text-lg font-["Poppins"] mb-8 text-[#313957]'>Preencha os campos para concluir seu cadastro</Label>
            </div>
            <Label className='text-sm font-medium'>Nome</Label>
            <Input className='mt-1' placeholder='Informe seu nome...'></Input>
            <Label className='text-sm font-medium'>Email</Label>
            <Input className='mt-1' placeholder='seuemail@email.com'></Input>
            <Label className='text-sm font-medium'>Senha</Label>
            <Input className='mt-1' placeholder='Digite sua senha...'></Input>
            <Label className='text-sm font-medium'>Confirme sua senha</Label>
            <Input className='mt-1' placeholder='Confirme sua senha...'></Input>
            <Button className='mt-6' onClick={handleSignup}>
                Cadastrar
            </Button>
        </div>
    );
}
