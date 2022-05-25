import React from "react";
import { CloudinaryImage, Marquee } from "../index";
import {
	BuildSpaceLogoSrc,
	CasperLogoSrc,
	CrevatalLogoSrc,
	CryptoTVSrc,
	NearLogoSrc,
	VestHubLogoSrc,
	XendLogoSrc,
} from "../../assets/images";
import styles from "./partners.module.css";

export function Partners() {
	const partners = (
		<>
			<div className={`flex`}>
				<CloudinaryImage
					src={XendLogoSrc}
					priority={true}
					width={174}
					height={69}
				/>
			</div>
			<div className={`flex`}>
				<CloudinaryImage
					src={CrevatalLogoSrc}
					priority={true}
					width={190}
					height={42}
				/>
			</div>
			<div className={`flex`}>
				<CloudinaryImage
					src={CasperLogoSrc}
					priority={true}
					width={130}
					height={35}
				/>
			</div>
			<div className={`flex`}>
				<CloudinaryImage
					src={VestHubLogoSrc}
					priority={true}
					width={121}
					height={79}
				/>
			</div>
			<div className={`flex`}>
				<CloudinaryImage
					src={BuildSpaceLogoSrc}
					priority={true}
					width={191}
					height={77}
				/>
			</div>
			<div className={`flex`}>
				<CloudinaryImage
					src={NearLogoSrc}
					priority={true}
					width={174}
					height={58}
				/>
			</div>
			<div className={`flex`}>
				<CloudinaryImage
					src={CryptoTVSrc}
					priority={true}
					width={87}
					height={69}
				/>
			</div>
		</>
	);
	return (
		<div className={`${styles["container"]}`}>
			<div className="bg-gray-100 py-2 lg:py-8">
				<div className="flex items-center xmd:hidden relative">
					<div className={`flex p-8 whitespace-nowrap`}>
						<span className="text-3xl font-coolvetica">
							Trusted by
						</span>
					</div>
					<Marquee>
						<div
							className={`${styles.container} py-2 container pr-0 flex justify-center items-center gap-x-10 md:gap-x-20`}
						>
							{partners}
						</div>
					</Marquee>
				</div>
				<div
					className={`hidden xmd:flex  py-2 container pr-0 xl:px-10 xlg:px-0 justify-center items-center md:gap-x-20 xl:gap-x-10 xlg:gap-x-20`}
				>
					<div>
						<span className="text-3xl font-coolvetica block shrink-0">
							Trusted by
						</span>
					</div>
					{partners}
				</div>
			</div>
		</div>
	);
}
