import Head from "next/head";
import React from "react";
import styles from "./index-page.module.css";

function IndexPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Blockchain Hub Africa." />
        <meta name="keywords" content="Blockchain Hub Africa"></meta>
        <title>Blockchain Hub Africa | Home</title>
      </Head>
      <main className={`${styles["container"]} container`}>
        <section>
          <h3 className="py-4">With 💘 from Chidi 😉</h3>
        </section>
      </main>
    </>
  );
}

export default IndexPage;
