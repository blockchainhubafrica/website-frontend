import Image, { StaticImageData } from "next/image";
import React from "react";
import { CloudinaryImage } from "../../index";

import styles from "./style.module.css";

const ImageCard: React.FC<{
  name: string;
  title: string;
  image?: StaticImageData | string;
  shape?: "pill" | "circle";
  className?: string;
}> = ({ name, title, image, shape = "pill", className = "" }) => {
  const isCircle = shape === "circle";

  return (
    <div
      className={`${styles["container"]} ${
        isCircle ? styles["circle-card"] : ""
      } ${className}`}
    >
      <div
        className={
          isCircle ? styles["circle-image-wrapper"] : styles["image-wrapper"]
        }
      >
        {typeof image === "string" ? (
          <CloudinaryImage
            src={image ? image : ""}
            alt={name}
            height={isCircle ? 200 : 455}
            width={isCircle ? 200 : 323}
          />
        ) : (
          <Image
            src={image ? image : ""}
            alt={name}
            height={isCircle ? 200 : 379}
            width={isCircle ? 200 : 269}
            objectFit="cover"
            quality={100}
          />
        )}
      </div>

      <h4>{name}</h4>
      <h5>{title}</h5>
    </div>
  );
};

export { ImageCard };

