import Link from "next/link";
import styles from "@/styles/Blog.module.scss";

export default function Post({ post }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.post_img}
        src={post.frontmatter.cover_image}
        alt=""
      />

      <div className={styles.post_date}>
        Опубліковано: {post.frontmatter.date}
      </div>

      <h3 className={styles.post_title}>{post.frontmatter.title}</h3>

      <p className={styles.post_text}>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <div className={styles.btn}>Більше</div>
      </Link>
    </div>
  );
}
