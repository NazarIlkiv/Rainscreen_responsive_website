import React, { createRef } from "react";
import axios from "axios";
import styles from "../styles/Feedback.module.scss";

const Feedback = () => {
  let phone = React.createRef();

  const TOKEN = "5513962657:AAFqDfBgMa_oWtyXOtz2RtLpESrjy4_2T_0";
  const CHAT_ID = "-1001608351723";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  function sendForm(event) {
    let message = `<b>Заявка зі сайту!</b>\n`;
    message += `<b>Номер телефону: ${phone.current.value} </b> \n`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });

    alert(
      "Дякую, що обираєте нас! Наш спеціаліст невдовзі сконтактується з Вами!"
    );
  }

  return (
    <>
      <section className={`${styles.page__subscribe} ${styles.subscribe}`}>
        <div className={styles.subscribe__container}>
          <div className={styles.subscribe__header}>
            <h2 className={styles.subscribe__title}>
              Бажаєте отримати якомога скорше консультацію?
            </h2>
            <div
              className={styles.subscribe__sub_title}
            >
              Вкажіть Ваш номер телефону і ми сконтактуємося з Вами!
            </div>
          </div>
          <form
            className={`${styles.subscribe__form} ${styles.form_subscribe}`}
          >
            <div className={styles.form_subscribe__content}>
              <label className={styles.form_subscribe__label}>
                Вкажіть номер телефону
              </label>
              <input
                type="text"
                name="telephone-number"
                ref={phone}
                className={styles.form_subscribe__input}
              />
            </div>
            <button
              onClick={sendForm}
              type="submit"
              className={styles.form_subscribe__button}
            >
              Надіслати
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Feedback;
