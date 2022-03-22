import { achievementImage } from "./pngs";
import { NduImageSrc, BeimaImageSrc } from "./cloudinary";
import {
  atoms,
  chidiebere,
  chukky,
  deborah,
  emmanuel,
  ernest,
  event2022A,
  event2022B,
  gospel,
  ifeoma,
  joshua,
  richmond,
  uchenna,
} from "./jpgs";

export const demoProductsData = [
  {
    image: NduImageSrc,
    title: "Ndu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam volutpat nibh nulla donec rutrum morbi. Sapien pulvinar eget",
    link: "https://www.google.com",
    size: { width: 862, height: 752 },
  },
  {
    image: BeimaImageSrc,
    title: "Beima",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam volutpat nibh nulla donec rutrum morbi. Sapien pulvinar eget",
    link: "https://www.google.com",
    size: { width: 868, height: 752 },
  },
];

export const demoEventsData = [
  {
    image: event2022B,
    name: "Web3 dev. Bootcamp '22",
    link: "",
    year: "2022",
  },
  {
    image: event2022A,
    name: "Developer Conference '22",
    link: "",
    year: "2022",
  },
];

export const achievementData = [
  {
    name: "1st position at Binance Hackathon, 2020",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam veritatis aperiam sapiente aut officia, facilis vitae perspiciatis rerum unde quaerat! Officiis, sunt tenetur est",
    link: "/",
    image: achievementImage,
  },
  {
    name: "2nd-Runner up at Xend Finance Hackathon, 2021",
    description:
      "With the mission to build Africa’s web3 talents. Our Maiden edition of the web3 development learning programme kicked-off and the participants competed in the Xend Finance hackathon 2021, winning the prize of $10,000 as the 2nd runner-up with their idea, Beima, a decentralized pension platform.",
    link: "/",
    image: achievementImage,
  },
  {
    name: "1st position Polygon Hackathon, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam veritatis aperiam sapiente aut officia, facilis vitae perspiciatis rerum unde quaerat! Officiis, sunt tenetur est",
    link: "/",
    image: achievementImage,
  },
];

export const theTeam = [
  {
    name: "Uchenna",
    title: "Co-founder & CEO - Smart Contract Engr.",
    image: uchenna,
  },
  {
    name: "Joshua",
    title: "Co-founder & Product Manager - Blockchain Dev.",
    image: joshua,
  },
  {
    name: "Emmanuel",
    title: "Co-founder & Blockchain Business Developer",
    image: emmanuel,
  },
  { name: "Chukky", title: "CTO & Senior Blockchain Engr.", image: chukky },
  {
    name: "Chidiebere",
    title: "Ass. CTO & Blockchain Developer",
    image: chidiebere,
  },
  {
    name: "Chiemezie",
    title: "Senior Product Designer",
    image: richmond,
  },
  { name: "Deborah", title: "Visual Creative Designer", image: deborah },
  { name: "Atoms", title: "Mobile Engineer", image: atoms },
  { name: "Ernest", title: "Front-end Engineer", image: ernest },
  { name: "Gospel", title: "Fron-end Engineer", image: gospel },
  { name: "Ifeoma", title: "Web3 Content Strategist", image: ifeoma },
];

export const values = [
  {
    header: "Community",
    paragraph:
      "We like to believe that we are first a community oriented company, because without the community there won’t be Blockchain Hub Africa. We like to think that we are first a people oriented company before a service or product based company. At the core of our operations, we value the community",
    strokeColor: "purple",
  },
  {
    header: "Excellence",
    paragraph:
      "We derive joy in building out excellent web3 products. Our passion for excellence is seen in every of our products built for clients or the company. ",
    strokeColor: "green",
  },
  {
    header: "Growth",
    paragraph:
      "Web3 is a growing technology and because of that we need to evolve as the tech evolves, this is what we believe at Blockchain Hub Africa, we are growth minded and this has been engrafted into the team members and our community at large.",
    strokeColor: "orange",
  },
  {
    header: "Creativity",
    paragraph:
      "The amazing talents at Blockchain Hub Africa are always kin on delivering creative strategies into solutions being built by us. The team prides itself in building creative web3 solutions.",
    strokeColor: "black",
  },
  {
    header: "Trustworthy",
    paragraph:
      "The team works hard to uphold this Value in making sure projects are delivered according to and above clients expectations, which in turn makes us trustworthy as a company.",
    strokeColor: "blue",
  },
  {
    header: "Integrity",
    paragraph:
      "At Blockchain Hub Africa we hold ourselves to our word, when we say we are building world class web3 talents and solutions, we mean every word of it. This is one foundation we are building on and don;’t joke with.",
    strokeColor: "skyBlue",
  },
];
