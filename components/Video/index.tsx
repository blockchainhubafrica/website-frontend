import { useState } from "react";
import { motion } from "framer-motion";

import { PlayIcon } from "../../assets/images";
import styles from "./video.module.css";
import { CloudinaryImage } from "..";

const Video: React.FC<{ videoUrl: string; imageUrl: string }> = ({
  videoUrl,
  imageUrl,
}) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  let loadingClass = styles["loader-circle"];
  if (hasClicked) loadingClass += ` ${styles["loading"]}`;

  return (
    <div className={`${styles.container}`}>
      <div className={styles["loader-body"]}>
        {!hasLoaded && (
          <>
            <CloudinaryImage src={imageUrl} width={1500} height={756} />
            <div className={styles["loader"]}>
              <div className={loadingClass}></div>
              <button
                onClick={() => setHasClicked(true)}
                className={styles["icon-container"]}
              >
                <PlayIcon />
              </button>
            </div>
          </>
        )}

        {hasClicked && (
          <motion.iframe
            initial={{ opacity: 0, display: "none" }}
            animate={
              hasClicked &&
              hasLoaded && {
                opacity: 1,
                display: "block",
                transition: { ease: "easeInOut", duration: 0.2 },
              }
            }
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setHasLoaded(true)}
          ></motion.iframe>
        )}
      </div>
    </div>
  );
};

export { Video };
