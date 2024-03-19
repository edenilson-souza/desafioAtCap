import { z } from "zod";

export const product_schema = z.object({
    dsProduto: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    dsCategoria: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    cdProduto: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    vlProduto: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    qtdProduto: z.string().min(1, "Digite no mínimo 1 caracteres").max(100),
    dtCadastro: z.string().min(1, "Digite no mínimo 1 caracteres").max(100).optional()
});

export type Product = {
    id: number;
    dsProduto: string;
    dsCategoria: string;
    cdProduto: string;
    vlProduto: number;
    qtdProduto: number;
    dtCadastro: string;
};

const product_entity = z.object({
    id: z.number().optional(),
    dsProduto: z.string(),
    dsCategoria: z.string(),
    cdProduto: z.string(),
    vlProduto: z.number(),
    qtdProduto: z.number(),
    dtCadastro: z.string().optional()
});

export default class ProductEntity {
    id?: number;
    dsProduto: string;
    dsCategoria: string;
    cdProduto: string;
    vlProduto: number;
    qtdProduto: number;
    dtCadastro: string;

    private constructor(data: any) {
        const { id, dsProduto, dsCategoria, dtCadastro } = data;

        const cdProduto = data.cdProduto.toString().toUpperCase().replace(/\s/g, "");
        const vlProduto = data.vlProduto.toString().replace(/\D/g, "");
        const qtdProduto = data.qtdProduto.toString().replace(/\D/g, "");

        this.id = id;
        this.dsProduto = dsProduto;
        this.dsCategoria = dsCategoria;
        this.cdProduto = cdProduto;
        this.vlProduto = Number(vlProduto);
        this.qtdProduto = Number(qtdProduto);
        this.dtCadastro = dtCadastro;

        product_entity.parse(this.getObj());
    }

    getObj() {
        return {
            id: this.id,
            dsProduto: this.dsProduto,
            dsCategoria: this.dsCategoria,
            cdProduto: this.cdProduto,
            vlProduto: this.vlProduto,
            qtdProduto: this.qtdProduto,
            dtCadastro: this.dtCadastro
        };
    }

    static create(data: any) {
        const newObj: Product = {
            ...data,
            dtCadastro: new Date().toISOString()
        };

        return new ProductEntity(newObj);
    }

    static update(data: Product) {
        const updateObj = {
            ...data
        };

        return new ProductEntity(updateObj);
    }

    static restore(data: Product) {
        return new ProductEntity(data);
    }
}
