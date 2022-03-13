import React, { createRef, Ref, useEffect, useState } from "react";
import styles from "./testimonial-section.module.css";
import { RightArrowIcon } from "../../assets/images/svgs";
import { TestimonyCard } from "./TestimonyCard";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { testimonials } from "../../data/testimonials";

const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: true,
  prevNextButtons: false,
  pageDots: false,
};

function TestimonialSection() {
  const flickityRef: Ref<any> = createRef();

  // Handlers
  const handleNext = () => {
    flickityRef.current.flkty.next();
  };

  const handlePrevious = () => {
    flickityRef.current.flkty.previous();
  };

  return (
    <div className={`${styles["container"]} py-8 lg:py-24`}>
      <div className="flex justify-between items-center px-5 md:px-10 lg:px-20">
        <div className="md:w-1/2 lg:w-1/3">
          <h3 className={`${styles["spaced-heading"]} text-base`}>
            TESTIMONIALS
          </h3>
          <h3
            className={`mb-4 text-3xl md:text-5xl font-coolvetica text-blue-600`}
          >
            What our clients are saying!
          </h3>
        </div>

        <div className={`${styles["navigation"]} items-center hidden md:flex`}>
          <button
            className={`${styles["left-arrow"]} mr-3`}
            onClick={handlePrevious}
          >
            <RightArrowIcon />
          </button>
          <button
            className={`${styles["right-arrow"]} ml-3`}
            onClick={handleNext}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>

      <div className={`${styles["cards-container"]} pt-8 lg:pt-16`}>
        <Flickity
          ref={flickityRef}
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
        >
          {testimonials.map(({ name, role, title, desc, headshot }, i) => (
            <TestimonyCard
              key={i}
              name={name}
              role={role}
              title={title}
              desc={desc}
              headshot={headshot}
            />
          ))}
        </Flickity>
      </div>
    </div>
  );
}

export { TestimonialSection };
