import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import styles from "../styles/Slider.module.scss";

const sliderImages = [
  {
    id: 1,
    imgURL: "/images/slider/slide2.webp",
    imageAlt: "headerimage",
  },
  { id: 2, imgURL: "/images/slider/slide1.webp", imageAlt: "slide1" },
  { id: 3, imgURL: "/images/slider/HeaderImage.webp", imageAlt: "slide2" },
  { id: 4, imgURL: "/images/slider/slide3.webp", imageAlt: "slide3" },
  { id: 5, imgURL: "/images/slider/slide4.webp", imageAlt: "slide4" },
];

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
                  Металопластикові && Алюмінієві конструкції у м.Львові
                </h1>
                <div className={styles.content_main_block__title}>
                  Сучасні рішення для Вас...
                </div>
                <div className={styles.content_main_block__text}>
                  Професійна команда інженерів компанії допоможе втілити
                  алюмінієві та металопластикові конструкції для Вашої оселі,
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
                <button
                  type="submit"
                  className={styles.form_main_block__button}
                >
                  <Link href={"/produkciya"}>Пошук</Link>
                </button>
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
                  {sliderImages.map(({ id, imgURL, imageAlt }) => (
                    <SwiperSlide key={id}>
                      <div
                        className={`${styles.slider_main_block__slide} ${styles.swiper_slide}`}
                      >
                        <img src={imgURL} alt={imageAlt} />
                      </div>
                    </SwiperSlide>
                  ))}
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
