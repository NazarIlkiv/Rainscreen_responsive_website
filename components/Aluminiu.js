import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import Link from "next/link";

const alum = [
  {
    id: 1,
    title: "Aluprof MB-45",
    imgURL: "/images/alum/AluprofMB45.webp",
    desc: "МВ-45 є сучасною алюмінієвою системою, яка служить для виконання архітектурних елементів внутрішньої і зовнішньої забудов, що не вимагають термічної ізоляції, наприклад: різного виду внутрішніх перегородок, вікон, дверей, у тому числі пересуваються в ручну і автоматично, маятникових дверей, передпокоїв, вітрин, касових боксів, просторових конструкцій.",
    linkURL: "aluminievi-konstrukcii/aluprof-mb-45",
  },
  {
    id: 2,
    title: "Aluprof MB-79N",
    imgURL: "/images/alum/AluprofMB79N.webp",
    desc: "MB-79N - це найсучасніша в асортименті Aluprof економічна віконно-дверна система. Вона була розроблена з урахуванням підвищених вимог до теплоізоляційної здатності. Система служить для виготовлення цілого ряду конструкцій, зокрема, глухих, поворотних, відкидних, поворотно-відкидних та похило-зсувних вікон, зовнішніх двопольних і двопільних дверей, вітрин з дверима.",
    linkURL: "aluminievi-konstrukcii/aluprof-mb-79n",
  },
  {
    id: 3,
    title: "Aluprof MB-86N",
    imgURL: "/images/alum/AluprofMB86N.webp",
    desc: "Віконно-дверна система MB-86N - це продукт з дуже добрими параметрами, який дає можливість задовольнити різні потреби користувачів. Структура його профілів має 2 варіанти, залежно від вимог економії теплової енергії: ST та SI. MB-86N - це система, яка пропонує чудові теплові та герметичні параметри.",
    linkURL: "aluminievi-konstrukcii/aluprof-mb-86n",
  },
];

const Alum = () => {
  return (
    <>
      <h1
        className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title}`}
      >
        Алюмінієві конструкції
      </h1>
      <section className={styles.page}>
        {alum.map(({ id, title, imgURL, desc, linkURL }) => (
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
                    ></div>
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
        ))}
      </section>
    </>
  );
};

export default Alum;
