import React from "react";
import repeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";

const RehauEuro60 = () => {
  return (
    <>
      <section>
        <h1 className={styles.title_center}>Віконна система Rehau Synego</h1>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img
                  itemProp="image"
                  src={"/images/rehauprofiles/rehausynego.webp"}
                />
                <div className={styles.featured_price_body}>
                  <h2
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    8495 грн
                  </h2>
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
                <h2 itemProp="name" className={styles.content_featured__title}>
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
            <p className={styles.text_block_desc}>
              Віконний профіль Rehau Synego – це інноваційна розробка, здатна
              подарувати вашій оселі тепло та спокій при будь-якій негоді за
              вікном. Палке літнє сонце та люті зимові морози залишатимуться за
              вікном, не впливаючи на комфортний мікроклімат в кімнаті. Вітер,
              сніг та дощі завжди будуть знаходитись по іншу сторону вікна, не
              втручаючись у ваш спокій.
              <tr />
              Щоб ваша оселя завжди була в затишку, компанія Rehau виготовила
              унікальну конструкцію з шириною 80 міліметрів, 6 камерами в
              створці та 7 камерами в рамі. Різниця між звичайними вікнами і
              Rehau Synego – величезна!
            </p>
          </div>
          <div className={styles.text_block_image}>
            <img
              src={"/images/product/climukraine.webp"}
              alt="Кліматична карта України"
            />
          </div>
        </div>
        <Feedback id="form" />
      </section>
    </>
  );
};

export default RehauEuro60;
