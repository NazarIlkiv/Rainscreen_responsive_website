import { articles } from "./data/articles";

export default function handler(req, res) {
  res.status(200).json(articles);
}
