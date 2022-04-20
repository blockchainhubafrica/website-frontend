import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDataContext } from "../contexts/dataContext";
import { deslugify } from "../utils/deslugify";

type ArticleType = {
  noOfViews: number;
  altText: string;
  _id: string;
  title: string;
  author: string;
  readingTime: number;
  content: string;
  publishDate: string;
  status: "draft" | "published";
  url: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  type: string;
};

const BlogItemPageHead = ({ article }: { article: ArticleType }) => {
  // console.log(article);
  const currentArticleSlug = article?.slug;
  let title = deslugify(currentArticleSlug || "");

  // console.log({ allData });
  return (
    <>
      {article ? (
        <NextSeo
          title={`Blockchain Hub Africa | ${title || "Blog"}`}
          description="Get news, blockchain and web3 updates and the latest on Blockchain Hub Africa."
          openGraph={{
            title: "Blockchain Hub Africa | Blog",
            description:
              "Get news, blockchain and web3 updates and the latest on Blockchain Hub Africa.",
            images: [
              {
                url: article?.url,
                width: 320,
                height: 320,
                alt: article?.altText,
              },
            ],
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export { BlogItemPageHead };
