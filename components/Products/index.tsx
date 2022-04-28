import React from "react";
import Image from "next/image";
import { ArrowTilt, demoProductsData } from "../../assets/images";

import styles from "./styles.module.css";
import { CloudinaryImage } from "../../components";

const Products = () => {
  return (
    <section className={`py-9 md:py-12  lg:py-14 ${styles.container}`}>
      <div className={`${styles.intro} w-full md:w-3/5 lg:w-2/4 xl:w-5/12`}>
        <h1 className="text-base text-blue-400 uppercase">Our work</h1>
        <h2 className="text-blue-600">
          <span>Products</span> that will change the <span>world.</span>
        </h2>
      </div>
      <div className={`my-10 ${styles.projects}`}>
        {demoProductsData.map((data, index) => (
          <div
            key={`${data.title}+${index}`}
            className={`flex flex-col md:flex-row ${styles.project} mt-14 md:mt-20`}
          >
            <div
              className={`${styles["image-container"]} ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <CloudinaryImage
                {...data.size}
                src={data.image}
                alt={`${data.title}-img`}
              />
            </div>
            <div
              className={`flex flex-col justify-center md:px-12 lg:px:15 xl:px-20 w-full lg:w-2/4 ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h1 className="text-blue-400 mb-5 mt-10 md:mt-0 ">
                {data.title}
              </h1>
              <p className="">{data.description}</p>
              <div className="mt-6 lg:mt-12">
                <a target={"_blank"} href={data.link}>
                  <span className="ml-1 md:ml-2">
                    View Project <ArrowTilt />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.foot} py-4 mt-10 md:mt-14 lg:mt-20`}>
        <p className="text-xl sm:text-2xl md:text-3xl flex flex-col md:block">
          <span className="font-coolvetica">
            Need to know more about our work?{" "}
          </span>
          <a href="mailto:hello@blockchainhub.africa&subject=Hello, I would love to learn more about your work">
            <span className="ml-1 md:ml-2">
              Shoot us a mail <ArrowTilt />
            </span>
          </a>
        </p>
      </div>
    </section>
  );
};

export { Products };
