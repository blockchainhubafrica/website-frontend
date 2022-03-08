import { useFormik } from "formik";
import * as Yup from "yup";

import React from "react";
import { TopRightArrowIcon } from "../../assets/images";

import styles from "./contact-form.module.css";
import { Input } from "..";


type ValuesType = {
  name: string;
  email: string;
  phone: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  message: Yup.string().required("Message is required").min(5, "Message must be a minimum of 5 characters"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function ContactForm() {
  const handleSubmit = (values: ValuesType) => void {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles["container"]}>
      <div>
        <Input
          name="name"
          formik={formik}
          label="Name"
          className={`mb-6`}
        />
      </div>
      <div>
        <Input
          name="email"
          formik={formik}
          label="Email"
          className={`mb-6`}
        />
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
        <Input
          name="message"
          formik={formik}
          label="Message"
          className={`mb-6`}
        />
      </div>
      <div className="mt-28">
        <button
          className={`${styles.submit} font-coolvetica justify-center flex items-center py-3 px-6`}
        >
          <span className="mr-3">Register</span>
          <span>
            <TopRightArrowIcon />
          </span>
        </button>
      </div>
    </form>
  );
}

export { ContactForm };
