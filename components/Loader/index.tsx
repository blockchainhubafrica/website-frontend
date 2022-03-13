import React, { useState } from "react";
import { SmallLogoIcon } from "../../assets/images";

import styles from "./styles.module.css";

const Loader = ({ pageLoader = true }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-blue-600 ${styles.container}`}
      style={!pageLoader ? { opacity: "0.85" } : {}}
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
