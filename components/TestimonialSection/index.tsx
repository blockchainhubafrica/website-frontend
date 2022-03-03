import React, { createRef, Ref, useState } from "react";
import styles from "./testimonial-section.module.css";
import { RightArrowIcon, TestimonialHeadshot1, TestimonialHeadshot2 } from "../../assets/images/svgs"
import { TestimonyCard } from "./TestimonyCard";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: true,
  prevNextButtons: false,
  pageDots: false,
}

function TestimonialSection() {
  const flickityRef: Ref<any> = createRef();

  // constants
  const testimonials = [
    {
      name: "Jonathan Newman",
      role: "Chairman of App Finance",
      title: "Generated Over $100M+ from our App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros ipsum adipiscing mattis ultricies ornare malesuada placerat. Urna ipsum nulla ac nibh id vel placerat. Cursus morbi tellus ultricies egestas ut pharetra.",
      headshot: <TestimonialHeadshot1 />
    },
    {
      name: "Katherine Jenna",
      role: "Chairman of App Finance",
      title: "Generated Over $100M+ from our App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros ipsum adipiscing mattis ultricies ornare malesuada placerat. Urna ipsum nulla ac nibh id vel placerat. Cursus morbi tellus ultricies egestas ut pharetra.",
      headshot: <TestimonialHeadshot1 />
    },
    {
      name: "Bruce  Barner",
      role: "Chairman of App Finance",
      title: "Generated Over $100M+ from our App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros ipsum adipiscing mattis ultricies ornare malesuada placerat. Urna ipsum nulla ac nibh id vel placerat. Cursus morbi tellus ultricies egestas ut pharetra.",
      headshot: <TestimonialHeadshot2 />
    },
  ]

  // Handlers
  const handleNext = () => {
    flickityRef.current.flkty.next()
  }

  const handlePrevious = () => {
    flickityRef.current.flkty.previous()
  }

  return (
    <div className={`${styles["container"]} py-8 lg:py-16`}>
      <div className="flex justify-between items-center px-5 md:px-10 lg:px-20">
        <div className="md:w-1/2 lg:w-1/3">
          <h3 className={`${styles["spaced-heading"]} text-base`}>TESTIMONIALS</h3>
          <h3 className={`mb-4 text-3xl md:text-5xl font-coolvetica text-blue-600`}>
            What our clients are saying!
          </h3>
        </div>

        <div className={`${styles["navigation"]} flex items-center`}>
          <button className={`${styles["left-arrow"]} mr-3`} onClick={handlePrevious}>
            <RightArrowIcon />
          </button>
          <button className={`${styles["right-arrow"]} ml-3`} onClick={handleNext}>
            <RightArrowIcon />
          </button>
        </div>
      </div>

      <div className={`${styles["cards-container"]} py-8 lg:py-16`}>
        <Flickity
          ref={flickityRef}
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
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
