import styles from "../../styles/Contacts.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";
import Head from "next/head";

const contacts = () => {
  return (
    <>
      <Head>
        <title>Контакти Rain Screen</title>
        <meta name="description" content="Контакти компанії Rain Screen" />
        <meta
          name="keywords"
          content="купити вікна Rehau львів, рехау львів, металопластикові вікна rehau львів"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>
        <section className={`${styles.page__contacts} ${styles.contacts}`}>
          <div className={styles.contacts__container}>
            <h2
              className={`${styles.contacts__title} ${stylesRepeat.title} ${stylesRepeat.title_center}`}
            >
              <span>Контакти компанії Rain Screen</span>
            </h2>
            <h3
              className={`${styles.contacts__title} ${stylesRepeat.title} ${stylesRepeat.title_center}`}
            >
              +380936517099
            </h3>
            <div className={styles.contacts__body}>
              <div className={styles.contacts__text}>
                <div>Понеділок - П&#39;ятниця з 09:00-18:00</div>
                <div>Субота з 09:00-15:00</div>
                <div>+380936517099</div>
                <div>rrainscreenfasad@ukr.net</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default contacts;
