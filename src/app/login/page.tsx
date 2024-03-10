import LoginForm from "@/components/forms/login";
import { ContainerAuth } from "@/components/shared/Container";

export default function Login() {
    return (
        <ContainerAuth>
            <LoginForm />
        </ContainerAuth>
    );
}
