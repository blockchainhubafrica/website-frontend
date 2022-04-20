import { NextSeo } from "next-seo";

const BlogPageHead = () => {
  return (
    <>
      <NextSeo
        title="Blockchain Hub Africa | Blog"
        description="Get news, blockchain and web3 updates and the latest on Blockchain Hub Africa."
        openGraph={{
          title: "Blockchain Hub Africa | Blog",
          description:
            "Get news, blockchain and web3 updates and the latest on Blockchain Hub Africa.",
        }}
      />
    </>
  );
};

export { BlogPageHead };
