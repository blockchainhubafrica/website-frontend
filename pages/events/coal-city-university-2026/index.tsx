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

const EVENT_NAME = "Intro to Blockchain - Coal City University 2026";
const REGISTRATION_CLOSE_DATE = new Date("2026-05-06T09:00:00+01:00");
const REGISTRATION_CLOSE_TIME = REGISTRATION_CLOSE_DATE.getTime();
const COAL_CITY_LOGO_SRC =
  "https://res.cloudinary.com/drj2hpt8p/image/upload/v1778180172/download_4_1_m1rxkz.png";
const X_SOCIAL_URL = "https://twitter.com/blockhubafrica";
const INSTAGRAM_SOCIAL_URL = "https://instagram.com/blockchainhubafrica";

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isClosed: boolean;
};

export const registrationSuccessModalContent = {
  title: "Registration Successful",
  content:
    "Congratulations! Your registration was successful. A confirmation email has been sent to your inbox.",
};

type ValuesType = {
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  techStack: string;
  yearsOfExperience: string;
  portfolio: string;
};

const TECH_STACK_OPTIONS = [
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Fullstack", value: "Fullstack" },
  { label: "Nil", value: "Nil" },
];

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  surname: Yup.string().required("Surname is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^(\+234|0)[7-9]\d{9}$/,
      "Enter a valid Nigerian number (e.g. 08012345678)"
    )
    .required("Phone Number is required"),
  techStack: Yup.string()
    .oneOf(TECH_STACK_OPTIONS.map((o) => o.value))
    .required("Tech Stack is required"),
  yearsOfExperience: Yup.number()
    .typeError("Years of experience must be a number")
    .min(0, "Cannot be negative")
    .max(5, "Maximum 5 years")
    .required("Years of experience is required"),
  portfolio: Yup.string(),
});

const initialValues: ValuesType = {
  firstName: "",
  surname: "",
  email: "",
  phone: "",
  techStack: "",
  yearsOfExperience: "",
  portfolio: "",
};

export default function CoalCityUniversity2026() {
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
  const [isSocialFollowModalOpen, setIsSocialFollowModalOpen] = useState(false);
  const [isCompletingRegistration, setIsCompletingRegistration] =
    useState(false);
  const [pendingRegistrationValues, setPendingRegistrationValues] =
    useState<ValuesType | null>(null);
  const [eventId, setEventId] = useState<string | null>(null);
  const [registrationCountdown, setRegistrationCountdown] =
    useState<CountdownTime>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isClosed: false,
    });

  useEffect(() => {
    GetPublishedEventsAPI()
      .then((res) => {
        const events: any[] = res.data?.data ?? [];
        const match = events.find((e) => e.event_name === EVENT_NAME);
        if (match) setEventId(match._id);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const difference = REGISTRATION_CLOSE_TIME - Date.now();
      if (difference <= 0) {
        setRegistrationCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isClosed: true,
        });
        return;
      }

      const totalSeconds = Math.floor(difference / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setRegistrationCountdown({ days, hours, minutes, seconds, isClosed: false });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  async function resolveEventId(): Promise<string | null> {
    if (eventId) return eventId;
    try {
      const res = await GetPublishedEventsAPI();
      const events: any[] = res.data?.data ?? [];
      const match = events.find((e) => e.event_name === EVENT_NAME);
      if (match) {
        setEventId(match._id);
        return match._id;
      }
    } catch {}
    return null;
  }

  function handleSubmit(values: ValuesType) {
    setPendingRegistrationValues({ ...values });
    setIsSocialFollowModalOpen(true);
  }

  async function completeRegistration(values: ValuesType) {
    const id = await resolveEventId();
    if (!id) {
      toast.error("Event not found. Please try again later.");
      return;
    }
    const toastId = toast.loading("Registering...");
    setIsCompletingRegistration(true);
    try {
      await RegisterForEventAPI(id, {
        name: `${values.firstName} ${values.surname}`.trim(),
        email: values.email,
        phone: values.phone,
        responses: {
          tech_stack: values.techStack,
          years_of_experience: String(values.yearsOfExperience),
          portfolio: values.portfolio,
        },
      });
      toast.dismiss(toastId);
      formik.resetForm();
      setIsMobileFormOpen(false);
      setIsSocialFollowModalOpen(false);
      setIsCompletingRegistration(false);
      setPendingRegistrationValues(null);
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
      setIsCompletingRegistration(false);
    }
  }

  const handleCompleteRegistration = () => {
    if (pendingRegistrationValues) {
      completeRegistration(pendingRegistrationValues);
    }
  };

  return (
    <>
      <EventsPageHead />
      <DefaultSEOHead />
      <div>
        <FreeEventFormModal
          isOpen={isMobileFormOpen}
          setIsOpen={setIsMobileFormOpen}
          formik={formik}
          logoSrc={COAL_CITY_LOGO_SRC}
        />
        {isSocialFollowModalOpen && (
          <div
            className={styles["social-follow-modal"]}
            onClick={() => setIsSocialFollowModalOpen(false)}
          >
            <div
              className={styles["social-follow-card"]}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles["social-follow-close"]}
                onClick={() => setIsSocialFollowModalOpen(false)}
              >
                x
              </button>
              <p className={styles["social-follow-eyebrow"]}>
                BlockchainHub Africa
              </p>
              <h3 className={styles["social-follow-title"]}>
                Follow us on our socials
              </h3>
              <p className={styles["social-follow-copy"]}>
                Stay connected for event updates, learning resources, and
                community announcements.
              </p>
              <div className={styles["social-follow-actions"]}>
                <a
                  href={X_SOCIAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={styles["social-follow-link"]}
                >
                  Follow on X
                </a>
                <a
                  href={INSTAGRAM_SOCIAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={styles["social-follow-link"]}
                >
                  Follow on Instagram
                </a>
              </div>
              <button
                type="button"
                className={styles["social-follow-submit"]}
                onClick={handleCompleteRegistration}
                disabled={isCompletingRegistration}
              >
                {isCompletingRegistration
                  ? "Registering..."
                  : "Complete registration"}
              </button>
            </div>
          </div>
        )}
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
                  Coal City University, Enugu State
                </h3>
                <h4 className={`${styles["orange-heading"]} mt-6`}>About</h4>
                <p className="text-base md:text-lg text-white mt-3 font-normal">
                  Kickstart your journey into blockchain development with our Rust for Solana Virtual Machine series. This course introduces you to the fundamentals of building scalable, high-performance decentralized applications using Rust on the Solana ecosystem.
                </p>
                <hr className={`${styles["bottom-bar"]} my-8`} />
                <div className="flex gap-x-4 items-start mb-5">
                  <span>
                    <Calendar2 />
                  </span>
                  <div className={styles["registration-countdown"]}>
                    {registrationCountdown.isClosed ? (
                      <strong className={styles["registration-closed"]}>
                        Registration closed
                      </strong>
                    ) : (
                      <>
                        <h4 className={styles["countdown-title"]}>
                          Registration closes
                        </h4>
                        <div className={styles["countdown-row"]}>
                          {[
                            ["DAYS", registrationCountdown.days],
                            ["HOURS", registrationCountdown.hours],
                            ["MINS", registrationCountdown.minutes],
                            ["SECS", registrationCountdown.seconds],
                          ].map(([label, value], index) => (
                            <React.Fragment key={label}>
                              <div className={styles["countdown-unit"]}>
                                <span className={styles["countdown-value"]}>
                                  {value}
                                </span>
                                <span className={styles["countdown-label"]}>
                                  {label}
                                </span>
                              </div>
                              {index < 3 && (
                                <span className={styles["countdown-separator"]}>
                                  :
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex gap-x-4 items-center mb-5">
                  <span>
                    <Location />
                  </span>
                  <span className="text-2xl">
                    Coal City University, Enugu State
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
                    disabled={!eventId}
                  />
                </div>

                <h4 className={`${styles["orange-heading"]} mb-4`}>
                  Registration Fee
                </h4>
                <span className={styles["free-badge"]}>FREE</span>
              </div>

              <div className={`hidden xl:block xl:col-span-3 ml-auto`}>
                <form onSubmit={formik.handleSubmit} className="py-8 px-8">
                  <div className={styles["form-heading-row"]}>
                    <h3 className={`${styles["spaced-heading"]} text-3xl`}>
                      Registration Form
                    </h3>
                    <img
                      src={COAL_CITY_LOGO_SRC}
                      alt="Coal City University logo"
                      className={styles["form-logo"]}
                    />
                  </div>
                  <div>
                    <Input
                      name="firstName"
                      formik={formik}
                      label="First Name"
                      required
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <Input
                      name="surname"
                      formik={formik}
                      label="Surname"
                      required
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      formik={formik}
                      label="Email"
                      required
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      formik={formik}
                      label="Phone No."
                      required
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <Input
                      as="select"
                      name="techStack"
                      formik={formik}
                      label="Tech Stack"
                      options={TECH_STACK_OPTIONS}
                      placeholder="Select tech stack"
                      required
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <Input
                      type="number"
                      min={0}
                      max={5}
                      name="yearsOfExperience"
                      formik={formik}
                      label="Years of Experience"
                      required
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <Input
                      name="portfolio"
                      formik={formik}
                      label="Portfolio / GitHub"
                      placeholder="https://github.com/your-handle"
                      className="mb-10"
                    />
                  </div>
                  <div className="mt-4">
                    <Button
                      type="submit"
                      buttonType="primary"
                      text={formik.isSubmitting ? "Registering..." : "Register"}
                      disabled={formik.isSubmitting || !eventId}
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
