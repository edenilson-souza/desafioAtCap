// hooks/useAuthentication.js
import { useState, useEffect } from "react";
import Router from "next/router";
import { navigate } from "@/lib/actions";
import { notify } from "@/lib/utils";

const useAuthentication = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        // Verifique se o usuário está autenticado ao carregar a página
        const checkAuthentication = () => {
            const token = localStorage.getItem("token");
            if (token) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
                notify("Você precisa estar autenticado para acessar esta página", { type: "error", position: "bottom-center" });
                navigate("/login");
            }
        };

        checkAuthentication();

        window.addEventListener("load", checkAuthentication);
        const interval = setInterval(checkAuthentication, 2000);

        return () => {
            window.removeEventListener("load", checkAuthentication);
            clearInterval(interval);
        };
    }, []);

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

    return { authenticated, login, logout };
};

export default useAuthentication;
