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
        <title>Металопластикові вікна з профілю - Rehau Euro Design 70</title>
        <meta
          name="description"
          content="Металопластикові вікна REHAU з профільної системи REHAU EURO 70 забезпечують високі показники енергозбереження. Купити вікна Рехау ☎096-362-99-39"
        />
        <meta
          property="og:title"
          content="Металопластикові вікна з профілю - Rehau Euro Design 70"
        />
        <meta
          property="og:description"
          content="Металопластикові вікна REHAU з профільної системи REHAU EURO 70 забезпечують високі показники енергозбереження. Купити вікна Рехау ☎096-362-99-39."
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/rehauprofiles/euro70.webp"
        />
      </Head>
      <h1 className={styles.title_center}>Віконна система Rehau Euro 70</h1>
      <section>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img
                  src={"/images/rehauprofiles/euro70.webp"}
                  alt="віконна система Rehau Euro 70"
                />
                <div className={styles.featured_price_body}>
                  <h2 className={styles.content_featured__title}>7550 грн</h2>
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
                  70
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Монтажна глибина
                    </div>
                    <div className={styles.options_content_featured__value}>
                      70мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      К-сть камер
                    </div>
                    <div className={styles.options_content_featured__value}>
                      5 камери
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Товищина склопакету
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 40мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт теплопередачі
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Uf = 1,3 -1,2 Вт/м2K
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт опору теплопередачі**
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rf = 0,77-0,80 м2K/Вт
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до Rw,P = 43 дБ
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Зламобезпека
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до класу 2 (ENV 1627)
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
            <p className={styles.text_post_text}>
              Профільна система REHAU Euro Design 70 відповідає високим
              стандартам енергозберігаючого будинку: при автономній системі
              опалення витрати на придбання цього типу вікон повністю окупаються
              через три-чотири роки, а Ваш будинок завжди залишатиметься теплим
              та затишним. Різноманітність форм і кольорів стулки із покращеним
              дизайном відкривають для цього великі можливості. За вимогами ДСТУ
              система рекомендована до застосування в І температурній зоні
              України.
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
          Особливості вікон з системи Rehau Euro-Design 70
        </h3>
        <div className={blogstyles.post_text}>
          Комфорт у вашому будинку починається з вікон REHAU Euro 70. Ці вікна
          мають високу якість і надійно захищають від холоду, спеки, пилу,
          вологості і шуму з вулиці, не перевантажуючи ваш бюджет.
        </div>
        <div className={blogstyles.post_text}>
          При розробці вікон REHAU Euro 70 було приділено особливу увагу їх
          теплоізоляційним властивостям. У поєднанні з енергозберігаючим
          2-камерним склопакетом (40 мм, заповнений аргоном, з двома шарами
          енергозберігаючого покриття - 4і-14Ar-4-14Ar-4i), ці вікна
          забезпечують високий рівень теплоізоляції. Коефіцієнт опору
          теплопередачі*: Rw = 0,975 м²К/Вт.
        </div>
        <div className={blogstyles.post_text}>
          Це відповідає останнім змінам в вимогах до теплоізоляції опалювальних
          приміщень у нових будівлях. Згідно з оновленими нормами ДБН для I
          температурної зони (яка охоплює більшість території України),
          мінімальний значення коефіцієнта опору теплопередачі повинно становити
          Rw min** = 0,90 м²К/Вт.
        </div>
        <div className={blogstyles.post_text}>
          Вікна REHAU Euro 70 - це надійний вибір для забезпечення високої
          теплоізоляції і комфорту в вашому будинку.
        </div>
        <h3 className={blogstyles.article_title}>
          Переваги вікон REHAU Euro 70
        </h3>
        <div className={blogstyles.post_text}>
          ● Ефективне зниження витрат на енергоспоживання - дозволяє вам
          заощаджувати на опаленні взимку і кондиціонуванні влітку.
        </div>
        <div className={blogstyles.post_text}>
          ● Більше природного світла - Тонкий профіль шириною 54 мм допускає
          більше природного світла всередину приміщення, що позитивно впливає на
          самопочуття мешканців.
        </div>
        <div className={blogstyles.post_text}>
          ● Ефективне зменшення шуму - Вікна добре затримують шум від галасливих
          вулиць і забезпечують високий рівень захисту від вторгнення.
        </div>
        <div className={blogstyles.post_text}>
          ● Сучасний вибір дизайну - Широка палітра декорів відкриває безліч
          можливостей для створення вікон, що відображають ваш стиль.
        </div>
        <div className={blogstyles.post_text}>
          ● Технологія EcoPuls - забезпечує виробництво екологічно чистих вікон,
          які відповідають високим стандартам якості REHAU.
        </div>
        <div className={blogstyles.post_text}>
          Завдяки відмінним базовим характеристикам і збалансованій ціні, Euro
          70 став найбільш популярним вибором для теплого скління:
        </div>
        <div className={blogstyles.post_text}>
          ● Будинків з центральною системою опалення.
        </div>
        <div className={blogstyles.post_text}>
          ● Термомодернізації старого житлового фонду.
        </div>
        <div className={blogstyles.post_text}>
          ● Оптимальним вибором для об&#39єктного, приватного будівництва або
          комерційної нерухомості.
        </div>
        <div className={blogstyles.post_text}>
          Вікна Rehau Euro-Design 70 - це надійне рішення, яке забезпечує
          ефективну теплоізоляцію і виглядає сучасно і привабливо.
        </div>
        <h3 className={blogstyles.article_title}>
          Де купити вікна Rehau Euro-Design 70?
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
