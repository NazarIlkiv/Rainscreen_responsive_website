import Head from "next/head";
import BlogInfo from "@/components/BlogInfo";
import { articles } from "../api/data/articles";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3000/api/articles/${id}`);
  const data = await response.json();

  /// Спеціальний механізм NEXT.JS, який повертає сторінку 404, яка дані з сервера не прийшли
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { articles: data },
  };
};

const Contact = ({ articles }) => {
  return (
    <>
      <Head>
        <title>{articles.titleArticle}</title>
      </Head>
      <BlogInfo articles={articles} />
    </>
  );
};

export default Contact;
