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
}

export default new ProductsGatewayHttp();
