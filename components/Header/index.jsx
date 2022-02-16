import React from "react";
import styles from "./header.module.css";


function Header({}) {
  return (
    <header
      className={`container ${styles.container} flex justify-items-stretch items-center py-4 `}
    >
      Blockchain hub Africa
    </header>
  );
}

export { Header };
