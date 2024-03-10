import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const notify = (message: string, options?: any) => toast(message, options ?? { type: "success", position: "bottom-center" });

export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token;
};

export const base_url_api = "http://localhost:3000";
export const base_url_auth = "http://localhost:8000";
