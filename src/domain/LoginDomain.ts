export default class LoginDomain {
    email = "";
    password = "";

    private constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    static create(data: any) {
        return new LoginDomain(data.email, data.password);
    }

    getData() {
        return {
            email: this.email,
            password: this.password
        };
    }
}
