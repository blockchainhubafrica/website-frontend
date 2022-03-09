/** @format */

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Banner } from "../../components";
import { LogoIcon, MenuIcon, TopRightArrowIcon } from "../../assets/images";
import styles from "./header.module.css";
import { useAppContext } from "../../contexts/appContext";
import { activeRouteClass } from "../../helpers";

function Header({}) {
  const { setIsRegistrationFormActive } = useAppContext();
  const activeRoute = useRouter().asPath;
  const [bannerIsActive, setBannerIsActive] = useState<boolean>(true);

  return (
    <header className={`${styles.container} `}>
      <div className="container justify-between flex items-center py-5">
        <Link href="/" passHref>
          <a>
            <LogoIcon />
          </a>
        </Link>
        <ul className={`${styles["links"]} items-center hidden lg:flex `}>
          <li className={activeRouteClass("/about", activeRoute, styles)}>
            <Link href="/components">About Us</Link>
          </li>
          <li className={activeRouteClass("/work", activeRoute, styles)}>
            <Link href="/work">Our work</Link>
          </li>
          <li className={activeRouteClass("/events", activeRoute, styles)}>
            <Link href="/events">Events</Link>
          </li>
          <li className={activeRouteClass("/blog", activeRoute, styles)}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={activeRouteClass("/contact", activeRoute, styles)}>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className={`${activeRouteClass("/hire-us", activeRoute, styles)} pr-0`}>
            <Link href="/hire-us" passHref>
              <a className={`${styles.cta} flex items-center py-3 px-6`}>
                <span className="mr-3">Hire Us</span>
                <span>
                  <TopRightArrowIcon />
                </span>
              </a>
            </Link>
          </li>
        </ul>
        <button className="lg:hidden" title="Open Menu">
          <MenuIcon />
        </button>
      </div>
      {bannerIsActive && (
        <Banner onBannerIsActive={setBannerIsActive} isActive={bannerIsActive}>
          Our Annual Internship Program Kicks Off This Summer, 30 July, 2022. To
          Register Click
          <button
            className={`${styles["register-btn"]} pl-2`}
            onClick={() => setIsRegistrationFormActive(true)}
          >
            Join The Web3 Internship 2022
          </button>
        </Banner>
      )}
    </header>
  );
}

export { Header };
