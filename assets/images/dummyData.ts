import { achievementImage } from "./pngs";
import {
  NduImageSrc,
  BeimaImageSrc,
  UcheNFTSrc,
  JoshuaNFTSrc,
  EmmanuelNFTSrc,
  ChukkyNFTSrc,
  ChidiNFTSrc,
  AtomsNFTSrc,
  IfeomaNFTSrc,
  ErnestNFTSrc,
  GospelNFTSrc,
  DeborahNFTSrc,
  ChimezieNFTSrc,
  ClaretNFTSrc,
  TrustOnyekwereSrc,
  DeborahOjengbedeSrc,
  GTIgweSrc,
  ChrisAniSrc,
  MakweQuintinSrc,
  EkeneMarkAnthony,
  MayowaSrc,
  EmekaNwekeSrc,
  IfunanyaNFTSrc,
} from "./cloudinary";
import { event2022A, event2022B } from "./jpgs";

export const demoProductsData = [
  {
    image: NduImageSrc,
    title: "Ndu",
    description:
      "Ndu combines the decentralized power of the Blockchain to eradicate fake and counterfeit drugs. Users can be able to check counterfeit drugs and earn while doing that.",
    link: "https://local-ndu.vercel.app",
    size: { width: 862, height: 752 },
  },
  {
    image: BeimaImageSrc,
    title: "Beima",
    description:
      "Beima helps users secure their future with a transparent and high yielding interest pension plan that is truly theirs. Beima is the Future of Personal and Corporate finance",
    link: "https://beima.app",
    size: { width: 868, height: 752 },
  },
];

export const demoEventsData = [
  {
    image: event2022B,
    name: "Web3 dev. Bootcamp '22",
    link: "/blog/blockchain-hub-africa-partners-with-buildspace-to-train-web3-talents-in-africa-656",
    year: "2022",
    hasBeenHeld: true,
  },
  {
    image: event2022A,
    name: "Developer Conference '22",
    link: "/events/bdc-2022",
    year: "2022",
    hasBeenHeld: false,
  },
];

export const achievementData = [
  {
    name: "Partnership with Buildspace to run a Web3 Internship",
    description:
      "Blockchain Hub is Proud to announce a partnership with BuildSpace to grow web3 developers in Africa",
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
    name: "Hosted the first blockchain conference in the south-east",
    description:
      "Blockchain developers Conference 2021 was our first dev conference, and the first blockchain developers conference in Nigeria, that aimed at introducing a lot of web2 developers into the web3 ecosystem",
    link: "/",
    image: achievementImage,
  },
];

export const theTeam = [
  {
    name: "Uchenna",
    title: "Co-founder & CEO - Smart Contract Engr.",
    image: UcheNFTSrc,
  },
  {
    name: "Joshua",
    title: "Co-founder & Product Manager - Blockchain Dev.",
    image: JoshuaNFTSrc,
  },
  {
    name: "Emmanuel",
    title: "Co-founder & Blockchain Business Developer",
    image: EmmanuelNFTSrc,
  },
  {
    name: "Chukky",
    title: "CTO & Senior Blockchain Engr.",
    image: ChukkyNFTSrc,
  },
  {
    name: "Chidiebere",
    title: "Ass. CTO & Blockchain Developer",
    image: ChidiNFTSrc,
  },
  {
    name: "Deborah",
    title: "Visual Creative Designer",
    image: DeborahNFTSrc,
  },
  {
    name: "Atoms",
    title: "Mobile Developer Lead",
    image: AtomsNFTSrc,
  },
  {
    name: "Chiemezie",
    title: "Senior Product Designer",
    image: ChimezieNFTSrc,
  },
  { name: "Ernest", title: "Frontend Engineer", image: ErnestNFTSrc },
  { name: "Gospel", title: "Frontend Engineer", image: GospelNFTSrc },
  { name: "Claret", title: "Backend Engineer", image: ClaretNFTSrc },
  { name: "Ifunanya", title: "Content Lead", image: IfunanyaNFTSrc },
  { name: "Ifeoma", title: "Web3 Content Strategist", image: IfeomaNFTSrc },
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

export const BDC2022ConferenceSpeakers = [
  {
    name: "Chris Ani",
    title: "CEO, Digital Abundance.",
    image: ChrisAniSrc,
  },
  {
    name: "Deborah Afen",
    title: "CEO, Afen Blockchain.",
    image: DeborahOjengbedeSrc,
  },
  {
    name: "GT Igwe Chrisent",
    title: "CEO, Truzact.",
    image: GTIgweSrc,
  },
  {
    name: "Mayowa",
    title: "Senior Ethereum Blockchain Developer.",
    image: MayowaSrc,
  },
  {
    name: "Emeka Nweke",
    title: "CTO Wicrypt.",
    image: EmekaNwekeSrc,
  },
];

export const BDC2022WorkshopSpeakers = [
  {
    name: "Trust Onyekwere",
    title: "Developer Relations, Bunzz.",
    image: TrustOnyekwereSrc,
  },
  {
    name: "Markanthony Ekene",
    title: "Senior Blockchain Engineer XendFinance.",
    image: EkeneMarkAnthony,
  },
  {
    name: "Makwe Quintin",
    title: "Blockchain Engineer at Bitpowr.",
    image: MakweQuintinSrc,
  },
];
