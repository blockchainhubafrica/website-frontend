import { NextSeo } from "next-seo";

const HomePageHead = () => {
  return (
    <>
      <NextSeo
        title="Blockchain Hub Africa | Home"
        description="Blockchain Hub Africa was startup established in 2021 to drive Blockchain and Web3 adoption by cultivating blockchain talent and solutions in Africa."
        openGraph={{
          title: "Blockchain Hub Africa | Home",
          description:
            "Blockchain Hub Africa was startup established in 2021 to drive Blockchain and Web3 adoption by cultivating blockchain talent and solutions in Africa.",
        }}
      />
    </>
  );
};

export { HomePageHead };
