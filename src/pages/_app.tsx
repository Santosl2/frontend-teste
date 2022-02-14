import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ModalProvider } from "@/contexts/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ModalProvider>
        <Component {...pageProps} />;
      </ModalProvider>
    </>
  );
}

export default MyApp;
