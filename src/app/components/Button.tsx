import React, { FC, ReactNode } from 'react';
import { Button } from 'shadcn';

interface CustomButtonProps {
  children: ReactNode;
  dataHover: string;
}

const CustomButton: FC<CustomButtonProps> = ({ children, dataHover }) => (
  <Button
    className="inline-block align-middle relative rounded-full m-4 py-2.5 px-7 border-2 border-white overflow-hidden text-white text-sm no-underline font-bold bg-transparent transition-opacity duration-400"
    data-hover={dataHover}
  >
    <span className="transition-opacity duration-400 ease-in-out">{children}</span>
    <span
      className="absolute top-2.5 left-0 w-full text-center opacity-0 transition-opacity duration-400 ease-in-out"
      style={{ content: `'${dataHover}'` }}
    />
  </Button>
);

export default CustomButton;
