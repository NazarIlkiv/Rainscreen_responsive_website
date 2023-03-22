import { NextSeo } from "next-seo";
import Feedback from "./Feedback";
import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/Products.module.scss";

const Rehau = () => {
  return (
    <>
      <NextSeo
        title="Металопластикові вікна та двері Rehau за приємними цінами! - Rain Screen"
        description="Металопластикові вікна та двері Rehau м.Львів, Rehau Euro 70 м.Львів, Rehau Euro 60 м.Львів, Rehau Synego м.Львів"
        openGraph={{
          title:
            "Металопластикові вікна та двері Rehau за приємними цінами! - Rain Screen",
          description:
            "Металопластикові вікна та двері Rehau м.Львів, Rehau Euro 70 м.Львів, Rehau Euro 60 м.Львів, Rehau Synego м.Львів",
          images: [
            {
              url: "https://www.rainscreen.com.ua/images/product/rehau/rehau1.jpg",
              width: 800,
              height: 600,
              alt: "Послуги Rain Screen",
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
          itemType="https://schema.org/Product"
          id={styles.product_top}
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <h1
            className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title}`}
          >
            Металопластикові віконні системи Rehau
          </h1>
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemProp="image"
                    src="/images/rehauprofiles/euro60.jpg"
                    alt="featured"
                  />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    Віконна система Rehau Euro 60
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
                      Система з монтажною глибиною 60 мм є економічно
                      обгрунтованим вибором для застосування в різноманітних
                      будівельних проектах, оскільки забезпечує оптимальне
                      співвідношення ціни та якості.
                    </p>
                  </div>
                  <div
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/AggregateOffer"
                    className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                  >
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Конструктивна глибина
                      </div>
                      <div className={styles.options_content_featured__value}>
                        60мм
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        К-сть камер
                      </div>
                      <div className={styles.options_content_featured__value}>
                        3
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Колір
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Білий, кольоровий
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Склопакет
                      </div>
                      <div className={styles.options_content_featured__value}>
                        24мм
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Коефіцієнт теплопередачі
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Uf = 1,6 Вт/м²К
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Вартість м2:
                      </div>
                      <div className={styles.options_content_featured__value}>
                        <span itemProp="lowPrice" content="20">
                          15
                        </span>
                        <span itemProp="priceCurrency" content="USD">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          itemScope
          itemType="https://schema.org/Product"
          id={styles.product_top}
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemProp="image"
                    src="/images/rehauprofiles/euro70.jpg"
                    alt="featured"
                  />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    Віконна система Rehau Euro 70
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
                      Вікна з профільної системи Euro-Design 70 забезпечать
                      оптимальний рівень теплоізоляції Вашої оселі та допоможуть
                      зменшити тепловтрати у приміщенні, а отже – заощадити
                      кошти на опаленні та кондиціюванні.
                    </p>
                  </div>
                  <div
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/AggregateOffer"
                    className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                  >
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Конструктивна глибина
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
                        5
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Колір
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Білий, кольоровий
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Склопакет
                      </div>
                      <div className={styles.options_content_featured__value}>
                        40мм
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Коефіцієнт теплопередачі
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Uf = 1,3 -1,2 Вт/м²K
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Вартість м2:
                      </div>
                      <div className={styles.options_content_featured__value}>
                        <span itemProp="lowPrice" content="20">
                          20
                        </span>
                        <span itemProp="priceCurrency" content="USD">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          itemScope
          itemType="https://schema.org/Product"
          id={styles.product_top}
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemProp="image"
                    src="/images/rehauprofiles/rehau synego.png"
                    alt="featured"
                  />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    Віконна система Rehau Synego
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
                      Нові вікна SYNEGO – ідеальний спосіб заощадити! SYNEGO
                      пропонує Вам до 50% підвищення теплоізоляції у порівнянні
                      зі звичайними вікнами. З SYNEGO Ви зможете суттєво
                      скоротити витрати на опалення, натомість підвищити
                      вартість свого житла – сьогодні, завтра і в майбутньому...
                    </p>
                  </div>
                  <div
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/AggregateOffer"
                    className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                  >
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Конструктивна глибина
                      </div>
                      <div className={styles.options_content_featured__value}>
                        80мм
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        К-сть камер
                      </div>
                      <div className={styles.options_content_featured__value}>
                        7
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Колір
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Білий, кольоровий
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Склопакет
                      </div>
                      <div className={styles.options_content_featured__value}>
                        50мм
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Коефіцієнт теплопередачі
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Uf = 0,94 Вт/м²K
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Вартість м2:
                      </div>
                      <div className={styles.options_content_featured__value}>
                        <span itemProp="lowPrice" content="20">
                          35
                        </span>
                        <span itemProp="priceCurrency" content="USD">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Feedback />
    </>
  );
};

export default Rehau;
