import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/Products.module.scss";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Feedback from "./Feedback";

const products = [
  {
    id: 1,
    title: "Металопластикові вікна та двері Rehau",
    imgURL1: "/images/product/rehau/rehau1.webp",
    imgURL2: "/images/product/rehau/rehau_euro70_profile.webp",
    desc: "Вікна Rehau - це гарантія енергозбереження та комфорту для Вашої оселі.",
    item1: "Німеччина",
    item2: "3, 5, 7 та 9",
    item3: "2м х 2м",
    item4: "На Ваш вибір",
    linkURL: "metaloplastikovi-vikna-rehau",
  },
  {
    id: 2,
    title: "Алюмінієві вікна та двері Aluprof",
    imgURL1: "/images/product/alum/alum_door.webp",
    imgURL2: "/images/product/alum/cres_alum.webp",
    desc: "",
    item1: "Польща",
    item2: "залежить від системи",
    item3: "залежить від системи",
    item4: "На Ваш вибір",
    linkURL: "aluminievi-konstrukcii",
  },
];

const Products = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          title: "Послуги компанії Rain Screen",
          images: [
            {
              url: "https://www.rainscreen.com.ua/images/slider/slide1.webp",
              width: 800,
              height: 600,
              alt: "Послуги Rain Screen",
            },
          ],
          site_name: "Rain Screen",
        }}
      />
      <section className={styles.page}>
        <h1
          className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title}`}
        >
          Продукція
        </h1>
        {products.map(
          ({
            id,
            title,
            imgURL1,
            imgURL2,
            desc,
            item1,
            item2,
            item3,
            item4,
            linkURL,
          }) => (
            <section
              key={id}
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
                      <img itemProp="image" src={imgURL1} alt={title} />
                    </div>
                    <div
                      className={`${styles.images_featured__item} ${styles.images_featured__item_mini}`}
                    >
                      <img itemProp="image" src={imgURL2} alt={title} />
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
                        {title}
                      </h2>
                      <div className={styles.content_featured__text}>
                        <p itemProp="description">{desc}</p>
                      </div>
                      <div
                        className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                      >
                        <div className={styles.options_content_featured__item}>
                          <div
                            className={styles.options_content_featured__label}
                          >
                            Країна
                          </div>
                          <div
                            className={styles.options_content_featured__value}
                          >
                            {item1}
                          </div>
                        </div>
                        <div className={styles.options_content_featured__item}>
                          <div
                            className={styles.options_content_featured__label}
                          >
                            К-сть камер
                          </div>
                          <div
                            className={styles.options_content_featured__value}
                          >
                            {item2}
                          </div>
                        </div>
                        <div className={styles.options_content_featured__item}>
                          <div
                            className={styles.options_content_featured__label}
                          >
                            Макс розмір
                          </div>
                          <div
                            className={styles.options_content_featured__value}
                          >
                            {item3}
                          </div>
                        </div>
                        <div
                          className={styles.options_content_featured__item}
                        ></div>
                        <div className={styles.options_content_featured__item}>
                          <div
                            className={styles.options_content_featured__label}
                          >
                            Колір
                          </div>
                          <div
                            className={styles.options_content_featured__value}
                          >
                            {item4}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={linkURL}
                      className={styles.content_featured__link}
                    >
                      <div className={styles.color__link}>
                        Дізнатися більше!
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )
        )}
      </section>
      <Feedback />
    </>
  );
};

export default Products;
