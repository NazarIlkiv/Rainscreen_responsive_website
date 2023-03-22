// import Link from "next/link";
import styles from "../styles/BlogList.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";

const BlogList = ({ articles }) => {
  if (!articles) {
    return null;
  }

  return (
    <>
      <section className={styles.blog__page}>
        <div className={`${styles.section__content} ${styles.blog}`}>
          <div
            className={`${stylesRepeat.title_center} ${styles.featured__title}`}
          >
            <h2>Новини</h2>
          </div>
          <div className={styles.cards}>
            {articles &&
              articles.map(({ id, imageURL, titleArticle, data }) => (
                <article key={id} className={styles.card}>
                  <div className={styles.image_section}>
                    <img src={imageURL}></img>
                  </div>
                  <div className={styles.article}>
                    <h4>{titleArticle}</h4>
                  </div>
                  <div className={styles.blog_view}>
                    {/* <Link href={`/blog/${id}`} className={styles.button}>
                      Читати
                    </Link> */}
                  </div>
                  <div className={styles.posted_data}>
                    <p>{data}</p>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
