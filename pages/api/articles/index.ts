import type { NextApiRequest, NextApiResponse } from "next";
import { getArticles } from "../../../services/getArticles";
import httpService from "../../../services/httpService";
import { apiErrorMessage } from "../../../utils/handleAPIErrors";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //   const { slug } = req.query as { slug: string };
  const articles = await getArticles();
  // console.log(req.headers);

  res.status(200).json(articles);
};

