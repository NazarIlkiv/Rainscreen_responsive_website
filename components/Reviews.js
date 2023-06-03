import styles from "../styles/Reviews.module.scss";
import repeatStyles from "../styles/Repeat.module.scss";

const reviews = [
  {
    id: "1",
    text: "Замовляв у компанії Rain Screen балконний блок у багатожитловий будинок у м.Львові. Роботою задоволений, зробили все згідно із термінами, монтаж якісний.",
    imgURL: "/images/avatar/user.webp",
    userName: "Андрій",
    location: "м.Львів",
  },
  {
    id: "2",
    text: "Шукав алюмінієві двері, замість вхідних будинок. Компанія Rain Screen надала найнижчу вартість порівняно із іншими компаніями. Якістю робіт задоволений.",
    imgURL: "/images/avatar/user.webp",
    userName: "Євген",
    location: "м.Ужгород",
  },
  {
    id: "3",
    text: "Натрапила на Rain Screen в інтернеті. Мені швидко порахували вартість робіт та все доступно по-телефону пояснили. Дякую Rain Screen за збережння тепла у вітальні.",
    imgURL: "/images/avatar/user.webp",
    userName: "Ілона",
    location: "м.Львів",
  },
];

const Reviews = () => {
  return (
    <>
      <div className={`${styles.page__reviews} ${styles.reviews}`}>
        <div className={styles.reviews__container}>
          <h2 className={`${styles.reviews__title} ${repeatStyles.title}`}>
            Відгуки клієнтів про компанію Rain Screen
          </h2>
          <div className={styles.reviews__items}>
            {reviews.map(({ id, text, imgURL, userName, location }) => (
              <div
                key={id}
                className={`${styles.reviews__item} ${styles.item_reviews}`}
              >
                <div className={styles.item_reviews__text}>
                  <p>{text}</p>
                </div>
                <div
                  className={`${styles.item_reviews__author} ${styles.author_item_reviews}`}
                >
                  <div className={styles.author_item_reviews__avatar}>
                    <img src={imgURL} alt="user avatar" />
                  </div>
                  <div className={styles.author_item_reviews__body}>
                    <div className={styles.author_item_reviews__name}>
                      {userName}
                    </div>
                    <div className={styles.author_item_reviews__location}>
                      {location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
