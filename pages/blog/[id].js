import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { blogList } from "../../config/data";
import Chip from "@/components/Chip/Chip";
import EmptyList from "@/components/EmptyList/EmptyList";
import styles from "@/styles/Blog.module.scss";
import Link from "next/link";
import Head from "next/head";

const BlogID = () => {
  <Head>
    <meta name="robots" content="index, follow" />
  </Head>;
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className={styles.blog_goBack} href={"/blog"}>
        <span> &#8592;</span> <span>Повернутися назад</span>
      </Link>
      {blog ? (
        <div className={styles.blog_wrap}>
          <header>
            <p className={styles.blog_date}>Опубліковано: {blog.createdAt}</p>
            <h1 className={styles.post_title}>{blog.title}</h1>
            <div className={styles.blog_subCategory}>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className={styles.blog_desc}>{blog.description1}</p>
          <p className={styles.blog_desc}>{blog.description2}</p>
          <p className={styles.blog_desc}>{blog.description3}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default BlogID;
