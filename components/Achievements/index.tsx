import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { achievementData, RightArrowIcon } from "../../assets/images";
import { Button } from "../Button";

import styles from "./styles.module.css";

const Achievements = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sliderData] = useState(achievementData);

  const slideLeft = () => {
    if (currentSlideIndex === 0) {
      return setCurrentSlideIndex(sliderData.length - 1);
    }

    return setCurrentSlideIndex(currentSlideIndex - 1);
  };

  const slideRight = () => {
    if (currentSlideIndex === sliderData.length - 1) {
      return setCurrentSlideIndex(0);
    }

    return setCurrentSlideIndex(currentSlideIndex + 1);
  };

  return (
    <section className={`py-16 bg-blue-600 ${styles.contanier}`}>
      <div className={`container ${styles["sub-container"]}`}>
        <div className={`flex items-center ${styles.display}`}>
          {sliderData.length > 0 ? (
            <div className="hidden md:block">
              <button
                className={`${styles["arrow-button"]}`}
                onClick={slideLeft}
              >
                <RightArrowIcon style={{ transform: "rotate(180deg)" }} />
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="md:mx-8 lg:mx-12 grid xl:grid-cols-2 gap-y-10 lg:gap-x-10">
            <div className={styles["current-display"]}>
              <h1 className="mb-6">Achievements</h1>
              <h2>{sliderData[currentSlideIndex].name}</h2>
              <p className="my-8">
                {sliderData[currentSlideIndex].description}
              </p>
              <Link href={sliderData[currentSlideIndex].link}>
                <Button buttonType="tertiary">Read More</Button>
              </Link>
            </div>
            <div className={`hidden xl:block ${styles["current-display"]}`}>
              <Image src={sliderData[currentSlideIndex].image} />
            </div>
          </div>
          {sliderData.length > 0 ? (
            <div className="hidden md:block">
              <button
                className={`${styles["arrow-button"]}`}
                onClick={slideRight}
              >
                <RightArrowIcon />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`${styles["buttons-container"]} mt-10`}>
          {sliderData.map((item, index) => (
            <button
              key={item.name + index}
              className={currentSlideIndex === index ? styles.active : ""}
              onClick={() => setCurrentSlideIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Achievements };
