import type { ButtonHTMLAttributes, JSX, ReactNode } from "react";
import Style from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children? : ReactNode
}

const Button = ({
  label = "",
  className = "",
  children = <></>,
  ...rest
}: ButtonProps): JSX.Element => {
  return <button className={`${Style.commonButton} ${className}`} {...rest}> {label && label} {children} </button>;
};

export default Button;
