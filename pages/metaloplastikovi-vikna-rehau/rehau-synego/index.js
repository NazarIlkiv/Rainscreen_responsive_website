import React from "react";
import styles from "@/styles/Products.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import blogstyles from "@/styles/Blog.module.scss";
import Head from "next/head";

const RehauEuro60 = () => {
  return (
    <>
      <Head>
        <title>Металопластикові вікна з профілю - Rehau Synego</title>
        <meta
          name="description"
          content="Металопластикові вікна REHAU SYNEGO ➜ система преміум-класу, на 80% тепліше, ніж звичайні вікна. Купити вікна з профілю рехау сінего - ☎ 096-362-99-39"
        />
        <meta
          property="og:title"
          content="Металопластикові вікна з профілю - Rehau Synego"
        />
        <meta
          property="og:description"
          content="Металопластикові вікна REHAU SYNEGO ➜ система преміум-класу, на 80% тепліше, ніж звичайні вікна. Купити вікна з профілю рехау сінего - ☎ 096-362-99-39"
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/rehauprofiles/rehausynego.webp"
        />
      </Head>
      <h1 className={styles.title_center}>Віконна система Rehau Synego</h1>
      <section>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img
                  src={"/images/rehauprofiles/rehausynego.webp"}
                  alt="Металопластикова віконна система Rehau Synego"
                />
                <div className={styles.featured_price_body}>
                  <h2 className={styles.content_featured__title}>8495 грн</h2>
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
                  Технічні характеристики профільної системи REHAU Synego
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Монтажна глибина
                    </div>
                    <div className={styles.options_content_featured__value}>
                      80мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      К-сть камер
                    </div>
                    <div className={styles.options_content_featured__value}>
                      рама 7 камер, стулка 6 камер
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Товищина склопакету
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 50 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт теплопередачі
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Uf = 0,94 Вт/м2K
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт опору теплопередачі**
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rf = 1,06 м2K/Вт
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до Rw,P = 46 дБ
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Зламобезпека
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до класу RC3
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
              Віконний профіль Rehau Synego – це інноваційна розробка, здатна
              подарувати вашій оселі тепло та спокій при будь-якій негоді за
              вікном. Палке літнє сонце та люті зимові морози залишатимуться за
              вікном, не впливаючи на комфортний мікроклімат в кімнаті. Вітер,
              сніг та дощі завжди будуть знаходитись по іншу сторону вікна, не
              втручаючись у ваш спокій. Щоб ваша оселя завжди була в затишку,
              компанія Rehau виготовила унікальну конструкцію з шириною 80
              міліметрів, 6 камерами в створці та 7 камерами в рамі. Різниця між
              звичайними вікнами і Rehau Synego – величезна!
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
          Особливості вікон Rehau SYNEGO
        </h3>
        <div className={blogstyles.post_text}>
          Вікна SYNEGO з маркуванням EcoPuls містять понад 40% високоякісних
          перероблених матеріалів, які отримуються завдяки внутрішньому
          замкнутому циклу виробництва REHAU. Це означає, що кожного разу, коли
          ви насолоджуєтесь комфортом у своєму будинку, ви одночасно дбаєте про
          довкілля.
        </div>
        <div className={blogstyles.post_text}>
          З вікнами SYNEGO ви отримуєте гарантовану економію на багато років
          вперед:
        </div>
        <div className={blogstyles.post_text}>
          - Підтверджений випробуваннями коефіцієнт теплопровідності (Uw) для
          вікон SYNEGO MD (з додатковим середнім ущільненням) на 45% кращий у
          порівнянні зі стандартними вікнами.
        </div>
        <div className={blogstyles.post_text}>
          - Вікна з профілю SYNEGO MD відповідають стандартам пасивного будинку
          відповідно до ift-Richtlinien.
        </div>
        <div className={blogstyles.post_text}>
          Навіть у довгостроковій перспективі такі вікна відповідатимуть вимогам
          щодо енергоефективності і зберігатимуть цінність вашої нерухомості без
          додаткових витрат на амортизацію.
        </div>
        <h3 className={blogstyles.article_title}>
          Переваги вікон REHAU SYNEGO
        </h3>
        <div className={blogstyles.post_text}>
          ● Rehau значно зменшить ваші витрати на опалення завдяки надзвичайно
          високому рівню теплозбереження профілю Synego.
        </div>
        <div className={blogstyles.post_text}>
          ● Покращений показник звукоізоляції до 46 дБ.
        </div>
        <div className={blogstyles.post_text}>
          ● Третій контур ущільнення надає додатковий захист від пилу та
          вологості.
        </div>
        <div className={blogstyles.post_text}>
          ● Унікальна формула ПВХ-пластику зробила поверхню ще більш гладкою. І
          навіть після довгих років експлуатації вікна залишатимуться як нові.
        </div>
        <div className={blogstyles.post_text}>
          ● Завдяки великому вибору додаткових дизайнерських елементів ви можете
          створити унікальне вікно, яке підійде саме для вас.
        </div>
        <div className={blogstyles.post_text}>
          Необхідно також звернути увагу на опцію третього контуру ущільнення
          для профільної системи REHAU SYNEGO. Третій контур ущільнення типу
          "пелюстка" значно підвищує практично всі характеристики вікна.
        </div>
        <div className={blogstyles.post_text}>
          ● <b>Звукоізоляція.</b> Жвавий шум магістралі та різні зовнішні звуки
          більше не заважатимуть вашому спокою і сну. Вікна з профільною
          системою REHAU SYNEGO з третім контуром ущільнення найкращим чином
          захистять ваше житло від зайвих шумів.
        </div>
        <div className={blogstyles.post_text}>
          ● <b>Захист від пилу та вологості</b> Вікна з такою профільною
          системою стануть відмінним рішенням для мешканців верхніх поверхів.
          Три контури ущільнення в профілі роблять вікно повністю герметичним,
          що запобігає проникненню пилу, вологості та сквозняків у приміщення.
        </div>
        <div className={blogstyles.post_text}>
          ● <b>Теплоізоляція. </b> Герметичність вікна має прямий вплив на
          енергоефективність. З вікнами з профільною системою REHAU SYNEGO ви
          отримуєте максимальну енергоефективність, а, отже, більше тепла у
          вашому приміщенні.
        </div>
        <div className={blogstyles.post_text}>
          REHAU SYNEGO з третім контуром ущільнення - це вибір, який забезпечує
          високу звукоізоляцію, захист від пилу та вологості і ефективну
          теплоізоляцію. Ваші вікна стануть надійними захисниками вашого житла.
        </div>
        <h3 className={blogstyles.article_title}>
          Де купити вікна REHAU SYNEGO?
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
