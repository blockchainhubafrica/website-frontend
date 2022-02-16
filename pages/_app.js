import { useState } from "react";
import "tailwindcss/tailwind.css";

import "../index.css";
import { Header } from "../components";
import { AppProvider } from "../contexts/appContext";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <AppProvider>
        <Header  />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
