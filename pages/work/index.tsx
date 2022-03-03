import React from "react";
import { TestimonialSection } from "../../components";
import styles from "./work-page.module.css";

export default function OurWorkPage() {
  return (
    <main className={styles["container"]}>
      <section>
          <TestimonialSection />
      </section>
    </main>
  );
}
