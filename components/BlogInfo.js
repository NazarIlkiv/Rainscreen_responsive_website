import styles from "../styles/BlogInfo.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";

const BlogInfo = ({ articles }) => {
  const { imageURL, titleArticle, description, data } = articles || {};

  if (!articles) {
    return null;
  }
  return (
    <>
      <section
        className={styles.bloginfo__page}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <article className={styles.article__body}>
          <div
            className={`${styles.title__article} ${stylesRepeat.title_center} ${styles.featured__title}`}
            itemProp="headline"
          >
            <h2>{titleArticle}</h2>
          </div>
          <div
            className={styles.article__description__body}
            itemProp="articleBody"
          >
            <p className={styles.article__description}>{description}</p>
          </div>
          <div
            className={styles.article__image_body}
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <div className={styles.article__image}>
              <img
                alt={titleArticle}
                src={imageURL}
                itemProp="contentUrl"
              ></img>
              <meta itemProp="width" content="800" />
              <meta itemProp="height" content="600" />
            </div>
          </div>
          <div className={styles.data_posted} itemProp="datePublished">
            {data}
          </div>
        </article>
      </section>
    </>
  );
};

export default BlogInfo;
