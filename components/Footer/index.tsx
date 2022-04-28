import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  LogoIcon,
  DiscordIcon,
  InstagramIcon,
  TwitterIcon,
  TelegramIcon,
  YoutubeIcon,
  RightArrowIcon,
  coolEmoji,
} from "../../assets/images";
import styles from "./footer.module.css";

function Footer() {
  const activeRoute = useRouter().asPath;

  // Handler
  const activeRouteClass = (route: string) => {
    if (activeRoute.includes(route))
      return `px-3 text-lg text-white ${styles["active"]}`;

    return `px-3 text-lg text-white`;
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${styles["container"]}`}>
      <div
        className={`${styles["social-section"]} container flex flex-col md:flex-row justify-between items-center my-20 lg:my-36 lg:py-28 2xl:px-52`}
      >
        <h3
          className={`${styles["social-heading"]} md:py-4 text-3xl md:text-4xl lg:text-7xl text-blue-600 md:w-1/2`}
        >
          Join our social media community to stay updated
        </h3>

        <div
          className={`${styles["social-icons"]} flex w-full md:w-2/5 md:pl-10 my-10 pt-10 md:pt-0 md:ml-auto`}
        >
          <a href="https://discord.gg/hdBkVnXBZV" target="_blank">
            <DiscordIcon />
          </a>
          <a
            href="https://twitter.com/blockhubafrica"
            target="_blank"
            className="mx-3 md:mx-5"
          >
            <TwitterIcon />
          </a>
          <a href="https://t.me/blockchainhubafrica" target="_blank">
            <TelegramIcon />
          </a>
        </div>
      </div>

      <div
        className={`${styles["footer-section"]} pb-8 pt-16 md:pt-20 lg:pt-32 container`}
      >
        <div className="grid md:grid-cols-2 md:items-center md:mb-10 lg:mb-32">
          <div className="inline-block items-center">
            <h3
              className={`text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl text-blue-100 inline`}
            >
              Let’s bring that idea to life.
            </h3>
            <div
              className={`${styles["cool-emoji"]} inline fix-img-height ml-8 mt-2`}
            >
              <Image quality={100} src={coolEmoji} width={65} height={65} />
            </div>
          </div>

          <div className="flex flex-col py-10 md:py-0 md:ml-auto mt-auto md:text-xl">
            <a
              className="lg:text-2xl mb-3"
              href="https://wa.me/2347063858045"
              target="_blank"
            >
              Call &amp; whatsapp: +234(0)7063858045
            </a>
            <a
              className="lg:text-2xl"
              href="mailto:hello@blockchainhub.africa"
              target="_blank"
            >
              Email: hello@blockchainhub.africa
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-10 md:items-center justify-between py-5">
          <div className={`${styles["links"]} grid grid-cols-2 md:flex gap-1`}>
            <span
              className={`${activeRouteClass(
                "/about"
              )} col-span-1 px-0 md:pr-6`}
            >
              <Link href="/about">About Us</Link>
            </span>
            <span
              className={`${activeRouteClass("/work")} col-span-1 px-0 md:pr-6`}
            >
              <Link href="/work">Our work</Link>
            </span>
            <span
              className={`${activeRouteClass(
                "/events"
              )} col-span-1 px-0 md:pr-6`}
            >
              <Link href="/events">Events</Link>
            </span>
            <span
              className={`${activeRouteClass("/blog")} col-span-1 px-0 md:pr-6`}
            >
              <Link href="/blog">Blog</Link>
            </span>
            <span
              className={`${activeRouteClass(
                "/contact"
              )} col-span-1 px-0 md:pr-6`}
            >
              <Link href="/contact">Contact Us</Link>
            </span>
            {/* <span className={`${activeRouteClass("/careers")} col-span-1 px-0`}>
              <Link href="/careers">Careers</Link>
            </span> */}
          </div>

          <div
            className={`${styles["social-icons"]} items-center justify-center flex pt-14 pb-4 mt-10 md:pt-0 md:mt-0 md:ml-auto`}
          >
            <a
              href="https://discord.gg/hdBkVnXBZV"
              target="_blank"
              className="mr-3"
            >
              <DiscordIcon />
            </a>
            <a
              href="https://twitter.com/blockhubafrica"
              target="_blank"
              className="mr-3"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://youtube.com/c/BlockchainHubAfrica"
              target="_blank"
              className="mr-3"
            >
              <YoutubeIcon />
            </a>
            <a href="https://instagram.com/blockchainhubafrica" target="_blank">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center py-5 md:py-10">
          <div className={styles["logo"]}>
            <LogoIcon />
          </div>

          <div
            className={`${styles["back-to-top"]} items-center hidden md:flex`}
          >
            <span className="text-xl">Back To Top</span>
            <button
              className={`${styles["scroll-to-top"]} py-3 px-6 ml-6 shadow-sm`}
              onClick={scrollToTop}
            >
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
