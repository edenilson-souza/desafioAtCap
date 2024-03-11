export default interface ProductsGateway {
    getProducts(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    createProduct(product: Product): Promise<void>;
    updateProduct(id: number, product: Product): Promise<void>;
    deleteProduct(id: number): Promise<void>;
}

export type Product = {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    locationId: number;
    familyId: number;
};
