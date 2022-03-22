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
import tinymce from "tinymce";
export default function BlogDetailPage() {
  const { allData } = useDataContext();
  const articles = allData.blog;
  const subtract = (curr: any, num: number, min: number = 0) =>
    parseInt(curr) === min ? curr : parseInt(curr) - num;

  const add = (curr: any, num: number, max: number = 6) =>
    parseInt(curr) === max ? curr : parseInt(curr) + num;

  const getArticleDetail = (articlesList: any[], articleId: string) =>
    articlesList.find((article) => article._id === articleId) ||
    articlesList[0];
  const router = useRouter();
  const { query }: any = router;

  const [article, setArticle] = useState(
    query?.bid ? getArticleDetail(articles, query?.bid) : {}
  );
  const [showLoader, setShowLoader] = useState<boolean>(true);

  const containerRef = useRef<HTMLElement | null>(null);

  // Handlers
  const goRight = () => {
    router.push(`/blog/${add(query?.bid, 1, articles.length)}`);
  };

  const goLeft = () => {
    router.push(`/blog/${subtract(query?.bid, 1)}`);
  };

  useEffect(() => {
    setArticle(getArticleDetail(articles, query?.bid));

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query?.bid]);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <main
      className={`${styles["detail-container"]} md:py-5 px-5 md:px-10 lg:px-20`}
    >
      {articles.length > 1 ? (
        <div
          className={`${styles["button-container"]} flex mt-8 md-mt-14 w-full`}
        >
          {parseInt(query?.bid) > 1 ? (
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

          {parseInt(query?.bid) < articles.length ? (
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

      <section
        className={`${styles["articles-container"]} pt-10`}
        ref={containerRef}
      >
        <div className="md:py-10">
          <div className={`${styles["article"]} mb-10`}>
            <h3
              className={`mb-4 pb-5 md:pb-10 text-3xl md:text-7xl font-coolvetica text-blue-600 lg:w-3/4`}
            >
              {article.title}
            </h3>

            <div className="flex py-5">
              {/* Article menu */}
              <div
                className={`${styles["menu"]} sticky top-40 hidden md:block p-10 py-16`}
              >
                <div className="flex flex-col mb-8">
                  <span className="mb-3">Article written by</span>
                  <strong>{article.author}</strong>
                </div>
                <div className="flex flex-col mb-8">
                  <span className="mb-3">Time of read</span>
                  <strong>{article.readingTime} Minutes</strong>
                </div>
                <div className="flex flex-col mb-8">
                  <span className="mb-3">Date posted</span>
                  <strong>{formatDate(article.publishDate)}</strong>
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
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
