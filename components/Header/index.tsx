/** @format */

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Banner, SideNav } from "../../components";
import { LogoIcon, MenuIcon, TopRightArrowIcon } from "../../assets/images";
import styles from "./header.module.css";
import { useAppContext } from "../../contexts/appContext";
import { RegistrationModal } from "../RegistrationModal";

function Header({}) {
  const [isSideBarOpen, setisSideBarOpen] = useState<boolean>(false);
  const { isRegistrationFormActive, setIsRegistrationFormActive } =
    useAppContext();

  const activeRoute = useRouter().asPath;
  const [bannerIsActive, setBannerIsActive] = useState<boolean>(true);

  const activeRouteClass = (route: string) => {
    if (activeRoute.includes(route))
      return `px-3 text-lg text-white ${styles["active"]}`;

    return `px-3 text-lg text-white`;
  };

  return (
    <>
      <RegistrationModal
        isActive={isRegistrationFormActive}
        setIsActive={setIsRegistrationFormActive}
      />
      <header className={`${styles.container} `}>
        <div className="container justify-between flex items-center py-5">
          <Link href="/" passHref>
            <a className="scale-75 md:scale-100">
              <LogoIcon />
            </a>
          </Link>
          <ul className="items-center hidden lg:flex ">
            <li className={activeRouteClass("/about")}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={activeRouteClass("/work")}>
              <Link href="/work">Our work</Link>
            </li>
            <li className={activeRouteClass("/events")}>
              <Link href="/events">Events</Link>
            </li>
            <li className={activeRouteClass("/blog")}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={activeRouteClass("/contact")}>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className={`${activeRouteClass("/hire-us")} pr-0`}>
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
          {/* <button
            className="lg:hidden"
            title="Open Menu"
            onClick={() => setisSideBarOpen(true)}
          >
            <MenuIcon />
          </button> */}
          <SideNav />
        </div>
        {bannerIsActive && (
          <Banner
            onBannerIsActive={setBannerIsActive}
            isActive={bannerIsActive}
          >
            Our Annual Internship Program Kicks off in May, 2022.
            {/* To Register Click
            <button
              className={`${styles["register-btn"]} pl-2`}
              onClick={() => setIsRegistrationFormActive(true)}
            >
              Join The Web3 Internship 2022
            </button> */}
          </Banner>
        )}
      </header>
    </>
  );
}

export { Header };
