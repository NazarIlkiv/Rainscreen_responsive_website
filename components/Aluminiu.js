import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import { NextSeo } from "next-seo";

const alum = [
  {
    id: 1,
    title: "Алюмінієві вікна",
    imgURL: "/images/alum/alum2.webp",
    desc: "Вікна з алюмінію - це практичний варіант віконної конструкції. Вони легко миються, не вимагають складного догляду, володіють стійкістю до іржі та не потребують покривання поверхні лаком чи фарбою, на відміну від дерев’яних аналогів. Оскільки алюміній є одним із найлегших матеріалів, за його допомогою можна виготовити віконну конструкцію будь-якої конфігурації відповідно до побажань замовника.",
  },
  {
    id: 2,
    title: "Алюмінієві двері",
    imgURL: "/images/alum/alum1.webp",
    desc: "Алюмінієві двері - це стильні, функціональні і довговічні конструкції від виробника. Профільні системи та технології, що застосовуються у виробництві алюмінієвих конструкцій , дозволяють зберегти тепло і затишок Вашого будинку, а також забезпечити абсолютну безпеку.",
  },
  {
    id: 3,
    title: "Алюмінієві розсувні системи",
    imgURL: "/images/alum/alum3.webp",
    desc: "Алюмінієві розсувні системи це гарний і одночасно зручний в повсякденному використанні варіант скління житлових приміщень, терас і веранд, котеджів і будинків, квартир, офісних і комерційних приміщень.",
  },
];

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
              url: "https://www.rainscreen.com.ua/images/slider/slide1.webp",
              width: 800,
              height: 600,
              alt: "Послуги Rain Screen",
            },
          ],
          site_name: "Rain Screen",
        }}
      />
      <main className={styles.page}>
        <h1
          className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title}`}
        >
          Алюмінієві конструкції
        </h1>
        {alum.map(({ id, title, imgURL, desc }) => (
          <section
            key={id}
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
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/AggregateOffer"
                      className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Alum;
