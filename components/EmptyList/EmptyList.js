import React from "react";
import styles from "@/styles/Blog.module.scss";

const EmptyList = () => (
  <div className={styles.emptyList_wrap}>
    <img src="/images/aboutus/emptylist/emptylist.gif" alt="empty" />
  </div>
);

export default EmptyList;
