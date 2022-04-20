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

import PageHead from "../pageHeads";
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
      </Head>

      <AppProvider>
        <ToastContainer position="top-center" autoClose={5000} />
        <DataProvider>
          <PageHead />

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
