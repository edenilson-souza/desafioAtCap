import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface ContainerProps {
    children: React.ReactNode;
    element?: ElementType;
    className?: string;
}

function Container({ children, element = "section", className }: ContainerProps) {
    const Component = element;
    const baseStyled = `w-[100wh] h-[100vh]`;
    return <Component className={cn(baseStyled, className)}>{children}</Component>;
}

export default Container;
