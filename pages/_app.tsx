import { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../index.css";
import "../story-section.css";

import { Footer, Header, Loader } from "../components";
import { AppProvider } from "../contexts/appContext";
import { DataProvider } from "../contexts/dataContext";
import { useRouteChangeHandler } from "../hooks";
import { getRandomKey } from "../utils/randomKey";
import { useRouter } from "next/router";
import { deslugify } from "../utils/deslugify";

function MyApp({ Component, pageProps }: AppProps) {
  const { routeChanging } = useRouteChangeHandler();
  const router = useRouter();
  const currentArticleSlug = router?.query?.bid?.toString();
  let title = deslugify(router.pathname);
  // console.log(router.query, router);
  if (currentArticleSlug) {
    title = `${deslugify(currentArticleSlug)}`;
  }
  return (
    <>
      <Head>
        <link key={getRandomKey()} rel="icon" href="./favicon.svg" />
        <meta
          key={getRandomKey()}
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta key={getRandomKey()} name="theme-color" content="#000000" />
        <meta
          key={getRandomKey()}
          name="description"
          content="Blockchain Hub Africa."
        />
        <meta
          key={getRandomKey()}
          name="keywords"
          content="Blockchain Hub Africa, Blockchain, Smart Contract, Africa, Talent, Cryptocurrency"
        />
        <meta
          key={getRandomKey()}
          property="og:url"
          content="https://blockchainhub.africa"
        />
        <meta key={getRandomKey()} property="og:type" content="website" />
        <meta
          key={getRandomKey()}
          property="og:image"
          content="https://res.cloudinary.com/blockchainhub-africa/image/upload/v1650293106/Company-website/bcha_logo_dark_pzqxcl.jpg"
        />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta
          key={getRandomKey()}
          property="og:image:alt"
          content="Blockchain Hub Africa"
        />
        <meta key={getRandomKey()} property="og:locale" content="en_gb" />
        <meta
          key={getRandomKey()}
          property="og:site_name"
          content="Blockchain Hub Africa"
        />
        <title key={getRandomKey()}>
          Blockchain Hub Africa | {title || "Home"}
        </title>
      </Head>

      <AppProvider>
      <ToastContainer position="top-center" autoClose={5000} />

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
