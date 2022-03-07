/** @format */

import React, { useEffect, useState } from "react";
import {
  Loader,
  Marquee,
  Products,
  RegistrationModal,
  StorySection,
  TestimonialSection,
  Button,
} from "../../components";
import { useAppContext } from "../../contexts/appContext";

export default function ComponentsPage() {
  const { isRegistrationFormActive, setIsRegistrationFormActive } =
    useAppContext();

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <main>
      <section className="container">
        <RegistrationModal
          isActive={isRegistrationFormActive}
          setIsActive={setIsRegistrationFormActive}
        />
        <div className="py-10 gap-x-10 flex flex-wrap items-center ">
          <p className="text-xl mb-3 sm:mb-0">
            Click to open the registration modal
          </p>
          <Button
            onClick={() => setIsRegistrationFormActive(true)}
            buttonType="secondary"
            text="Open Modal"
          />
        </div>
      </section>
      <section className="container">
        <div className="py-10">
          <p className="text-xl mb-3">Button component</p>
          <div className="flex gap-x-5">
            <Button buttonType="primary" text="Learn More" />
            <Button buttonType="secondary" text="Hire Us" />
          </div>
        </div>
      </section>
      <section className="container">
        <Products />
      </section>
      <section>
        <Marquee />
      </section>
      <section>
        <TestimonialSection />
      </section>
      <section>{/* <StorySection /> */}</section>
    </main>
  );
}
/** @format */
