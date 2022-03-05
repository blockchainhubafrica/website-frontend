import React, { useState } from "react";
import { RegistrationModal, TestimonialSection } from "../../components";
import Button from "../../components/Button";

export default function ComponentsPage() {
  const [modalIsActive, setModalIsActive] = useState(false);
  return (
		<main className='container'>
			<section>
				<RegistrationModal
					isActive={modalIsActive}
					setIsActive={setModalIsActive}
				/>
				<div className='py-10 gap-x-10 flex items-center '>
					<p className='text-xl'>Click to open the registration modal</p>
					<button
						onClick={() => setModalIsActive(true)}
						className='btn border px-5 py-3 border-orange'>
						Open Modal
					</button>
				</div>
			</section>
			<section>
				<div className='py-10'>
					<p className='text-xl mb-3'>Button component</p>
					<div className='flex gap-x-5'>
						<Button buttonType='primary' text='Learn More' />
						<Button buttonType='secondary' text='Hire Us' />
					</div>
				</div>
			</section>
      <section>
          <TestimonialSection />
      </section>
		</main>
	);

}
