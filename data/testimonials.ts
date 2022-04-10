import {
  CodemathicsSrc,
  TestimonialHeadshot1,
  TestimonialHeadshot2,
  TestimonialHeadshot3,
  TonyCryptoTVSrc,
} from "../assets/images";

type Testimonial = {
  name: string;
  role: string;
  title: string;
  desc: string;
  headshot: StaticImageData | string;
}[];

export const testimonials: Testimonial = [
  {
    name: "Abiodun",
    role: "CEO Zeus P2P Exchange",
    title: "Developing the Zeus P2P Platform",
    desc: "The team consists of incredible web3 talents, their work was part of our successful launch, the designs, and product was executed above my expectations.It was a great working experience with the team.",
    headshot: TestimonialHeadshot1,
  },
  {
    name: "Clement Hugbo",
    role: "CEO/Co-Founder Crevatal",
    title: "Sponsor Blockchain Developers Conference 2021",
    desc: "It was a pleasure to be part of the sponsors of the blockchain developers Conference 2021.",
    headshot: CodemathicsSrc,
  },
  {
    name: "Mr. Tony Emeka",
    role: "CEO, CryptoTvPlus.",
    title: "Part of the Sponsors of 2021 Blockchain Developer's Conf.",
    desc: "We were part of the sponsors for the last Blockchain Developers Conference that was organised by Blockchain Hub Africa, and were honestly impressed with the team, and what they are building.",
    headshot: TonyCryptoTVSrc,
  },
];
