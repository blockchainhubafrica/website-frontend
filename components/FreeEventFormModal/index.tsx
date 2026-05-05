import React, { useEffect, useRef } from "react";
import styles from "./free-event-form-modal.module.css";

import { motion } from "framer-motion";
import { ModalParentVariants } from "animations";

import { useModal } from "hooks";
import { FormikProps } from "formik";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { ModalCloseIcon } from "assets/images";

const TECH_STACK_OPTIONS = [
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Fullstack", value: "Fullstack" },
  { label: "Nil", value: "Nil" },
];

export function FreeEventFormModal({
  isOpen,
  setIsOpen,
  formik,
}: {
  isOpen: boolean;
  setIsOpen: Function;
  formik: FormikProps<any>;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpen(false);
    formik.resetForm();
  };

  useModal(isOpen, modalRef, closeModal);

  return (
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={isOpen ? "enter" : "exit"}
      variants={ModalParentVariants}
      exit={{ opacity: 0, transition: { when: "afterChildren" } }}
      className={`${styles["container"]}`}
      onClick={closeModal}
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={isOpen ? { y: `100px` } : { y: "-100%" }}
        exit={{ y: "-100%" }}
        ref={modalRef}
        className={`${styles["modal-body"]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={formik.handleSubmit}
          className={`${styles["smaller-inputs"]} ${styles["form"]}`}
        >
          <div className="flex justify-between items-start">
            <h3 className={`${styles["spaced-heading"]} text-2xl md:text-3xl mb-5 md:mb-6`}>
              Registration Form
            </h3>
            <ModalCloseIcon onClick={() => setIsOpen(false)} />
          </div>
          <div>
            <Input name="firstName" formik={formik} label="First Name" className="mb-5" />
          </div>
          <div>
            <Input name="surname" formik={formik} label="Surname" className="mb-5" />
          </div>
          <div>
            <Input name="email" formik={formik} label="Email" className="mb-5" />
          </div>
          <div>
            <Input name="phone" formik={formik} label="Phone No." className="mb-5" />
          </div>
          <div>
            <Input
              as="select"
              name="techStack"
              formik={formik}
              label="Tech Stack"
              options={TECH_STACK_OPTIONS}
              placeholder="Select tech stack"
              className="mb-5"
            />
          </div>
          <div>
            <Input
              type="number"
              min={0}
              name="yearsOfExperience"
              formik={formik}
              label="Years of Experience"
              className="mb-5"
            />
          </div>
          <div>
            <Input
              name="portfolio"
              formik={formik}
              label="Portfolio / GitHub"
              placeholder="https://github.com/your-handle"
              className="mb-8"
            />
          </div>
          <div className={`${styles["registration-btn"]}`}>
            <Button
              type="submit"
              buttonType="primary"
              text={formik.isSubmitting ? "Registering..." : "Register"}
              disabled={formik.isSubmitting}
            />
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
