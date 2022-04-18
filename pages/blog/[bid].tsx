import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./blog.module.css";
import { Loader } from "../../components";
import { RightArrowIcon } from "../../assets/images";
import {
  DiscordIcon,
  LinkIcon,
  TwitterIcon,
  TelegramIcon,
} from "../../assets/images";
import { useDataContext } from "../../contexts/dataContext";
import { formatDate } from "../../utils/formatDate";
import Head from "next/head";
import { getRandomKey } from "../../utils/randomKey";

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

function BlogDetailPage(props: any) {
  const { allData, isLoading, isError } = useDataContext();
  const articles: ArticleType[] = allData.blog || [];
  const router = useRouter();
  const currentArticleSlug = router.query.bid;
  console.log(props, currentArticleSlug);

  const getActiveIndex = () => {
    if (!articles.length) return 0;
    const index = articles.findIndex((x) => x.slug === currentArticleSlug);

    return index !== -1 ? index : 0;
  };

  const [copied, setCopied] = useState<boolean>(false);

  const [activeIndex, setactiveIndex] = useState<number>(getActiveIndex() || 0);

  const [activeArticle, setactiveArticle] = useState<ArticleType>(
    articles[activeIndex]
  );
  const prevArticle = activeIndex > 0 ? articles[activeIndex - 1] : false;
  const nextArticle =
    activeIndex < articles.length ? articles[activeIndex + 1] : false;

  useEffect(() => {
    // if (!isLoading && articles.length && !activeArticle)
    //   router.replace("/blog");

    if (articles.length) {
      setactiveIndex(getActiveIndex());
      setactiveArticle(articles[activeIndex]);
    }
  });

  const [showLoader, setShowLoader] = useState<boolean>(true);

  const containerRef = useRef<HTMLElement | null>(null);

  const handleCopy = () => {
    if (window) {
      navigator.clipboard.writeText(window?.location?.href);
      return setCopied(true);
    }
    return null;
  };

  return (
    <>
      <Head>
        <meta
          key={getRandomKey()}
          property="og:image"
          content={
            activeArticle?.url ||
            "https://res.cloudinary.com/blockchainhub-africa/image/upload/v1650293106/Company-website/bcha_logo_dark_pzqxcl.jpg"
          }
        />
      </Head>
      <main
        className={`${styles["detail-container"]} md:py-5 px-5 md:px-10 lg:px-20`}
      >
        {articles.length > 1 ? (
          <div
            className={`${styles["button-container"]} flex mt-8 md-mt-14 w-full`}
          >
            {prevArticle ? (
              <div className="flex items-center">
                <Link href={`/blog/${prevArticle.slug}`} passHref={true}>
                  <a className={`${styles["article-btn"]}`}>
                    <RightArrowIcon style={{ transform: "rotate(180deg)" }} />
                  </a>
                </Link>
                <h3 className={`spaced-heading text-base font-coolvetica mx-5`}>
                  BACK
                </h3>
              </div>
            ) : (
              ""
            )}

            {nextArticle ? (
              <div className="flex items-center ml-auto">
                <h3 className={`spaced-heading text-base font-coolvetica mx-5`}>
                  NEXT
                </h3>
                <Link href={`/blog/${nextArticle.slug}`} passHref={true}>
                  <a className={`${styles["article-btn"]}`}>
                    <RightArrowIcon />
                  </a>
                </Link>
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
                  {activeArticle?.title}
                </h3>

                <div className="flex py-5">
                  {/* Article menu */}
                  <div
                    className={`${styles["menu"]} sticky hidden md:block p-10 py-16`}
                  >
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Article written by</span>
                      <strong>{activeArticle?.author}</strong>
                    </div>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Time of read</span>
                      <strong>{activeArticle?.readingTime} Minutes</strong>
                    </div>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Date posted</span>
                      <strong>{formatDate(activeArticle?.publishDate)}</strong>
                    </div>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Share</span>
                      <div className={`${styles["share-icons"]} flex`}>
                        <span className="mr-3">
                          <a href="https://discord.com" target="_blank ">
                            <DiscordIcon />
                          </a>
                        </span>
                        <span className="mr-3">
                          <a
                            href={`https://twitter.com/intent/tweet?text=${window?.location?.href}`}
                            target="_blank"
                          >
                            <TwitterIcon />
                          </a>
                        </span>
                        <span className="mr-3">
                          <a href="https://telegram.org/" target="_blank">
                            <TelegramIcon />
                          </a>
                        </span>
                        <span className="cursor-pointer" onClick={handleCopy}>
                          <LinkIcon />
                        </span>
                      </div>
                      {copied ? (
                        <span className="mt-3 font-coolvetica font-bold">
                          Copied!!
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  {/* Article body */}
                  <div
                    className={`${styles["body"]} md:px-24`}
                    dangerouslySetInnerHTML={{ __html: activeArticle?.content }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default BlogDetailPage;
