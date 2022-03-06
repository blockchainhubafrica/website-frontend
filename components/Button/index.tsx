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
  if (containerClass)
    containerClass += ` ${className} flex items-center py-3 px-6`;
  containerClass += ` ${styles[buttonType]}`;
  console.log(containerClass);

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
