import { NextSeo } from "next-seo";

const NotFoundPageHead = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          images: [
            {
              url: "https://res.cloudinary.com/blockchainhub-africa/image/upload/v1650293106/Company-website/bcha_logo_dark_pzqxcl.jpg",
              width: 320,
              height: 320,
              alt: "Blockchain Hub Africa",
            },
          ],
        }}
        title="Mojay Global Holding Limited | 404 - Page Not Found"
        description="Mojay Global Holding Limited is a holding company established in 2020, to embrace existing businesses and nurture new investment opportunities"
      />
    </>
  );
};

export { NotFoundPageHead };
