import React from "react";

import styles from "./styles.module.css";
import Ticker from "react-ticker";

const Marquee = () => {
  return (
    <section className={` ${styles.container}`}>
      <div className="lg:hidden">
        <Ticker offset={40} speed={20} mode="chain">
          {({ index }) => (
            <div>
              Leading Hub for Africa's web3 talent and solutions. Helping Web3
              companies build blockchain based solutions
            </div>
          )}
        </Ticker>
      </div>
      <div className="hidden lg:block">
        <Ticker offset={40} speed={60} mode="chain">
          {({ index }) => (
            <div>
              Leading Hub for Africa's web3 talent and solutions. Helping Web3
              companies build blockchain based solutions
            </div>
          )}
        </Ticker>
      </div>
    </section>
  );
};

export { Marquee };
