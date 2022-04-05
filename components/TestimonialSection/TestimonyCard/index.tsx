import Image from "next/image";
import React from "react";
import { CloudinaryImage } from "../../index";
import styles from "./testimony-card.module.css";

type CardProps = {
  name: string;
  role: string;
  title: string;
  desc: string;
  headshot: StaticImageData | string;
};

function TestimonyCard({ name, role, title, desc, headshot }: CardProps) {
  return (
    <div
      className={`${styles["container"]} md:p-10 lg:px-24 flex items-center mx-3`}
    >
      <div className="p-5 md:pl-10">
        <h3 className={styles["heading"]}>&ldquo;{title}&rdquo;</h3>
        <p className="pt-5">{desc}</p>

        <div className="flex items-center pt-10">
          <div
            className={`${styles["image-holder"]} ${styles["border-color"]}`}
          >
            {typeof headshot === "string" ? (
              <CloudinaryImage src={headshot} width={74} height={74} />
            ) : (
              <Image src={headshot} width={74} height={74} />
            )}
          </div>
          <div className="flex flex-col pl-3">
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TestimonyCard };
