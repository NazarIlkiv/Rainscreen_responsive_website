import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Головна", path: "/" },
  { id: 2, title: "Про нас", path: "/aboutus" },
  { id: 3, title: "Продукція", path: "/produkciya" },
  { id: 4, title: "Блог", path: "/blog" },
  { id: 5, title: "Контакти", path: "/contacts" },
];

const Navbar = () => {
  return (
    <>
      <div
        itemScope
        itemType="https://schema.org/Organization"
        className={styles.header}
      >
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Link href="/">Rain Screen</Link>
          </div>
          <nav className={styles.header__menu}>
            <ul className={styles.menu__list}>
              {navigation.map(({ id, title, path }) => (
                <li itemProp="url" key={id} className={styles.menu_item}>
                  <Link className={styles.menu__link} key={id} href={path}>
                    <span itemProp="name">{title}</span>
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
