import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/Products.module.scss";
import { NextSeo } from "next-seo";

export async function getServerSideProps() {
  const myArray = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  return {
    props: {
      myArray,
    },
  };
}

const ventFasad = [
  {
    id: 1,
    imageURL: "/images/fasad/fasad2.jpg",
    title: "Фасад з алюмінієвих композитних панелей",
    description:
      "Композитні панелі, що використовуються для даного облицювання є багатошаровим матеріалом, що представляє собою своєрідний сендвіч із двох шарів тонкого листового алюмінію й полімерного наповнювача між ними. Матеріал був розроблений спеціально для облицювання різноманітних будівельних конструкцій і фасадів будинків, має високі технологічні показники, відмінне різноманіття кольорів, тому на ринку є найбільш затребуваним.",
  },
  {
    id: 2,
    imageURL: "/images/fasad/fasad3.jfif",
    title: "Вентильований фасад",
    description:
      "Навісний вентильований фасад – це сучасна система облицювання приватних, житлових будинків та технічних приміщень.",
  },
  {
    id: 3,
    imageURL: "/images/fasad/fasad1.jpg",
    title: "Фасад з натурального каменю",
    description:
      "Можливості натурального каменю не обмежуються класичним облицюванням підлоги і стін, характерним для керамічної плитки. Цей штучний камінь відрізняється своєю високою міцністю і морозостійкістю, саме тому його використовують у складі навісних фасадних систем.",
  },
  {
    id: 4,
    imageURL: "/images/fasad/fasad4.jpg",
    title: "Фасад з HPL-панелей",
    description:
      "Можливості натурального каменю не обмежуються класичним облицюванням підлоги і стін, характерним для керамічної плитФасад з HPL-панелей – це міцний сучасний матеріал, виготовлений шляхом пресування при високій температурі і тиску. Дана панель є пожежобезпечна, екологічно чиста і досить міцна. Дозволяє втілювати сучасний дизайн фасаду натуральними матеріалами під вигляд дерева, каменю.ки. Цей штучний камінь відрізняється своєю високою міцністю і морозостійкістю, саме тому його використовують у складі навісних фасадних систем.",
  },
  {
    id: 5,
    imageURL: "/images/fasad/fasad5.png",
    title: "Фасад з профлисту",
    description:
      "Представляє собою будівельний матеріал, у вигляді металевого листа, виготовленого з листової оцинкованої сталі холодною прокаткою. Серед сучасних недорогих, естетичних фасадних систем профільований лист займає місце на ринку за рахунок високого попиту забудовників, які займаються будівництвом заміської нерухомості та інших об'єктів, а також їх компонентів (огорожі, паркани, навіси тощо).",
  },
  {
    id: 6,
    imageURL: "/images/fasad/fasad6.jpg",
    title: "Фасад з кварцових плит",
    description:
      "Кварцові плити – це композиція з натуральних матеріалів, зокрема кварц, сланцева глина, гранітні породи та керамічні пігменти. Кварцові плити мають не тільки надвисокі властивості, але й сучасний дизайн, що відповідає очікуванням найвибагливіших замовників, кількість позицій Laminam складається з приблизно 150 різноманітних візерунків, що імітують природний камінь, дерево, метал і навіть вугілля. Плити повторюють не тільки малюнок окремих матеріалів, але і їх текстуру.",
  },
  {
    id: 7,
    imageURL: "/images/fasad/fasad7.jpg",
    title: "Фальцевий фасад",
    description:
      "Для створення фальцевого фасаду підходять листи сталі, міді, алюмінію та цинку. Можливості сучасного сталевого прокату з полімерним покриттям забезпечує фальцевому облицюванню чудові споживчі характеристики. Використання цієї технології у рази знижує рівень впливу зовнішніх факторів, збільшує термін експлуатації на десятки років.",
  },
];

const Fasad = () => {
  return (
    <>
      <NextSeo
        title="Навісний вентильований фасад - Rain Screen"
        description="Навісний вентильований фасад м.Львів, Фасад з HPL-панелей м.Львів, Фасад з фіброцементових плит м.Львів, Скляний фасад м.Львів"
        openGraph={{
          title: "Навісний вентильований фасад - Rain Screen",
          description:
            "Навісний вентильований фасад м.Львів, Фасад з HPL-панелей м.Львів, Фасад з фіброцементових плит м.Львів, Скляний фасад м.Львів",
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
        <h1
          className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title__2}`}
        >
          Навісний вентильований фасад
        </h1>
        {ventFasad.map(({ id, imageURL, title, description }) => (
          <section
            key={id}
            id={styles.product_top}
            className={`${styles.page__featured} ${styles.featured}`}
          >
            <div className={styles.featured__container}>
              <div className={styles.featured__body}>
                <div
                  className={`${styles.featured__images} ${styles.images_featured}`}
                >
                  <div className={styles.images_featured__item}>
                    <img src={imageURL} alt="featured" />
                  </div>
                </div>
                <div
                  className={`${styles.features__content} ${styles.content_featured}`}
                >
                  <div className={styles.content_featured__body}>
                    <h2 className={styles.content_featured__title}>{title}</h2>
                    <div className={styles.content_featured__text}>
                      <p>{description}</p>
                    </div>
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

export default Fasad;
