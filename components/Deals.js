import { none } from "ramda";
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
                  onClick={() => ActiveTheTab(1)}
                  type="button"
                  className={
                    activeTab === 1
                      ? `${styles.active} ${styles.tabs_deals__button}`
                      : styles.tabs_deals__button
                  }
                >
                  Вентильований фасад
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
                  Металопластикові конструкції
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
                  Скляні перегородки
                </button>
                <button
                  type="button"
                  onClick={() => ActiveTheTab(4)}
                  className={
                    activeTab === 4
                      ? `${styles.active} ${styles.tabs_deals__button}`
                      : styles.tabs_deals__button
                  }
                >
                  Алюмінієві конструкції
                </button>
              </nav>
              <div className={styles.tabs_deals__body}>
                {activeTab === 1 && (
                  <div
                    className={`${styles.tabs_deals__item} ${styles.item_tabs} ${styles.active}`}
                  >
                    <div className={styles.item_tabs__items}>
                      <div className={styles.item_tabs__item}>
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/fasad1.jpg" alt="fasad1" />
                        </a>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/fasad2.jpg" alt="fasad2" />
                        </a>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/fasad3.jpg" alt="fasad3" />
                        </a>
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
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/rehau1.jpg" alt="rehau1" />
                        </a>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/rehau2.jpg" alt="rehau2" />
                        </a>
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
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/glass1.jpg" alt="glass1" />
                        </a>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/glass2.jpg" alt="glass2" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 4 && (
                  <div
                    className={`${styles.tabs_deals__item} ${styles.item_tabs} ${styles.active}`}
                  >
                    <div className={styles.item_tabs__items}>
                      <div className={styles.item_tabs__item}>
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/alum1.png" alt="alum1" />
                        </a>
                      </div>
                      <div className={styles.item_tabs__item}>
                        <a className={styles.item_tabs__image}>
                          <img src="/images/deals/alum2.jpg" alt="alum2" />
                        </a>
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
