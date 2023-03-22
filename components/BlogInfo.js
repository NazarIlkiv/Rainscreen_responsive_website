import styles from "../styles/BlogInfo.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";

const BlogInfo = ({ articles }) => {
  const { imageURL, titleArticle, description, data } = articles || {};

  if (!articles) {
    return null;
  }
  return (
    <>
      <section className={styles.bloginfo__page}>
        <article className={styles.article__body}>
          <div
            className={`${styles.title__article} ${stylesRepeat.title_center} ${styles.featured__title}`}
          >
            <h2>{titleArticle}</h2>
          </div>
          <div className={styles.article__description__body}>
            <p className={styles.article__description}>{description}</p>
          </div>
          <div className={styles.article__image_body}>
            <div className={styles.article__image}>
              <img alt={titleArticle} src={imageURL}></img>
            </div>
          </div>
          <div className={styles.data_posted}>{data}</div>
        </article>
      </section>
    </>
  );
};

export default BlogInfo;
