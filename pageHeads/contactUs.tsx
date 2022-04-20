import { NextSeo } from "next-seo";

const ContactUsPageHead = () => {
  return (
    <>
      <NextSeo
        title="Blockchain Hub Africa | Contact Us"
        description="For any queries or further information, you can always
        connect with us here or leave us a message."
        openGraph={{
          title: "Blockchain Hub Africa | Contact Us",
          description:
            "For any queries or further information, you can always connect with us here or leave us a message.",
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

export { ContactUsPageHead };
