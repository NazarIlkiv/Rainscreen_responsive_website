import React from "react";
import repeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import blogstyles from "@/styles/Blog.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import Head from "next/head";

const AluprofMB86N = () => {
  return (
    <>
      <Head>
        <title>
          Віконно-двера алюмінієва система Aluprof MB-86N у м.Львові
        </title>
        <meta
          name="description"
          content="Віконно-дверна система Aluprof MB-86N - це продукт з хорошими параметрами, які дають змогу задовольнити різні потреби клієнтів."
        />
        <meta
          property="og:title"
          content="Віконно-двера алюмінієва система Aluprof MB-86N у м.Львові"
        />
        <meta
          property="og:description"
          content="Віконно-дверна система Aluprof MB-86N - це продукт з хорошими параметрами, які дають змогу задовольнити різні потреби клієнтів."
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/alum/AluprofMB86N.webp"
        />
      </Head>
      <h1 className={styles.title_center}>
        Віконно-дверна система Aluprof MB-86N
      </h1>
      <section>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img
                  src={"/images/alum/AluprofMB86N.webp"}
                  alt="Віконно-дверна система Aluprof MB-86N"
                />
                <div className={styles.featured_price_body}>
                  <h2 className={styles.content_featured__title}>14 200 грн</h2>
                </div>
              </div>
            </div>
            <div
              className={`${styles.features__content} ${styles.content_featured}`}
            >
              <div className={styles.content_featured__body}>
                <h2 className={styles.content_featured__title}>
                  Технічні характеристики системи Aluprof MB-86N
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Мін. видима ширина рами
                    </div>
                    <div className={styles.options_content_featured__value}>
                      48 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Мін. видима ширина стулки
                    </div>
                    <div className={styles.options_content_featured__value}>
                      66,5 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Глибина профілів
                    </div>
                    <div className={styles.options_content_featured__value}>
                      48 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Товщина заповнення
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 30 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Відповідає 5-6-й категорії
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={"/contacts"}
                className={styles.content_featured__link}
              >
                <div className={styles.color__link}>Розрахувати вікно</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.text_block_body}>
          <div className={styles.text_block_content}>
            <p className={blogstyles.post_text}>
              Віконно-дверна система Aluprof MB-86N - це продукт з дуже добрими
              параметрами, який дає можливість задовольнити різні потреби
              користувачів. Структура його профілів має 2 варіанти, залежно від
              вимог економії теплової енергії: ST та SI. MB-86N - це система,
              яка пропонує чудові теплові та герметичні параметри.
            </p>
          </div>
          <div className={styles.text_block_image}>
            <img
              src={"/images/alum/86n.webp"}
              alt="Вітрини із системи Aluprof MB-86N"
            />
          </div>
        </div>
        <h3 className={blogstyles.article_title}>
          Віконно-дверна система Aluprof MB-86N - система, яка пропонує чудові
          теплові та герметичні параметри!
        </h3>
        <div className={blogstyles.post_text}>
          Віконно-дверна система Aluprof MB-86N - система, яка пропонує чудові
          теплові та герметичні параметри!
        </div>
        <div className={blogstyles.post_text}>
          ● Скляний ущільнювач: забезпечує оптимальний захист від проникнення
          води.
        </div>
        <div className={blogstyles.post_text}>
          ● Дизайн стулки: стулка має сучасний і стильний дизайн.
        </div>
        <div className={blogstyles.post_text}>
          ● Скляна стрічка: забезпечує необхідний контактний тиск між
          ущільнювачами та склом.
        </div>
        <div className={blogstyles.post_text}>
          ● Рівні ущільнення: два рівні ущільнення забезпечують хорошу тепло- та
          звукоізоляцію.
        </div>
        <div className={blogstyles.post_text}>
          ● Камери профілю: профілі розділені на кілька камер для досягнення
          високого рівня теплоізоляції.
        </div>
        <div className={blogstyles.post_text}>
          ● Теплоізоляція: спеціальний теплоізоляційний проміжний шар забезпечує
          високу теплоізоляцію.
        </div>
        <h3 className={blogstyles.article_title}>Переваги Aluprof MB-86N:</h3>
        <div className={blogstyles.post_text}>
          Максимальна безпека з алюмінієм
        </div>
        <div className={blogstyles.post_text}>
          Алюміній забезпечує найвищий рівень безпеки порівняно з профілями з
          дерева та ПВХ. Для відкриття алюмінієвих профілів, таких як ALUPROF
          MB-86N, потрібно мати декілька важких інструментів, оскільки їх важко
          розкрити. Це пояснюється високою стійкістю рам до механічних
          пошкоджень. Внаслідок цього практично неможливо знайти місце, куди
          можна було б вставити лом або подібний інструмент. Тому також варто
          вибирати захисне скління, щоб не залишити слабких місць у вікнах.
          Алюмінієві вікна також відрізняються стабільністю своїх конструкційних
          властивостей. Ця висока міцність рами дозволяє використовувати більше
          площі вікон, ніж з іншими матеріалами.
        </div>
        <div className={blogstyles.post_text}>
          Оптимальна теплоізоляція завдяки алюмінію
        </div>
        <div className={blogstyles.post_text}>
          Алюмінієві вікна з профілем ALUPROF MB-86 мають відмінні теплотехнічні
          характеристики. На перший погляд, це може здатися несподіваним для
          алюмінію, оскільки метал є хорошим провідником тепла і зазвичай
          дозволяє теплу розсіюватися на вулицю взимку. Тому важливо не
          економити на теплоізоляції, коли мова йде про алюмінієві вікна.
          Застосування відповідного ізоляційного матеріалу в рамках допомагає
          досягти оптимальної продуктивності, яка відповідає найвищим вимогам.
          Профіль ALUPROF MB-86N успішно справляється з цим завданням, що робить
          його ідеальним вибором для енергоефективних будівель і ремонтів. Окрім
          досягнення енергоефективності, зниженнявитрат на опалення та захисту
          навколишнього середовища, хороша ізоляція також допомагає забезпечити
          захист від шуму.
        </div>
        <div className={blogstyles.post_text}>
          Сучасний дизайн з ALUPROF MB-86N
        </div>
        <div className={blogstyles.post_text}>
          Алюмінієві вікна є універсальним доповненням до будь-якого дизайну.
          Стильний алюміній ідеально поєднується з чистими лініями і кутами, які
          є невід&#39ємною частиною сучасної архітектури. Його пуристична
          елегантність та простота особливо добре виглядають в поєднанні з
          алюмінієм і великими скляними поверхнями. Ви також маєте практично
          необмежену свободу вираження власних ідей, обираючи з широкого спектру
          кольорів RAL і спеціальних кольорів. Якщо бажаєте, ваші алюмінієві
          вікна MB-86 можуть навіть мати вигляд дерева або інших високоякісних
          альтернативних стилів. Останні особливо корисні, наприклад, для
          створення натурального дизайну інтер&#39єру, де дерево відіграє
          важливу роль.
        </div>
        <div className={blogstyles.post_text}>
          Таким чином, алюмінієві вікна з профілем ALUPROF MB-86 поєднують в
          собі максимальну безпеку, оптимальну теплоізоляцію та сучасний дизайн.
          Вони є надійним та стійким вибором для будівель, які прагнуть досягти
          енергоефективності та створити комфортне життєве середовище!
        </div>
        <h3 className={blogstyles.article_title}>
          Де купити вікна Aluprof MB-86N
        </h3>
        <div className={blogstyles.post_text}>
          Купуйте високоякісні алюмінієві конструкції Алупроф за доступною ціною
          у Львові. Вартість буде залежати від розмірів, дизайну та обраної
          фурнітури. Покупка алюмінієвих конструкцій Алупроф варта уваги також
          тому, що вони мають привабливий та елегантний зовнішній вигляд. А
          головне - вони є надійними та високоякісними!
        </div>
        <Feedback id="form" />
      </section>
    </>
  );
};

export default AluprofMB86N;
