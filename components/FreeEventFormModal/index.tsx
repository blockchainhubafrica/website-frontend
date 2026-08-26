import React, { useRef } from "react";
import styles from "./free-event-form-modal.module.css";

import { motion } from "framer-motion";
import { ModalParentVariants } from "animations";

import { useModal } from "hooks";
import { FormikProps } from "formik";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { ModalCloseIcon } from "assets/images";
import { STAGE_OPTIONS } from "pages/events/buildandpitch";

export function FreeEventFormModal({
  isOpen,
  setIsOpen,
  formik,
  logoSrc,
  eventId,
}: {
  isOpen: boolean;
  setIsOpen: Function;
  formik: FormikProps<any>;
  logoSrc?: string;
  eventId?: string | null;
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
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
            <Input name="startupName" formik={formik} label="Startup Name" required className="mb-5" placeholder="Hooli Inc." />
          </div>
          <div>
            <Input
              name="description"
              formik={formik}
              label="Brief Description of your startup"
              required
              className="mb-10"
              placeholder="We deal in cloud computing services."
            />
          </div>
          <div>
            <Input name="startupLocation" formik={formik} label="Startup Location" required className="mb-5" placeholder="123 Main Street, City, Country" />
          </div>
          <div>
            <Input
              as="select"
              name="stage"
              formik={formik}
              label="What stage are you in?"
              options={STAGE_OPTIONS}
              placeholder="Select your stage"
              required
              className="mb-10"
            />
          </div>
          <div>
            <Input
              name="website"
              formik={formik}
              label="Startup Website"
              className="mb-5"
              placeholder="https://www.hooli.com"
            />
          </div>
          <div>
            <Input
              name="pitchDeckLink"
              formik={formik}
              label="Pitch Deck Link"
              className="mb-2"
              placeholder="https://drive.google.com/hooli-pitch-deck-v1"
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
                 Pitch Upload Instructions
                <p style={{ fontSize: "0.75rem", margin: 0 }}> 1.  Upload your pitch to Google Drive  </p>
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
              disabled={formik.isSubmitting || (eventId !== undefined && !eventId)}
            />
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
