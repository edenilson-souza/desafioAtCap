/* eslint-disable import/no-anonymous-default-export */
"use client";
import { base_url_auth, handleErrors } from "@/lib/utils";
import AxiosAdapter from "../http/AxiosAdapter";
import HttpClient from "../http/HttpClient";
import AccountGateway, { InputLogin, InputSignup, Output } from "./AccountGateway";

export class AccountGatewayHttp implements AccountGateway {
    httpClient: HttpClient = new AxiosAdapter();

    baseUrl = base_url_auth;

    constructor() {}

    async signup(input: InputSignup): Promise<Output> {
        try {
            const output = await this.httpClient.post(`${this.baseUrl}/auth/register`, input);
            localStorage.setItem("token", output.access_token);
            return output;
        } catch (error: any) {
            handleErrors(error);
        }
    }

    async login(input: InputLogin): Promise<Output> {
        try {
            const output = await this.httpClient.post(`${this.baseUrl}/auth/login`, input);
            localStorage.setItem("token", output.access_token);
            return output;
        } catch (error: any) {
            handleErrors(error);
        }
    }
}



export default new AccountGatewayHttp();
