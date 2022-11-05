import { useFormik } from "formik";
import * as Yup from "yup";

import React, { useState } from "react";
import { TopRightArrowIcon } from "../../assets/images";

import styles from "./contact-form.module.css";
import { Input, TextArea } from "..";

type ValuesType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

declare module "yup" {
  interface StringSchema {
    validMessage(message: string): Yup.StringSchema;
  }
}

Yup.addMethod(Yup.string, "validMessage", function (errorMessage) {
  return this.test("message", errorMessage, function (value) {
    const { path, createError } = this;
    return (
      (value && getWordsLength(value) >= 1) ||
      createError({ path, message: errorMessage })
    );
  });
});

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  message: Yup.string()
    .required("Message is required")
    .validMessage("Message must be a minimum of 1 word"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const getWordsLength = (words: string) => words.match(/(\w+)/g)?.length || 0;

const intialTopics: string[] = [];

const availableTopics = [
  { title: "Web3 Product Design UI/UX", value: "web3" },
  { title: "Blockchain Apps", value: "bapps" },
  { title: "DApp Front End Dev.", value: "dapp" },
  { title: "Smart Contract Dev.", value: "smart_contract" },
  { title: "Others", value: "others" },
];

function ContactForm({ showTopics = true }) {
  // State management
  const [topics, setTopics] = useState(intialTopics);

  // Handlers
  const handleSubmit = (values: ValuesType) => void {};

  const topicIsSelected = (value: string) => topics.includes(value);

  const handleClick = (value: string) => {
    let topicsClone = Array.from(topics);

    if (topicsClone.includes(value)) {
      topicsClone = topicsClone.filter((topic) => topic !== value);
    } else topicsClone.push(value);

    setTopics(topicsClone);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`${styles["container"]} md:px-10`}
    >
      {showTopics && (
        <div className={`${styles["topics"]} flex mb-20 flex-wrap gap-6`}>
          {availableTopics.map((topic) => (
            <div
              key={topic.value}
              className={`${
                topicIsSelected(topic.value) ? styles["active"] : ""
              } flex items-center`}
            >
              <button
                type="button"
                autoFocus={false}
                onClick={() => handleClick(topic.value)}
              >
                <span className="block"></span>
              </button>
              <span className="ml-2 md:text-2xl">{topic.title}</span>
            </div>
          ))}
        </div>
      )}
      <div>
        <Input name="name" formik={formik} label="Name" className={`mb-6`} />
      </div>
      <div>
        <Input name="email" formik={formik} label="Email" className={`mb-6`} />
      </div>
      <div>
        <Input
          name="phone"
          formik={formik}
          label="Phone No."
          className={`mb-6`}
        />
      </div>
      <div>
        <TextArea
          name="message"
          formik={formik}
          label="Message"
          className={`mb-6`}
        />
      </div>
      <div className="mt-28">
        <button
          type="submit"
          className={`${styles.submit} font-coolvetica justify-center flex items-center py-3 px-6`}
        >
          <span className="mr-3">Send Message</span>
          <span>
            <TopRightArrowIcon />
          </span>
        </button>
      </div>
    </form>
  );
}

export { ContactForm };
