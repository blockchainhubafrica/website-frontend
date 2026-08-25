import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  LogoIcon,
  DiscordIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  RightArrowIcon,
} from "../../assets/images";import styles from "./footer.module.css";
import { HugeiconsIcon } from '@hugeicons/react';
import { Linkedin02Icon, NewTwitterIcon } from '@hugeicons/core-free-icons';

function Footer() {
  const activeRoute = useRouter().asPath;

  // Handler
  const activeRouteClass = (route: string) => {
    if (activeRoute.includes(route))
      return `${styles["footer-link"]} ${styles["active"]}`;

    return styles["footer-link"];
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
      {/* <div
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
      </div> */}

      <footer className={styles["footer-section"]}>
        <div
          className={`${styles["footer-inner"]} container`}
        >
          <div className={styles["footer-main"]}>
            <div className={styles["footer-contact"]}>
              <a href="mailto:info@blockchainhub.africa" target="_blank" rel="noreferrer">
                Email: info@blockchainhub.africa
              </a>
            </div>

            <div className={`${styles["links"]} ${styles["footer-links"]}`}>
              <span className={activeRouteClass("/about")}>
                <Link href="/about">About Us</Link>
              </span>
              <span className={activeRouteClass("/work")}>
                <Link href="/work">Our work</Link>
              </span>
              <span className={activeRouteClass("/events")}>
                <Link href="/events">Events</Link>
              </span>
              <span className={activeRouteClass("/blog")}>
                <Link href="/blog">Blog</Link>
              </span>
              <span className={activeRouteClass("/contact")}>
                <Link href="/contact">Contact Us</Link>
              </span>
            </div>

            <div className={`${styles["social-icons"]} ${styles["footer-social"]}`}>
              <a href="https://www.linkedin.com/company/blockchchainhubafrica/" target="_blank" rel="noreferrer">
              <HugeiconsIcon icon={Linkedin02Icon} size={24} />
              </a>
              <a href="https://twitter.com/blockhubafrica" target="_blank" rel="noreferrer">
              <HugeiconsIcon icon={NewTwitterIcon} size={24}/>
              </a>
              <a href="https://youtube.com/c/BlockchainHubAfrica" target="_blank" rel="noreferrer">
                <YoutubeIcon />
              </a>
              <a href="https://instagram.com/blockchainhubafrica" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className={styles["footer-bottom"]}>
            <div className={styles["logo"]}>
              <LogoIcon />
            </div>

            <div className={`${styles["back-to-top"]} items-center hidden md:flex`}>
              <span>Back To Top</span>
              <button
                className={`${styles["scroll-to-top"]} shadow-sm`}
                onClick={scrollToTop}
                type="button"
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
