/** @format */

import React, { useState } from "react";
import styles from "./banner.module.css";
import { CircleCloseIcon } from "../../assets/images";
interface Props {
  isActive: boolean;
  children?: React.ReactNode;
  text?: string | "";
  onBannerIsActive: (bannerState: boolean) => void;
}

const Banner: React.FC<Props> = ({ children, isActive, onBannerIsActive }) => {
  return (
    <div className="bg-orange">
      <div className=" relative">
        <div
          className={`${styles.container} py-2 container flex justify-center items-center gap-x-10 xmd:gap-x-0`}
        >
          <div>{children}</div>
          <button
            onClick={() => onBannerIsActive(false)}
            className={`${styles["close-btn"]} ml-3`}
          >
            <CircleCloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Banner };
