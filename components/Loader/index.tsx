import React from "react";
import { SmallLogoIcon } from "../../assets/images";

import styles from "./styles.module.css";

const Loader = () => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-blue-600 ${styles.container}`}
    >
      <div
        className={`relative flex justify-center items-center ${styles.circle}`}
      >
        <SmallLogoIcon />
      </div>
    </div>
  );
};

export { Loader };
