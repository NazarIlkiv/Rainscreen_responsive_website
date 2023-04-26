import styles from "../../styles/Contacts.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";
import { NextSeo } from "next-seo";
import Head from "next/head";

const contacts = () => {
  return (
    <>
      <NextSeo
        title="Контакти - Металопластикові вікна та двері Rehau у м.Львів"
        description="Номер телефону:+380936517099, Електронна адреса: rrainscreenfasad@ukr.net "
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
        additionalMetaTags={[
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
      />
      <main className={styles.page}>
        <section
          itemScope
          itemType="https://schema.org/Organization"
          className={`${styles.page__contacts} ${styles.contacts}`}
        >
          <div className={styles.contacts__container}>
            <h2
              className={`${styles.contacts__title} ${stylesRepeat.title} ${stylesRepeat.title_center}`}
            >
              <span itemProp="name">Контакти компанії Rain Screen</span>
            </h2>
            <h3
              itemProp="telephone"
              className={`${styles.contacts__title} ${stylesRepeat.title} ${stylesRepeat.title_center}`}
            >
              +380963629939
            </h3>
            <div className={styles.contacts__body}>
              <div
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                className={styles.contacts__text}
              >
                <div>Понеділок - П&#39;ятниця з 09:00-18:00</div>
                <div itemProp="telephone">+380963629939</div>
                <div itemProp="email">bruem35@gmail.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default contacts;
