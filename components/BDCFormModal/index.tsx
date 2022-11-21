import React, { useEffect, useRef, useState } from "react";
import styles from "./bdc-form-modal.module.css";

import { motion } from "framer-motion";
import { ModalParentVariants } from "animations";

import { useModal } from "hooks";
import { useLockedBody } from "usehooks-ts";
import { FormikProps } from "formik";
import { Input } from "components/Input";
import { FancyCheckbox } from "components/FancyCheckbox";
import { Button } from "components/Button";
import { ModalCloseIcon } from "assets/images";

export function BDCFormModal({
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
  const [locked, setLocked] = useLockedBody(false, "root");

  useEffect(() => {
    // setLocked(isOpen);
  }, [isOpen]);

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
          className={`${styles["smaller-inputs"]} py-8 px-8`}
        >
          <div className="flex justify-between items-start">
            <h3 className={`${styles["spaced-heading"]} text-3xl mb-8`}>
              Registration Form
            </h3>
            <ModalCloseIcon onClick={() => setIsOpen(false)} />
          </div>
          <div>
            <Input
              name="name"
              formik={formik}
              label="Name"
              className={`mb-5`}
            />
          </div>
          <div>
            <Input
              name="email"
              formik={formik}
              label="Email"
              className={`mb-5`}
            />
          </div>
          <div>
            <Input
              name="phone"
              formik={formik}
              label="Phone No."
              className={`mb-5`}
            />
          </div>
          <div>
            <Input
              name="couponCode"
              formik={formik}
              label="Coupon Code"
              className={`mb-10`}
            />
          </div>
          <div>
            <p className={`${styles["ticket-label"]} mb-5`}>Ticket type</p>
            <div className="flex flex-wrap gap-10 justify-between ">
              <FancyCheckbox
                className="text-black"
                value="Regular (FREE)"
                selectedValue={formik.values["ticket"]}
                onSelect={(value) => formik.setFieldValue("ticket", value)}
              />
              <FancyCheckbox
                className="text-black"
                value="VIP (N5,000)"
                selectedValue={formik.values["ticket"]}
                onSelect={(value) => formik.setFieldValue("ticket", value)}
              />
            </div>
          </div>
          <div className={`${styles["registration-btn"]} mt-16`}>
            <Button type="submit" buttonType="primary" text="Register" />
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
