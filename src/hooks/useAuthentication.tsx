import { useState, useEffect } from "react";
import { navigate } from "@/lib/actions";
import { notify } from "@/lib/utils";

const useAuthentication = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {
        checkAuthentication();

        window.addEventListener("load", checkAuthentication);
        const interval = setInterval(checkAuthentication, 2000);

        return () => {
            window.removeEventListener("load", checkAuthentication);
            clearInterval(interval);
        };
    }, []);

    const checkAuthentication = (): boolean => {
        const token_ = localStorage.getItem("token");
        if (token_ !== null) {
            setToken(token_);
        }
        if (token_ && token_.length > 0) {
            setAuthenticated(true);
            return true;
        } else {
            setAuthenticated(false);
            const url = window.location.pathname;
            if (
                url !== "/" &&
                url !== "/login" &&
                url !== "/register" &&
                url !== "/forgot-password" &&
                url !== "/reset-password" &&
                url !== "/verify-email" &&
                url !== "/verify-email-sent"
            ) {
                notify("Você precisa estar autenticado para acessar esta página", { type: "error", position: "bottom-center" });
            }
            navigate("/login");
            return false;
        }
    };

    const redirectTo = (path: string) => {
        navigate(path);
    };

    const login = (token: string, path?: string) => {
        localStorage.setItem("token", token);
        setAuthenticated(true);
        navigate(path ?? "/dashboard");
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuthenticated(false);
        navigate("/login");
    };

    return { authenticated, checkAuthentication, redirectTo, login, logout, token };
};

export default useAuthentication;
