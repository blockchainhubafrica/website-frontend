import React, { ReactComponentElement } from "react";
import styles from "./testimony-card.module.css";

type CardProps = {
  name: string,
  role: string,
  title: string,
  desc: string,
  headshot: ReactComponentElement<any>
}

function TestimonyCard({ name, role, title, desc, headshot }: CardProps) {
  return (
    <div className={`${styles["container"]} p-10 flex items-center mx-3`}>
      <div className="p-5 pl-10">
        <h3 className={styles["heading"]}>“{title}”</h3>
        <p className="pt-5">{desc}</p>

        <div className="flex items-center pt-10">
          <div>{headshot}</div>
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
