import { FC, HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: 's' | 'm' | 'l',
    color? : "primary" | "secondary" | "ghost"
}

export interface ButtonVariantProps {
    primary: FC<ButtonProps>,
    secondary: FC<ButtonProps>,
    ghost: FC<ButtonProps>
}
  