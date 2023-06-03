import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <main className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
