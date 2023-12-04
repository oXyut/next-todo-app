import clsx from 'clsx';
import React from 'react';

const dictButtonVariant = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    danger: "bg-red-500 hover:bg-red-700",
};

type ButtonProps = {
    onClick: () => void;
    variant?: keyof typeof dictButtonVariant;
    className?: string;
    children?: React.ReactNode;
};


export const Button = ({onClick, variant = "primary", className, children}: ButtonProps) => {
    return (
        <button onClick={onClick} className={clsx("text-white font-bold py-2 px-4 rounded", dictButtonVariant[variant], className )}>
            {children}
        </button>
    );
};