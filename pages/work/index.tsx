import React from "react";
import { useRouter } from "next/router";
import { demoEventsData } from "../../assets/images";
import { Button, Events, Products, TestimonialSection } from "../../components";
import styles from "./work-page.module.css";
import { DefaultSEOHead, WorkPageHead } from "../../pageHeads";

export default function OurWorkPage() {
  const router = useRouter();
  return (
    <>
      <WorkPageHead />
      <DefaultSEOHead />
      <main className={styles["container"]}>
        <div className={styles.ellipse}></div>
        <section>
          <div className="container">
            <Products />
          </div>
        </section>
        <section>
          <TestimonialSection />
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
      </main>
    </>
  );
}
