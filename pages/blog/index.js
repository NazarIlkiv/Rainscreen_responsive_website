import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../../components/Post";
import { sortByDate } from "../../utils";
import styles from "@/styles/Blog.module.scss";
import stylesRepeat from "@/styles/Repeat.module.scss";

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Блог про вікна рехау від Rain Screen</title>
        <meta
          name="description"
          content="Актуальні статті про новинки, технологію та норми обслуговування металопластикових вікон Rehau та алюмінієвих конструкцій"
        />
        <meta property="og:title" content="Блог - Rain Screen" />
        <meta
          property="og:description"
          content="Актуальні статті про новинки, технологію та норми обслуговування металопластикових вікон Rehau та алюмінієвих конструкцій"
        />
        <meta
          property="og:image"
          content="https://www.rainscreen.com.ua/images/slider/slide2.webp"
        />
      </Head>
      <h1
        className={` ${stylesRepeat.title} ${stylesRepeat.title_center} ${styles.featured__title}`}
      >
        Блог
      </h1>
      <div className={styles.posts}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
