import React from "react";
import repeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import Head from "next/head";

const RehauEuro60 = () => {
  return (
    <>
      <Head>
        <title>Металопластикові вікна з профілю - Rehau Euro Design 70</title>
        <meta
          name="description"
          content="Металопластикові вікна REHAU з профільної системи REHAU EURO 70 забезпечують високі показники енергозбереження. Купити вікна Рехау ☎096-362-99-39"
        />
        <meta
          property="og:title"
          content="Металопластикові вікна з профілю - Rehau Euro Design 70"
        />
        <meta
          property="og:description"
          content="Металопластикові вікна REHAU з профільної системи REHAU EURO 70 забезпечують високі показники енергозбереження. Купити вікна Рехау ☎096-362-99-39."
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/rehauprofiles/euro70.webp"
        />
      </Head>
      <h1 className={styles.title_center}>Віконна система Rehau Euro 70</h1>
      <section>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img src={"/images/rehauprofiles/euro70.webp"} />
                <div className={styles.featured_price_body}>
                  <h2 className={styles.content_featured__title}>7550 грн</h2>
                  <div className={styles.options_content_featured__value}>
                    Розмір <b>1500x1500</b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.features__content} ${styles.content_featured}`}
            >
              <div className={styles.content_featured__body}>
                <h2 className={styles.content_featured__title}>
                  Технічні характеристики профільної системи REHAU Euro-Design
                  70
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Монтажна глибина
                    </div>
                    <div className={styles.options_content_featured__value}>
                      70мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      К-сть камер
                    </div>
                    <div className={styles.options_content_featured__value}>
                      5 камери
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Товищина склопакету
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 40мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт теплопередачі
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Uf = 1,3 -1,2 Вт/м2K
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт опору теплопередачі**
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rf = 0,77-0,80 м2K/Вт
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до Rw,P = 43 дБ
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Зламобезпека
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до класу 2 (ENV 1627)
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
              Профільна система REHAU Euro Design 70 відповідає високим
              стандартам енергозберігаючого будинку: при автономній системі
              опалення витрати на придбання цього типу вікон повністю окупаються
              через три-чотири роки, а Ваш будинок завжди залишатиметься теплим
              та затишним. Різноманітність форм і кольорів стулки із покращеним
              дизайном відкривають для цього великі можливості. За вимогами ДСТУ
              система рекомендована до застосування в І температурній зоні
              України.
            </p>
          </div>
          <div className={styles.text_block_image}>
            <img
              src={"/images/product/climukraine.webp"}
              alt="Кліматична карта України"
            />
          </div>
        </div>
        <Feedback id="form" />
      </section>
    </>
  );
};

export default RehauEuro60;
