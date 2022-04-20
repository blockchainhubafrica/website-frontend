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

const BlogItemPageHead = () => {
  // console.log(article);
  // const activeIndex = (() => {
  //   if (!articles.length) return 0;
  //   const index = articles.findIndex((x) => x.slug === currentArticleSlug);

  //   return index !== -1 ? index : 0;
  // })();
  // const article = articles[activeIndex];
  // const currentArticleSlug = article?.slug;
  // let title = deslugify(currentArticleSlug || "");

  // console.log({ allData });
  return (
    <>
      <NextSeo
        title={`Blockchain Hub Africa | Blog}`}
        description="Blockchain Hub Africa Partners with Buildspace to Build Web3 Talents in Africa"
        openGraph={{
          title:
            "Blockchain Hub Africa | Blog",
          description:
            "Blockchain Hub Africa Partners with Buildspace to Build Web3 Talents in Africa",
          images: [
            {
              url: "https://res.cloudinary.com/blockchainhub-africa/image/upload/v1650461794/Company-website/bcha_and_buildspace_bhwlk9.png",
              width: 360,
              height: 360,
              alt: "Blockchain Hub Africa x Buildspace",
            },
          ],
        }}
      />
    </>
  );
};

export { BlogItemPageHead };
