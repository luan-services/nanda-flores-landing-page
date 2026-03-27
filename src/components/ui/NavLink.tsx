import React from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
    className?: string;
    variant?: 'default'| 'primary';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    pill?: 'true' | 'false';
}

const sizeVariants = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
};

const colorVariants = {
    default: "text-muted-fg hover:text-default-fg hover:bg-primary",
    primary: "text-muted-fg hover:text-primary-fg hover:bg-primary",
};

export const NavLink = ({ children, href, className = "", variant = "default", size = "md", pill = "false", ...props }: NavLinkProps) => {
    const colors = colorVariants[variant];
    const sizing = sizeVariants[size];
    const rounding = pill === "true" ? "rounded-full" : "rounded-md"

    return (
        <a 
            href={href}
            className={`font-medium px-3 py-1 transition-colors duration-200 bg-transparent border-none p-0 inline-flex focus:outline-none cursor-pointer ${rounding} ${colors} ${sizing} ${className}`}
            {...props}
        >
            {children}
        </a>
    );
};