import styles from "../../styles/Contacts.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";
import { NextSeo } from "next-seo";
import Head from "next/head";

const contacts = () => {
  return (
    <>
      <NextSeo
        title="Вікна Рехау - Ціни на металопластикові вікна Rehau у Львові - Rain Screen"
        description="Металопластикові вікна Rehau - Доступна ціна у Rain Screen у Львові - Гарантія енергозбереження та комфорту для Вашої оселі - Доступна ціна - Проконсультуйся у нас ☎️ 096 362-99-39"
        openGraph={{
          title: "Контакти компанії Rain Screen",
          description: "Контакти компанії Rain Screen",
          images: [
            {
              url: "https://www.rainscreen.com.ua/images/slider/slide1.jpg",
              width: 800,
              height: 600,
              alt: "Контакти компанії Rain Screen",
            },
          ],
          site_name: "Rain Screen",
        }}
      />
      <main className={styles.page}>
        <section
          itemScope
          itemType="https://schema.org/Organization"
          className={`${styles.page__contacts} ${styles.contacts}`}
        >
          <div className={styles.contacts__container}>
            <h1
              className={`${styles.contacts__title} ${stylesRepeat.title} ${stylesRepeat.title_center}`}
            >
              <span itemProp="name">Контакти компанії Rain Screen</span>
            </h1>
            <h3
              itemProp="telephone"
              className={`${styles.contacts__title} ${stylesRepeat.title} ${stylesRepeat.title_center}`}
            >
              +380963629939
            </h3>
            <div className={styles.contacts__body}>
              <div
                itemScope
                itemType="https://schema.org/PostalAddress"
                className={styles.contacts__text}
              >
                <div>
                  <b>Графік роботи:</b>
                </div>
                <div> Понеділок - П&#39;ятниця з 09:00-18:00</div>
                <div itemProp="telephone">
                  <b>Телефон:</b> +380963629939
                </div>
                <div itemProp="email">
                  <b>Електронна адреса:</b>bruem35@gmail.com
                </div>
                <div itemProp="address">
                  <b>Офіс:</b> м.Львів, вул.Луганська 1
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default contacts;
