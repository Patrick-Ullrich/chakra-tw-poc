import React from "react";

export type ButtonProps = BaseButtonProps & {
  variant: "primary" | "secondary";
};

export const Button = ({ variant, ...props }: ButtonProps) => {
  switch (variant) {
    case "primary":
      return <BaseButton {...props} className="bg-primary-600" />;
    case "secondary":
      return <BaseButton {...props} className="bg-primary-100" />;
    default:
      return <BaseButton {...props} />;
  }
};

type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
const BaseButton = ({ children, onClick, className }: BaseButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
