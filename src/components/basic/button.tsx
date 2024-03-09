import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
    const baseStyled = `flex h-10 w-full rounded-xl items-center justify-center mb-2
            bg-[#89131d]
            text-white text-sm`;
    return (
        <button className={cn(baseStyled, className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;
