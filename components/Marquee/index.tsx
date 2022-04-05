import React from "react";

import styles from "./styles.module.css";
import Ticker from "react-ticker";

const Marquee = () => {
  return (
    <section className={` ${styles.container} flex items-center gap-x-10 pl-10`}>
      <div className="">
        Leading Hub for Africa's web3 talent and solutions. Helping Web3
        companies build blockchain based solutions
      </div>
      <div>
        Leading Hub for Africa's web3 talent and solutions. Helping Web3
        companies build blockchain based solutions
      </div>
    </section>
  );
};

export { Marquee };
