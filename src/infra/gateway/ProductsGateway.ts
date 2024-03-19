import { Product } from "@/domain/ProductEntity";

export default interface ProductsGateway {
    getProducts(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    createProduct(product: Product): Promise<void>;
    updateProduct(id: number, product: Product): Promise<void>;
    deleteProduct(id: number): Promise<void>;
}
