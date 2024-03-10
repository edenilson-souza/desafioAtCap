"use strict";
import AxiosAdapter from "../http/AxiosAdapter";
import HttpClient from "../http/HttpClient";
import AccountGateway, { InputLogin, InputSignup, Output } from "./AccountGateway";

export class AccountGatewayHttp implements AccountGateway {
    httpClient: HttpClient = new AxiosAdapter();

    baseUrl = "http://localhost:8000";

    constructor() {}

    async signup(input: InputSignup): Promise<Output> {
        try {
            const output = await this.httpClient.post(this.baseUrl, input);
            return output;
        } catch (error: any) {
            throw new Error("Erro ao cadastrar usuário");
        }
    }

    async login(input: InputLogin): Promise<Output> {
        try {
            const output = await this.httpClient.post(this.baseUrl, input);
            return output;
        } catch (error) {
            throw new Error("Erro ao logar usuário");
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AccountGatewayHttp();
