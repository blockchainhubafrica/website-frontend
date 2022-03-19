import React, { useMemo, useRef, useState } from "react";
import { Calendar, demoEventsData } from "../../assets/images";
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
