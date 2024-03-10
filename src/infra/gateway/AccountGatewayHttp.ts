/* eslint-disable import/no-anonymous-default-export */
"use client";
import { base_url_auth } from "@/lib/utils";
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

function handleErrors(error: any): never {
    if (error.response) {
        MessageError(error, 401, "Incorrect email or password", "Email e/ou senha incorretos");
    }
    throw new Error("Algo deu errado, tente novamente mais tarde");
}

function MessageError(error: any, status: number, message: string, newMessage?: string) {
    if (error.response.status === status) {
        if (error.response.data.message === message) {
            throw new Error(newMessage ?? message);
        }
    }
}

export default new AccountGatewayHttp();
