import { useState, useEffect } from "react";
import { navigate, navigateToLogin } from "@/lib/actions";
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
            const check = checkURL(url);
            if (!check) {
                notify("Você precisa estar autenticado para acessar esta página", { type: "error", position: "bottom-center" });
                navigateToLogin();
            }
            return false;
        }
    };

    const redirectTo = (path: string) => {
        navigate(path);
    };

    const login = (token: string, path?: string) => {
        localStorage.setItem("token", token);
        setAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuthenticated(false);
    };

    return { authenticated, checkAuthentication, redirectTo, login, logout, token };
};

function checkURL(url: string) {
    return public_urls.includes(url);
}

const public_urls = ["/", "/login", "/signup"];

export default useAuthentication;
