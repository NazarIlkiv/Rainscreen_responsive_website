import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Головна", path: "/" },
  { id: 2, title: "Послуги", path: "/products" },
  { id: 3, title: "Блог", path: "/blog" },
  { id: 5, title: "Контакти", path: "/contacts" },
];

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__container}>
          <a className={styles.header__logo}>Rain Screen</a>
          <nav
            itemscope
            itemtype="http://schema.org/SiteNavigationElement"
            className={styles.header__menu}
          >
            <ul className={styles.menu__list}>
              {navigation.map(({ id, title, path }) => (
                <li key={id} className={styles.menu_item}>
                  <Link
                    itemprop="url"
                    className={styles.menu__link}
                    key={id}
                    href={path}
                  >
                    <span itemprop="name">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
