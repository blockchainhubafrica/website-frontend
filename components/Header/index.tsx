import Link from "next/link";
import { useRouter } from "next/router";
import { LogoIcon, TopRightArrowIcon } from "../../assets/images";
import styles from "./header.module.css";

function Header({}) {
  const activeRoute = useRouter().asPath;

  const activeRouteClass = (route: string) => {
    if (activeRoute.includes(route))
      return `px-3 text-lg text-white ${styles["active"]} }`;

    return `px-3 text-lg text-white`;
  };

  return (
    <header
      className={`container ${styles.container} justify-between flex items-center py-5`}
    >
      <Link href="/" passHref>
        <a>
          <LogoIcon />
        </a>
      </Link>
      <ul className="lg:flex items-center hidden">
        <li className={activeRouteClass("/about")}>
          <Link href="/components">About Us</Link>
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
          <Link href="/hire-us">
            <span className={`${styles.cta} flex items-center py-3 px-6`}>
              <span className="mr-3">Hire Us</span>
              <span>
                <TopRightArrowIcon />
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export { Header };
