import Observable from "../../test/Observable";

export default class SignupDomain {
    name = "";
    email = "";
    password = "";
    confirmPassword = "";

    private constructor(name: string, email: string, password: string, confirmPassword: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    static create(data: any) {
        if (data.password !== data.confirmPassword) {
            throw new Error("As senhas não coincidem");
        }
        return new SignupDomain(data.name, data.email, data.password, data.confirmPassword);
    }

    getData() {
        return {
            name: this.name,
            email: this.email,
            password: this.password
        };
    }
}
