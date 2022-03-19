import Image from "next/image";
import React, { useRef, useState } from "react";
import { ArrowTilt, RightArrowIcon } from "../../assets/images";

import styles from "./styles.module.css";

export interface EventList {
  name: string;
  link: string;
  image: StaticImageData;
  year: string;
}

const Events: React.FC<{ eventList: EventList[] }> = ({ eventList }) => {
  const [currentSlide, setCurrentSlide] = useState<number[]>([0, 4]);
  const containerRef = useRef<HTMLElement | null>(null);

  const goRight = () => {
    setCurrentSlide([currentSlide[0] + 4, currentSlide[1] + 4]);
    containerRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goLeft = () => {
    setCurrentSlide([currentSlide[0] - 4, currentSlide[1] - 4]);
    containerRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className={`${styles.container}`} ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12">
        {eventList
          .slice(currentSlide[0], currentSlide[1])
          .map((event: EventList, index: number) => (
            <div className={`${styles.event}`} key={`${event.name}+${index}`}>
              <Image src={event.image} layout="fill" />
              <div className={`${styles["text-container"]}`}>
                <h1>{event.name}</h1>
                <a href={event.link}>
                  <span>
                    Register For Events <ArrowTilt className="ml-2" />
                  </span>
                </a>
              </div>
            </div>
          ))}
      </div>
      {eventList.length > 4 ? (
        <div className={`${styles["button-container"]} mt-8 md-mt-14`}>
          {currentSlide[0] !== 0 ? (
            <button id="event-slider-btn-1" className="mr-8" onClick={goLeft}>
              <RightArrowIcon style={{ transform: "rotate(180deg)" }} />
            </button>
          ) : (
            ""
          )}
          {currentSlide[1] < eventList.length ? (
            <button id="event-slider-btn-2" onClick={goRight}>
              <RightArrowIcon />
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export { Events };
