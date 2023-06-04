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
        <title>
          Металоплатикові вікна REHAU(вікна рехау) у м.Львів - Rain Screen
        </title>
        <meta
          name="description"
          content="Металопластикові вікна Rehau - Доступна ціна! Rain Screen у Львові - Гарантія енергозбереження та комфорту для Вашої оселі - Проконсультуйся у нас ☎️ 096-362-99-39"
        />
        <meta
          property="og:title"
          content="Металоплатикові вікна REHAU(вікна рехау) у м.Львів - Rain Screen"
        />
        <meta
          property="og:description"
          content="Металопластикові вікна Rehau - Доступна ціна! Rain Screen у Львові - Гарантія енергозбереження та комфорту для Вашої оселі - Проконсультуйся у нас ☎️ 096-362-99-39"
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/slider/slide2.webp"
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org/",
            "@type": "Organization",
            "name": "Rain Screen",
            "url": "https://www.rainscreen.com.ua/",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lviv",
              "addressCountry": "Ukraine"
            }
          `}
        </script>
      </Head>
      <div className={styles.page}>
        <Slider />
        <Advantages />
        <Deals />
        <Reviews />
        <Feedback />
      </div>
    </>
  );
};

export default Home;
