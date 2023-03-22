import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
