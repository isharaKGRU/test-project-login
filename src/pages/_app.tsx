import "../styles/common/normalize.css";
import "../styles/common/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{process.env.appName}</title>
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no, shrink-to-fit=no"
        />
        <meta name="author" content="SLIIT" />
        <meta name="keywords" content="audio video conferencing" />
        <meta name="description" content="4th year research" />
        <meta name="theme-color" content="#000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Galada&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Arima+Madurai&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider
        options={{
          clientMaxAge: 0,
          keepAlive: 0,
        }}
        session={pageProps.session}
      >
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
