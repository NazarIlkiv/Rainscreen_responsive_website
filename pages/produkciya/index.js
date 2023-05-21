import Products from "../../components/Products";
import stylesRepeat from "@/styles/Products.module.scss";
import Head from "next/head";

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>
          Вікна Рехау - Ціни на металопластикові вікна Rehau у Львові - Rain
          Screen
        </title>
        <meta
          name="description"
          content="Металопластикові вікна Rehau - Доступна ціна у Rain Screen у Львові - Гарантія енергозбереження та комфорту для Вашої оселі - Доступна ціна - Проконсультуйся у нас ☎️ 096 362-99-39"
        />
      </Head>
      <Products />
    </>
  );
};

export default ProductPage;
