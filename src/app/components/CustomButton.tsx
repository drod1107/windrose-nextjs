'use client';
import Link from 'next/link';
import Image from "next/image";

interface CustomButtonProps {
  text: string;
  dataHover?: string;
  buttonStyle?: string;
  newTab?: boolean;
  url?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  dataHover,
  buttonStyle = 'btn',
  newTab,
  url,
  image,
  className,
  children,
}) => {
  const buttonContent = (
    <>
      {image && <Image
        src={image}
        alt="icon"
        width={24}
        height={24}
        className="mr-2"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />}
      {children}
      <span>{text}</span>
    </>
  );

  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-md transition duration-300 ease-in-out";
  const buttonClasses = `${baseClasses} ${buttonStyle} ${className || ''}`;

  const commonProps = {
    className: buttonClasses,
    'data-hover': dataHover,
  };

  if (url) {
    return (
      <Link 
        href={url}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        {...commonProps}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button {...commonProps}>
      {buttonContent}
    </button>
  );
};

export default CustomButton;