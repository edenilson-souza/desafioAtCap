import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface ContainerProps {
    children: React.ReactNode;
    element?: ElementType;
    className?: string;
}

function Label({ children, element = "div", className }: ContainerProps) {
    const Component = element;
    const baseStyled = `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`;
    return <Component className={cn(baseStyled, className)}>{children}</Component>;
}

export default Label;
