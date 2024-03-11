/* eslint-disable import/no-anonymous-default-export */
"use client";
import { base_url_api, handleErrors } from "@/lib/utils";
import AxiosAdapter from "../http/AxiosAdapter";
import HttpClient from "../http/HttpClient";
import ProductsGateway, { Product } from "./ProductsGateway";

export class ProductsGatewayHttp implements ProductsGateway {
    httpClient: HttpClient = new AxiosAdapter();

    baseUrl = base_url_api;

    constructor() {}

    async getProducts(): Promise<Product[]> {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`;
            const output = await this.httpClient.get(`${this.baseUrl}/products`, { header: { Authorization: token } });
            return output;
        } catch (error: any) {
            handleErrors(error);
        }
    }

    async createProduct(product: Product): Promise<void> {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`;
            const data = {
                name: product.name,
                cost: Number(product.cost),
                quantity: Number(product.quantity),
                locationId: Number(product.locationId),
                familyId: Number(product.familyId)
            };
            await this.httpClient.post(`${this.baseUrl}/products`, data, { header: { Authorization: token } });
        } catch (error: any) {
            handleErrors(error);
        }
    }

    async deleteProduct(id: number): Promise<void> {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`;
            await this.httpClient.delete(`${this.baseUrl}/products/${id}`, { header: { Authorization: token } });
        } catch (error: any) {
            handleErrors(error);
        }
    }
}

export default new ProductsGatewayHttp();
