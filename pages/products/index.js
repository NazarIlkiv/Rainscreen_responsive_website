import Products from "../../components/Products";
import stylesRepeat from "@/styles/Products.module.scss";
import Head from "next/head";

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>Продукція - Rain Screen</title>
        <meta
          name="description"
          content="алюмінієві та металопластикові конструкції м.Львів"
        />
        <meta
          name="keywords"
          content="алюмінієві вікна та двері Aluprof, металопластикові вікна rehau львів"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Products />
    </>
  );
};

export default ProductPage;
