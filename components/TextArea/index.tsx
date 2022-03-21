import React, { useState, SyntheticEvent } from "react";
import styles from "./textarea.module.css";
import { FormikProps } from "formik";

type InputType = {
  onClick?: () => void;
  label?: string;
  className: string;
  id?: string;
  name: string;
  formik: FormikProps<any>;
  placeholder?: string | "";
  rows?: number;
  maxWords?: number;
};

const getWordsLength = (words: string) => words.match(/(\w+)/g)?.length || 0;


function TextArea({
  onClick,
  label,
  className,
  id,
  name,
  formik,
  rows = 6,
  maxWords = 300,
  ...rest
}: InputType) {
  // State management
  const [wordsCount, setWordsCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const error = formik.touched[name] && formik.errors?.[name];
  let classes = `${styles.container} ${className} `;
  let placeholder = rest.placeholder;

  // Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formik) formik?.handleChange(e);

    setWordsCount(getWordsLength(e.target.value));
  }

  if (error) classes += styles["error"];

  if (formik) {
    Object.assign(rest, {
      onChange: handleChange,
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
        </label>
      )}
      <span className={`${styles["remaining-words"]}`}>{Math.abs(wordsCount)} word{Math.abs(wordsCount) > 1 ? "s" : ""}</span>
      <textarea
        id={id ?? name}
        name={name}
        onClick={onClick}
        onFocus={() => setIsFocused(true)}
        {...rest}
        placeholder={placeholder}
        rows={rows}
      />
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { TextArea };
