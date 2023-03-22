import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/Products.module.scss";
import Head from "next/head";

const Alum = () => {
  return (
    <>
      <Head>
        <title>Алюмінієві конструкції м.Львів</title>
      </Head>
      <main class="page">
        <section
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
                  <img src="/images/alum/alum2.jpeg" alt="featured" />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2 className={styles.content_featured__title}>
                    Алюмінієві вікна
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p>
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id={styles.product_top}
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img src="/images/alum/alum1.jpg" alt="featured" />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2 className={styles.content_featured__title}>
                    Алюмінієві двері
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p>
                      Алюмінієві двері - це стильні, функціональні і довговічні
                      конструкції від виробника. Профільні системи та
                      технології, що застосовуються у виробництві алюмінієвих
                      конструкцій , дозволяють зберегти тепло і затишок Вашого
                      будинку, а також забезпечити абсолютну безпеку.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id={styles.product_top}
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img src="/images/alum/alum3.jpg" alt="featured" />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2 className={styles.content_featured__title}>
                    Алюмінієві розсувні системи
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p>
                      Алюмінієві розсувні системи це гарний і одночасно зручний
                      в повсякденному використанні варіант скління житлових
                      приміщень, терас і веранд, котеджів і будинків, квартир,
                      офісних і комерційних приміщень.
                    </p>
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
