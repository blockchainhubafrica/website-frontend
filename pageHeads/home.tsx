import { NextSeo } from "next-seo";

const HomePageHead = () => {
  return (
    <>
      <NextSeo
        title="Blockchain Hub Africa | Home"
        description="Blockchain Hub Africa is a startup established in 2021 to drive Blockchain and Web3 adoption by cultivating blockchain talent and solutions in Africa."
        openGraph={{
          title: "Blockchain Hub Africa | Home",
          description:
            "Blockchain Hub Africa is a startup established in 2021 to drive Blockchain and Web3 adoption by cultivating blockchain talent and solutions in Africa.",
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

export { HomePageHead };
