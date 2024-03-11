/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { notify } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { navigateToDashboard } from "@/lib/actions";
import Button from "@/app/components/basic/button";
import Input from "@/app/components/basic/input";
import Label from "@/app/components/basic/label";
import Loading from "@/app/components/basic/loading";
import ProductsGatewayHttp from "@/infra/gateway/ProductsGatewayHttp";

const schema = z.object({
    name: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    cost: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    quantity: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    locationId: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    familyId: z.string().min(1, "Digite no mínimo 1 caracteres").max(100)
});

export default function ProductsEdit({ id }: { id: number }) {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    });

    const getProduct = async () => {
        try {
            setLoading(true);
            const products = await ProductsGatewayHttp.getProduct(id);
            setValue("name", products.name.toString());
            setValue("cost", products.cost.toString());
            setValue("quantity", products.quantity.toString());
            setValue("locationId", products.locationId.toString());
            setValue("familyId", products.familyId.toString());
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            notify(error.message, { type: "error", position: "bottom-center" });
        }
    };

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            await ProductsGatewayHttp.updateProduct(id, data);
            notify("Produto editado com sucesso", { type: "success", position: "bottom-center" });
            setLoading(false);
            navigateToDashboard();
        } catch (error: any) {
            setLoading(false);
            notify(error.message, { type: "error", position: "bottom-center" });
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div>
            <div className='w-[300px] sm:w-[70%] h-full bg-white rounded-xl p-4'>
                <div className='flex flex-col '>
                    <Label className='text-lg font-["Poppins"]  font-bold'>Informações sobre o produto</Label>
                    <Label className='text-sm font-["Poppins"] mb-8 text-[#90A3BF]'>
                        Favor modificar as informações relativas ao produto que deseja alterar.
                    </Label>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Label className='text-sm font-medium'>Descrição</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Descrição do produto'
                            {...register("name")}
                        >
                            {errors.name && <>{errors.name.message}</>}
                        </Input>

                        <Label className='text-sm font-medium mt-4'>Categoria</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Categoria do produto'
                            {...register("familyId")}
                        >
                            {errors.familyId && <>{errors.familyId.message}</>}
                        </Input>
                    </div>

                    <div>
                        <Label className='text-sm font-medium'>Código</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Código do produto'
                            {...register("locationId")}
                        >
                            {errors.locationId && <>{errors.locationId.message}</>}
                        </Input>

                        <Label className='text-sm font-medium mt-4'>Valor</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Valor do produto'
                            {...register("cost")}
                        >
                            {errors.cost && <>{errors.cost.message}</>}
                        </Input>
                    </div>

                    <div>
                        <Label className='text-sm font-medium'>Quantidade</Label>
                        <Input
                            type='text'
                            className='mt-1 placeholder-[#90A3BF] h-14 border-0 border-none'
                            placeholder='Quantidade do produto'
                            {...register("quantity")}
                        >
                            {errors.quantity && <>{errors.quantity.message}</>}
                        </Input>
                    </div>
                </div>
            </div>

            <div className='w-[300px] sm:w-[70%] h-24 bg-white rounded-xl  mt-10'>
                <div className='flex flex-row w-[100%] justify-between'>
                    <div className='flex flex-col w-full  justify-center mx-4 mt-4  '>
                        <Label className='text-lg font-["Poppins"]  font-bold'>Confirmação</Label>
                        <Label className='text-xs font-["Poppins"] mb-8 text-[#90A3BF]'>Confira os dados informados antes de editar o produto</Label>
                    </div>
                    <div className='flex h-[100%] mx-4'>
                        {loading ? (
                            <div className='ml-auto '>
                                <Loading />
                            </div>
                        ) : (
                            <div className='flex h-[100%] ml-auto mt-4 justify-center '>
                                <Button className='w-28 h-16' onClick={handleSubmit(onSubmit)} disabled={loading}>
                                    Editar
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
