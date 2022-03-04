import React, { useState } from "react";
import { RegistrationModal, TestimonialSection } from "../../components";

export default function ComponentsPage() {
  const [modalIsActive, setModalIsActive] = useState(false);
  return (
    <main className="container">
      <section>
        <RegistrationModal
          isActive={modalIsActive}
          setIsActive={setModalIsActive}
        />
        <div className="py-10 gap-x-10 flex items-center ">
          <p className="text-xl">Click to open the registration modal</p>
          <button
            onClick={() => setModalIsActive(true)}
            className="btn border px-5 py-3 border-orange"
          >
            Open Modal
          </button>
        </div>
      </section>
      <section>
          <TestimonialSection />
      </section>
    </main>
  );
}
