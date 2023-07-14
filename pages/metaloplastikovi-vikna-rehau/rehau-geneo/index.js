import React from "react";
import styles from "@/styles/Products.module.scss";
import blogstyles from "@/styles/Blog.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import Head from "next/head";

const RehauEuro60 = () => {
  return (
    <>
      <Head>
        <title>Металопластикові вікна з профілю - Rehau GENEO</title>
        <meta
          name="description"
          content="Металопластикові вікна REHAU Geneo ➤7 камерний профіль ➤86 мм глибина ➤на 40% легше ➤максимальне енергозбереження. Купити вікна Рехау Генео ☎096-362-99-39"
        />
        <meta
          property="og:title"
          content="Металопластикові вікна з профілю - Rehau GENEO"
        />
        <meta
          property="og:description"
          content="Металопластикові вікна REHAU Geneo ➤7 камерний профіль ➤86 мм глибина ➤на 40% легше ➤максимальне енергозбереження. Купити вікна Рехау Генео ☎096-362-99-39"
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/rehauprofiles/rehaugeneo.webp"
        />
      </Head>
      <h1 className={styles.title_center}>Віконна система Rehau GENEO</h1>
      <section>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img
                  src={"/images/rehauprofiles/rehaugeneo.webp"}
                  alt="Металопластикова віконна система Rehau Geneo"
                />
                <div className={styles.featured_price_body}>
                  <h2 className={styles.content_featured__title}>9600 грн</h2>
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
                  Технічні характеристики профільної системи REHAU GENEO
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Монтажна глибина
                    </div>
                    <div className={styles.options_content_featured__value}>
                      86мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      К-сть камер
                    </div>
                    <div className={styles.options_content_featured__value}>
                      6 камер
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Товищина склопакету
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 52 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт теплопередачі
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Uf = 0,86 Вт/м2K
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт опору теплопередачі**
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rf = 1,16 м2K/Вт
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rw = 50 дБ, 5 клас
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
              Профільна система Rehau Geneo з монтажною глибиною 86 мм – це
              революція в області енергоефективності! Ці вікна – взірець
              комфорту та захисту вашого будинку. Унікальна конструкція,
              шестикамерна рама, тришаровий склопакет та інноваційний матеріал
              RAU-FIPRO, з якого виготовляється профіль, – все це гарантія
              теплої оселі взимку та прохолодної влітку.
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
          Особливості вікон Rehau GENEO
        </h3>
        <div className={blogstyles.post_text}>
          1. Завдяки відсутності металевого армування, ця система стає на 40%
          легшою в порівнянні з іншими системами. Це має наступні переваги:
        </div>
        <div className={blogstyles.post_text}>
          ● Легкість під час транспортування.
        </div>
        <div className={blogstyles.post_text}>
          ● Зручність монтажу конструкції.
        </div>
        <div className={blogstyles.post_text}>
          ● Зниження навантаження на будівлю.
        </div>
        <div className={blogstyles.post_text}>
          ● Зменшення ваги стулки, що полегшує процес відкривання та закривання
          конструкції і продовжує термін служби фурнітури.
        </div>
        <div className={blogstyles.post_text}>
          2. Енергозберігаючі характеристики вікон зростають завдяки
          використанню спеціальної термовставки замість сталевого армування.
        </div>
        <div className={blogstyles.post_text}>
          3. Міцність і жорсткість конструкцій досягаються завдяки армуючому
          шару в кутах, що забезпечує більшу стабільність зварної конструкції.
        </div>
        <div className={blogstyles.post_text}>
          4. Повна герметичність досягається завдяки наявності додаткового
          центрального контуру ущільнення.
        </div>
        <div className={blogstyles.post_text}>
          5. Форми і розміри вікон можуть бути вибрані за вашим бажанням, з
          урахуванням останніх тенденцій європейської архітектури.
        </div>
        <div className={blogstyles.post_text}>
          6. Надійна система проти зламу та високий рівень шумоізоляції, що
          перевершує попередні моделі.
        </div>
        <div className={blogstyles.post_text}>
          7. Високий комфорт експлуатації досягається завдяки:
        </div>
        <div className={blogstyles.post_text}>
          ● Ущільнювачам нового покоління з матеріалу RAU PREN, що зменшує
          зусилля для закриття стулок на 10%.
        </div>
        <div className={blogstyles.post_text}>
          ● Антистатичній гладкій поверхні, що полегшує догляд за вікнами.
        </div>
        <div className={blogstyles.post_text}>
          ● Похилому фальцю, який допомагає відведенню вологи.
        </div>
        <h3 className={blogstyles.article_title}>
          Чому профіль REHAU GENEO найкращий за енергоефективністю?
        </h3>
        <div className={blogstyles.post_text}>
          Найважливішим елементом є використання новітньої розробки - матеріалу
          RAU-FIPRO на основі фіброволокна. Висока міцність цього матеріалу
          дозволяє виготовляти вікна з профільною системою REHAU GENEO без
          сталевого армування у 90% випадків (сталеве армування є мостом холоду,
          а без нього вікно стає теплішим). Замість сталевого армування можна
          використовувати спеціальну термовставку, яка покращує енергозберігаючі
          характеристики вікна.
        </div>
        <div className={blogstyles.post_text}>
          Саме завдяки цьому профільна система REHAU GENEO ідеально підходить
          для будинків з пасивним опаленням.
        </div>
        <div className={blogstyles.post_text}>
          Ще один бонус - без армування вікна стає легшим, що означає менше
          навантаження на фурнітуру.
        </div>
        <div className={blogstyles.post_text}>
          Також профільній системі REHAU GENEO дуже важливі спеціальні
          термомодулі та вбудований середній контур ущільнення. Саме завдяки їм
          досягаються високі показники енергоефективності.
        </div>
        <div className={blogstyles.post_text}>
          Вікна REHAU GENEO гарантовано зберігатимуть тепло у вашому будинку і
          помітно знизять рівень зовнішнього шуму завдяки шести ізольованим
          повітряним камерам у профілі.
        </div>
        <div className={blogstyles.post_text}>
          Монтажна глибина профілю становить 86 мм. Це дозволяє встановлювати
          склопакети товщиною до 52 мм, що позитивно впливає на теплоізоляційні
          властивості вікна.
        </div>
        <div className={blogstyles.post_text}>
          Варто звернути увагу на високі звукоізоляційні характеристики
          профільної системи REHAU GENEO. Ця система гарантовано поглинає до 47
          дБ шуму. Якщо враховувати звукоізоляцію разом із склопакетом, цей
          показник може досягати 50 дБ.
        </div>
        <div className={blogstyles.post_text}>
          Якщо для вас енергозбереження є ключовим фактором при виборі вікна, то
          профільна система REHAU GENEO - це ваш вибір! Вона ідеально підходить
          для пасивних будинків та добре утеплених будинків.
        </div>
        <h3 className={blogstyles.article_title}>
          Де купити вікна REHAU GENEO?
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
