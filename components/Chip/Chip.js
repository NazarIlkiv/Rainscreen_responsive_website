import React from "react";
import styles from "@/styles/Blog.module.scss";

const Chip = ({ label }) => <p className={styles.chip}>{label}</p>;

export default Chip;
