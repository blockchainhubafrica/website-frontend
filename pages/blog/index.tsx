import React, { useRef, useState } from "react";
import styles from "./blog.module.css";
import { ContactForm } from "../../components";
import Link from "next/link";
import Image from "next/image";
import { achievementImage } from "../../assets/images/pngs";
import { RightArrowIcon } from "../../assets/images";
import { useDataContext } from "../../contexts/dataContext";
import { formatDate } from "../../utils/formatDate";
import useSWR, { SWRConfig } from "swr";
import { getArticles } from "../../services/getArticles";
import { APIFormat } from "../../utils/getAPIFormat";
import { BlogPageHead, DefaultSEOHead } from "../../pageHeads";

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
	createdAt: string;
	updatedAt: string;
	slug: string;
	type: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Blog() {
	const { data, error } = useSWR("/api/articles", fetcher);
	const { allData, isError } = APIFormat(data, error);

	const articles = allData?.data?.blog;
	let latestDate: string;
	if (articles?.length) latestDate = articles[0]?.publishDate;
	const [currentSlide, setCurrentSlide] = useState<number[]>([0, 6]);
	const containerRef = useRef<HTMLElement | null>(null);

	const scrollToTop = () => {
		return containerRef?.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};
	const goRight = () => {
		setCurrentSlide([currentSlide[0] + 6, currentSlide[1] + 6]);
		scrollToTop();
	};

	const goLeft = () => {
		setCurrentSlide([currentSlide[0] - 6, currentSlide[1] - 6]);
		scrollToTop();
	};

	return (
		<>
			<BlogPageHead />
			<DefaultSEOHead />
			<main
				className={`${styles["container"]} py-10 md:py-20 px-5 md:px-10 lg:px-20`}
			>
				<div className="md:w-3/4 lg:w-1/2 mb-10 md:mx-10 lg:mx-20">
					<h3
						className={`spaced-heading text-base mb-5 font-coolvetica`}
					>
						BLOG
					</h3>
					<h3
						className={`mb-4 pt-3 pb-5 md:pb-10 text-4xl md:text-7xl font-coolvetica text-blue-600`}
					>
						Articles, Thoughts and Web3 knowledge
					</h3>
				</div>

				<div
					className={`${styles["featured-article"]} py-16 bg-blue-600 grid grid-cols-1 lg:grid-cols-3 px-10 lg:px-28 md:mx-10 lg:mx-20`}
				>
					<div className="flex flex-col col-span-2">
						<span className="font-coolvetica py-2 px-5">
							FEATURED ARTICLE
						</span>
						<h3 className="text-3xl md:text-5xl my-5 md:my-10">
							{articles?.length && (
								<Link href={`/blog/${articles[0].slug}`}>
									{articles[0].title}
								</Link>
							)}
						</h3>
						<span className="">
							{articles?.length &&
								formatDate(articles[0]?.publishDate)}{" "}
							{articles?.length && (
								<strong>
									{articles[0]?.readingTime} min Read
								</strong>
							)}
						</span>
					</div>
					<div className={`hidden lg:block col-span-1`}>
						<Image src={achievementImage} />
					</div>
				</div>

				<section
					className={`${styles["articles-container"]} pt-5`}
					ref={containerRef}
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 py-10 md:px-10 lg:px-20">
						{articles
							?.slice(currentSlide[0], currentSlide[1])
							?.map((article: ArticleType, index: number) => {
								const date = formatDate(article.publishDate);
								const type = article.type;

								return (
									<div
										className={`${styles["article"]} mb-10`}
										key={`${article.title}+${index}`}
									>
										<div className="mb-5">
											<Image
												src={article.url}
												layout="fill"
											/>
										</div>
										<div
											className={`${styles["body-text"]} flex flex-col`}
										>
											<small
												className={`${
													styles[article.type]
												} py-2 px-4 text-center my-2`}
											>
												{type +
													` ${
														type === "Latest"
															? "Article"
															: "Read"
													}`}
											</small>
											<Link
												href={`/blog/${article.slug}`}
											>
												{article.title}
											</Link>
											<span>
												{date}{" "}
												<strong>
													{article.readingTime} min
													Read
												</strong>
											</span>
											
										</div>
									</div>
								);
							})}
					</div>
					{articles?.length > 6 ? (
						<div
							className={`${styles["button-container"]} mt-8 md-mt-14`}
						>
							{currentSlide[0] !== 0 ? (
								<button
									id="article-slider-btn-1"
									className="mr-8"
									onClick={goLeft}
								>
									<RightArrowIcon
										style={{ transform: "rotate(180deg)" }}
									/>
								</button>
							) : (
								""
							)}
							{currentSlide[1] < articles.length ? (
								<button
									id="article-slider-btn-2"
									onClick={goRight}
								>
									<RightArrowIcon />
								</button>
							) : (
								""
							)}
						</div>
					) : (
						""
					)}
				</section>
			</main>
		</>
	);
}

function BlogPage({ fallback }: any) {
	return (
		<SWRConfig value={{ fallback }}>
			<Blog />
		</SWRConfig>
	);
}

export async function getStaticProps(context: any) {
	let articles = await getArticles();
	// console.log({ context });
	const a = {
		props: {
			fallback: {
				"/api/articles": articles,
			},
		},
	};
	return a;
}

export default BlogPage;
