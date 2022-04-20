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

export { AboutUsPageHead };
