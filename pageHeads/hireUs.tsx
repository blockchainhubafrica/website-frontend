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
          images: [
            {
              url: "https://res.cloudinary.com/blockchainhub-africa/image/upload/v1650293106/Company-website/bcha_logo_dark_pzqxcl.jpg",
              width: 320,
              height: 320,
              alt: "Blockchain Hub Africa",
            },
          ],
        }}
      />
    </>
  );
};

export { HireUsPageHead };
