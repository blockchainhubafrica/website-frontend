import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperProps, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import { Button } from "../../components";
import styles from "./story-section.module.css";
import Image from "next/image";
import {
  storySectionSlide1,
  storySectionSlide2,
  storySectionSlide3,
} from "../../assets/images/jpgs";

function StorySection() {
  const swiper = useSwiper();
  const [currentProgress, setcurrentProgress] = useState<number>(0.5);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const onProgress = (swiper: any, progress: number) => {
    progress = parseFloat(progress.toFixed(2));
    if (progress === 0.83) progress = 0.84;
    let slide1 = ref1.current;
    let slide2 = ref2.current;
    let slide3 = ref3.current;
    if (slide1 && slide2 && slide3) {
      const sliderIndex = swiper.realIndex;
      //   const currentHeight = slide2.clientHeight;
      //   const newHeight = (currentHeight + 2).toString() + "px";
      slide2.style.transform = `scale(1,0.8)`;
      //   console.log({ progress, currentHeight, newHeight });
    }
  };
  const onSlideChange = (swiper: any) => {
    setcurrentProgress(swiper.progress);
  };

  useEffect(() => {
    // console.log({ ref1 });
  });

  const breakpoints = {
    "280": { slidesPerView: 2, spaceBetween: 15, centeredSlides: true },
    "1280": { slidesPerView: 3, spaceBetween: 15, centeredSlides: false },
  };
  return (
    <section
      className={`container px-0 xmd:pr-40 ${styles["container"]} py-32`}
    >
      <div className="grid grid-cols-1 xmd:grid-cols-5 gap-y-20">
        <div className="col-span-3 order-2 xmd:order-1">
          <Swiper
            // modules={[Autoplay]}
            // onSliderMove={onSliderMove}
            breakpoints={breakpoints}
            spaceBetween={15}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            onProgress={onProgress}
            loop={true}
            onSlideChange={onSlideChange}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div ref={ref1} className="slide-1">
                <Image
                  objectFit="cover"
                  unoptimized={true}
                  alt=""
                  width={640}
                  height={427}
                  src={storySectionSlide1}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div ref={ref2} className="slide-2">
                <Image
                  objectFit="cover"
                  unoptimized={true}
                  alt=""
                  width={640}
                  height={427}
                  src={storySectionSlide2}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div ref={ref1} className="slide-3">
                <Image
                  objectFit="cover"
                  unoptimized={true}
                  alt=""
                  width={640}
                  height={960}
                  src={storySectionSlide3}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 container xmd:px-0 xmd:pl-20 flex flex-col justify-center order-1 xmd:order-2">
          <h4 className="spaced-heading text-blue-400 mb-5">Our Story</h4>
          <h3
            className={`mb-10 text-3xl md:text-5xl font-coolvetica text-blue-600`}
          >
            Leading blockchain innovations from Africa
          </h3>
          <p className={`${styles["story-description"]} mb-12`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, odio
            non nunc eu. Adipiscing in neque mi nunc euismod morbi interdum.
          </p>
          <div>
            <Button buttonType="secondary" text="Learn more" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { StorySection };
