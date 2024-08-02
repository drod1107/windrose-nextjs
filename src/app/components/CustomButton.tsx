'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface CustomButtonProps {
  text: string;
  dataHover?: string;
  buttonStyle?: string;
  newTab?: boolean;
  url?: string;
  image?: string;
  href?: string;
  className?: string;
  Calendar?: any;
  LinkedIn?: any;
  children?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  dataHover,
  buttonStyle,
  newTab,
  url,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const buttonContent = (
    <>
      {image && <Image src={image} alt="icon" width={24} height={24} className="mr-2" />}
      {text}
    </>
  );

  return (
    <>
      {url ? (
        <Link href={url} passHref>
          <a target={newTab ? '_blank' : '_self'}>
            <button
              className={`${buttonStyle} px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600`}
              data-hover={dataHover}
              onClick={() => setIsOpen(false)}
            >
              {buttonContent}
            </button>
          </a>
        </Link>
      ) : (
        <button
          className={`${buttonStyle} px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600`}
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
