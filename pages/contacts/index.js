import styles from "../../styles/Contacts.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";
import { NextSeo } from "next-seo";
import Feedback from "@/components/Feedback";

const contacts = () => {
  return (
    <>
      <NextSeo
        title="Контакти, дані про Rain Screen - Ваш надійний партнер"
        description="Контакти компанії Rain Screen, виробника металопластикових вікон та дверей Rehau і алюмінієвих конструкцій Aluprof"
        openGraph={{
          title: "Контакти, дані про Rain Screen - Ваш надійний партнер",
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
      <h1
        className={`${styles.contacts__title} ${stylesRepeat.title} ${stylesRepeat.title_center}`}
      >
        <span>Контакти компанії Rain Screen</span>
      </h1>
      <section className={styles.page}>
        <section
          itemScope
          itemType="https://schema.org/Organization"
          className={`${styles.page__contacts} ${styles.contacts}`}
        >
          <div className={styles.contacts__container}>
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
                <h3 itemProp="telephone">
                  <b>Телефон:</b> +380963629939
                </h3>
                <h3 itemProp="email">
                  <b>Електронна адреса:</b> bruem35@gmail.com
                </h3>
                <div itemScope itemType="http://schema.org/PostalAddress">
                  <b>Офіс:</b>
                  <span itemprop="streetAddress">
                    м.Львів, вул.Зелена 238/4
                  </span>
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
        <Feedback />
      </section>
    </>
  );
};

export default contacts;
