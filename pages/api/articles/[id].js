import { articles } from "../data/articles";

export default function handler(req, res) {
  const articleId = req.query.id;
  const article = articles.find(
    (article) => article.id === parseInt(articleId)
  );
  if (!article) {
    res.status(404).json({ error: `Статтю з ID ${articleId} не знайдено.` });
  } else {
    res.status(200).json(article);
  }
}
