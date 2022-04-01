import Link from "next/link";
import React from "react";
import Ticker from "react-ticker";

import {
  AcexLogoSrc,
  CasperLogoSrc,
  CrevatalLogoSrc,
  demoEventsData,
  NearLogoSrc,
  VestHubLogoSrc,
  XendLogoSrc,
  VideoBackdropSrc,
  PeopleGifSrc,
} from "../../assets/images";

import {
  Button,
  CircleBanner,
  CloudinaryImage,
  Events,
  Marquee,
  Products,
  StorySection,
  TestimonialSection,
  Video,
} from "../../components";

import WhatWeOffer from "./components/WhatWeOffer";
import styles from "./home-page.module.css";

function HomePage() {
  return (
    <>
      <main className={`${styles["container"]} `}>
        <section className={`${styles["page-1"]} pb-24 lg:pb-10`}>
          <div className="pl-5 lg:container grid   lg:grid-cols-5 py-10 md:py-20 lg:py-32">
            <div className="w-4/5 md:w-full md:col-span-4 lg:col-span-3 relative z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl xlg:text-8xl whitespace-nowrap gap-x-3 flex flex-wrap">
                <span>Blockchain adoption </span>
                <span className="px">through</span>
                <span className={`${styles["underlined-text"]} pr`}>
                  talents
                </span>
                <span>and</span>
                <span className={`${styles["underlined-text"]} px`}>
                  solutions
                </span>
                <span>in Africa</span>
              </h1>
              <p className="mt-10 mb-20 text-sm md:text-base md:w-2/3 xl:text-xl xlg:2xl lg:w-4/5 xlg:w-2/3">
                Advancing Web3 adoption through talent acceleration and
                innovative blockchain-based solutions in Africa.
              </p>
              <div className="flex gap-x-5">
                <Link href="/about" passHref>
                  <a>
                    <Button buttonType="primary" text="Learn More" />
                  </a>
                </Link>
                <Link href="/hire-us" passHref>
                  <a>
                    <Button buttonType="tertiary" text="Hire Us" />
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={`md:col-span-2 ${styles["people-svg"]} fix-img-height`}
            >
              <CloudinaryImage
                src={PeopleGifSrc}
                width={731}
                height={695}
                quality={100}
              />
            </div>
          </div>
          <div
            className={`hidden md:flex justify-center ${styles["circle-banner"]}`}
          >
            <CircleBanner />
          </div>
        </section>
        <section className={``}>
          <div
            className={`container pt-5 lg:pt-0 ${styles["video-container"]}`}
          >
            <Video
              videoUrl="https://www.youtube.com/embed/cM2odHdOkfw"
              imageUrl={VideoBackdropSrc}
            />
          </div>
        </section>
        <section className="md:container py-28 lg:pt-0">
          <div className="container lg:px-0 xlg:px-28 grid md:grid-cols-2 gap-10 items-center ">
            <div>
              <h2 className="font-coolvetica text-4xl md:text-5xl 2xl:text-7xl text-blue-450">
                Solving the web3 Talent Supply problem in Africa.
              </h2>
            </div>
            <div>
              <p className="text-base  lg:text-xl 2xl:text-2xl">
                The web3 space in Africa, is in dire need of talent and there is
                little or no supply to match the demand of web3 talents in
                africa. This is what we are trying to solve.
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles["partners"]}`}>
          <div className="bg-gray-100 py-2 md:py-8">
            <div className="xmd:hidden relative">
              <Ticker offset={40} mode="chain">
                {({ index }) => (
                  <div
                    className={`${styles.container} py-2 container pr-0 flex justify-center items-center gap-x-10 md:gap-x-20`}
                  >
                    <div className={`${styles["img-container"]}`}>
                      <span className="text-3xl font-coolvetica">
                        Trusted by
                      </span>
                    </div>
                    <div className={`${styles["img-container"]}`}>
                      <CloudinaryImage
                        src={XendLogoSrc}
                        width={174}
                        height={69}
                      />
                    </div>
                    <div className={`${styles["img-container"]}`}>
                      <CloudinaryImage
                        src={CrevatalLogoSrc}
                        width={190}
                        height={42}
                      />
                    </div>
                    <div className={`${styles["img-container"]}`}>
                      <CloudinaryImage
                        src={CasperLogoSrc}
                        width={130}
                        height={35}
                      />
                    </div>
                    <div className={`${styles["img-container"]}`}>
                      <CloudinaryImage
                        src={VestHubLogoSrc}
                        width={121}
                        height={79}
                      />
                    </div>
                    <div className={`${styles["img-container"]}`}>
                      <CloudinaryImage
                        src={AcexLogoSrc}
                        width={191}
                        height={77}
                      />
                    </div>
                    <div className={`${styles["img-container"]}`}>
                      <CloudinaryImage
                        src={NearLogoSrc}
                        width={174}
                        height={58}
                      />
                    </div>
                  </div>
                )}
              </Ticker>
            </div>
            <div
              className={`${styles.container} hidden xmd:flex py-2 container pr-0 xl:px-10 xlg:px-0 justify-center items-center md:gap-x-20 xl:gap-x-10 xlg:gap-x-20`}
            >
              <div>
                <span className="text-3xl font-coolvetica">Trusted by</span>
              </div>
              <div>
                <CloudinaryImage src={XendLogoSrc} width={174} height={69} />
              </div>
              <div>
                <CloudinaryImage
                  src={CrevatalLogoSrc}
                  width={190}
                  height={42}
                />
              </div>
              <div>
                <CloudinaryImage src={CasperLogoSrc} width={130} height={35} />
              </div>
              <div>
                <CloudinaryImage src={VestHubLogoSrc} width={121} height={79} />
              </div>
              <div>
                <CloudinaryImage src={AcexLogoSrc} width={191} height={77} />
              </div>
              <div>
                <CloudinaryImage src={NearLogoSrc} width={174} height={58} />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-32 pb-16">
          <StorySection />
        </section>
        <section className="mb-20">
          <Marquee />
        </section>
        <section>
          <WhatWeOffer />
        </section>
        <section className="container">
          <Products />
        </section>

        <section className="">
          <TestimonialSection />
        </section>
        <section className={`${styles["events"]} my-8 md:my-12 lg:my-14`}>
          <div className="container">
            <div>
              <h2 className="spaced-heading text-blue-400 uppercase">
                UPCOMING EVENTS
              </h2>
              <h3 className="mt-2 text-3xl md:text-5xl font-coolvetica text-blue-600 w-full md:w-1/2 lg:w-1/3">
                What we have planned this year.
              </h3>
              <div style={{ width: "250px" }}>
                <Button
                  buttonType="secondary"
                  text="View All Events"
                  className="text-orange my-10"
                />
              </div>
            </div>
            <Events eventList={demoEventsData.slice(0, 2)} />
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
