import React from "react";
import styles from "./footer.module.css";


function Footer() {
  return (
    <div className={`${styles["container"]}`}>
      <div className="flex justify-between items-center py-8 lg:py-16 px-5 md:px-10 lg:px-20">
        <h3 className={`${styles["social-heading"]} mb-4 text-3xl md:text-5xl font-coolvetica text-blue-600 md:w-2/3`}>
          Join our social media community to stay updated
          </h3>

        <div className={`${styles["social-icons"]} items-center flex`}>
        </div>
      </div>

      <div className={`${styles["footer-section"]} py-8 lg:py-16 px-5 md:px-10 lg:px-20`}>
        <div className="flex items-center">
          <h3 className={`mb-4 text-3xl md:text-5xl font-coolvetica text-blue-600 md:w-1/2`}>
            Let’s bring that idea to life. 😎
            </h3>

          <div className={`${styles["social-icons"]} items-center flex`}>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="grid grid-cols-2 md:flex">
            <span className="col-span-1 md:flex-1">About Us</span>
            <span className="col-span-1 md:flex-1">Our work</span>
            <span className="col-span-1 md:flex-1">Events</span>
            <span className="col-span-1 md:flex-1">Blog</span>
            <span className="col-span-1 md:flex-1">Contact Us</span>
            <span className="col-span-1 md:flex-1">Careers</span>
          </div>

          <div className={`${styles["social-icons"]} items-center flex`}>
          </div>
        </div>

        <div className="flex justify-between items-center py-5">
          <span>logo</span>

          <div className={` items-center flex`}>
            Back To Top
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
