import React from "react";
import BlogItem from "./BlogItem/BlogItem.js";
import styles from "@/styles/Blog.module.scss";

const BlogList = ({ blogs }) => {
  return (
    <div className={styles.blogList_wrap}>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
