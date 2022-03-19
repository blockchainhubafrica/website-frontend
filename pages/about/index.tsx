import React from "react";
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

export default function AboutUs() {
  return (
    <main className={styles["container"]}>
      <section className={`${styles["first-section"]} mb-12 md:mb-24 xl:mb-32`}>
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
                className={`${styles["vision-mission-card"]} py-8 px-6 md:py-10 md:px-8 xl:py-20 xl:px-12`}
              >
                <h3>Our Mission</h3>
                <p className="mt-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda tempora inventore maiores fuga. Deleniti odio vero
                  nam
                </p>
              </div>
              <div
                className={`${styles["vision-mission-card"]} py-8 px-6 md:py-10 md:px-8 xl:py-20 xl:px-12`}
              >
                <h3>Our Vision</h3>
                <p className="mt-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda tempora inventore maiores fuga. Deleniti odio vero
                  nam
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  suspendisse tristique aenean nunc, urna scelerisque. Dignissim
                  ultrices quam at nunc, massa. Ultricies orci viverra in nulla
                  sapien. Laoreet lectus augue pretium lorem blandit
                  pellentesque vulputate enim. Pretium aenean metus, egestas at
                  lorem at. Duis nibh aliquet phasellus interdum elementum
                  venenatis. Massa viverra at ipsum, egestas. Id turpis
                  suspendisse elementum vulputate est cum amet. Morbi id id
                  euismod urna sed. Et nunc, risus, magnis velit posuere. Vitae
                  enim venenatis faucibus mattis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles["third-section"]} mb-12 md:mb-24 xl:mb-32`}>
        <div className="container ">
          <div className="pb-12 md:pb-16 xl:pb-20">
            <div className="grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-14 xl:gap-24">
              <div className="grid grid-cols-2 gap-y-5 gap-x-3">
                <div className={styles["stats-card"]}>
                  <h5>200</h5>
                  <h6>People Trained</h6>
                </div>
                <div className={styles["stats-card"]}>
                  <h5>$12M+</h5>
                  <h6>Assets Managed</h6>
                </div>
                <div className={styles["stats-card"]}>
                  <h5>50+</h5>
                  <h6>Clubs Raised</h6>
                </div>
                <div className={styles["stats-card"]}>
                  <h5>10+</h5>
                  <h6>Apps Developed</h6>
                </div>
              </div>
              <div>
                <h3>OUR COMMUNITY</h3>
                <h4 className="my-6 w-full md:w-10/12 lg:w-8/12">
                  We are not just individuals but a community.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  suspendisse tristique aenean nunc, urna scelerisque. Dignissim
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
        <Marquee />
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
            />
          </div>
          <Events eventList={demoEventsData.slice(0, 2)} />
        </div>
      </section>
    </main>
  );
}
