import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/Products.module.scss";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Feedback from "./Feedback";

const Products = () => {
  return (
    <>
      <NextSeo
        title="Послуги компанії Rain Screen"
        description="Металопластикові вікна та двері Rehau м.Львів, Алюмінієві конструкції Aluprof м.Львів, Навісний вентильований фасад м.Львів"
        openGraph={{
          title: "Послуги компанії Rain Screen",
          description:
            "Металопластикові вікна та двері Rehau м.Львів, Алюмінієві конструкції Aluprof м.Львів, Навісний вентильований фасад м.Львів",
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
            Послуги компанії Rain Screen:
          </h1>
          <div className={styles.featured__container}>
            <div className={styles.featured__body}>
              <div
                className={`${styles.featured__images} ${styles.images_featured}`}
              >
                <div className={styles.images_featured__item}>
                  <img
                    itemProp="image"
                    src="/images/product/fasad/ventfasad1.png"
                    alt="featured"
                  />
                </div>
                <div
                  className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                >
                  <img
                    itemProp="image"
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
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    Вентильований фасад
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
                      Навісний вентильований фасад – це сучасна система
                      облицювання приватних, житлових будинків та технічних
                      приміщень. Компанія Rain Screen має не аби-який досвід
                      роботи з навісним вентильованим фасадом.
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
                <Link
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/AggregateOffer"
                  href={"/fasad"}
                  className={styles.content_featured__link}
                >
                  Дізнатися більше!
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          itemScope
          itemType="https://schema.org/Product"
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
                    src="/images/product/rehau/rehau1.jpg"
                    alt="featured"
                  />
                </div>
                <div
                  className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                >
                  <img
                    itemProp="image"
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
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    Металопластикові вікна Rehau
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
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
                <Link
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/AggregateOffer"
                  href={"/rehau"}
                  className={styles.content_featured__link}
                >
                  Дізнатися більше!
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          itemScope
          itemType="https://schema.org/Product"
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
                    src="/images/product/alum/alum_door.jpg"
                    alt="featured"
                  />
                </div>
                <div
                  className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                >
                  <img
                    itemProp="image"
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
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    Алюмінієві вікна, двері та розсувні системи Aluprof
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
                      Алюмінієві конструкції Aluprof - це практичний та стійкий
                      варіат будь-якої конструкції для вирішення будь-якого
                      будівельного завдання.
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
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/AggregateOffer"
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
          itemScope
          itemType="https://schema.org/Product"
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
                    src="/images/product/glassper/glassper1.jpg"
                    alt="featured"
                  />
                </div>
                <div
                  className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                >
                  <img
                    itemProp="image"
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
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    Скляні перегородки
                  </h2>
                  <div className={styles.content_featured__text}>
                    <p itemProp="description">
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
                  <Link
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/AggregateOffer"
                    href={"/contacts"}
                    className={styles.content_featured__link}
                  >
                    Дізнатися більше!
                  </Link>
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

export default Products;
