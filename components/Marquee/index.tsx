import React from "react";

import styles from "./styles.module.css";

const Marquee = ({ children }: { children: React.ReactChild }) => {
  return (
    <section
      className={` ${styles.container} flex items-center gap-x-10 pl-10`}
    >
      <div className="">{children}</div>
      <div>{children}</div>
    </section>
  );
};

export { Marquee };
