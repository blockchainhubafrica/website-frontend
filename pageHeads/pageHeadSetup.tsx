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

const heads: headsType = {
  "/": <HomePageHead />,
  "/about": <AboutUsPageHead />,
  "/work": <WorkPageHead />,
  "/events": <EventsPageHead />,
  "/blog": <BlogPageHead />,
  "/blog/[bid]": "",
  "/contact": <ContactUsPageHead />,
  "/hire-us": <HireUsPageHead />,
  "/components": <HomePageHead />,
  "/_error": <NotFoundPageHead />,
};

const PageHeadSetup = () => {
  let route = useRouter().pathname;
  return (
    <>
      {heads[route] || heads["/"]}
      <DefaultSEOHead />
    </>
  );
};

export default PageHeadSetup;
