import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Manrope:regular,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="aBkoz4jlgNGR7T_O_onG_Rr-doKu_qasJ0t7rtN4MB0"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
