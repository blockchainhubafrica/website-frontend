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
        }}
      />
    </>
  );
};

export { ContactUsPageHead };
