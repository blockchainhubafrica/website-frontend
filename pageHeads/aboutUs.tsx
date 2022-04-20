import { NextSeo } from "next-seo";

const AboutUsPageHead = () => {
  return (
    <>
      <NextSeo
        title="Blockchain Hub Africa | About Us"
        description="Discover who we are, what we have achieved and what our mission is all about."
        openGraph={{
          title: "Blockchain Hub Africa | About Us",
          description:
            "Discover who we are, what we have achieved and what our mission is all about.",
        }}
      />
    </>
  );
};

export { AboutUsPageHead };
