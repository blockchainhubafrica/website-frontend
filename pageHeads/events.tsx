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
        }}
      />
    </>
  );
};

export { EventsPageHead };
