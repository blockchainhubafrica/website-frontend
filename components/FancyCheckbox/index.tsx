import React from "react";
import styles from "./fancy-checkbox.module.css";
export function FancyCheckbox({
  value,
  selectedValue,
  onSelect,
  className,
}: {
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  className?: string;
}) {
  const isSelected = value === selectedValue;

  let containerClass = `${styles["container"]} flex items-center`;
  if (isSelected) containerClass += ` ${styles["active"]}`;
  if (className) containerClass += ` ${className}`;

  return (
    <button
      type="button"
      autoFocus={false}
      className={containerClass}
      onClick={() => onSelect(value)}
    >
      <div className={`${styles['checkbox']}`}></div>
      <span className="ml-2 text-xl md:text-2xl">{value}</span>
    </button>
  );
}
