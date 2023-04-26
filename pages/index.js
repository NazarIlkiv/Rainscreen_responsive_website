import Advantages from "@/components/Advantages";
import Deals from "@/components/Deals";
import Feedback from "@/components/Feedback";
import Reviews from "@/components/Reviews";
import Slider from "@/components/Slider";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Металопластикові вікна та двері Rehau у м.Львів</title>
        <meta
          name="description"
          content="Головна сторінка компанії Rain Screen"
        />
        <meta
          name="keywords"
          content="купити вікна Rehau львів, рехау львів, алюмінієві конструкції Львів"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>
        <Slider />
        <Advantages />
        <Deals />
        <Reviews />
        <Feedback />
      </main>
    </>
  );
};

export default Home;
