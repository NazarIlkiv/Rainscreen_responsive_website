import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Blog.module.scss";
import React from "react";
import SearchBar from "@/components/SearchBar";
import BlogList from "@/components/BlogList/BlogList";
import EmptyList from "@/components/EmptyList/EmptyList";
import { blogList } from "@/config/data";
import { useState } from "react";
import Head from "next/head";

const Blog = () => {
  <Head>
    <meta name="robots" content="index, follow" />
  </Head>;
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <>
      <h1 className={stylesRepeat.title_center}>Блог</h1>
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </>
  );
};

export default Blog;
