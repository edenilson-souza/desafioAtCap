"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { notify } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import SignupDomain from "@/domain/SignupDomain";
import AccountGatewayHttp from "@/infra/gateway/AccountGatewayHttp";
import { navigate } from "@/lib/actions";

import Button from "@/components/basic/button";
import Input from "@/components/basic/input";
import Label from "@/components/basic/label";
import Loading from "@/components/basic/loading";

const schema = z.object({
    name: z.string().min(3, "Digite no mínimo 3 caracteres").max(50),
    email: z.string().email("Digite um e-mail válido"),
    password: z.string().min(4, "Digite no mínimo 4 caracteres").max(50),
    confirmPassword: z.string().min(4, "Digite no mínimo 4 caracteres").max(50)
});

export default function SignupForm() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            const signup = SignupDomain.create(data);
            const result = await AccountGatewayHttp.signup(signup.getData());
            if (result) {
                notify("Usuário cadastrado com sucesso");
                setLoading(false);
                navigate("/dashboard");
            }
        } catch (error: any) {
            setLoading(false);
            notify(error.message, { type: "error", position: "bottom-center" });
        }
    };

    return (
        <div className='w-[300px] sm:w-[300px] h-full'>
            <div className='flex flex-col sm:w-[280px]'>
                <Label className='text-3xl font-["Poppins"] mb-8'>Cadastre-se</Label>
                <Label className='text-lg font-["Poppins"] mb-8 text-[#313957]'>Preencha os campos para concluir seu cadastro</Label>
            </div>

            <Label className='text-sm font-medium'>Nome</Label>
            <Input type='text' className='mt-1' placeholder='Informe seu nome...' {...register("name")}>
                {errors.name && <>{errors.name.message}</>}
            </Input>

            <Label className='text-sm font-medium mt-4'>Email</Label>
            <Input type='email' className='mt-1' placeholder='seuemail@email.com' {...register("email")}>
                {errors.email && <>{errors.email.message}</>}
            </Input>

            <Label className='text-sm font-medium mt-4'>Senha</Label>
            <Input type='password' className='mt-1' placeholder='Digite sua senha...' {...register("password")}>
                {errors.password && <>{errors.password.message}</>}
            </Input>

            <Label className='text-sm font-medium mt-4'>Confirme sua senha</Label>
            <Input type='password' className='mt-1' placeholder='Confirme sua senha...' {...register("confirmPassword")}>
                {errors.confirmPassword && <>{errors.confirmPassword.message}</>}
            </Input>

            {loading ? (
                <Loading />
            ) : (
                <Button className='mt-6' onClick={handleSubmit(onSubmit)} disabled={loading}>
                    Cadastrar
                </Button>
            )}

            <Label className='text-sm font-medium mt-6 text-[#313957]'>
                Já possui uma conta?{" "}
                <a href='/login' className='text-[#3F82F8]'>
                    Faça login
                </a>
            </Label>
        </div>
    );
}
