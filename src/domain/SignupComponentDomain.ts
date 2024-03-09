import Observable from "../../test/Observable";

export default class SignupComponentDomain extends Observable {
    name = "";
    email = "";
    password = "";
    error = "";
    step = 1;

    constructor() {
        super();
    }

    next() {
        this.error = "";
        if (this.step === 1 && !this.name) {
            this.error = "Invalid name";
            return;
        }
        if (this.step === 2 && !this.email) {
            this.error = "Invalid email";
            return;
        }
        if (this.step === 2 && !this.password) {
            this.error = "Invalid cpf";
            return;
        }
        this.step++;
    }

    previous() {
        this.step--;
    }

    isNextButtonVisible() {
        return this.step < 3;
    }

    isPreviousButtonVisible() {
        return this.step > 1 && this.step < 4;
    }

    isSubmitButtonVisible() {
        return this.step === 3;
    }

    submit() {
        this.next();
        const data = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        this.notify({ name: "submitted", data });
    }

    setData() {
        this.name = "John Doe";
        this.email = `john.doe${Math.random()}@gmail.com`;
        this.password = "97456321558";
    }
}
