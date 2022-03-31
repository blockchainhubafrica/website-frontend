import React, { useEffect, useRef, useState } from "react";
import styles from "./blog.module.css";
import { Loader } from "../../components";
import Image from "next/image";
import { RightArrowIcon } from "../../assets/images";
import { useRouter } from "next/router";
import {
  DiscordIcon,
  LinkIcon,
  TwitterIcon,
  TelegramIcon,
} from "../../assets/images";
import { useDataContext } from "../../contexts/dataContext";
import { formatDate } from "../../utils/formatDate";

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

export default function BlogDetailPage() {
  const { allData, isLoading, isError } = useDataContext();
  const articles: ArticleType[] = allData.blog || [];
  const router = useRouter();
  console.log({ router, articles });
  const currentArticleSlug = router.query.bid;

  // const currentArticle = articles.find(
  //   (article: ArticleType) => article.slug === currentArticleSlug
  //   )();
  // if (isLoading || isError) return "";
  const [activeIndex, setactiveIndex] = useState<number>(0);

  const [activeArticle, setactiveArticle] = useState<ArticleType>(
    articles[activeIndex]
  );
  const subtract = (curr: any, num: number, min: number = 0) =>
    parseInt(curr) === min ? curr : parseInt(curr) - num;

  const add = (curr: any, num: number, max: number = 6) =>
    parseInt(curr) === max ? curr : parseInt(curr) + num;

  const [showLoader, setShowLoader] = useState<boolean>(true);

  const containerRef = useRef<HTMLElement | null>(null);

  // Handlers
  const goRight = () => {
    // router.push(`/blog/${add(query?.bid, 1, articles.length)}`);
  };

  const goLeft = () => {
    // router.push(`/blog/${subtract(query?.bid, 1)}`);
  };

  return (
    <main
      className={`${styles["detail-container"]} md:py-5 px-5 md:px-10 lg:px-20`}
    >
      {articles.length > 1 ? (
        <div
          className={`${styles["button-container"]} flex mt-8 md-mt-14 w-full`}
        >
          {articles.length > 1 ? (
            <div className="flex items-center">
              <button id="article-slider-btn-1" className="" onClick={goLeft}>
                <RightArrowIcon style={{ transform: "rotate(180deg)" }} />
              </button>
              <h3 className={`spaced-heading text-base font-coolvetica mx-5`}>
                BACK
              </h3>
            </div>
          ) : (
            ""
          )}

          {parseInt("1") < articles.length ? (
            <div className="flex items-center ml-auto">
              <h3 className={`spaced-heading text-base font-coolvetica mx-5`}>
                NEXT
              </h3>
              <button id="article-slider-btn-2" onClick={goRight}>
                <RightArrowIcon />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {articles.length ? (
        <section
          className={`${styles["articles-container"]} pt-10`}
          ref={containerRef}
        >
          <div className="md:py-10">
            <div className={`${styles["article"]} mb-10`}>
              <h3
                className={`mb-4 pb-5 md:pb-10 text-3xl md:text-7xl font-coolvetica text-blue-600 lg:w-3/4`}
              >
                {activeArticle.title}
              </h3>

              <div className="flex py-5">
                {/* Article menu */}
                <div
                  className={`${styles["menu"]} sticky top-40 hidden md:block p-10 py-16`}
                >
                  <div className="flex flex-col mb-8">
                    <span className="mb-3">Article written by</span>
                    <strong>{activeArticle.author}</strong>
                  </div>
                  <div className="flex flex-col mb-8">
                    <span className="mb-3">Time of read</span>
                    <strong>{activeArticle.readingTime} Minutes</strong>
                  </div>
                  <div className="flex flex-col mb-8">
                    <span className="mb-3">Date posted</span>
                    <strong>{formatDate(activeArticle.publishDate)}</strong>
                  </div>
                  <div className="flex flex-col mb-8">
                    <span className="mb-3">Share</span>
                    <div className={`${styles["share-icons"]} flex`}>
                      <span className="mr-3">
                        <DiscordIcon />
                      </span>
                      <span className="mr-3">
                        <TwitterIcon />
                      </span>
                      <span className="mr-3">
                        <TelegramIcon />
                      </span>
                      <span className="">
                        <LinkIcon />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Article body */}
                <div
                  className={`${styles["body"]} md:px-24`}
                  dangerouslySetInnerHTML={{ __html: activeArticle.content }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </main>
  );
}
