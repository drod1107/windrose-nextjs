// src/@types/shadcn.d.ts or src/shadcn.d.ts
declare module 'shadcn' {
    import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
  
    interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      children: ReactNode;
      dataHover?: string;
    }
  
    export const Button: FC<ButtonProps>;
  }
  