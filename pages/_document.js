import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ua">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Manrope:regular,500,600,700,800&display=swap"
          rel="stylesheet"
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
