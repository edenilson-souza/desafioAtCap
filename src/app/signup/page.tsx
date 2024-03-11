import SignupForm from "@/app/components/forms/signup";
import { ContainerAuth } from "@/app/components/shared/container";

export default function Login() {
    return (
        <ContainerAuth>
            <SignupForm />
        </ContainerAuth>
    );
}
