import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/Products.module.scss";
import { NextSeo } from "next-seo";

const Alum = () => {
  return (
    <>
      <NextSeo
        title="Алюмінієві конструкції за приємними цінами! - Rain Screen"
        description="Алюмінієві вікна м.Львів, Алюмінієві вікна Aluprof м.Львів, Алюмінієві двері, Алюмінієві двері Львів"
        openGraph={{
          title: "Алюмінієві конструкції за приємними цінами! - Rain Screen",
          description:
            "Алюмінієві вікна м.Львів, Алюмінієві вікна Aluprof м.Львів, Алюмінієві двері, Алюмінієві двері Львів",
          images: [
            {
              url: "https://www.rainscreen.com.ua/images/slider/slide1.jpg",
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
      <main class="page">
        <section
          itemScope
          itemType="https://schema.org/Product"
          id={styles.product_top}
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <h1
            className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title}`}
          >
            Алюмінієві конструкції
          </h1>
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemProp="image"
                    src="/images/alum/alum2.jpeg"
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
                    Алюмінієві вікна Aluprof
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
                      Вікна з алюмінію - це практичний варіант віконної
                      конструкції. Вони легко миються, не вимагають складного
                      догляду, володіють стійкістю до іржі та не потребують
                      покривання поверхні лаком чи фарбою, на відміну від
                      дерев’яних аналогів. Оскільки алюміній є одним із
                      найлегших матеріалів, за його допомогою можна виготовити
                      віконну конструкцію будь-якої конфігурації відповідно до
                      побажань замовника.
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
                    src="/images/alum/alum1.jpg"
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
                    Алюмінієві двері Aluprof
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
                      Алюмінієві двері - це стильні, функціональні і довговічні
                      конструкції від виробника. Профільні системи та
                      технології, що застосовуються у виробництві алюмінієвих
                      конструкцій , дозволяють зберегти тепло і затишок Вашого
                      будинку, а також забезпечити абсолютну безпеку.
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
                    src="/images/alum/alum3.jpg"
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
                    Алюмінієві розсувні системи Aluprof
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
                      Алюмінієві розсувні системи це гарний і одночасно зручний
                      в повсякденному використанні варіант скління житлових
                      приміщень, терас і веранд, котеджів і будинків, квартир,
                      офісних і комерційних приміщень.
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
      </main>
    </>
  );
};

export default Alum;
