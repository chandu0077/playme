import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/400-italic.css";
import "@/styles/globals.css";
import React from "react";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ChakraProvider theme={theme}>
        <NextNProgress
          color="#4d2e34"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </React.Fragment>
  );
}
