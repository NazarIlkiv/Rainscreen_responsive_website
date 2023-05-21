import React from "react";
import styles from "@/styles/Blog.module.scss";
import Link from "next/link";
import Chip from "@/components/Chip/Chip";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${title}",
      "image": "${cover}",
      "description": "${description}",
      "datePublished": "${createdAt}"
    }
  `}
  </script>;
  return (
    <div className={styles.blogItem_wrap}>
      <img className={styles.blogItem_cover} src={cover} alt="cover" />
      <Chip label={category} />
      <Link href={`/blog/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p className={styles.blogItem_desc}>{description}</p>
      <footer>
        <div className={styles.blogItem_author}>
          <div>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className={styles.blogItem_link} href={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
