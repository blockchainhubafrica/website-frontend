import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Calendar2, Ticket } from "../../../assets/images";
import { useFormik } from "formik";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import {
  Button,
  FancyCheckbox,
  Footer,
  Input,
  RegistrationModal,
} from "../../../components";

import styles from "./styles.module.css";
import { DefaultSEOHead, EventsPageHead } from "../../../pageHeads";
import { CreateEventRegistrationAPI } from "../../../services/registrationService";
import { apiErrorMessage } from "../../../utils/handleAPIErrors";
import { toast } from "react-toastify";
import action from "services/actionService";

export const registrationSuccessModalContent = {
  title: "Registration Successful",
  content:
    "Congratulations, your registration was successful and details have been sent to your email.",
};
export const paymentFailModalContent = {
  title: "Payment Unsuccessful",
  content:
    "Looks like you did not complete the payment, that's okay, we will be here if you change your mind.",
};

type ValuesType = {
  name: string;
  email: string;
  phone: string;
  couponCode?: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  couponCode: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  couponCode: "",
};

export default function BDC2022() {
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [selectedTicket, setselectedTicket] = useState("VIP (N5000)");
  const nairaTicketPrice = selectedTicket === "VIP (N5000)" ? 5000 : 1000;
  const [txRef, setTxRef] = useState("");
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY || "",
    tx_ref: txRef,
    amount: nairaTicketPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customizations: {
      title: "Blockchain Developers Conference 2022",
      description: `Payment for ${selectedTicket}`,
      logo: "https://res.cloudinary.com/blockchainhub-africa/image/upload/v1667651791/blockchainhubafrica/logo_phap95.svg",
    },
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  const handleFlutterPayment = useFlutterwave({
    ...config,
    customer: {
      email: formik.values.email,
      phone_number: formik.values.phone,
      name: formik.values.name,
    },
  });
  async function handleSubmit(values: ValuesType) {
    const toastId = toast.loading("Registering User...");
    const payload = { ...values };
    try {
      if (!payload.couponCode) delete payload.couponCode;
      const registration = await CreateEventRegistrationAPI({
        ...payload,
        eventCode: "BDC-2022",
        ticket: selectedTicket.split(" ")[0],
      });
      const validCoupon = registration.data.data.transaction.hasPaid;
      if (validCoupon) {
        toast.dismiss(toastId);
        action.success(registrationSuccessModalContent);
        return;
      }
      const paymentId = registration.data.data.transaction.paymentId;
      setTxRef(paymentId);
      toast.dismiss(toastId);
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

  useEffect(() => {
    if (!txRef) return;
    console.log(txRef);
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        action.success(registrationSuccessModalContent);

        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        closePaymentModal(); // this will close the modal programmatically
        action.warning(paymentFailModalContent);
      },
    });
  }, [txRef]);

  return (
    <>
      <EventsPageHead />
      <DefaultSEOHead />
      <RegistrationModal
        isActive={isRegistrationFormOpen}
        setIsActive={setIsRegistrationFormOpen}
      />
      <main className={styles["container"]}>
        <section
          className={`bg-blue-600 pt-1 pb-20 lg:pb-28 ${styles["hero-section"]}`}
        >
          <div className="container">
            <div className="py-12 md:py-20 lg:py-24 xl:grid xl:grid-cols-7 items-center place-items-center gap-x-8">
              <div className="xl:col-span-4">
                <h1 className={`${styles["header"]} text-5xl mb-2`}>
                  Blockchain Developers Conference, 2022
                </h1>
                <h3 className={`${styles["subtitle"]} text-lg`}>
                  A 2 day tech conference
                </h3>
                <h4 className={`${styles["orange-heading"]} mt-6`}>Theme</h4>
                <p className="font-coolvetica text-6xl text-white mt-3">
                  Leveraging the blockchain infrastructure for adoption in
                  Africa
                </p>
                <hr className={`${styles["bottom-bar"]} my-8`} />
                <div className="flex gap-x-4 items-center mb-5">
                  <span>
                    <Calendar2 />
                  </span>
                  <span className="text-2xl">
                    9AM, 2nd - 3rd December, 2022
                  </span>
                </div>
                <div className="flex gap-x-4 items-center mb-5">
                  <span>
                    <Calendar2 />
                  </span>
                  <span className="text-2xl">
                    The Base Landmarks, independence layout Enugu.
                  </span>
                </div>
                <hr className={`${styles["bottom-bar"]} my-8`} />
                <h4 className={`${styles["orange-heading"]} mb-3`}>
                  REGISTRATION FEE
                </h4>
                <div className="flex gap-x-4 items-center mb-3">
                  <span>
                    <Ticket />
                  </span>
                  <div>
                    <span className="text-2xl font-medium">VIP - </span>
                    <span className="text-2xl">$5 (N5,000)</span>
                  </div>
                </div>
                <div className="flex gap-x-4 items-center">
                  <span>
                    <Ticket />
                  </span>
                  <div>
                    <span className="text-2xl font-medium">Regular - </span>
                    <span className="text-2xl">$2 (N1,000)</span>
                  </div>
                </div>
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
                      label="Name"
                      className={`mb-4`}
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      formik={formik}
                      label="Email"
                      className={`mb-4`}
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      formik={formik}
                      label="Phone No."
                      className={`mb-4`}
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
                    <p className={`${styles["ticket-label"]} mb-5`}>
                      Ticket type
                    </p>
                    <div className="flex flex-wrap gap-10 justify-between ">
                      <FancyCheckbox
                        className="text-black"
                        value="Regular (N1000)"
                        selectedValue={selectedTicket}
                        onSelect={setselectedTicket}
                      />
                      <FancyCheckbox
                        className="text-black"
                        value="VIP (N5000)"
                        selectedValue={selectedTicket}
                        onSelect={setselectedTicket}
                      />
                    </div>
                  </div>
                  <div className="mt-16">
                    <Button
                      type="submit"
                      buttonType="primary"
                      text="Register"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
