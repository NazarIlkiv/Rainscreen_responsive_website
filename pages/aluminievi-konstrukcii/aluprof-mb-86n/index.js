import React from "react";
import repeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import Head from "next/head";

const AluprofMB86N = () => {
  return (
    <>
      <Head>
        <title>
          Віконно-двера алюмінієва система Aluprof MB-86N у м.Львові
        </title>
        <meta
          name="description"
          content="Віконно-дверна система Aluprof MB-86N - це продукт з дуже добрими параметрами, який дає можливість задовольнити різні потреби користувачів.Проконсультуйся у нас ☎️ 096-362-99-39"
        />
        <meta
          property="og:title"
          content="Віконно-двера алюмінієва система Aluprof MB-86N у м.Львові"
        />
        <meta
          property="og:description"
          content="Віконно-дверна система Aluprof MB-86N - це продукт з дуже добрими параметрами, який дає можливість задовольнити різні потреби користувачів.Проконсультуйся у нас ☎️ 096-362-99-39"
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/alum/AluprofMB86N.webp"
        />
      </Head>
      <section>
        <h1 className={styles.title_center}>
          Віконно-дверна система Aluprof MB-86N
        </h1>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img itemProp="image" src={"/images/alum/AluprofMB86N.webp"} />
                <div className={styles.featured_price_body}>
                  <h2
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    14 200 грн
                  </h2>
                </div>
              </div>
            </div>
            <div
              className={`${styles.features__content} ${styles.content_featured}`}
            >
              <div className={styles.content_featured__body}>
                <h2 itemProp="name" className={styles.content_featured__title}>
                  Технічні характеристики системи Aluprof MB-86N
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Мін. видима ширина рами
                    </div>
                    <div className={styles.options_content_featured__value}>
                      48 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Мін. видима ширина стулки
                    </div>
                    <div className={styles.options_content_featured__value}>
                      66,5 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Глибина профілів
                    </div>
                    <div className={styles.options_content_featured__value}>
                      48 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Товщина заповнення
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 30 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Відповідає 5-6-й категорії
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
              Віконно-дверна система Aluprof MB-86N - це продукт з дуже добрими
              параметрами, який дає можливість задовольнити різні потреби
              користувачів. Структура його профілів має 2 варіанти, залежно від
              вимог економії теплової енергії: ST та SI. MB-86N - це система,
              яка пропонує чудові теплові та герметичні параметри.
            </p>
          </div>
          <div className={styles.text_block_image}>
            <img
              src={"/images/alum/86n.webp"}
              alt="Вітрини із системи Aluprof MB-86N"
            />
          </div>
        </div>
        <Feedback id="form" />
      </section>
    </>
  );
};

export default AluprofMB86N;
