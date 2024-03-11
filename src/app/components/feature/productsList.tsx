import { base_url_api, notify } from "@/lib/utils";
import { useEffect, useState } from "react";
import DataTable from "@/app/components/basic/dataTable";
import { Dialog, DialogTrigger, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/app/components/basic/dialog";
import { Product } from "@/infra/gateway/ProductsGateway";
import Button from "@/app/components/basic/button";
import ProductsGatewayHttp from "@/infra/gateway/ProductsGatewayHttp";
import { navigate } from "@/lib/actions";

export default function ProductsList({ setTotalCount, lastUpdate }: { setTotalCount: (total: number) => void; lastUpdate: (date: Date) => void }) {
    const [products, setProducts] = useState<Product[]>([]);

    const handleEdit = (id: string) => {
        navigate(`/dashboard/cadastro/${id}`);
    };

    const columns = {
        name: "Descrição",
        familyId: "Categoria",
        quantity: "Quantidade",
        locationId: "Cód. Produto",
        cost: "Preço",
        opcoes: (row: any) => <Opcoes id={row.id} onEdit={(id: string) => handleEdit(id)} onDelete={() => fetchProducts()} />
    };

    const fetchProducts = async () => {
        const data = await ProductsGatewayHttp.getProducts();
        setTotalCount(data.length);
        setProducts(data);
        lastUpdate(new Date());
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <DataTable data={products} columns={columns}></DataTable>;
        </div>
    );
}

function Opcoes({ id, onEdit, onDelete }: { id: string; onEdit: (id: string) => void; onDelete: () => void }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = async () => {
        try {
            await ProductsGatewayHttp.deleteProduct(Number(id));
            onDelete();
            notify("Deletado com sucesso");
            setShowConfirm(false);
        } catch (error: any) {
            notify(error.message, { type: "error" });
        }
    };

    return (
        <div className='flex justify-center items-center '>
            <Button
                className='bg-[#492de7] hover:bg-blue-950 text-white font-bold  rounded-2xl mx-2 flex flex-row items-center h-8 w-20'
                onClick={() => onEdit(id)}
            >
                Editar
            </Button>
            <Button
                className='bg-red-500 hover:bg-red-700 text-white font-bold  rounded-2xl mx-2 flex flex-row items-center h-8 w-20'
                onClick={() => setShowConfirm(true)}
            >
                Excluir
            </Button>
            <Dialog open={showConfirm} onOpenChange={() => setShowConfirm(false)}>
                <DialogTrigger />
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tem certeza que deseja excluir?</DialogTitle>
                        <DialogClose />
                    </DialogHeader>
                    <DialogFooter>
                        <div className=' flex w-full justify-between items-center '>
                            <Button className={"bg-[#492de7] hover:bg-blue-950 text-white font-bold  rounded w-48 "} onClick={() => setShowConfirm(false)}>
                                Não
                            </Button>
                            <Button className={"bg-red-500 hover:bg-red-700 text-white font-bold  rounded w-48 "} onClick={() => handleDelete()}>
                                Sim
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
