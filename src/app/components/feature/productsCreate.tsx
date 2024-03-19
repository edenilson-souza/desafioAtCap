"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { notify } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { navigateToDashboard } from "@/lib/actions";
import Button from "@/app/components/basic/button";
import Input from "@/app/components/basic/input";
import Label from "@/app/components/basic/label";
import Loading from "@/app/components/basic/loading";
import ProductsGatewayHttp from "@/infra/gateway/ProductsGatewayHttp";
import { product_schema } from "@/domain/ProductEntity";

export default function ProductsCreate() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(product_schema)
    });

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            await ProductsGatewayHttp.createProduct(data);
            notify("Produto cadastrado com sucesso", { type: "success", position: "bottom-center" });
            setLoading(false);
            navigateToDashboard();
        } catch (error: any) {
            setLoading(false);
            notify(error.message, { type: "error", position: "bottom-center" });
        }
    };

    return (
        <div>
            <div className='w-[300px] sm:w-[70%] h-full bg-white rounded-xl p-4'>
                <div className='flex flex-col '>
                    <Label className='text-lg font-["Poppins"]  font-bold'>Informações sobre o produto</Label>
                    <Label className='text-sm font-["Poppins"] mb-8 text-[#90A3BF]'>
                        Favor inserir as informações relativas ao produto que deseja cadastrar.
                    </Label>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Label className='text-sm font-medium'>Descrição</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Descrição do produto'
                            {...register("dsProduto")}
                        >
                            {errors.dsProduto && <>{errors.dsProduto.message}</>}
                        </Input>

                        <Label className='text-sm font-medium mt-4'>Categoria</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Categoria do produto'
                            {...register("dsCategoria")}
                        >
                            {errors.dsCategoria && <>{errors.dsCategoria.message}</>}
                        </Input>
                    </div>

                    <div>
                        <Label className='text-sm font-medium'>Código</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Código do produto'
                            {...register("cdProduto")}
                        >
                            {errors.cdProduto && <>{errors.cdProduto.message}</>}
                        </Input>

                        <Label className='text-sm font-medium mt-4'>Valor</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Valor do produto'
                            {...register("vlProduto")}
                        >
                            {errors.vlProduto && <>{errors.vlProduto.message}</>}
                        </Input>
                    </div>

                    <div>
                        <Label className='text-sm font-medium'>Quantidade</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Quantidade'
                            {...register("qtdProduto")}
                        >
                            {errors.qtdProduto && <>{errors.qtdProduto.message}</>}
                        </Input>
                    </div>
                </div>
            </div>

            <div className='w-[300px] sm:w-[70%] h-24 bg-white rounded-xl  mt-10'>
                <div className='flex flex-row w-[100%] justify-between'>
                    <div className='flex flex-col w-full  justify-center mx-4 mt-4  '>
                        <Label className='text-lg font-["Poppins"]  font-bold'>Confirmação</Label>
                        <Label className='text-xs font-["Poppins"] mb-8 text-[#90A3BF]'>Confira os dados informados antes de cadastrar o produto</Label>
                    </div>
                    <div className='flex h-[100%] mx-4'>
                        {loading ? (
                            <div className='ml-auto '>
                                <Loading />
                            </div>
                        ) : (
                            <div className='flex h-[100%] ml-auto mt-4 justify-center '>
                                <Button className='w-28 h-16' onClick={handleSubmit(onSubmit)} disabled={loading}>
                                    Cadastrar
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
