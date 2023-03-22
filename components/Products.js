import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/Products.module.scss";
import Head from "next/head";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <Head>
        <title>Послуги компанії Rain Screen</title>
      </Head>
      <main className={styles.page}>
        <section
          itemscope
          itemtype="https://schema.org/Product"
          id={styles.product_top}
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <h1
            className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title}`}
          >
            Послуги компанії Rain Screen:
          </h1>
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemprop="image"
                    src="/images/product/fasad/ventfasad1.png"
                    alt="featured"
                  />
                </div>
                <div
                  className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                >
                  <img
                    itemprop="image"
                    src="/images/product/fasad/cres_ventfasad.jpg"
                    alt="featured"
                  />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2
                    itemprop="name"
                    className={styles.content_featured__title}
                  >
                    Вентильований фасад
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemprop="description">
                      Навісний вентильований фасад – це сучасна система
                      облицювання приватних, житлових будинків та технічних
                      приміщень.
                    </p>
                  </div>
                  <div
                    className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                  >
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Фасад з натур. каменю
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Фасад з HPL панелей
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Фасад з алюм. композитних панелей
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Фасад з профлиста
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Фасад з кварцевих плит
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Фальцевий фасад
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={"/fasad"} className={styles.content_featured__link}>
                  Дізнатися більше!
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          itemscope
          itemtype="https://schema.org/Product"
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemprop="image"
                    src="/images/product/rehau/rehau1.jpg"
                    alt="featured"
                  />
                </div>
                <div
                  className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                >
                  <img
                    itemprop="image"
                    src="/images/product/rehau/rehau_euro70_profile.jpg"
                    alt="featured"
                  />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2
                    itemprop="name"
                    className={styles.content_featured__title}
                  >
                    Металопластикові вікна та двері Rehau
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemprop="description">
                      Вікна Rehau - це гарантія енергозбереження та комфорту для
                      Вашої оселі.
                    </p>
                  </div>
                  <div
                    className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                  >
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Країна
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Німеччина
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        К-сть камер
                      </div>
                      <div className={styles.options_content_featured__value}>
                        3, 5, 7 та 9
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Макс розмір
                      </div>
                      <div className={styles.options_content_featured__value}>
                        2м х 2м
                      </div>
                    </div>
                    <div
                      className={styles.options_content_featured__item}
                    ></div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Колір
                      </div>
                      <div className={styles.options_content_featured__value}>
                        На Ваш вибір
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Рівень енерг.
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Високий
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={"/rehau"} className={styles.content_featured__link}>
                  Дізнатися більше!
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          itemscope
          itemtype="https://schema.org/Product"
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemprop="image"
                    src="/images/product/alum/alum_door.jpg"
                    alt="featured"
                  />
                </div>
                <div
                  className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                >
                  <img
                    itemprop="image"
                    src="/images/product/alum/cres_alum.jpg"
                    alt="featured"
                  />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2
                    itemprop="name"
                    className={styles.content_featured__title}
                  >
                    Алюмінієві вікна, двері та розсувні системи
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemprop="description">
                      Вікна з алюмінію - це практичний та стійкий варіат
                      будь-якої конструкції.
                    </p>
                  </div>
                  <div
                    className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                  >
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Країна
                      </div>
                      <div className={styles.options_content_featured__value}>
                        Німеччина, Польща, Туреччина
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        К-сть камер
                      </div>
                      <div className={styles.options_content_featured__value}>
                        залежить від системи
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Макс розмір
                      </div>
                      <div className={styles.options_content_featured__value}>
                        залежить від системи
                      </div>
                    </div>
                    <div
                      className={styles.options_content_featured__item}
                    ></div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Колір
                      </div>
                      <div className={styles.options_content_featured__value}>
                        На Ваш вибір
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Рівень енерг.
                      </div>
                      <div className={styles.options_content_featured__value}>
                        залежить від системи
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={"/aluminiu"}
                  className={styles.content_featured__link}
                >
                  Дізнатися більше!
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          itemscope
          itemtype="https://schema.org/Product"
          className={`${styles.page__featured} ${styles.featured}`}
        >
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemprop="image"
                    src="/images/product/glassper/glassper1.jpg"
                    alt="featured"
                  />
                </div>
                <div
                  className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                >
                  <img
                    src="/images/product/glassper/cres_glassper.png"
                    alt="featured"
                  />
                </div>
              </div>
              <div
                className={`${styles.features__content} ${styles.content_featured}`}
              >
                <div className={styles.content_featured__body}>
                  <h2
                    itemprop="name"
                    className={styles.content_featured__title}
                  >
                    Скляні перегородки
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemprop="description">
                      Скляні перегородки – функціональні і естетичні
                      конструкційні елементи сучасних інтер`єрів, використання
                      яких актуально в різних ситуаціях.
                    </p>
                  </div>
                  <div
                    className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                  >
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Скляні стаціонарні перегородки
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Складені перегородки
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Радіусні скляні перегородки(душові)
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Розсувні скляні перегородки
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        перегородки трансформери
                      </div>
                    </div>
                    <div className={styles.options_content_featured__item}>
                      <div className={styles.options_content_featured__label}>
                        Скляні перила
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

export default Products;
