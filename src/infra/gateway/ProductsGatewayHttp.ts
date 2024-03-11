/* eslint-disable import/no-anonymous-default-export */
"use client";
import { base_url_api, handleErrors } from "@/lib/utils";
import AxiosAdapter from "../http/AxiosAdapter";
import HttpClient from "../http/HttpClient";
import ProductsGateway, { Product } from "./ProductsGateway";
import { navigate, navigateToLogin } from "@/lib/actions";

export class ProductsGatewayHttp implements ProductsGateway {
    httpClient: HttpClient = new AxiosAdapter();

    baseUrl = base_url_api;

    constructor() {}

    async getProducts(): Promise<Product[]> {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`;
            VerifyToken(token);
            const output = await this.httpClient.get(`${this.baseUrl}/products`, { header: { Authorization: token } });
            return output;
        } catch (error: any) {
            handleErrors(error);
        }
    }

    async getProduct(id: number): Promise<Product> {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`;
            VerifyToken(token);
            const output = await this.httpClient.get(`${this.baseUrl}/products/${id}`, { header: { Authorization: token } });
            return output;
        } catch (error: any) {
            if (error.response.status === 404) {
                navigate("/dashboard");
            }
            handleErrors(error);
        }
    }

    async createProduct(product: Product): Promise<void> {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`;
            VerifyToken(token);
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

    async updateProduct(id: number, product: Product): Promise<void> {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`;
            VerifyToken(token);
            const data = {
                name: product.name,
                cost: Number(product.cost),
                quantity: Number(product.quantity),
                locationId: Number(product.locationId),
                familyId: Number(product.familyId)
            };
            await this.httpClient.patch(`${this.baseUrl}/products/${id}`, data, { header: { Authorization: token } });
        } catch (error: any) {
            handleErrors(error);
        }
    }

    async deleteProduct(id: number): Promise<void> {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`;
            VerifyToken(token);
            await this.httpClient.delete(`${this.baseUrl}/products/${id}`, { header: { Authorization: token } });
        } catch (error: any) {
            handleErrors(error);
        }
    }
}

function VerifyToken(token: string) {
    if (!token) {
        navigateToLogin();
    }
}

export default new ProductsGatewayHttp();
