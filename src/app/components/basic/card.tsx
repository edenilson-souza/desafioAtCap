import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface CardProps {
    children: React.ReactNode;
    element?: ElementType;
    className?: string;
}

function Card({ children, element = "section", className }: CardProps) {
    const Component = element;
    const baseStyled = "max-w-[1440px] mx-auto px-5";
    return <Component className={cn(baseStyled, className)}>{children}</Component>;
}

export default Card;
