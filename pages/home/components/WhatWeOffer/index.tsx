import React, { useState } from "react";
import { motion } from "framer-motion";

import { Shapes1Src, Shapes2Src } from "../../../../assets/images";
import { Button, CloudinaryImage } from "../../../../components";
import styles from "./what-we-offer.module.css";

function WhatWeOffer() {
  const [activeCard, setactiveCard] = useState<number>(1);

  const cardClass = (currentCard: number) => {
    if (activeCard === currentCard)
      return `${styles["offer-card"]} ${styles["active"]} p-8 2xl:p-12 xlg:p-16`;

    return `${styles["offer-card"]} p-8 2xl:p-12 xlg:p-16`;
  };

  return (
    <div className={`${styles["container"]} py-28 bg-blue-800 relative`}>
      <div className={`${styles["glowing-ellipse"]}`}></div>
      <div className={`container`}>
        <h2 className="spaced-heading text-blue-300 mb-6">What we offer</h2>
        <h3 className="text-3xl md:text-5xl text-white font-coolvetica md:w-2/5 mb-10">
          World class Web3 Services from World class Web3 Talents.
        </h3>
        <div style={{ maxWidth: "160px" }}>
          <Button buttonType="tertiary" text="Hire Us" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div onMouseEnter={() => setactiveCard(1)} className={cardClass(1)}>
            <div className="flex gap-x-5 xmd:gap-x-10 items-center">
              <div className="">
                <h4 className="text-2xl xmd:text-3xl font-coolvetica mb-5">
                  Web 3 Product design UI/UX
                </h4>
                <p className="text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacus, odio non nunc eu. Adipiscing in neque mi nunc euismod
                  morbi interdum.
                </p>
              </div>
              <div className="hidden md:block">
                <CloudinaryImage src={Shapes1Src} width={160} height={138} />
              </div>
            </div>
          </div>
          <div onMouseEnter={() => setactiveCard(2)} className={cardClass(2)}>
            <div className="flex gap-x-5 xmd:gap-x-10 items-center">
              <div className="">
                <h4 className="text-2xl xmd:text-3xl font-coolvetica mb-5">
                  Blockchain Apps
                </h4>
                <p className="text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacus, odio non nunc eu. Adipiscing in neque mi nunc euismod
                  morbi interdum.
                </p>
              </div>
              <div className="hidden md:block">
                <CloudinaryImage src={Shapes2Src} width={161} height={161} />
              </div>
            </div>
          </div>
          <div onMouseEnter={() => setactiveCard(3)} className={cardClass(3)}>
            <div className="flex gap-x-5 xmd:gap-x-10 items-center">
              <div className="">
                <h4 className="text-2xl xmd:text-3xl font-coolvetica mb-5">
                  Dapp Frontend Dev.
                </h4>
                <p className="text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacus, odio non nunc eu. Adipiscing in neque mi nunc euismod
                  morbi interdum.
                </p>
              </div>
              <div className="hidden md:block">
                <CloudinaryImage src={Shapes2Src} width={161} height={161} />
              </div>
            </div>
          </div>
          <div onMouseEnter={() => setactiveCard(4)} className={cardClass(4)}>
            <div className="flex gap-x-5 xmd:gap-x-10 items-center">
              <div className="">
                <h4 className="text-2xl xmd:text-3xl font-coolvetica mb-5">
                  Smart Contract Dev.
                </h4>
                <p className="text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacus, odio non nunc eu. Adipiscing in neque mi nunc euismod
                  morbi interdum.
                </p>
              </div>
              <div className="hidden md:block">
                <CloudinaryImage src={Shapes1Src} width={160} height={138} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
