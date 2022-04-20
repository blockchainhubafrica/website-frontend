import { NextSeo } from "next-seo";

const HireUsPageHead = () => {
  return (
    <>
      <NextSeo
        title="Blockchain Hub Africa | Hire Us"
        description="Feel free to reach out so we can work together to build & make the dream come true."
        openGraph={{
          title: "Blockchain Hub Africa | Hire Us",
          description:
            "Feel free to reach out so we can work together to build & make the dream come true.",
        }}
      />
    </>
  );
};

export { HireUsPageHead };
