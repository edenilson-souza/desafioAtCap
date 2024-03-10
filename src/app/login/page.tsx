import LoginForm from "@/components/forms/login";
import { ContainerAuth } from "@/components/shared/container";

export default function Login() {
    return (
        <ContainerAuth>
            <LoginForm />
        </ContainerAuth>
    );
}
