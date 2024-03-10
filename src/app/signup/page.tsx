import { ContainerAuth } from "@/components/feature/container_auth";
import SignupForm from "@/components/forms/signup";

export default function Login() {
    return (
        <ContainerAuth>
            <SignupForm />
        </ContainerAuth>
    );
}
