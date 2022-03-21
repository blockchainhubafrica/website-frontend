import React from "react";
import styles from "./contact.module.css";
import { ContactForm } from "../../components";
import { DiscordIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../../assets/images";

export default function ContactUsPage() {
  return (
    <main className={`${styles["container"]} py-20 px-5 md:px-10 lg:px-20`}>
      <div className="mb-20">
        <h3 className={`spaced-heading text-base mb-5 font-coolvetica`}>CONTACT US</h3>
        <div className="lg:flex pt-3">
          <h3 className={`lg:w-3/4 mb-4 pb-5 md:pb-10 text-5xl md:text-7xl font-coolvetica text-blue-600 lg:mr-20 xl:mr-48`}>
            We are glad you made it here. Feel free to reach out to us
          </h3>

          <div className={`${styles["social-accounts"]} ml-auto pt-5`}>
            <p className="mb-3"><span className="text-blue-400">Call &amp; whatsapp:</span> <a target="_blank" href="https://wa.me/2349876543210">+234(0)987 654 3210</a></p>
            <p className="mb-3"><span className="text-blue-400">Email:</span> <a target="_blank" href="mailto:info@blockchainhubafrica.com">info@blockchainhubafrica.com</a></p>
            <p className="mb-3"><span className="text-blue-400">Address:</span> 123 My own house, Enugu State, Nigeria</p>
            <p className={`${styles["social-icons"]} flex`}>
              <a className="mr-3" target="_blank" href="https://discord.gg/hdBkVnXBZV"><DiscordIcon /></a>
              <a className="mr-3" target="_blank" href="https://twitter.com/blockhubafrica"><TwitterIcon /></a>
              <a className="mr-3" target="_blank" href="https://youtube.com/c/BlockchainHubAfrica"><YoutubeIcon /></a>
              <a target="_blank" href="https://instagram.com/blockchainhubafrica"><InstagramIcon /></a>
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-3/4">
        <ContactForm showTopics={false} />
      </div>
    </main>
  );
}
