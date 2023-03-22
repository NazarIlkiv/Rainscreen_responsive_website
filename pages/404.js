import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import stylesRepeat from "@/styles/Repeat.module.scss";
import styles from "../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Помилка 404</title>
      </Head>
      <div className={styles.error__page}>
        <div className={`${stylesRepeat.title_center} ${stylesRepeat.title}`}>
          Ops.... Error 404
        </div>
        <div className={styles.error__title}>
          На жаль, цієї сторінки не існує
        </div>
        <div className={styles.error__attention}>
          За кілька секунд Вас буде перенаправлено на головну сторінку
        </div>
      </div>
    </>
  );
};

export default Error;
