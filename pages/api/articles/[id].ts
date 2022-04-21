import type { NextApiRequest, NextApiResponse } from "next";
import { getArticles } from "../../../services/getArticles";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  const articles = await getArticles(id);

  res.status(200).json(articles);
};
