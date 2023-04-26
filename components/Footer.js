import styles from "../styles/Footer.module.scss";
import Link from "next/link";

const navigation = [
  { id: 1, title: "Головна", path: "/" },
  { id: 2, title: "Продукція", path: "/products" },
  { id: 3, title: "Блог", path: "/404" },
  { id: 5, title: "Контакти", path: "/contacts" },
];

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <Link href={"/"} className={styles.footer__logo}>
            Rain Screen
          </Link>
          <nav className={styles.footer__menu.menu_footer}>
            <ul className={styles.menu_footer__list}>
              {navigation.map(({ id, title, path }) => (
                <li key={id} className={styles.menu_footer__item}>
                  <Link
                    className={styles.menu_footer__link}
                    key={id}
                    href={path}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.footer__copy}>
            Website creater by{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100006647478046"
              alt="facebook profile Nazara Ilkiva"
            >
              Nazar Ilkiv
            </a>{" "}
            || 2023
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
