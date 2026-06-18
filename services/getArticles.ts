import { localArticles } from "./localArticles";

const findArticle = (articles: any, slug: string) => {
	const article = articles.find((article: any) => article.slug === slug);
	return article;
};

const getPrevArticle = (articles: any, slug: string) => {
	const index = articles.findIndex((article: any) => article.slug === slug);
	const prevArticle = index > 0 ? articles[index - 1] : false;
	return prevArticle;
};

const getNextArticle = (articles: any, slug: string) => {
	const index = articles.findIndex((article: any) => article.slug === slug);
	const nextArticle =
		index < articles.length - 1 ? articles[index + 1] : false;
	return nextArticle;
};

const getInsightsUrl = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.trim();
	if (!baseUrl) return null;

	try {
		return new URL("/insights", baseUrl).toString();
	} catch {
		return null;
	}
};

const buildListResponse = (remoteArticles: any[] = [], result: any = {}) => ({
	...result,
	data: {
		...(result?.data ?? {}),
		blog: [...localArticles, ...remoteArticles],
	},
});

async function getArticles(id: string = "") {
	const url = getInsightsUrl();

	if (!url) {
		const articles = [...localArticles];

		if (id) {
			const article = findArticle(articles, id) ?? null;
			const prevArticle = getPrevArticle(articles, id) ?? null;
			const nextArticle = getNextArticle(articles, id) ?? null;
			return { article, prevArticle, nextArticle };
		}

		return {
			data: {
				blog: articles,
			},
		};
	}

	try {
		let data = await fetch(url);
		let result = await data.json();
		const remoteArticles: any[] = Array.isArray(result?.data?.blog)
			? result.data.blog
			: [];
		const articles: any = [...localArticles, ...remoteArticles];
		if (id) {
			const article = findArticle(articles, id) ?? null;
			const prevArticle = getPrevArticle(articles, id) ?? null;
			const nextArticle = getNextArticle(articles, id) ?? null;
			return { article, prevArticle, nextArticle };
		}
		return buildListResponse(remoteArticles, result);
	} catch (error) {
		console.log(error);

		if (id) {
			const article = findArticle(localArticles, id) ?? null;
			const prevArticle = getPrevArticle(localArticles, id) ?? null;
			const nextArticle = getNextArticle(localArticles, id) ?? null;
			return { article, prevArticle, nextArticle };
		}

		return {
			data: {
				blog: [...localArticles],
			},
		};
	}
}

export { getArticles };
