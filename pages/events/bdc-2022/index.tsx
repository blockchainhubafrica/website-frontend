import React, { useState } from "react";
import * as Yup from "yup";
import {
  Calendar2,
  Ticket,
  TopRightArrowIcon,
  values,
} from "../../../assets/images";
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
import httpService from "../../../services/httpService";

type ValuesType = {
  name: string;
  email: string;
  phone: string;
  coupon: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  coupon: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  coupon: "",
};
export default function BDC2022() {
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [selectedTicket, setselectedTicket] = useState("VIP Ticket ($5)");
  const nairaTicketPrice = selectedTicket === "VIP Ticket ($5)" ? 5000 : 1000;
  const config = {
    public_key: "FLWPUBK_TEST-a9aad3948218738605d14d6428a21f0c-X",
    tx_ref: "1234",
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
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        closePaymentModal(); // this will close the modal programmatically
      },
    });
  }

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
                      name="coupon"
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
                    <Button buttonType="primary" text="Register" />
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
