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
  href?: string;
  [key: string]: any;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  type,
  text,
  buttonType,
  href,
  ...rest
}) => {
  let containerClass = styles.container;
  if (className) containerClass += ` ${className}`;
  containerClass += ` py-3 px-6 ${styles[buttonType]}`;

  const body = (
    <>
      <span className="mr-3">{text || children}</span>
      <span>
        <TopRightArrowIcon />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={containerClass} onClick={onClick} {...rest}>
        {body}
      </a>
    );
  }

  return (
    <button type={type} className={containerClass} onClick={onClick} {...rest}>
      {body}
    </button>
  );
};

export { Button };
