import {
  TestimonialHeadshot1,
  TestimonialHeadshot2,
  TestimonialHeadshot3,
} from "../assets/images";

type Testimonial = {
  name: string;
  role: string;
  title: string;
  desc: string;
  headshot: StaticImageData;
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
    title: "Generated Over $100M+ from our App",
    desc: "I love what the amazing team at Blockchain Hub is building, tackling one of the major issues in the blockchain space. I have had the opportunity to work/speak with the team, and I must say that the team is on fire.",
    headshot: TestimonialHeadshot2,
  },
  {
    name: "Mr. Tony Emeka",
    role: "CEO, CryptoTvPlus.",
    title: "Generated Over $100M+ from our App",
    desc: "We were part of the sponsors for the last Blockchain Developers Conference that was organised by Blockchain Hub Africa, and were honestly impressed with the team, and what they are building.",
    headshot: TestimonialHeadshot3,
  },
];
