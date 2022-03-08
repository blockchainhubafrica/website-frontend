import React, { useState } from "react";
import { Button } from "../../components";
import styles from "./story-section.module.css";

function StorySection() {
  const [visibleSlide, setVisibleSlide] = useState(1);
  const scrollLeft = () => {
    setVisibleSlide(visibleSlide - 1);
  };

  const scrollRight = () => {
    setVisibleSlide(visibleSlide + 1);
  };
  return (
    <section className={`container pl-0 ${styles["container"]} py-20`}>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-3 py-40 bg-blue-400">Hello</div>
        <div className="col-span-2 pl-20 bg-red-600">
          <h4 className="spaced-heading text-blue-400 mb-6">Our Story</h4>
          <h3
            className={`mb-7 text-3xl md:text-5xl font-coolvetica text-blue-600`}
          >
            Blockchain Developer's Conference, 2022
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit
            aut similique magni a at quasi saepe nam ad sed, iusto, maxime sequi
            consequuntur, odit quod impedit laborum ratione placeat.
          </p>
          <div>
            <Button buttonType="secondary" text="Learn more" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { StorySection };
