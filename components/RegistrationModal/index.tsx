import { useFormik } from "formik";
import * as Yup from "yup";

import React, { useEffect, useRef, useState } from "react";
import { CircleCloseIcon, TopRightArrowIcon } from "../../assets/images";

import styles from "./registration-modal.module.css";
import { Input } from "../../components";

type ModalProps = {
  isActive: boolean;
  setIsActive: (status: boolean) => void;
};
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
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

function RegistrationModal({ isActive, setIsActive }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerClass, setContainerClass] = useState(
    `${styles["container"]}`
  );

  const closeModal = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (containerRef.current !== null) {
      document.body.style.overflow = isActive ? "hidden" : "auto";
      if (isActive && !containerClass.includes(styles["active"])) {
        containerRef.current.style.display = "flex";
        setTimeout(() => {
          setContainerClass((value) => (value += ` ${styles["active"]} pb-20`));
        }, 50);
      }
      if (!isActive) {
        document.body.style.overflow = "auto";
        setContainerClass(`${styles["container"]} pb-20`);
        setTimeout(() => {
          if (containerRef.current !== null) {
            containerRef.current.style.display = "none";
          }
        }, 400);
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [isActive, setIsActive]);

  const handleSubmit = (values: ValuesType) => void {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div ref={containerRef} className={containerClass} onClick={closeModal}>
      <div
        className={`${styles["modal-body"]} p-8 lg:p-16 `}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-between items-center">
            <h3 className={`${styles["spaced-heading"]} text-base`}>
              Registration Form
            </h3>
            <button
              onClick={closeModal}
              title="Close Registration Form"
              className={`${styles["circle-close-icon"]}`}
            >
              <CircleCloseIcon />
            </button>
          </div>
          <div className="py-8 lg:py-16">
            <h3
              className={`mb-4 text-3xl md:text-5xl font-coolvetica text-blue-600`}
            >
              Blockchain Tech Conference, 2022
            </h3>
            <div className={`${styles["subtitle"]} font-open-sans`}>
              <span>Event Date - </span>
              <span className="font-semibold">August 5, 2022</span>
            </div>
          </div>
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
      </div>
    </div>
  );
}

export { RegistrationModal };
