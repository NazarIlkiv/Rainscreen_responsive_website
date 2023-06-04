import React from "react";
import repeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import Head from "next/head";

const AluprofMB45 = () => {
  return (
    <>
      <Head>
        <title>Віконно-двера алюмінієва система Aluprof MB-45 у м.Львові</title>
        <meta
          name="description"
          content="Aluprof МВ-45 є сучасною алюмінієвою системою, яка служить для виконання архітектурних елементів внутрішньої і зовнішньої забудов. Проконсультуйся у нас ☎️ 096-362-99-39"
        />
        <meta
          property="og:title"
          content="Віконно-двера алюмінієва система Aluprof MB-45 у м.Львові"
        />
        <meta
          property="og:description"
          content="Aluprof МВ-45 є сучасною алюмінієвою системою, яка служить для виконання архітектурних елементів внутрішньої і зовнішньої забудов. Проконсультуйся у нас ☎️ 096-362-99-39"
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/alum/AluprofMB45.webp"
        />
      </Head>
      <h1 className={styles.title_center}>
        Віконно-дверна система Aluprof MB-45
      </h1>
      <section>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img src={"/images/alum/AluprofMB45.webp"} />
                <div className={styles.featured_price_body}>
                  <h2 className={styles.content_featured__title}>8425 грн</h2>
                </div>
              </div>
            </div>
            <div
              className={`${styles.features__content} ${styles.content_featured}`}
            >
              <div className={styles.content_featured__body}>
                <h2 className={styles.content_featured__title}>
                  Технічні характеристики системи Aluprof MB-45
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      43 дБ
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Опір теплопередачі
                    </div>
                    <div className={styles.options_content_featured__value}>
                      0,67 м2 ° С / Вт
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Теплопровідність
                    </div>
                    <div className={styles.options_content_featured__value}>
                      2,92 Вт / м2 ° С
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Максимальна товщина заповнення
                    </div>
                    <div className={styles.options_content_featured__value}>
                      54 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Максимальна вага стулки
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 150 кг
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Максимальна висота стулки
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 2 500 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Максимальна ширина стулки
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 1 600 мм
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={"/contacts"}
                className={styles.content_featured__link}
              >
                <div className={styles.color__link}>Розрахувати вікно</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.text_block_body}>
          <div className={styles.text_block_content}>
            <p className={styles.text_block_desc}>
              Aluprof МВ-45 є сучасною алюмінієвою системою, яка служить для
              виконання архітектурних елементів внутрішньої і зовнішньої
              забудов, що не вимагають термічної ізоляції, наприклад: різного
              виду внутрішніх перегородок, вікон, дверей, у тому числі
              пересуваються в ручну і автоматично, маятникових дверей,
              передпокоїв, вітрин, касових боксів, просторових конструкцій.
            </p>
          </div>
          <div className={styles.text_block_image}>
            <img
              src={"/images/alum/45.webp"}
              alt="Офісні перегородки із системи Aluprof MB-45"
            />
          </div>
        </div>
        <Feedback id="form" />
      </section>
    </>
  );
};

export default AluprofMB45;
