import React from "react";
import styles from "./contact.module.css";
import { ContactForm } from "../../components";

export default function ContactUsPage() {
  return (
    <main className={`${styles["container"]} py-20 px-5 md:px-10 lg:px-20`}>
      <div className="md:w-3/4 lg:w-1/2 mb-20">
        <h3 className={`spaced-heading text-base mb-5 font-coolvetica`}>CONTACT US</h3>
        <h3 className={`mb-4 pt-3 pb-5 md:pb-10 text-5xl md:text-7xl font-coolvetica text-blue-600`}>
          Let’s work together to build &amp; make the dream come true. 🙏🏽
        </h3>
      </div>

      <div className="md:w-3/4">
        <ContactForm />
      </div>
    </main>
  );
}
