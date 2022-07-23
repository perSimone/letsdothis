import '../styles/globals.css'

import Head from "next/head";
import React from "react";

import Header from "../src/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;