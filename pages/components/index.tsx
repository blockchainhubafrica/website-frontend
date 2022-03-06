/** @format */

import React, { useEffect, useState } from 'react';
import {
	Loader,
	Marquee,
	Products,
	RegistrationModal,
	TestimonialSection,
	Toast,
} from '../../components';
import Button from '../../components/Button';

export default function ComponentsPage() {
	const [modalIsActive, setModalIsActive] = useState(false);
	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 2000);

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
			<section className='container'>
				<div className='py-10'>
					<p className='text-xl mb-3'>Button component</p>
					<div className='flex gap-x-5'>
						<Button buttonType='primary' text='Learn More' />
						<Button buttonType='secondary' text='Hire Us' />
					</div>
				</div>
			</section>
			<section className='container'>
				<Products />
			</section>
			<section>
				<Marquee />
			</section>
			<section>
				<TestimonialSection />
			</section>
		</main>
	);
}
/** @format */
