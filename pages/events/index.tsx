import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  Calendar,
  demoEventsData,
  featuredEventsImg1,
  featuredEventsImg2,
  featuredEventsImg3,
  featuredEventsImg4,
  featuredEventsImg5,
  RightArrowIcon,
} from "../../assets/images";
import { EventList, Events } from "../../components";
import { useOnClickOutside } from "../../hooks";
import styles from "./styles.module.css";

export default function EventsPage() {
  const [showFilterDropDown, setShowFilterDropDown] = useState<boolean>(false);
  const [currentFilterYear, setCurrentFilterYear] = useState<number | null>(
    new Date().getFullYear()
  );
  const [eventsData] = useState<EventList[]>(demoEventsData);

  const eventsDropdownRef = useRef<HTMLButtonElement | null>(null);

  useOnClickOutside(eventsDropdownRef, () => setShowFilterDropDown(false));

  const filteredEvents = useMemo(
    () =>
      eventsData.filter(
        (currentItem, index) =>
          eventsData.findIndex(
            (indexedItem) => currentItem.year === indexedItem.year
          ) === index
      ),
    []
  );

  return (
    <main className={styles["container"]}>
      <section
        className={`bg-blue-600 pt-1 pb-20 lg:pb-28 ${styles["featured-events"]}`}
      >
        <div className={`${styles["featured-events-header"]}`}>
          <div className="container">
            <div
              className={`py-12 md:py-20 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between`}
            >
              <div className="xl:w-2/3">
                <h1 className="uppercase">Featured Events</h1>
                <h2 className="capitailize mt-4">
                  Blockchain Developers Conference, 2021
                </h2>
              </div>
              <div className="flex mt-8 lg:mt-0">
                <button className={`${styles["arrow-button"]} mr-8`}>
                  <RightArrowIcon style={{ transform: "rotate(180deg)" }} />
                </button>
                <button className={`${styles["arrow-button"]}`}>
                  <RightArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
            <div className="bg-orange"></div>
            <div>
              <h3 className="mb-4">About the event</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                odio quas nemo eius, dicta distinctio dolorem repellat incidunt
                optio unde odit suscipit dolore fugiat, provident officia
                commodi ducimus, voluptas nihil!
              </p>
              <div className="mt-10">
                <h3 className="mb-4">Event breakdown</h3>
                <div className="grid grid-cols-3">
                  <div>
                    <h5>400+</h5>
                    <h6>People Attended</h6>
                  </div>
                  <div className="text-center">
                    <h5>5</h5>
                    <h6>Speakers</h6>
                  </div>
                  <div className="text-center">
                    <h5>8</h5>
                    <h6>Panel Sessions</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`${styles["featured-images-container"]}`}>
            <div>
              <Image
                src={featuredEventsImg1}
                alt="featured-events-img-1"
                width={342}
                height={255}
              />
            </div>
            <div>
              <Image
                src={featuredEventsImg2}
                alt="featured-events-img-1"
                width={342}
                height={255}
              />
            </div>
            <div>
              <Image
                src={featuredEventsImg3}
                alt="featured-events-img-1"
                width={342}
                height={255}
              />
            </div>
            <div>
              <Image
                src={featuredEventsImg4}
                alt="featured-events-img-1"
                width={342}
                height={255}
              />
            </div>
            <div>
              <Image
                src={featuredEventsImg5}
                alt="featured-events-img-1"
                width={342}
                height={255}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles["events"]} my-8 md:my-12 lg:my-14`}>
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-10  md:mb-16">
            <div className="">
              <h2 className="text-base text-blue-400 uppercase">
                UPCOMING EVENTS
              </h2>
              <h3 className="mt-2 text-3xl md:text-5xl font-coolvetica text-blue-600 w-full md:w-9/12 xl:w-3/5">
                What we have planned this year.
              </h3>
            </div>
            <div className="flex flex-wrap items-center mt-7 md:mt-0">
              <span className="mr-8 uppercase font-bold mb-2 xl:mb-0 ">
                Filter by year
              </span>
              <button
                className={styles.dropdown}
                onClick={() => setShowFilterDropDown(!showFilterDropDown)}
                ref={eventsDropdownRef}
              >
                <Calendar /> <span>Years</span> |{" "}
                <span>{currentFilterYear}</span>
                {showFilterDropDown ? (
                  <div className={styles["dropdown-list"]}>
                    <ul>
                      {filteredEvents.map((item, index) => (
                        <li
                          key={index + item.name}
                          onClick={() => {
                            setShowFilterDropDown(false);
                            setCurrentFilterYear(parseInt(item.year));
                          }}
                        >
                          {item.year}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>
          <Events
            eventList={useMemo(
              () =>
                eventsData.filter(
                  (event) => parseInt(event.year) === currentFilterYear
                ),
              [currentFilterYear]
            )}
          />
        </div>
      </section>
    </main>
  );
}
