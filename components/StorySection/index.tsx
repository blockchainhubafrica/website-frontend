import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import Link from "next/link";

function StorySection() {
  const [activeIndex, setactiveIndex] = useState<number>(1);

  const slideClass = (className: string) => {
    if (className.includes(activeIndex.toString()))
      return `${className} slide-item active`;

    return `${className} slide-item`;
  };

  const onSlideChange = (swiper: any) => {
    const breakpoint = swiper.currentBreakpoint;
    const indexes: number[] = breakpoint < 1024 ? [1, 2, 3] : [1, 2, 3];

    const realIndex = swiper.realIndex;
    setactiveIndex(indexes[realIndex]);
  };

  const breakpoints = {
    "280": { slidesPerView: 2, spaceBetween: 15 },
    "1024": { slidesPerView: 3, spaceBetween: 15 },
  };
  return (
    <div className={`container px-0 xmd:pr-40 ${styles["container"]} `}>
      <div className="grid grid-cols-1 xmd:grid-cols-5 gap-y-20">
        <div className="col-span-3 smd:container xmd:px-0 order-2 xmd:order-1 story-section-swiper">
          <Swiper
            modules={[Autoplay]}
            breakpoints={breakpoints}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={15}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            onSlideChange={onSlideChange}
          >
            <SwiperSlide>
              <div className={slideClass("slide-1")}>
                <Image
                  priority={true}
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
              <div className={slideClass("slide-2")}>
                <Image
                  priority={true}
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
              <div className={slideClass("slide-3")}>
                <Image
                  priority={true}
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
          <p
            className={`${styles["story-description"]} text-lg lg:text-xl mb-12`}
          >
            Every idea begins with a problem. For us, it was simple:
            <br />
            As web3 expands, Africa is at a disadvantage of being left behind.
            This is why we have set out to expand Africa's web3 talent pipeline,
            while building intuitive web3 products that simplify and drive
            blockchain adoption for our clients.
          </p>
          <Link href="/about" passHref>
            <a style={{ maxWidth: "180px" }}>
              <Button buttonType="tertiary" text="Learn more" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { StorySection };
