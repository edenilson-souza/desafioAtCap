export default interface AccountGateway {
    getProducts(): Promise<Product[]>;
}

export type Product = {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    locationId: number;
    familyId: number;
};
