import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { BuildNPitch2026Speakers, Calendar2, Location } from "../../../assets/images";
import { useFormik } from "formik";

import { Button, FreeEventFormModal, ImageCard, Input } from "../../../components";

import styles from "./styles.module.css";
import { DefaultSEOHead, EventsPageHead } from "../../../pageHeads";
import {
  GetPublishedEventsAPI,
  RegisterForEventAPI,
} from "../../../services/registrationService";
import { apiErrorMessage } from "../../../utils/handleAPIErrors";
import { toast } from "react-toastify";
import action from "services/actionService";

const EVENT_NAME = "Build and Pitch Sessions";

export const STAGE_OPTIONS = [
  { label: "Idea/Pre-MVP", value: "Idea/Pre-MVP" },
  { label: "MVP/Early-users", value: "MVP/Early-users" },
  { label: "Product-Market-Fit", value: "Product-Market-Fit" },
  { label: "Generating Revenue", value: "Generating Revenue" },
  { label: "Scaling", value: "Scaling" },
];

export const registrationSuccessModalContent = {
  title: "Registration Successful",
  content:
    "Congratulations! Your registration was successful. A confirmation email has been sent to your inbox.",
};

type ValuesType = {
  name: string;
  email: string;
  phone: string;
  startupName: string;
  description: string;
  startupLocation: string;
  stage: string;
  website?: string;
  pitchDeckLink: string;
};

const URL_REGEX =
  /^(https?:\/\/)?([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/i;

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
  startupName: Yup.string().required("Startup Name is required"),
  description: Yup.string().required("Brief Description is required"),
  startupLocation: Yup.string().required("Startup Location is required"),
  stage: Yup.string().required("Stage is required"),
  website: Yup.string()
    .matches(URL_REGEX, {
      message: "Enter a valid website (e.g. something.com, www.something.com, or https://something.com)",
      excludeEmptyString: true,
    })
    .optional(),
  pitchDeckLink: Yup.string()
    .matches(URL_REGEX, {
      message: "Enter a valid URL",
      excludeEmptyString: true,
    })
    .optional(),
});

const initialValues: ValuesType = {
  name: "",
  email: "",
  phone: "",
  startupName: "",
  description: "",
  startupLocation: "",
  stage: "",
  website: "",
  pitchDeckLink: "",
};

export default function BuildNPitch() {
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
  const [eventId, setEventId] = useState<string | null>(null);

  useEffect(() => {
    GetPublishedEventsAPI()
      .then((res) => {
        const events: any[] = res.data?.data ?? [];
        const match = events.find((event) =>
          String(event.event_name ?? "")
            .toLowerCase()
            .includes("build and pitch")
        );
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
        startupName: values.startupName,
        description: values.description,
        startupLocation: values.startupLocation,
        stage: values.stage,
        website: values.website,
        pitchDeckLink: values.pitchDeckLink,
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
          eventId={eventId}
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
                  {EVENT_NAME}
                </h1>
                <h3 className={`${styles["subtitle"]} text-lg`}>
                  Exclusively for early stage founders
                </h3>
                <h4 className={`${styles["orange-heading"]} mt-6`}>About</h4>
                <p className="text-base md:text-lg text-white mt-3 font-normal">
                  <strong>Build &amp; Pitch Sessions</strong> is an exclusive
                  series designed for early-stage founders building across
                  onchain, AI, fintech, consumer, and other emerging
                  technology sectors.
                </p>
                <p className="text-base md:text-lg text-white mt-3 font-normal">
                  The sessions bring founders into focused conversations with
                  industry experts, experienced builders, investors, and
                  ecosystem leaders to help sharpen their products, strengthen
                  their fundraising narrative, and refine how they
                  communicate their vision.
                </p>
                <p className="text-base md:text-lg text-white mt-3 font-normal">
                  <strong>
                    The first edition takes place on September 4, 2026 at
                    Blockchain Hub Africa
                  </strong>
                  , bringing together early-stage founders for an intimate
                  session focused on refining narrative, fundraising
                  preparedness, and learning directly from experienced
                  investors and ecosystem leaders.
                </p>
                <hr className={`${styles["bottom-bar"]} my-8`} />
                <h4 className={`${styles["orange-heading"]} mb-3`}>
                  What to Expect
                </h4>
                <ul className="text-base md:text-lg text-white font-normal space-y-2 list-none">
                  <li>
                    <p className="font-extrabold">Prepare for Fundraising :</p> Understand how
                    to approach the fundraising process and what investors
                    evaluate at the early stage.
                  </li>
                  <li>
                    <p className="font-extrabold">Refine Your Story &amp; Pitch:</p> Strengthen your narrative, positioning, and ability to
                    clearly communicate your opportunity.
                  </li>
                  <li>
                    <p className="font-extrabold">Get Investor Perspectives:</p> Hear
                    directly from VCs and industry professionals and what
                    makes a compelling investment opportunity.
                  </li>
                  <li>
                    <p className="font-extrabold">Build with Expert Guidance:</p> Receive
                    practical feedback to help sharpen your product,
                    strategy, and overall readiness.
                  </li>
                  <li>
                    <p className="font-extrabold">Connect with the Ecosystem:</p> Engage
                    with investors, other founders, and relevant ecosystem
                    players.
                  </li>
                </ul>
                <hr className={`${styles["bottom-bar"]} my-8`} />
                <div className="flex gap-x-4 items-center mb-5">
                  <span>
                    <Calendar2 />
                  </span>
                  <span className="text-2xl">
                    Friday 4th September, 4PM, 2026
                  </span>
                </div>
                <div className="flex gap-x-4 items-center mb-5">
                  <span>
                    <Location />
                  </span>
                  <span className="text-2xl">
                    BlockchainHub Africa, 1 Temple Avenue, GRA Enugu
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

              <div className="hidden xl:block xl:col-span-3 ml-auto">
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
                      label="Full Name"
                      required
                      className="mb-4"
                      placeholder="Gavin Belson"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      formik={formik}
                      label="Email"
                      required
                      className="mb-4"
                      placeholder="gavin.belson@hooli.com"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      formik={formik}
                      label="Phone No."
                      required
                      className="mb-4"
                      placeholder="08012345678"
                    />
                    <Input
                      name="startupName"
                      formik={formik}
                      label="Startup Name"
                      required
                      className="mb-4"
                      placeholder="Hooli Inc."
                    />
                    <Input
                      name="description"
                      formik={formik}
                      label="Brief Description of your startup"
                      required
                      className="mb-10"
                      placeholder="We deal in cloud computing services."
                    />
                    <Input
                      name="startupLocation"
                      formik={formik}
                      label="Startup Location"
                      required
                      className="mb-4"
                      placeholder="123 Main Street, City, Country"
                    />
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
                    <Input
                      name="website"
                      formik={formik}
                      label="Startup Website"
                      className="mb-5"
                      placeholder="something.com or https://something.com"
                    />
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
                          <br/> 1.  Upload your pitch to Google Drive 
                          <br/> 2.  Click Share → General access → Select "Anyone with the link" 
                          <br/> 3.  Copy the link and paste in the space provide above.  
                          <br/> Note: Links with restricted access will not be reviewed. 
                      </p>
                    </div>
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
        <section className={`${styles["speakers-gallery"]} py-12 md:py-16`}>
          <div className={`${styles["conference-speakers"]} container`}>
            <div className="text-center mb-8 md:mb-12">
              <h2
                className={`${styles["orange-heading"]} text-base text-orange uppercase`}
              >
                Featuring
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16">
              {BuildNPitch2026Speakers.map((member, index) => {
                return (
                  <ImageCard
                    key={member.name + index}
                    name={member.name}
                    image={member.image}
                    title={member.title}
                    shape="circle"
                  />
                );
              })}
            </div>
          </div>
        </section>
          {/* <div className={`${styles["workshop-speakers"]} container`}>
            <div>
              <h2
                className={`${styles["orange-heading"]} text-base text-orange uppercase`}
              >
                Workshop Instructors
              </h2>
              <h3 className="mt-2 text-3xl md:text-5xl font-coolvetica text-white w-full md:w-1/2 lg:w-1/3">
                Meet our Instructors
              </h3>
            </div>
            <div className=" mt-10 md:mt-14 xl:mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 gap-y-10 md:gap-y-14 lg:gap-y-20 xl:gap-y-24">
              {BuildNPitch2026Speakers.map((member, index) => {
                return (
                  <ImageCard
                    key={member.name + index}
                    name={member.name}
                    image={member.image}
                    title={member.title}
                  />
                );
              })}
            </div>
          </div> */}
      </main>
    </>
  );
}
