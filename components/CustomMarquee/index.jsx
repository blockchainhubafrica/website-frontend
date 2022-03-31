import React, { useEffect } from "react";
import styles from "./custom-marquee.module.css";

function CustomMarquee() {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < 11; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  });
  return (
    <div className={styles["container"]}>
      <div className="marquee">
        <ul className="marquee-content">
          <li>
            <i className="">1</i>
          </li>
          <li>
            <i className="">2</i>
          </li>
          <li>
            <i className="">3</i>
          </li>
          <li>
            <i className="">4</i>
          </li>
          <li>
            <i className="">5</i>
          </li>
          <li>
            <i className="">6</i>
          </li>
          <li>
            <i className="">7</i>
          </li>
          <li>
            <i className="">8</i>
          </li>
          <li>
            <i className="">9</i>
          </li>
          <li>
            <i className="">10</i>
          </li>
          <li>
            <i className="">11</i>
          </li>
          <li>
            <i className="">12</i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { CustomMarquee };
