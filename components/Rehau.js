import { NextSeo } from "next-seo";
import Feedback from "./Feedback";
import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/Products.module.scss";
import Link from "next/link";

const rehau = [
  {
    id: 1,
    title: "Віконна система Rehau Euro 60",
    imgURL: "/images/rehauprofiles/euro60.webp",
    desc: "Система з монтажною глибиною 60 мм є економічно обгрунтованим вибором для застосування в різноманітних будівельних проектах, оскільки забезпечує оптимальне співвідношення ціни та якості.",
    item1: "60мм",
    item2: "3",
    item3: "Білий, кольоровий",
    item4: "24мм",
    item5: "Uf = 1,6 Вт/м²К",
    linkURL: "metaloplastikovi-vikna-rehau/rehau-euro-60",
  },
  {
    id: 2,
    title: "Віконна система Rehau Euro 70",
    imgURL: "/images/rehauprofiles/euro70.webp",
    desc: "Вікна з профільної системи Euro-Design 70 забезпечать оптимальний рівень теплоізоляції Вашої оселі та допоможуть зменшити тепловтрати у приміщенні, а отже – заощадити кошти на опаленні та кондиціюванні.",
    item1: "70мм",
    item2: "5",
    item3: "Білий, кольоровий",
    item4: "32/40мм",
    item5: "Uf = 1,3 -1,2 Вт/м²K",
    linkURL: "metaloplastikovi-vikna-rehau/rehau-euro-70",
  },
  {
    id: 3,
    title: "Віконна система Rehau Synego",
    imgURL: "/images/rehauprofiles/rehausynego.webp",
    desc: "Нові вікна SYNEGO – ідеальний спосіб заощадити! SYNEGO пропонує Вам до 50% підвищення теплоізоляції у порівнянні зі звичайними вікнами. З SYNEGO Ви зможете суттєво скоротити витрати на опалення, натомість підвищити вартість свого житла – сьогодні, завтра і в майбутньому...",
    item1: "80мм",
    item2: "7",
    item3: "Білий, кольоровий",
    item4: "40/50мм",
    item5: "Uf = 0,94 Вт/м²K",
    linkURL: "metaloplastikovi-vikna-rehau/rehau-synego",
  },
  {
    id: 4,
    title: "Віконна система Rehau Geneo",
    imgURL: "/images/rehauprofiles/rehaugeneo.webp",
    desc: "REHAU GENEO (Рехау Генео) – це інноваційний продукт від компанії REHAU. Це унікальна 7-ти камерна профільна система глибиною 86 мм, виготовлена з матеріалу RAU-FIPRO. Основа профілю посилена скло-фіброю (питома межа міцності скловолокна втричі вища, ніж в сталі, а модуль пружності більш ніж в 15 разів вищий, ніж у бетону).",
    item1: "86мм",
    item2: "7",
    item3: "Білий, кольоровий",
    item4: "40/50мм",
    item5: "Uf = 0,89 Вт/м²K",
    linkURL: "metaloplastikovi-vikna-rehau/rehau-geneo",
  },
];

const Rehau = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          images: [
            {
              url: "https://www.rainscreen.com.ua/images/product/rehau/rehau1.webp",
              width: 800,
              height: 600,
              alt: "Послуги Rain Screen",
            },
          ],
          site_name: "Rain Screen",
        }}
      />
      <h1
        className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title}`}
      >
        Металопластикові віконні системи Rehau
      </h1>
      <section className={styles.page}>
        {rehau.map(
          ({
            id,
            title,
            imgURL,
            desc,
            item1,
            item2,
            item3,
            item4,
            item5,
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
                      <img itemProp="image" src={imgURL} alt={title} />
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
                            Конструктивна глибина
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
                            Колір
                          </div>
                          <div
                            className={styles.options_content_featured__value}
                          >
                            {item3}
                          </div>
                        </div>
                        <div className={styles.options_content_featured__item}>
                          <div
                            className={styles.options_content_featured__label}
                          >
                            Склопакет
                          </div>
                          <div
                            className={styles.options_content_featured__value}
                          >
                            {item4}
                          </div>
                        </div>
                        <div className={styles.options_content_featured__item}>
                          <div
                            className={styles.options_content_featured__label}
                          >
                            Коефіцієнт теплопередачі
                          </div>
                          <div
                            className={styles.options_content_featured__value}
                          >
                            {item5}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={linkURL}
                      className={styles.content_featured__link}
                    >
                      <div className={styles.color__link}>Дізнатися більше</div>
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

export default Rehau;
