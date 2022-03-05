import React, { useEffect, useState } from "react";
import { Loader, Marquee, Products, RegistrationModal } from "../../components";

export default function ComponentsPage() {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {showLoader ? <Loader /> : ""}
      <section className="container">
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
      <section className="container">
        <Products />
      </section>
      <section>
        <Marquee />
      </section>
    </main>
  );
}
