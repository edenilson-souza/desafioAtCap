import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, children, ...props }, ref) => {
    return (
        <>
            <input
                type={type}
                className={cn(
                    `flex h-12 w-full rounded-xl border px-4 py-1 text-sm mb-2
                text-[#3f4d5a]
                border-[#d4d7e3]
                bg-[#f7fbff]
                placeholder:text-[#8897ad]
                focus-visible:outline-none
                focus-visible:ring-0 `,
                    className
                )}
                ref={ref}
                {...props}
            />
            <a className='text-xs'>{children}</a>
        </>
    );
});
Input.displayName = "Input";

export default Input;
