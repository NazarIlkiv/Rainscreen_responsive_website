import React from "react";
import repeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import blogstyles from "@/styles/Blog.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import Head from "next/head";

const RehauEuro60 = () => {
  return (
    <>
      <Head>
        <title>Металопластикові вікна з профілю - Rehau Euro Design 60</title>
        <meta
          name="description"
          content="Металопластикові вікна REHAU EURO 60 - це ідеальне рішення якості і економічності. Чудово підходить для засклення балкону та міжкімнатних дверей."
        />
        <meta
          property="og:title"
          content="Металопластикові вікна з профілю - Rehau Euro Design 60"
        />
        <meta
          property="og:description"
          content="Металопластикові вікна REHAU EURO 60 - це ідеальне рішення якості і економічності. Чудово підходить для засклення балкону та міжкімнатних дверей."
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/rehauprofiles/euro60.webp"
        />
      </Head>
      <h1 className={styles.title_center}>Віконна система Rehau Euro 60</h1>
      <section>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img
                  src={"/images/rehauprofiles/euro60.webp"}
                  alt="Металопластикова віконна система Rehau Eurp 60"
                />
                <div className={styles.featured_price_body}>
                  <h2 className={styles.content_featured__title}>6550 грн</h2>
                  <div className={styles.options_content_featured__value}>
                    Розмір <b>1500x1500</b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.features__content} ${styles.content_featured}`}
            >
              <div className={styles.content_featured__body}>
                <h2 className={styles.content_featured__title}>
                  Технічні характеристики профільної системи REHAU Euro-Design
                  60
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Монтажна глибина
                    </div>
                    <div className={styles.options_content_featured__value}>
                      60мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      К-сть камер
                    </div>
                    <div className={styles.options_content_featured__value}>
                      3 камери
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Товищина склопакету
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 32мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт теплопередачі
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Uf = 1,6 Вт/м2К
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт опору теплопередачі**
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rf = 0,65 м2К/Вт
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rw,P = 41 дБ
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Зламобезпека
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до класу RC2 (ENV 1627)
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
              Профіль REHAU Euro-Design 60 має трьохкамерну будову з монтажною
              глибиною 60 мм. За вимогами ДСТУ система рекомендована до
              застосування в ІІ температурній зоні України (Південь країни та
              Закарпаття). В І температурній зоні така система застосовується
              для технічних та нежитлових приміщень.
            </p>
          </div>
          <div className={styles.text_block_image}>
            <img
              src={"/images/product/climukraine.webp"}
              alt="Кліматична карта України"
            />
          </div>
        </div>
        <h3 className={blogstyles.article_title}>
          Вікна Euro-Design 60 від Рехау - це оптимальне поєднання якості і
          доступної ціни!
        </h3>
        <div className={blogstyles.post_text}>
          Виробництво вікон Рехау здійснюється в Німеччині, але наша компанія є
          імпортером всіх профілів і віконних систем, які ми продаємо та
          встановлюємо за вигідними цінами.
        </div>
        <div className={blogstyles.post_text}>
          Вікна Euro-Design 60 від Рехау є найкращим вибором, якщо ви цінуєте
          шумоізоляцію і енергоефективність. Цей профіль часто використовується
          для виготовлення балконних дверей та великих вікон. Віконні системи
          підходять як для новобудов, так і для квартир, що належать до
          вторинної нерухомості.
        </div>
        <div className={blogstyles.post_text}>
          Euro-Design 60 від Рехау - це надійний вибір, який гарантує якість і
          задовольняє ваші потреби у шумоізоляції та енергоефективності.
        </div>
        <h3 className={blogstyles.article_title}>
          Переваги вікон REHAU Euro 60
        </h3>
        <div className={blogstyles.post_text}>
          Профіль REHAU Euro 60 має численні переваги, які роблять його вигідним
          вибором для використання в будівництві.
        </div>
        <div className={blogstyles.post_text}>
          ● Висока теплоізоляція: Трикамерна будова профілю Euro 60 забезпечує
          ефективну теплоізоляцію. Це дозволяє зберігати тепло у приміщенні і
          знижувати витрати на опалення, зокрема в умовах ІІ температурної зони
          України, де важливо зберігати тепло в приміщенні.
        </div>
        <div className={blogstyles.post_text}>
          ● Економічний вибір: Система з монтажною глибиною 60 мм є економічно
          обгрунтованим вибором, оскільки поєднує оптимальне співвідношення ціни
          і якості. Це робить її популярним вибором для різних типів будівельних
          проектів.
        </div>
        <div className={blogstyles.post_text}>
          ● Використання в різних проектах: Вікна з трикамерною профільною
          системою ідеально підходять для засклення балконних блоків, балконів
          та лоджій. Вони також оптимальні для засклення міжповерхових маршів у
          багатоквартирних будинках. Ця система підходить для будівель з
          центральною системою опалення, де немає особливих вимог до тепло- і
          звукоізоляції.
        </div>
        <div className={blogstyles.post_text}>
          Профіль REHAU Euro 60 - це надійне і практичне рішення, яке забезпечує
          якість, ефективність та економічність у будівництві.
        </div>
        <h3 className={blogstyles.article_title}>
          Де купити вікна Rehau Euro-Design 60?
        </h3>
        <div className={blogstyles.post_text}>
          Купуйте високоякісні вікна Рехау від німецького виробника за доступною
          ціною у Львові. Вартість буде залежати від розмірів, дизайну та
          обраної фурнітури. Покупка вікон Рехау варта уваги також тому, що вони
          мають привабливий та елегантний зовнішній вигляд. А головне - вони є
          надійними та високоякісними!
        </div>
        <Feedback id="form" />
      </section>
    </>
  );
};

export default RehauEuro60;
