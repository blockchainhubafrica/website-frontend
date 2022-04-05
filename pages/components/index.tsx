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
  CircleBanner,
  Achievements,
} from "../../components";
import { useAppContext } from "../../contexts/appContext";

export default function ComponentsPage() {
  const { isRegistrationFormActive, setIsRegistrationFormActive } =
    useAppContext();

  const [showLoader, setShowLoader] = useState<boolean>(true);

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
          <div className="flex w-full sm:w-auto">
            <Button
              onClick={() => setIsRegistrationFormActive(true)}
              buttonType="tertiary"
              text="Open Modal"
            />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="py-10">
          <p className="text-xl mb-3">Button component</p>
          <div className="flex flex-wrap justify-between sm:justify-start gap-5">
            <div className="w-full sm:w-auto">
              <Button buttonType="primary" text="Learn More" />
            </div>
            <div className="w-full sm:w-auto">
              <Button buttonType="tertiary" text="Hire Us" />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <Products />
      </section>
      <section>
        <Marquee>
          Leading Hub for Africa's web3 talent and solutions. Helping Web3
          companies build blockchain based solutions
        </Marquee>
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
      <section className="mt-8">
        <Achievements />
      </section>
    </main>
  );
}
/** @format */
