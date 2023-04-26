import Head from "next/head.js";
import Fasad from "../../components/Fasad.js";

const fasadProduct = () => {
  return (
    <>
      <Head>
        <title>Навісний вентильований фасад м.Львів, приємні ціни</title>
        <meta
          name="description"
          content="Навісний вентильований фасад м.Львів"
        />
        <meta
          name="keywords"
          content="навісний вентильований фасад, фасад з алюмінієвих композитних панелей"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fasad />
    </>
  );
};

export default fasadProduct;
