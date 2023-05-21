import { useState } from "react";
import styles from "../styles/Deals.module.scss";
import repeatStyles from "../styles/Repeat.module.scss";

const Deals = () => {
  const [activeTab, setActiveTab] = useState(1);

  const ActiveTheTab = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className={`${styles.page__deals} ${styles.deals}`}>
        <div className={`${styles.page__deals} ${styles.deals}`}>
          <div className={styles.deals__container}>
            <div className={`${styles.deals__header} ${styles.header_deals}`}>
              <div className={styles.header_deals__content}>
                <h2
                  className={`${styles.header_deals__title} ${repeatStyles.title}`}
                >
                  Роботи компанії Rain Screen
                </h2>
                <div className={styles.header_deals__text}>
                  Останні роботи компанії Rain Screen, які були втілені у
                  реальність
                </div>
              </div>
            </div>
            <div className={`${styles.deals__tabs} ${styles.tabs_deals}`}>
              <nav className={styles.tabs_deals__nav}>
                <button
                  type="button"
                  onClick={() => ActiveTheTab(1)}
                  className={
                    activeTab === 1
                      ? `${styles.active} ${styles.tabs_deals__button}`
                      : styles.tabs_deals__button
                  }
                >
                  Вікна та двері Rehau
                </button>
                <button
                  type="button"
                  onClick={() => ActiveTheTab(2)}
                  className={
                    activeTab === 2
                      ? `${styles.active} ${styles.tabs_deals__button}`
                      : styles.tabs_deals__button
                  }
                >
                  Алюмінієві вікна та двері
                </button>
                <button
                  type="button"
                  onClick={() => ActiveTheTab(3)}
                  className={
                    activeTab === 3
                      ? `${styles.active} ${styles.tabs_deals__button}`
                      : styles.tabs_deals__button
                  }
                >
                  Алюмінієві розсувні системи
                </button>
              </nav>
              <div className={styles.tabs_deals__body}>
                {activeTab == 1 && (
                  <div
                    className={`${styles.tabs_deals__item} ${styles.item_tabs} ${styles.active}`}
                  >
                    <div className={styles.item_tabs__items}>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img src="/images/deals/rehau1.webp" alt="rehau1" />
                        </div>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img src="/images/deals/rehau2.webp" alt="rehau2" />
                        </div>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img src="/images/deals/rehau3.webp" alt="rehau3" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 2 && (
                  <div
                    className={`${styles.tabs_deals__item} ${styles.item_tabs} ${styles.active}`}
                  >
                    <div className={styles.item_tabs__items}>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img src="/images/deals/alum1.webp" alt="alum1" />
                        </div>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img src="/images/deals/alum2.webp" alt="alum2" />
                        </div>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img src="/images/deals/alum3.webp" alt="alum3" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 3 && (
                  <div
                    className={`${styles.tabs_deals__item} ${styles.item_tabs} ${styles.active}`}
                  >
                    <div className={styles.item_tabs__items}>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img
                            src="/images/deals/alumros1.webp"
                            alt="alumros1"
                          />
                        </div>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img
                            src="/images/deals/alumros2.webp"
                            alt="alumros1"
                          />
                        </div>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <div className={styles.item_tabs__image}>
                          <img
                            src="/images/deals/alumros3.webp"
                            alt="alumros3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deals;
