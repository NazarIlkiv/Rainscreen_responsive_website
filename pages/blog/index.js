import Head from "next/head";
import BlogList from "@/components/BlogList";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/articles");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { articles: data },
  };
};

const blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Новини</title>
        <meta name="description" content="Новини компанії Rain Screen" />
        <meta
          name="keywords"
          content="купити вікна Rehau львів, рехау львів, металопластикові вікна rehau львів"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BlogList articles={articles} />
    </>
  );
};

export default blog;
