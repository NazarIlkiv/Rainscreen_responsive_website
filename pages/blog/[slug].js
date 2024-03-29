import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import styles from "@/styles/Blog.module.scss";
import Head from "next/head";

export default function PostPage({
  frontmatter: { title, h1, metadescription, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metadescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metadescription} />
        <meta property="og:image" content={cover_image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: `${title}`,
              datePublished: `${date}`,
              description: `${metadescription}`,
              image: {
                "@type": "ImageObject",
                url: `${cover_image}`,
                width: "800",
                height: "600",
              },
            }),
          }}
        />
      </Head>
      <div className={styles.article_container}>
        <Link href="/blog">
          <div className={`${styles.btn} ${styles.btn_back}`}>Назад</div>
        </Link>
        <div className={`${styles.card} ${styles.card_page}`}>
          <h1 className={styles.article_title}>{h1}</h1>
          <div className={styles.post_date}>Опубліковано: {date}</div>
          <img className={styles.post_img} src={cover_image} alt={title} />
          <div className={styles.post_body}>
            <div
              className={styles.post_text}
              dangerouslySetInnerHTML={{
                __html: marked(content),
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
