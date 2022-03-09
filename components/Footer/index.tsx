import React from "react";
import { LogoIcon, DiscordIcon, InstagramIcon, TwitterIcon, TelegramIcon, YoutubeIcon, RightArrowIcon } from "../../assets/images";
import styles from "./footer.module.css";


function Footer() {
  // Handler
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["social-section"]} flex flex-col md:flex-row justify-between items-center my-20 md:my-20 md:mx-10 lg:mx-20 lg:py-20 px-5 md:px-14 lg:px-32`}>
        <h3 className={`${styles["social-heading"]} md:py-4 text-3xl md:text-4xl lg:text-5xl font-coolvetica text-blue-600 md:w-1/2`}>
          Join our social media community to stay updated
          </h3>

        <div className={`${styles["social-icons"]} flex w-full md:w-2/5 md:pl-10 my-10 pt-10 md:pt-0 md:ml-auto`}>
          <a href="#"><DiscordIcon /></a>
          <a href="#" className="mx-3 md:mx-5"><TwitterIcon /></a>
          <a href="#"><TelegramIcon /></a>
        </div>
      </div>

      <div className={`${styles["footer-section"]} pb-8 pt-16 lg:pt-24 px-5 lg:px-32`}>
        <div className="flex flex-col md:flex-row items-center lg:mb-20">
          <h3 className={`text-3xl md:text-4xl lg:text-6xl font-coolvetica text-blue-600 md:w-1/2`}>
            Let’s bring that idea to life. 😎
          </h3>

          <div className="flex flex-col py-10 md:py-0 md:ml-auto mt-auto">
            <a href="https://wa.me/2349876543210" target="_blank">Call &amp; whatsapp: +234(0)987 654 3210</a>
            <a href="mailto:info@blockchainhubafrica.com" target="_blank">Email: info@blockchainhubafrica.com</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between py-5">
          <div className="grid grid-cols-2 md:flex gap-6">
            <a href="#" className="col-span-1 md:mr-5">About Us</a>
            <a href="#" className="col-span-1 md:mr-5">Our work</a>
            <a href="#" className="col-span-1 md:mr-5">Events</a>
            <a href="#" className="col-span-1 md:mr-5">Blog</a>
            <a href="#" className="col-span-1 md:mr-5">Contact Us</a>
            <a href="#" className="col-span-1 md:mr-5">Careers</a>
          </div>

          <div className={`${styles["social-icons"]} items-center justify-center flex pt-10 mt-10 md:pt-0 md:mt-0`}>
            <a href="#" target="_blank" className="mr-3"><DiscordIcon /></a>
            <a href="#" target="_blank" className="mr-3"><TwitterIcon /></a>
            <a href="#" target="_blank" className="mr-3"><YoutubeIcon /></a>
            <a href="#" target="_blank"><InstagramIcon /></a>
          </div>
        </div>

        <div className="flex justify-between items-center py-5">
          <div className={styles["logo"]}><LogoIcon /></div>

          <div className={`${styles["back-to-top"]} items-center hidden md:flex`}>
            <span>Back To Top</span>
            <button className="py-2 px-4 ml-6" onClick={scrollToTop}><RightArrowIcon /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
