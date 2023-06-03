import React from "react";
import repeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import Head from "next/head";

const AluprofMB79N = () => {
  return (
    <>
      <Head>
        <title>
          Віконно-двера алюмінієва система Aluprof MB-79N у м.Львові
        </title>
        <meta
          name="description"
          content="Aluprof MB-79N - це найсучасніша в асортименті Aluprof економічна віконно-дверна система. Проконсультуйся у нас ☎️ 096-362-99-39"
        />
        <meta
          property="og:title"
          content="Віконно-двера алюмінієва система Aluprof MB-79N у м.Львові"
        />
        <meta
          property="og:description"
          content="Aluprof MB-79N - це найсучасніша в асортименті Aluprof економічна віконно-дверна система. Проконсультуйся у нас ☎️ 096-362-99-39"
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/alum/AluprofMB79N.webp"
        />
      </Head>
      <section>
        <h1 className={styles.title_center}>
          Віконно-дверна система Aluprof MB-79N
        </h1>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img itemProp="image" src={"/images/alum/AluprofMB79N.webp"} />
                <div className={styles.featured_price_body}>
                  <h2
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    11 800 грн
                  </h2>
                </div>
              </div>
            </div>
            <div
              className={`${styles.features__content} ${styles.content_featured}`}
            >
              <div className={styles.content_featured__body}>
                <h2 itemProp="name" className={styles.content_featured__title}>
                  Технічні характеристики системи Aluprof MB-79N
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      48 дБ
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Опір теплопередачі
                    </div>
                    <div className={styles.options_content_featured__value}>
                      1,04 м2 ° С / Вт
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Теплопровідність
                    </div>
                    <div className={styles.options_content_featured__value}>
                      1,59 Вт /м2 ° С
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Максимальна товщина заповнення
                    </div>
                    <div className={styles.options_content_featured__value}>
                      58 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Максимальна вага стулки
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 120 кг
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
              Aluprof MB-79N - це найсучасніша в асортименті Aluprof економічна
              віконно-дверна система. Вона була розроблена з урахуванням
              підвищених вимог до теплоізоляційної здатності. Система служить
              для виготовлення цілого ряду конструкцій, зокрема, глухих,
              поворотних, відкидних, поворотно-відкидних та похило-зсувних
              вікон, зовнішніх двопольних і двопільних дверей, вітрин з дверима.
            </p>
          </div>
          <div className={styles.text_block_image}>
            <img
              src={"/images/alum/79n.webp"}
              alt="Приватний сектор із віконною системою Aluprof MB-79N"
            />
          </div>
        </div>
        <Feedback id="form" />
      </section>
    </>
  );
};

export default AluprofMB79N;
