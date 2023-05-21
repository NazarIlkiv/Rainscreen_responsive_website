import React from "react";
import styles from "@/styles/Blog.module.scss";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className={styles.searchBar_wrap}>
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Введіть назву категорії"
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Пошук</button>
    </form>
  </div>
);

export default SearchBar;
