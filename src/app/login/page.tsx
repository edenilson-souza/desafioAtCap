import { ContainerAuth } from "@/components/feature/container_auth";
import LoginForm from "@/components/forms/login";

export default function Login() {
    return (
        <ContainerAuth>
            <LoginForm />
        </ContainerAuth>
    );
}
