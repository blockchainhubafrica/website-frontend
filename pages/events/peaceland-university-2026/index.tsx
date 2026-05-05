import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Calendar2, Location } from "../../../assets/images";
import { useFormik } from "formik";

import {
  Button,
  Footer,
  FreeEventFormModal,
  Input,
} from "../../../components";

import styles from "./styles.module.css";
import { DefaultSEOHead, EventsPageHead } from "../../../pageHeads";
import {
  GetPublishedEventsAPI,
  RegisterForEventAPI,
} from "../../../services/registrationService";
import { apiErrorMessage } from "../../../utils/handleAPIErrors";
import { toast } from "react-toastify";
import action from "services/actionService";

const EVENT_NAME = "Intro to Blockchain - Peaceland University 2026";

export const registrationSuccessModalContent = {
  title: "Registration Successful",
  content:
    "Congratulations! Your registration was successful. A confirmation email has been sent to your inbox.",
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
  phone: Yup.string()
    .matches(
      /^(\+234|0)[7-9]\d{9}$/,
      "Enter a valid Nigerian number (e.g. 08012345678)"
    )
    .required("Phone Number is required"),
});

const initialValues: ValuesType = {
  name: "",
  email: "",
  phone: "",
};

export default function PeacelandUniversity2026() {
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
  const [eventId, setEventId] = useState<string | null>(null);

  useEffect(() => {
    GetPublishedEventsAPI()
      .then((res) => {
        const events: any[] = res.data?.data ?? [];
        const match = events.find((e) => e.event_name === EVENT_NAME);
        if (match) setEventId(match._id);
      })
      .catch(() => {});
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: ValuesType) {
    if (!eventId) {
      toast.error("Event not found. Please try again later.");
      return;
    }
    const toastId = toast.loading("Registering...");
    try {
      await RegisterForEventAPI(eventId, {
        name: values.name,
        email: values.email,
        phone: values.phone,
      });
      toast.dismiss(toastId);
      formik.resetForm();
      setIsMobileFormOpen(false);
      action.success(registrationSuccessModalContent);
    } catch (error) {
      const message = apiErrorMessage(error);
      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        pauseOnFocusLoss: false,
      });
    }
  }

  return (
    <>
      <EventsPageHead />
      <DefaultSEOHead />
      <div>
        <FreeEventFormModal
          isOpen={isMobileFormOpen}
          setIsOpen={setIsMobileFormOpen}
          formik={formik}
        />
      </div>
      <main className={styles["container"]}>
        <section
          className={`bg-blue-600 pb-20 lg:pb-28 ${styles["hero-section"]}`}
        >
          <div className="container">
            <div className="py-12 md:py-20 lg:py-24 xl:grid xl:grid-cols-7 items-center place-items-center gap-x-8">
              <div className="xl:col-span-4">
                <h1
                  className={`${styles["header"]} text-3xl md:text-4xl lg:text-5xl mb-2`}
                >
                  Intro to blockchain development
                </h1>
                <h3 className={`${styles["subtitle"]} text-lg`}>
                  Peaceland University, Enugu State
                </h3>
                <h4 className={`${styles["orange-heading"]} mt-6`}>About</h4>
                <p className="text-base md:text-lg text-white mt-3 font-normal">
                  Kickstart your journey into blockchain development with our Rust for Solana Virtual Machine series. This course introduces you to the fundamentals of building scalable, high-performance decentralized applications using Rust on the Solana ecosystem.
                </p>
                <hr className={`${styles["bottom-bar"]} my-8`} />
                <div className="flex gap-x-4 items-center mb-5">
                  <span>
                    <Calendar2 />
                  </span>
                  <span className="text-2xl">9AM, Wednesday 6th May, 2026</span>
                </div>
                <div className="flex gap-x-4 items-center mb-5">
                  <span>
                    <Location />
                  </span>
                  <span className="text-2xl">
                    Peaceland University, Enugu State
                  </span>
                </div>
                <hr className={`${styles["bottom-bar"]} my-8`} />

                <div
                  className={`my-8 xl:hidden ${styles["registration-form-btn"]}`}
                >
                  <Button
                    className="text-base"
                    type="button"
                    buttonType="primary"
                    text="Click to Register Now"
                    onClick={() => setIsMobileFormOpen(true)}
                  />
                </div>

                <h4 className={`${styles["orange-heading"]} mb-4`}>
                  Registration Fee
                </h4>
                <span className={styles["free-badge"]}>FREE</span>
              </div>

              <div className={`hidden xl:block xl:col-span-3 ml-auto`}>
                <form onSubmit={formik.handleSubmit} className="py-8 px-8">
                  <div className="flex justify-between items-center">
                    <h3 className={`${styles["spaced-heading"]} text-3xl mb-8`}>
                      Registration Form
                    </h3>
                  </div>
                  <div>
                    <Input
                      name="name"
                      formik={formik}
                      label="Name"
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      formik={formik}
                      label="Email"
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      formik={formik}
                      label="Phone No."
                      className="mb-10"
                    />
                  </div>
                  <div className="mt-4">
                    <Button
                      type="submit"
                      buttonType="primary"
                      text={formik.isSubmitting ? "Registering..." : "Register"}
                      disabled={formik.isSubmitting}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
