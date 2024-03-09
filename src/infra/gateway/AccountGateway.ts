export default interface AccountGateway {
    signup(input: Input): Promise<Output>;
}

export type Input = {
    name: string;
    email: string;
    password: string;
};

export type Output = {
    accountId: string;
};
