import React from "react";
import { CircleArrowIcon, CircleTextIcon } from "../../assets/images";

import styles from "./circle-banner.module.css";

const CircleBanner: React.FC = () => {
  return (
    <div className={`${styles.container}`} >
      <CircleTextIcon />
      <CircleArrowIcon />
    </div>
  );
};

export { CircleBanner };
