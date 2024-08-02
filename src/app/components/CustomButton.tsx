'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface CustomButtonProps {
  text: string;
  dataHover?: string;
  buttonStyle?: string; // Use this to pass 'btn' or 'btn-secondary'
  newTab?: boolean;
  url?: string;
  image?: string;
  href?: string;
  className?: string; // Additional class names
  children?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  dataHover,
  buttonStyle = 'btn', // Default to 'btn' if no style is provided
  newTab,
  url,
  image,
  className,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const buttonContent = (
    <>
      {image && <Image src={image} alt="icon" width={24} height={24} className="mr-2" />}
      {children}
      {text}
    </>
  );

  const buttonClasses = `${buttonStyle} ${className || ''}`;

  return (
    <>
      {url ? (
        <Link href={url} passHref>
          <a target={newTab ? '_blank' : '_self'}>
            <button
              className={buttonClasses}
              data-hover={dataHover}
              onClick={() => setIsOpen(false)}
            >
              {buttonContent}
            </button>
          </a>
        </Link>
      ) : (
        <button
          className={buttonClasses}
          data-hover={dataHover}
          onClick={() => setIsOpen(false)}
        >
          {buttonContent}
        </button>
      )}
    </>
  );
};

export default CustomButton;
