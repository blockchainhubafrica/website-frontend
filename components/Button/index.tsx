/** @format */

import React from "react";
import { TopRightArrowIcon } from "../../assets/images";
import styles from "./button.module.css";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string | "";
  type?: "button" | "submit" | "reset";
  text?: string | "";
  buttonType: string | "";
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  type,
  text,
  buttonType,
  ...rest
}) => {
  let containerClass = styles.container;
  if (className) containerClass += ` ${className}`;
  containerClass += ` py-3 px-6 ${styles[buttonType]}`;


  return (
    <button type={type} onClick={onClick} className={containerClass} {...rest}>
      <span className="mr-3">{text || children}</span>
      <span>
        <TopRightArrowIcon />
      </span>
    </button>
  );
};

export { Button };
