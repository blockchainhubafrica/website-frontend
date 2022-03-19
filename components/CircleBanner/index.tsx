import React from "react";
import { CircleArrowIcon, CircleTextIcon } from "../../assets/images";

import styles from "./circle-banner.module.css";

const CircleBanner: React.FC<{ isBlackVariant?: boolean }> = ({
  isBlackVariant,
}) => {
  return (
    <div className={`${styles.container}`}>
      <CircleTextIcon stroke={isBlackVariant ? "black" : ""} />
      <CircleArrowIcon />
    </div>
  );
};

export { CircleBanner };
