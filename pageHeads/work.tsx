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

export { WorkPageHead };
