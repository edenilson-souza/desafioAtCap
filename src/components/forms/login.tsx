"use client";
import * as z from "zod";
import { navigate } from "@/lib/actions";
import Button from "../basic/button";
import Divider from "../basic/divider";
import Input from "../basic/input";
import Label from "../basic/label";
import { useState } from "react";
import AccountGatewayHttp from "@/infra/gateway/AccountGatewayHttp";
import LoginDomain from "@/domain/LoginDomain";
import { notify } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Loading from "../basic/loading";

const schema = z.object({
    email: z.string().email("Digite um e-mail válido"),
    password: z.string().min(8, "Digite no mínimo 8 caracteres").max(50)
});

export default function LoginForm() {
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
            const login = LoginDomain.create(data);
            const result = await AccountGatewayHttp.login(login.getData());
            if (result) {
                navigate("/");
            }
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            notify(error.message, { type: "error", position: "bottom-center" });
        }
    };

    return (
        <div className='w-[300px] h-full max-h-[60%] sm:w-[300px]'>
            <div className='flex flex-col sm:w-[280px]'>
                <Label className='text-3xl font-["Poppins"] mb-8'>Olá! 👋</Label>
                <Label className='text-xl font-["Poppins"] mb-8 text-[#313957]'>Faça login para começar a gerenciar seus produtos.</Label>
            </div>

            <Label className='text-sm font-medium mt-4'>Email</Label>
            <Input type='email' className='mt-1' placeholder='seuemail@email.com' {...register("email")}>
                {errors.email && <>{errors.email.message}</>}
            </Input>

            <Label className='text-sm font-medium mt-4'>Senha</Label>
            <Input type='password' className='mt-1' placeholder='Digite sua senha...' {...register("password")}>
                {errors.password && <>{errors.password.message}</>}
            </Input>

            {loading ? (
                <Loading />
            ) : (
                <Button className='mt-6' onClick={handleSubmit(onSubmit)} disabled={loading}>
                    Login
                </Button>
            )}

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
