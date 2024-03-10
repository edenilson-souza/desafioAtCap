export default class LoginDomain {
    email = "";
    password = "";

    private constructor(email: string, password: string) {
        this.email = email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ? email : "";
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
