import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import styles from "../styles/Slider.module.scss";

const Slider = () => {
  return (
    <>
      <section className={styles.main_block}>
        <div className={styles.main_block__container}>
          <div className={styles.body_main_block}>
            <div
              className={`${styles.body_main_block__content} ${styles.content_main_block}`}
            >
              <div className={styles.content_main_block_body}>
                <h1 className={styles.content_main_block__sub_title}>
                  Вентильований фасад & ПВХ вікна Rehau у м.Львів
                </h1>
                <div className={styles.content_main_block__title}>
                  Сучасні рішення для Вас...
                </div>
                <div className={styles.content_main_block__text}>
                  Професійна команда інженерів компанії <b>Rain Screen</b>{" "}
                  допоможе втілити сучасні будівельні рішення для Вашої оселі,
                  офісу або іншого технічного приміщення.
                </div>
              </div>
              <form
                className={`${styles.content_main_block__form} ${styles.form_main_block}`}
              >
                <input
                  placeholder="Впишіть послугу, яка Вас цікавить"
                  type="text"
                  className={styles.form_main_block__input}
                ></input>
                <Link href={"/products"}>
                  <button
                    type="submit"
                    className={styles.form_main_block__button}
                  >
                    Пошук
                  </button>
                </Link>
              </form>
            </div>

            <div
              className={`${styles.body_main_block__slider} ${styles.slider_main_block} ${styles.swiper}`}
            >
              <div
                className={`${styles.slider_main_block__wrapper} ${styles.swiper_wrapper}`}
              >
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={true}
                  pagination={{ clickable: true }}
                  slidesPerView={1}
                  loop={true}
                >
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img
                        src="/images/slider/Header Image.jpg"
                        alt="header image slider"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide1.jpg" alt="slide1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide2.jpg" alt="slide2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide3.jpg" alt="slide3" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide4.jpg" alt="slide4" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide5.jpg" alt="slide5" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide6.jpg" alt="slide6" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide7.JPG" alt="slide7" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide8.jpg" alt="slide8" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                    >
                      <img src="/images/slider/slide9.jpg" alt="slide9" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className={styles.body_main_block__arrows}>
              <div
                className={`${styles.body_main_block__arrow} ${styles.swiper_button_prev}`}
              ></div>
              <div
                className={`${styles.body_main_block__arrow} ${styles.swiper_button_next}`}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
