import Link from "next/link";
import React from "react";
import { DefaultSEOHead } from "../pageHeads";

import styles from "./follow-us.module.css";

const X_SOCIAL_URL = "https://twitter.com/blockhubafrica";
const INSTAGRAM_SOCIAL_URL = "https://instagram.com/blockchainhubafrica";

export default function FollowUsPage() {
  return (
    <>
      <DefaultSEOHead />
      <main className={styles["container"]}>
        <section className={styles["hero"]}>
          <div className={styles["content"]}>
            <p className={styles["eyebrow"]}>Registration complete</p>
            <h1>Follow BlockchainHub Africa</h1>
            <p className={styles["copy"]}>
              Stay close to event updates, community announcements, and learning
              resources from the BlockchainHub Africa team.
            </p>
            <div className={styles["actions"]}>
              <a href={X_SOCIAL_URL} target="_blank" rel="noreferrer">
                Follow on X
              </a>
              <a href={INSTAGRAM_SOCIAL_URL} target="_blank" rel="noreferrer">
                Follow on Instagram
              </a>
            </div>
            <Link href="/events" passHref>
              <a className={styles["secondary-link"]}>Back to events</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
