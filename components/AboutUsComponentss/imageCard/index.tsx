import Image from "next/image";
import React from "react";
import { CloudinaryImage } from "../../index";

import styles from "./style.module.css";

const ImageCard: React.FC<{
  name: string;
  title: string;
  image?: StaticImageData | string;
  key: string;
}> = ({ name, title, image, key }) => {
  return (
    <div
      className={`${styles["container"]} text-center inline-block`}
      key={key}
    >
      {typeof image === "string" ? (
        <CloudinaryImage
          src={image ? image : ""}
          alt={name}
          height={455}
          width={323}
        />
      ) : (
        <Image
          src={image ? image : ""}
          alt={name}
          height={379}
          width={269}
          objectFit="cover"
          quality={100}
        />
      )}

      <h4>{name}</h4>
      <h5>{title}</h5>
    </div>
  );
};

export { ImageCard };
