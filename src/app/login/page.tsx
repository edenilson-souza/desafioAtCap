import LoginForm from "@/app/components/forms/login";
import { ContainerAuth } from "@/app/components/shared/container";

export default function Login() {
    return (
        <ContainerAuth>
            <LoginForm />
        </ContainerAuth>
    );
}
