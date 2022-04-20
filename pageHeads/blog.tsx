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

export { BlogPageHead };
