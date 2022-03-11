/** @format */

import React, { useEffect, useState } from "react";
import { demoEventsData } from "../../assets/images";
import {
  Loader,
  Marquee,
  Products,
  RegistrationModal,
  StorySection,
  TestimonialSection,
  Button,
  Events,
} from "../../components";
import { CircleBanner } from "../../components/CircleBanner";
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
            buttonType="tertiary"
            text="Open Modal"
          />
        </div>
      </section>
      <section className="container">
        <div className="py-10">
          <p className="text-xl mb-3">Button component</p>
          <div className="flex flex-wrap gap-x-5">
            <Button buttonType="primary" text="Learn More" />
            <Button buttonType="tertiary" text="Hire Us" />
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
      <section>
        <StorySection />
      </section>
      <section>
        <div className="container my-10">
          <Events eventList={demoEventsData} />
        </div>
      </section>
      <section className="py-10 flex justify-center bg-blue-600">
        <CircleBanner />
      </section>
    </main>
  );
}
/** @format */
