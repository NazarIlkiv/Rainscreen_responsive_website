import styles from "../../styles/Contacts.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";
import { NextSeo } from "next-seo";

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
                  <b>Електронна адреса:</b> bruem35@gmail.com
                </div>
                <div itemProp="address">
                  <b>Офіс:</b> м.Львів, вул.Зелена 238/4
                </div>
              </div>
              <div className={styles.maps_container}>
                <iframe
                  className={styles.maps_body}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.7217046426357!2d24.059181716244684!3d49.80699546273489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae805847a308f%3A0x74e0fbed723064c5!2z0YPQuy4g0JfQtdC70ZHQvdCw0Y8sIDIzOCwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAzNQ!5e0!3m2!1sru!2sua!4v1684679739611!5m2!1sru!2sua"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default contacts;
