import { NextSeo } from "next-seo";

const EventsPageHead = () => {
  return (
    <>
      <NextSeo
        title="Blockchain Hub Africa | Events"
        description="Here are some of the events and activities that we are hosting in our community."
        openGraph={{
          title: "Blockchain Hub Africa | Events",
          description:
            "Here are some of the events and activities that we are hosting in our community.",
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

export { EventsPageHead };
