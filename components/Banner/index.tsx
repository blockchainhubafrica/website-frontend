/** @format */

import React, { useState } from "react";
import styles from "./banner.module.css";
import Ticker from "react-ticker";
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
      {/* <div className="xmd:hidden relative">
        <Ticker offset={40} mode="chain">
          {({ index }) => (
            <div className={`${styles.container} py-4 text-sm`}>{children}</div>
          )}
        </Ticker>
        <button
          onClick={() => onBannerIsActive(false)}
          className={`${styles["close-btn"]} `}
        >
          <CircleCloseIcon />
        </button>
      </div> */}
      <div className="hidden xmd:block relative">
        <div
          className={`${styles.container} py-2 container flex justify-center items-center gap-x-10 xmd:gap-x-0`}
        >
          {children}
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
