import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  demoEventsData,
  TangledArrow,
  theTeam,
  values,
} from "../../assets/images";

import {
  Achievements,
  Button,
  CircleBanner,
  Events,
  ImageCard,
  Marquee,
  ValuesCard,
} from "../../components";

import styles from "./styles.module.css";
import { AboutUsPageHead, DefaultSEOHead } from "../../pageHeads";

export default function AboutUs() {
  const [activeVisionCard, setactiveVisionCard] = useState<number>(1);
  const [activeStatsCard, setactiveStatsCard] = useState<number>(1);

  const router = useRouter();

  const visionCardClass = (currentCard: number) => {
    if (activeVisionCard === currentCard)
      return `${styles["vision-mission-card"]} ${styles["active"]} py-8 px-6 md:py-10 md:px-8 xl:py-20 xl:px-12`;

    return `${styles["vision-mission-card"]} py-8 px-6 md:py-10 md:px-8 xl:py-20 xl:px-12`;
  };

  const statsCardClass = (currentCard: number) => {
    if (activeStatsCard === currentCard)
      return `${styles["stats-card"]} ${styles["active"]}`;

    return `${styles["stats-card"]}`;
  };

  return (
    <>
      <AboutUsPageHead />
      <DefaultSEOHead />
      <main className={styles["container"]}>
        <section
          className={`${styles["first-section"]} mb-12 md:mb-24 xl:mb-32`}
        >
          <div className="container ">
            <div className="border-b border-gray-400  pb-12 md:pb-24 xl:pb-32">
              <div className="flex justify-between my-12 md:my-16 lg:my-20">
                <div className="md:w-8/12 lg:w-7/12 xl:w-8/12">
                  <h1 className="text-blue-600">
                    Building Web3 <span>Talents</span> and{" "}
                    <span>Innovations</span>
                  </h1>
                </div>
                <div className="hidden md:block">
                  <CircleBanner isBlackVariant={true} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-10 md:gap-3">
                <div
                  onMouseEnter={() => setactiveVisionCard(1)}
                  className={visionCardClass(1)}
                >
                  <h3>Our Mission</h3>
                  <p className="mt-6">
                    Blockchain Hub Africa, has set out to build Africa’s web3
                    talents, to become part of those building the Future of the
                    internet. We also build innovative blockchain based
                    solutions that aim to increase the adoption of the
                    Blockchain technology in Africa.
                  </p>
                </div>
                <div
                  onMouseEnter={() => setactiveVisionCard(2)}
                  className={visionCardClass(2)}
                >
                  <h3>Our Vision</h3>
                  <p className="mt-6">
                    To build Africa’s web3 talent pipeline and bridge the gap of
                    transitioning into the web3 space to foster blockchain
                    adoption in Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles["second-section"]} mb-12 md:mb-24 xl:mb-32`}
        >
          <div className="container ">
            <div className="border-b border-gray-400  pb-12 md:pb-24 xl:pb-32">
              <div className="grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-14 xl:gap-24">
                <div>
                  <h3>WHAT WE ARE BUILDING</h3>
                  <h4 className="mt-4">
                    Our goal is to raise bright minds in the Web3 ecosystem in
                    Africa.
                  </h4>
                </div>
                <div>
                  <p>
                    Africa has always been consumers of technology, and over the
                    years, we contribute less to emerging technologies.
                    Blockchain technology, as an emerging tech, has seen
                    interest increase over the years and there is a high demand
                    for talents(developers, designers, community managers, etc)
                    to help build the tech and solutions on it, but there seems
                    to be little to no supply of these talents from Africa. We
                    set out to Build Blockchain Hub Africa to tackle this
                    problem and build web3 talent pipeline, to make Africa
                    become frontiers in the adoption of blockchain technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles["third-section"]} mb-12 md:mb-24 xl:mb-32`}
        >
          <div className="container ">
            <div className="pb-12 md:pb-16 xl:pb-20">
              <div className="grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-14 xl:gap-24">
                <div className="grid grid-cols-2 gap-y-5 gap-x-3">
                  <div
                    onMouseEnter={() => setactiveStatsCard(1)}
                    className={statsCardClass(1)}
                  >
                    <h5>20+</h5>
                    <h6>People Trained</h6>
                  </div>
                  <div
                    onMouseEnter={() => setactiveStatsCard(2)}
                    className={statsCardClass(2)}
                  >
                    <h5>$20K+</h5>
                    <h6>Assets Managed</h6>
                  </div>
                  <div
                    onMouseEnter={() => setactiveStatsCard(3)}
                    className={statsCardClass(3)}
                  >
                    <h5>500+</h5>
                    <h6>Community Members</h6>
                  </div>
                  <div
                    onMouseEnter={() => setactiveStatsCard(4)}
                    className={statsCardClass(4)}
                  >
                    <h5>2+</h5>
                    <h6>Apps Developed</h6>
                  </div>
                </div>
                <div>
                  <h3>OUR COMMUNITY</h3>
                  <h4 className="my-6 w-full md:w-10/12 lg:w-8/12">
                    We are not just individuals but a community.
                  </h4>
                  <p>
                    We believe in the power of community as a web3 company and
                    that is why we value and believe in our Community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Achievements />
        </section>
        <section>
          <Marquee>
            Leading Hub for Africa's web3 talent and solutions. Helping Web3
            companies build blockchain based solutions
          </Marquee>
        </section>
        <section
          className={`${styles["values"]} bg-gray-100 pt-12 xl:pt-0  pb-12 md:pb-16 xl:pb-28`}
        >
          <TangledArrow className="hidden xl:block" />
          <div className={styles.ellipse}></div>
          <div className="container">
            <div>
              <h2 className="text-base text-blue-400 uppercase">OUR VALUES</h2>
              <h3 className="mt-2 text-3xl md:text-5xl font-coolvetica text-blue-600 w-full md:w-1/2 lg:w-1/3">
                Values will hold dear to our heart.
              </h3>
            </div>
            <div className="lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-0 md:gap-8 md:gap-y-4 lg:gap-10 lg:gap-y-4">
              {values.map((value, index) => {
                return (
                  <ValuesCard
                    key={value.header + index}
                    header={value.header}
                    paragraph={value.paragraph}
                    strokeColor={value.strokeColor}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section className={`${styles["gallery"]} py-12 md:py-14 lg:py-20`}>
          <div className="container">
            <div>
              <h2 className="text-base text-blue-400 uppercase">OUR TEAM</h2>
              <h3 className="mt-2 text-3xl md:text-5xl font-coolvetica text-blue-600 w-full md:w-1/2 lg:w-1/3">
                The brains behind the movement
              </h3>
            </div>
            <div className=" mt-10 md:mt-14 xl:mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 gap-y-10 md:gap-y-14 lg:gap-y-20 xl:gap-y-24">
              {theTeam.map((member, index) => {
                return (
                  <ImageCard
                    key={member.name + index}
                    name={member.name}
                    image={member.image}
                    title={member.title}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section className={`${styles["events"]} my-8 md:my-12 lg:my-14`}>
          <div className="container">
            <div>
              <h2 className="text-base text-blue-400 uppercase">
                UPCOMING EVENTS
              </h2>
              <h3 className="mt-2 text-3xl md:text-5xl font-coolvetica text-blue-600 w-full md:w-1/2 lg:w-1/3">
                What we have planned this year.
              </h3>
              <Button
                buttonType="secondary"
                text="View All Events"
                className={`text-orange my-10 ${styles["events-button"]}`}
                onClick={() => router.push("/events")}
              />
            </div>
            <Events eventList={demoEventsData.slice(0, 2)} />
          </div>
        </section>
        <></>
        <></>
      </main>
    </>
  );
}
