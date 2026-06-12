import React, { useState, SyntheticEvent } from "react";
import styles from "./input.module.css";
import { FormikProps } from "formik";

type InputType = {
  type?: string;
  onClick?: () => void;
  label?: string;
  className: string;
  id?: string;
  name: string;
  formik: FormikProps<any>;
  placeholder?: string | "";
  as?: "input" | "select";
  options?: { label: string; value: string }[];
  min?: number;
  max?: number;
  required?: boolean;
  step?: number;
};

function Input({
  type,
  onClick,
  label,
  className,
  id,
  name,
  formik,
  as = "input",
  options = [],
  required,
  ...rest
}: InputType) {
  const [isFocused, setIsFocused] = useState(false);
  const error = formik.touched[name] && formik.errors?.[name];
  let classes = `${styles.container} ${className} `;
  if (error) classes += styles["error"];
  let placeholder = rest.placeholder;
  if (formik) {
    Object.assign(rest, {
      onChange: formik?.handleChange,
      onBlur: (e: SyntheticEvent) => {
        setIsFocused(false);
        return formik?.handleBlur(e);
      },
      value: formik?.values[name],
    });
  }
  return (
    <div className={classes}>
      {label && (
        <label
          className={isFocused ? `${styles["active"]}` : ""}
          htmlFor={name}
        >
          {label}
          {required && <sup style={{ color: "red", marginLeft: 2 }}>*</sup>}
        </label>
      )}
      {as === "select" ? (
        <select
          id={id ?? name}
          name={name}
          onClick={onClick}
          onFocus={() => setIsFocused(true)}
          {...rest}
        >
          <option value="" disabled>
            {placeholder ?? "Select..."}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id ?? name}
          name={name}
          type={type}
          onClick={onClick}
          onFocus={() => setIsFocused(true)}
          {...rest}
          placeholder={placeholder}
        />
      )}
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { Input };
