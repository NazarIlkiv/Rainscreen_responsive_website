import styles from "../styles/Advantages.module.scss";
import repeatStyle from "../styles/Repeat.module.scss";

const Advantages = () => {
  return (
    <>
      <div className={`${styles.page__how} ${styles.how}`}>
        <div className={styles.how__container}>
          <h2 className={`${styles.how__title} ${repeatStyle.title_center}`}>
            Чому обирають саме нас?
          </h2>
          <div className={styles.how__items}>
            <div
              className={`${styles.how__item} ${styles.item_how} ${styles.item_how_1}`}
            >
              <div className={styles.item_how__icon}>
                <img src="/images/icons/Icon1.png" alt="icon1"></img>
              </div>
              <div className={styles.item_how__title}>Досвід</div>
              <div className={styles.item_how__text}>
                Досвід роботи із клієнтами більше 10 років
              </div>
            </div>
            <div
              className={`${styles.how__item} ${styles.item_how} ${styles.item_how_2}`}
            >
              <div className={styles.item_how__icon}>
                <img src="/images/icons/Icon2.png" alt="icon2"></img>
              </div>
              <div className={styles.item_how__title}>Якість робіт</div>
              <div className={styles.item_how__text}>
                Завдяки професіоналізму та точності інженерного та монтажного
                персоналу - гарантуємо якість робіт
              </div>
            </div>
            <div
              className={`${styles.how__item} ${styles.item_how} ${styles.item_how_3}`}
            >
              <div className={styles.item_how__icon}>
                <img src="/images/icons/Icon3.png" alt="icon3"></img>
              </div>
              <div className={styles.item_how__title}>Власне виробництво</div>
              <div className={styles.item_how__text}>
                Власне виробництво дозволяє нам пропонувати Вам кращу якість та
                вартість
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantages;
