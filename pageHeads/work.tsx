import { NextSeo } from "next-seo";

const WorkPageHead = () => {
  return (
    <>
      <NextSeo
        title="Blockchain Hub Africa | Work"
        description="View some of our products, services and client testimonials."
        openGraph={{
          title: "Blockchain Hub Africa | Work",
          description:
            "View some of our products, services and client testimonials.",
        }}
      />
    </>
  );
};

export { WorkPageHead };
