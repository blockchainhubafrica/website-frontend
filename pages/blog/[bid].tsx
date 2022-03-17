import React, { useEffect, useRef, useState } from "react";
import styles from "./blog.module.css";
import { ContactForm } from "../../components";
import Link from "next/link";
import Image from "next/image";
import { achievementImage } from "../../assets/images/pngs";
import { RightArrowIcon } from "../../assets/images";
import { articles } from "../../data/blog";
import { useRouter } from "next/router";
import { DiscordIcon, LinkIcon, TwitterIcon, TelegramIcon } from "../../assets/images";

type Article = {
  title: string,
  body: string,
  headshot: StaticImageData,
  status: string,
  date: string,
  duration: string,
  author: string,
};

const subtract = (curr: number, num: number, min: number = 0) => curr === min ? curr : curr - num;

const add = (curr: number, num: number, max: number = 6) => curr === max ? curr : curr + num;


export default function BlogDetailPage() {
  const { query }: any = useRouter();
  const [initialArticle] = useState(query?.bid && !isNaN(Number(query?.bid)) ? subtract(parseInt(query?.bid), 1) : 0);
  console.log(query, initialArticle)
  const [currentSlide, setCurrentSlide] = useState<number[]>([0, 1]);
  const containerRef = useRef<HTMLElement | null>(null);


  const goRight = () => {
    setCurrentSlide([add(currentSlide[0], 1), add(currentSlide[1], 1)]);
    containerRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goLeft = () => {
    setCurrentSlide([subtract(currentSlide[0], 1), subtract(currentSlide[1], 1)]);
    containerRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // console.log(currentSlide, initialArticle, articles
  //   .slice(currentSlide[0], currentSlide[1]))
  // useEffect(() => {
  //   setCurrentSlide([initialArticle, 1])
  // }, [initialArticle])


  return (
    <main className={`${styles["detail-container"]} md:py-5 px-5 md:px-10 lg:px-20`}>
      {articles.length > 1 ? (
        <div className={`${styles["button-container"]} flex mt-8 md-mt-14 w-full`}>
          {currentSlide[0] !== 0 ? (
            <div className="flex items-center">
              <button id="article-slider-btn-1" className="" onClick={goLeft}>
                <RightArrowIcon style={{ transform: "rotate(180deg)" }} />
              </button>
              <h3 className={`spaced-heading text-base font-coolvetica mx-5`}>BACK</h3>
            </div>
          ) : (
            ""
          )}

          {currentSlide[1] < articles.length ? (
            <div className="flex items-center ml-auto">
              <h3 className={`spaced-heading text-base font-coolvetica mx-5`}>NEXT</h3>
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
      <section className={`${styles["articles-container"]} pt-10`} ref={containerRef}>
        <div className="md:py-10">
          {articles
            .slice(currentSlide[0], currentSlide[1])
            .map((article: Article, index: number) => (
              <div className={`${styles["article"]} mb-10`} key={`${article.title}+${index}`}>
                <h3 className={`mb-4 pb-5 md:pb-10 text-3xl md:text-7xl font-coolvetica text-blue-600 lg:w-3/4`}>
                  {article.title}
                </h3>

                <div className="flex py-5">
                  {/* Article menu */}
                  <div className={`${styles["menu"]} hidden md:block p-10 py-16`}>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Article written by</span>
                      <strong>{article.author}</strong>
                    </div>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Time of read</span>
                      <strong>12 Minutes</strong>
                    </div>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Date posted</span>
                      <strong>December 22, 2021</strong>
                    </div>
                    <div className="flex flex-col mb-8">
                      <span className="mb-3">Share</span>
                      <div className={`${styles["share-icons"]} flex`}>
                        <span className="mr-3"><DiscordIcon /></span>
                        <span className="mr-3"><TwitterIcon /></span>
                        <span className="mr-3"><TelegramIcon /></span>
                        <span className=""><LinkIcon /></span>
                      </div>
                    </div>
                  </div>

                  {/* Article body */}
                  <div className={`${styles["body"]} md:px-24`}>
                    <p>{article.body}</p>
                    <p>{article.body}</p>
                    <Image className={styles["img"]} src={article.headshot} />
                    <p>{article.body}</p>
                    <p>{article.body}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
