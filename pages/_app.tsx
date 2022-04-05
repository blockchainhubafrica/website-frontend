import { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../index.css";
import "../story-section.css";

import { Footer, Header, Loader } from "../components";
import { AppProvider } from "../contexts/appContext";
import { DataProvider } from "../contexts/dataContext";
import { useRouteChangeHandler } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const { routeChanging } = useRouteChangeHandler();

  return (
    <>
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

      <AppProvider>
        <DataProvider>
          {routeChanging ? (
            <Loader />
          ) : (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </DataProvider>
      </AppProvider>
    </>
  );
}

export default MyApp;
