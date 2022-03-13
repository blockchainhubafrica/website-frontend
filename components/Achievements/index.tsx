import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import { achievementData, RightArrowIcon } from "../../assets/images";
import { Button } from "../Button";

import styles from "./styles.module.css";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles["arrow-button"]} !hidden lg:!flex `}
      onClick={onClick}
    >
      <RightArrowIcon style={{ transform: "rotate(180deg)" }} />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles["arrow-button"]} !hidden lg:!flex`}
      onClick={onClick}
    >
      <RightArrowIcon />
    </button>
  );
};

const Achievements = () => {
  const [sliderData] = useState(achievementData);

  return (
    <section className={`py-16 bg-blue-600 ${styles.contanier}`}>
      <div className={`container ${styles["sub-container"]}`}>
        <div className={`${styles.display}`}>
          <div className={`${styles["current-display"]}`}>
            <Slider
              dots={true}
              infinite={true}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3500}
              cssEase={"linear"}
              pauseOnHover={false}
              dotsClass={"achievements-button-container"}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            >
              {sliderData.map((item, index) => (
                <div
                  className={`!grid !grid-cols-1 lg:!grid-cols-2 !justify-items-end ml-1 lg:px-14 `}
                >
                  <div key={item.name + index}>
                    <h1 className="mb-6">Achievements</h1>
                    <h2>{item.name}</h2>
                    <p className="my-8">{item.description}</p>
                    <Link href={item.link}>
                      <Button
                        buttonType="tertiary"
                        className={styles["action-button"]}
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                  <div className={`hidden lg:block`}>
                    <Image src={item.image} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Achievements };
