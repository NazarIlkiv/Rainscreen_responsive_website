import Products from "../../components/Products";
import stylesRepeat from "@/styles/Products.module.scss";
import Head from "next/head";

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>
          Металопластикові вікна REHAU від виробника у м.Львів - Rain Screen
        </title>
        <meta
          name="description"
          content="Замовляйте металопластикові вікна рехау від Rain Screen. Наші фахівці допоможуть Вам у підборі вікон і оперативно приїдуть на замір! Низькі ціни! Акція - 25% на вікна."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Products />
    </>
  );
};

export default ProductPage;
