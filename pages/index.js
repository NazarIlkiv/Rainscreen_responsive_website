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
          Вікна Рехау - Ціни на металопластикові вікна Rehau у Львові - Rain
          Screen
        </title>
        <meta
          name="description"
          content="Металопластикові вікна Rehau - Доступна ціна у Rain Screen у Львові - Гарантія енергозбереження та комфорту для Вашої оселі - Доступна ціна - Проконсультуйся у нас ☎️ 096 362-99-39"
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
          }
          `}
        </script>
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
