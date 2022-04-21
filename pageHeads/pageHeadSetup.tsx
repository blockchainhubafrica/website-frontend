import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import {
  AboutUsPageHead,
  BlogItemPageHead,
  BlogPageHead,
  ContactUsPageHead,
  DefaultSEOHead,
  EventsPageHead,
  HireUsPageHead,
  HomePageHead,
  NotFoundPageHead,
  WorkPageHead,
} from "./index";
type headsType = { [key: string]: JSX.Element | string };

const PageHeadSetup = () => {
  const heads: headsType = {
    "/": <HomePageHead />,
    "/about": <AboutUsPageHead />,
    "/work": <WorkPageHead />,
    "/events": <EventsPageHead />,
    "/blog": <BlogPageHead />,
    "/blog/[id]": "",
    "/contact": <ContactUsPageHead />,
    "/hire-us": <HireUsPageHead />,
    "/components": <HomePageHead />,
    "/_error": <NotFoundPageHead />,
  };
  let route = useRouter().pathname;
  let A = `${heads[route]}`;
  return (
    <>
      {heads[route] || heads["/"]}
      <DefaultSEOHead />
    </>
  );
};

export default PageHeadSetup;
