import { AppProps } from "next/app";
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
import Head from "next/head";
import { getRandomKey } from "../utils/randomKey";
import { ActionModal } from "components/ActionModal";
// import PageHeadSetup from "../pageHeads/pageHeadSetup";

function MyApp({ Component, pageProps }: AppProps) {
  const { routeChanging } = useRouteChangeHandler();

  return (
    <>
      <Head>
        <link key={getRandomKey()} rel="icon" href="./favicon.svg" />
      </Head>
      <ActionModal />
      <AppProvider>
        <ToastContainer position="top-center" autoClose={5000} />
        <DataProvider>
          {/* <PageHeadSetup /> */}

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
