/** @format */

import React, { useEffect, useState } from 'react';
import {
  Loader,
  Marquee,
  Products,
  RegistrationModal,
  StorySection,
  TestimonialSection,
  Button,
} from "../../components";

export default function ComponentsPage() {
	const [modalIsActive, setModalIsActive] = useState(false);
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
      	<section className='container'>
				<div className='py-10'>
					<div>
						<Toast
							text='Our Annual Internship Program Kicks Off This Summer, 
							30 July, 2022. To Register Click Join The Web3 Internship 2022'
							isActive={true}
						/>
					</div>
				</div>
				<p className='text-xl mb-3'>Toast component</p>
			</section>
      <section className="container">
        <RegistrationModal
          isActive={modalIsActive}
          setIsActive={setModalIsActive}
        />
        <div className="py-10 gap-x-10 flex flex-wrap items-center ">
          <p className="text-xl mb-3 sm:mb-0">
            Click to open the registration modal
          </p>
          <Button
            onClick={() => setModalIsActive(true)}
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
      <section>
        <StorySection />
      </section>
    </main>
  );
}
/** @format */
