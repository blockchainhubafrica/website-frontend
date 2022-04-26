import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./blog.module.css";
import { RightArrowIcon } from "../../assets/images";
import {
  DiscordIcon,
  LinkIcon,
  TwitterIcon,
  TelegramIcon,
} from "../../assets/images";
import { formatDate } from "../../utils/formatDate";
import Head from "next/head";
import { toast } from "react-toastify";
import { BlogItemPageHead, DefaultSEOHead } from "../../pageHeads";
import { useData } from "../../hooks/useData";
import { getArticles } from "../../services/getArticles";
import useSWR, { SWRConfig } from "swr";
import { APIFormat } from "../../utils/getAPIFormat";
import { useSsr } from "../../hooks";
import { NextSeo } from "next-seo";

type ArticleType = {
  noOfViews: number;
  altText: string;
  _id: string;
  title: string;
  author: string;
  readingTime: number;
  content: string;
  publishDate: string;
  status: "Draft" | "Published";
  url: string;
  slug: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

type allDataType = {
  article: ArticleType;
  prevArticle: ArticleType;
  nextArticle: ArticleType;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function BlogDetail() {
  const { isBrowser } = useSsr();
  const [twitterMessage, settwitterMessage] = useState<string>("");
  useEffect(() => {
    if (isBrowser) {
      const twitterMessage = `https://twitter.com/intent/tweet?text=Hey guys. Check out this article on blockchain Hub Africa's blog: ${window.location.href}`;
      settwitterMessage(twitterMessage);
    }
  }, [isBrowser]);
  const router = useRouter();
  const slug = router.query.id;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { data, error } = useSWR(`/api/articles/${slug}`, fetcher);
  const { allData, isError } = APIFormat(data, error, null);
  const { article, prevArticle, nextArticle }: allDataType = allData;
  const hasMultipleArticles = prevArticle || nextArticle;

  const containerRef = useRef<HTMLElement | null>(null);

  const handleCopy = () => {
    if (isBrowser) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };
  
  return (
    <>
      <NextSeo
        title={`Blockchain Hub Africa | Blog`}
        description={article.title}
        openGraph={{
          title: "Blockchain Hub Africa | Blog",
          description: article.title,
          images: [
            {
              url: article.url,
              width: 360,
              height: 360,
              alt: article.altText,
            },
          ],
        }}
      />
      <DefaultSEOHead />
      <div>
        <main className={`${styles["detail-container"]} md:py-5 container`}>
          {hasMultipleArticles ? (
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
                  <h3
                    className={`spaced-heading text-base font-coolvetica mx-5`}
                  >
                    BACK
                  </h3>
                </div>
              ) : (
                ""
              )}

              {nextArticle ? (
                <div className="flex items-center ml-auto">
                  <h3
                    className={`spaced-heading text-base font-coolvetica mx-5`}
                  >
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
          <section
            className={`${styles["articles-container"]} pt-10`}
            ref={containerRef}
          >
            <div className="md:py-10">
              <div className={`${styles["article"]} mb-10`}>
                <h3
                  className={`mb-4 pb-5 md:pb-10 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-coolvetica text-blue-600 2xl:w-4/5`}
                >
                  {article?.title}
                </h3>

                <div className="flex py-5">
                  {/* Article menu */}
                  <div
                    className={`${styles["menu"]} sticky hidden md:block p-10 py-16`}
                  >
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Article written by</span>
                      <strong>{article?.author}</strong>
                    </div>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Time of read</span>
                      <strong>{article?.readingTime} Minutes</strong>
                    </div>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Date posted</span>
                      <strong>{formatDate(article?.publishDate)}</strong>
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
                          <a href={twitterMessage} target="_blank">
                            <TwitterIcon />
                          </a>
                        </span>
                        <span className="mr-3">
                          <a href="https://telegram.org/" target="_blank">
                            <TelegramIcon />
                          </a>
                        </span>
                        <span
                          className="cursor-pointer flex items-center"
                          onClick={handleCopy}
                        >
                          <LinkIcon />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Article body */}
                  <div
                    className={`${styles["body"]} md:pl-12 lg:pl-14 xl:pl-16 2xl:pl-20 xlg:px-28`}
                    dangerouslySetInnerHTML={{
                      __html: article?.content,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function BlogDetailPage({ fallback }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <BlogDetail />
    </SWRConfig>
  );
}

export async function getStaticProps(context: any) {
  const slug = context.params.id;
  // console.log(slug);
  let article = await getArticles(slug);
  const a = {
    props: {
      fallback: {
        [`/api/articles/${slug}`]: article,
      },
    },
  };
  return a;
}

export async function getStaticPaths() {
  let response: any = await getArticles();
  let articles = response.data.blog;

  const paths = articles.map((post: any) => {
    return {
      params: { id: `${post.slug}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export default BlogDetailPage;
