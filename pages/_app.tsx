import { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";

import "../index.css";
import "../story-section.css";

import { Header } from "../components";
import { AppProvider } from "../contexts/appContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Head>
          <link rel="icon" href="./favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Blockchain Hub Africa." />
          <meta
            name="keywords"
            content="Blockchain Hub Africa, Blockchain, Smart Contract, Africa, Talent, Cryptocurrency"
          ></meta>
          <title>Blockchain Hub Africa | Home</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
