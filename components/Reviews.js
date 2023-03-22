import styles from "../styles/Reviews.module.scss";
import repeatStyles from "../styles/Repeat.module.scss";

const Reviews = () => {
  return (
    <>
      <section className={`${styles.page__reviews} ${styles.reviews}`}>
        <div className={styles.reviews__container}>
          <h2 className={`${styles.reviews__title} ${repeatStyles.title}`}>
            Відгуки клієнтів про компанію Rain Screen
          </h2>
          <div className={styles.reviews__items}>
            <a className={`${styles.reviews__item} ${styles.item_reviews}`}>
              <div className={styles.item_reviews__text}>
                <p>
                  Замовляв у компанії Rain Screen балконний блок у
                  багатожитловий будинок у м.Львові. Роботою задоволений,
                  зробили все згідно із термінами, монтаж якісний.
                </p>
              </div>
              <div
                className={`${styles.item_reviews__author} ${styles.author_item_reviews}`}
              >
                <div className={styles.author_item_reviews__avatar}>
                  <img src="/images/avatar/user.png" alt="user avatar" />
                </div>
                <div className={styles.author_item_reviews__body}>
                  <div className={styles.author_item_reviews__name}>Андрій</div>
                  <div className={styles.author_item_reviews__location}>
                    Львів
                  </div>
                </div>
              </div>
            </a>
            <a className={`${styles.reviews__item} ${styles.item_reviews}`}>
              <div className={styles.item_reviews__text}>
                <p>
                  Шукав алюмінієві двері собі для входу у дерев'яний будинок.
                  Компанія Rain Screen надала найнижчу вартість порівняно із
                  іншими компаніями. Якістю робіт задоволений.
                </p>
              </div>
              <div
                className={`${styles.item_reviews__author} ${styles.author_item_reviews}`}
              >
                <div className={styles.author_item_reviews__avatar}>
                  <img src="/images/avatar/user.png" alt="user avatar" />
                </div>
                <div className={styles.author_item_reviews__body}>
                  <div className={styles.author_item_reviews__name}>Євген</div>
                  <div className={styles.author_item_reviews__location}>
                    Закарпатська область
                  </div>
                </div>
              </div>
            </a>
            <a className={`${styles.reviews__item} ${styles.item_reviews}`}>
              <div className={styles.item_reviews__text}>
                <p>
                  Натрапила на Rain Screen в інтернеті. Мені швидко порахували
                  вартість робіт та все доступно по-телефону пояснили. Дякую
                  Rain Screen за збережння тепла у вітальні.
                </p>
              </div>
              <div
                className={`${styles.item_reviews__author} ${styles.author_item_reviews}`}
              >
                <div className={styles.author_item_reviews__avatar}>
                  <img src="/images/avatar/user.png" alt="user avatar" />
                </div>
                <div className={styles.author_item_reviews__body}>
                  <div className={styles.author_item_reviews__name}>Ілона</div>
                  <div className={styles.author_item_reviews__location}>
                    м.Львів
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
