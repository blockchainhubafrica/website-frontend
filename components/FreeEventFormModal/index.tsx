import React, { useRef } from "react";
import styles from "./free-event-form-modal.module.css";

import { motion } from "framer-motion";
import { ModalParentVariants } from "animations";

import { useModal } from "hooks";
import { FormikProps } from "formik";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { ModalCloseIcon } from "assets/images";

export function FreeEventFormModal({
  isOpen,
  setIsOpen,
  formik,
  logoSrc,
}: {
  isOpen: boolean;
  setIsOpen: Function;
  formik: FormikProps<any>;
  logoSrc?: string;
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
          <div className={styles["form-heading-row"]}>
            <div className={styles["form-title-group"]}>
              <h3 className={`${styles["spaced-heading"]} text-2xl md:text-3xl`}>
                Registration Form
              </h3>
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt="Peaceland University logo"
                  className={styles["form-logo"]}
                />
              )}
            </div>
            <ModalCloseIcon onClick={() => setIsOpen(false)} />
          </div>
          <div>
            <Input name="name" formik={formik} label="Full Name" required className="mb-5" placeholder="Gavin Belson" />
          </div>
          <div>
            <Input name="email" formik={formik} label="Email" required className="mb-5" />
          </div>
          <div>
            <Input name="phone" formik={formik} label="Phone No." required className="mb-5" />
          </div>
          <div>
            <Input name="company" formik={formik} label="Company Name" required className="mb-5" placeholder="Hooli Inc." />
          </div>
          <div>
            <Input name="location" formik={formik} label="Company Location" required className="mb-5" placeholder="123 Main Street, City, Country" />
          </div>
          <div>
            <Input
              name="pitchDeckLink"
              formik={formik}
              label="Pitch Deck Link"
              className="mb-2"
              placeholder="https://drive.google.com/..."
            />
            <div
              style={{
                background: "#fff8e1",
                border: "1px solid #f59e0b",
                borderRadius: "6px",
                padding: "8px 12px",
                marginBottom: "20px",
              }}
            >
              <p style={{ color: "#92400e", fontSize: "0.75rem", margin: 0 }}>
                📎 Upload your pitch deck to{" "}
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1d4ed8", textDecoration: "underline" }}
                >
                  Google Drive
                </a>{" "}
                and paste the shareable link here.
                <br/> <p style={{ fontSize: "0.75rem", margin: 0 }}> Pitch Upload Instructions</p>
               <br/> <p style={{ fontSize: "0.75rem", margin: 0 }}> 1.  Upload your pitch to Google Drive  </p>
               <br/> <p style={{ fontSize: "0.75rem", margin: 0 }}> 2.  Click Share → General access → Select "Anyone with the link"  </p>
               <br/> <p style={{ fontSize: "0.75rem", margin: 0 }}> 3.  Copy the link and paste in the space provide above.  </p>
               <br/> <p style={{ fontSize: "0.75rem", margin: 0 }}> Note: Links with restricted access will not be reviewed. </p>
              </p>
            </div>
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
