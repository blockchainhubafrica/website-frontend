/** @format */

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Banner, SideNav } from "../../components";
import { LogoIcon, MenuIcon, TopRightArrowIcon } from "../../assets/images";
import styles from "./header.module.css";
import { useAppContext } from "../../contexts/appContext";
import { RegistrationModal } from "../RegistrationModal";
import { useRouteChangeHandler } from "hooks";

function Header({}) {
  const [isSideBarOpen, setisSideBarOpen] = useState<boolean>(false);
  const { isRegistrationFormActive, setIsRegistrationFormActive } =
    useAppContext();
  const router = useRouter();
  const activeRoute = router.asPath;
  const bannerRoute = "/events/bdc-2022";
  const [bannerIsActive, setBannerIsActive] = useState<boolean>(true);

  const { routeChanging } = useRouteChangeHandler();
  useEffect(() => {
    if (bannerRoute === activeRoute) return setBannerIsActive(false);
    setBannerIsActive(true);
  }, [routeChanging]);

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
        {false && (
          <Banner
            onBannerIsActive={setBannerIsActive}
            isActive={bannerIsActive}
          >
            <div className="lg:hidden flex gap-x-3">
              <span className="inline-block ">
                The Blockchain Tech conference 2022.
                <Link href="/events/bdc-2022">
                  <a className="inline-block border-b-2 border-white">
                    Register Here
                  </a>
                </Link>
              </span>
            </div>
            <div className="hidden lg:block">
              The Blockchain Tech conference kicks off on December 3rd, 2022
              {".   "}
              <Link href="/events/bdc-2022">
                <a className="inline-block border-b-2 border-black hover:text-white">
                  Register Here
                </a>
              </Link>
            </div>
          </Banner>
        )}
      </header>
    </>
  );
}

export { Header };
