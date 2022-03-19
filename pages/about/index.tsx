import React from "react";
import {
  demoEventsData,
  TangledArrow,
  theTeam,
  values,
} from "../../assets/images";
import { Button, Events, ImageCard, ValuesCard } from "../../components";
import styles from "./styles.module.css";

export default function AboutUs() {
  return (
    <main className={styles["container"]}>
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
          <div className=" mt-6 md:mt-10 xl:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
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
          <div className=" mt-10 md:mt-14 xl:mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
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
