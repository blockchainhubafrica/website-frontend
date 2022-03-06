/** @format */

import React, { useEffect, useState } from 'react';
import styles from './toast.module.css';
import { ToastContainer, toast } from 'react-toastify';

interface Props {
	isActive: boolean;
	children?: React.ReactNode;
	text?: string | '';
}

const Toast: React.FC<Props> = ({ children, text, isActive }) => {
	let containerClass = styles.container;
	const [active, setActive] = useState(false);

	const emitToast = () => {
		{
			toast(`${text || children}`, {
				className: styles.message,
			});
		}
	};

	useEffect(() => {
		setActive(isActive);
		setTimeout(() => {
			if (isActive) emitToast();
		}, 2000);
	}, [isActive]);

	const close = () => {
		setTimeout(() => {
			setActive(false);
		}, 3000);
	};

	return (
		
			<ToastContainer className={containerClass} />
		
	);
};

export { Toast };
