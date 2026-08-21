import React, { useState } from "react";
import Slider from "react-slick";

const AnySlider = Slider as any;

import { demoEventsData } from "../../assets/images";
import { RegistrationModal } from "../RegistrationModal";
import styles from "./EventBanner.module.css";

const slides = demoEventsData.map((event) => ({
  title: event.name,
  buttonText: "Register",
}));

export const EventBanner = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dotsClass: styles.customDots,
  };

  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <AnySlider {...settings}>
          {slides.map((slide) => (
            <div key={slide.title} className={styles.slide}>
              <div className={styles.slideContent}>
                <p className={styles.slideTitle}>{slide.title}</p>
                <button
                  type="button"
                  onClick={() => setIsModalActive(true)}
                  className={styles.slideButton}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </AnySlider>
      </div>
      <RegistrationModal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
      />
    </section>
  ); {/*Campus Developer Club (Peaceland University)*/}
};
