'use client';
import clsx from "clsx";
import React from 'react'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

export default function Button({type, fullWidth, children, onClick, secondary, danger, disabled} : ButtonProps ) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(`
          flex
          justify-center
          rounded-md
          px-4
          py-2
          text-normal
          font-semibold
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-2
          `,
                disabled && 'opacity-50 cursor-not-allowed',
                fullWidth && 'w-full',
                secondary ? 'text-gray-900' : 'text-white',
                danger&& 'bg-red-500 hover:bg-red-600 focus-visible:ring-red-500',
                !secondary && !danger && 'bg-green-500 hover:bg-green-600 focus-visible:ring-green-500'
            )}
        >
            {
                disabled ? 'Loading...' : children
            }
        </button>
    )
}
