import React from "react";
import styles from "./contact.module.css";
import { ContactForm } from "../../components";

export default function ContactUsPage() {
  return (
    <main className={`${styles["container"]} py-20 px-5 md:px-10 lg:px-20`}>
      <div className="md:w-1/2 mb-20">
        <h3 className={`${styles["spaced-heading"]} text-base mb-5`}>CONTACT US</h3>
        <h3 className={`mb-4 text-3xl md:text-5xl font-coolvetica text-blue-600`}>
          Let’s work together to build &amp; make the dream come true. 🙏🏽
        </h3>
      </div>

      <div className="md:w-3/4">
        <ContactForm />
      </div>
    </main>
  );
}
