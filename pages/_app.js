import Head from "next/head";
import "../styles/globals.scss";
import Layout from "@/components/Layout";

import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="__container">
        <Layout>
          <DefaultSeo {...SEO} />
          <Head>
          </Head>
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      </div>
    </>
  );
}
