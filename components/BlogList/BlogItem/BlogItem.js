import React from "react";
import styles from "@/styles/Blog.module.scss";
import Link from "next/link";
import Chip from "@/components/Chip/Chip";

const BlogItem = ({
  blog: { description, title, createdAt, cover, category, id },
}) => {
  return (
    <article
      className={styles.blogItem_wrap}
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <img className={styles.blogItem_cover} src={cover} alt="cover" />
      <Chip label={category} itemProp="keywords" />
      <Link href={`/blog/${id}`}>
        <h1 itemProp="headline">{title}</h1>
      </Link>
      <p className={styles.blogItem_desc} itemProp="description">
        {description}
      </p>
      <footer>
        <div className={styles.blogItem_author}>
          <div>
            <time dateTime={createdAt} itemProp="datePublished">
              <p>{createdAt}</p>
            </time>
          </div>
        </div>
        <Link
          className={styles.blogItem_link}
          href={`/blog/${id}`}
          itemProp="url"
        >
          ➝
        </Link>
      </footer>
    </article>
  );
};

export default BlogItem;
