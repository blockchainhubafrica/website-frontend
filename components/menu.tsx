import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TopRightArrowIcon } from "../assets/images";

function Menu() {
  const activeRoute = useRouter().asPath;

  const activeRouteClass = (route: string) => {
    if (activeRoute.includes(route)) return `px-3 text-base text-white `;

    return `px-3 text-base text-white`;
  };

  return (
    <nav className="mt-16">
      <ul className="items-center lg:hidden ">
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
        <li className={`${activeRouteClass("/hire-us")} mt-6`}>
          <Link href="/hire-us" passHref>
            <a className={`cta inline-flex items-center py-5 px-10`}>
              <span className="mr-3">Hire Us</span>
              <span>
                <TopRightArrowIcon />
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Menu };
