export default interface AccountGateway {
    signup(input: InputSignup): Promise<Output>;
    login(input: InputLogin): Promise<Output>;
}

export type InputSignup = {
    name: string;
    email: string;
    password: string;
};

export type InputLogin = {
    email: string;
    password: string;
};

export type Output = {
    access_token: string;
};
