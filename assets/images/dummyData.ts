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
  SolinfraImageSrc,
  AjentlyImageSrc,
} from "./cloudinary";
import {
  buildNPitchSession,
  event2022B,
  superteam,
  Techfest,
  uchenna2026,
  mrEmmanuel,
} from "./jpgs";
import { ryanTasie, seeEunHa } from "./pngs";

const PEACELAND_EVENT_COVER_SRC =
  "https://res.cloudinary.com/drj2hpt8p/image/upload/v1778179535/PU_event_dm5gtv.jpg";
const COAL_CITY_EVENT_COVER_SRC =
  "https://res.cloudinary.com/drj2hpt8p/image/upload/v1778179515/IMG_1766_gd6wjj.jpg";

export const demoProductsData = [
  {
    image: SolinfraImageSrc,
    title: "Solinfra",
    description:
      "Ship Solana apps faster with Solinfra. Get reserved RPC, Yellowstone gRPC, parsed transactions, and non-custodial wallets, all through a single API",
    link: "https://solinfra.dev/",
    size: { width: 862, height: 500 }, // The height was 52 before now.
  },
  {
    image: AjentlyImageSrc,
    title: "Ajently",
    description:
      "A marketplace where users discover, run, build, and monetize AI agents for automating various workflows",
    link: "https://ajently.com/",
    size: { width: 868, height: 500 }, // The height was 752 before now.
  },
];

export const demoEventsData = [
  {
    image: buildNPitchSession,
    name: "Build and Pitch Sessions",
    link: "/events/Build&Pitch",
    year: "2026",
    hasBeenHeld: false,
  },
  {
    image: PEACELAND_EVENT_COVER_SRC,
    name: "Intro to Blockchain — Peaceland University",
    link: "/events/peaceland-university-2026",
    year: "2026",
    hasBeenHeld: false,
  },
  {
    image: COAL_CITY_EVENT_COVER_SRC,
    name: "Intro to Blockchain — Coal City University",
    link: "/events/coal-city-university-2026",
    year: "2026",
    hasBeenHeld: false,
  },
  {
  image: Techfest, // or ETF image
  name: "Enugu Tech Festival 2026 x BlockchainHub Africa Web3 Day",
  link: "/blog/enugu-tech-festival-2026-blockchainhub-africa-web3-day",
  year: "2026",
  hasBeenHeld: true,
},
  {
    image: superteam, 
    name: "Builders’ Cohort: Intermediate Level- SuperteamNG X BlockchainHubAfrica 16th March - 25 April, 2026",
    link: "/blog/builders-cohort-superteamng-blockchainhub-africa",
    year: "2026",
    hasBeenHeld: true,
  },
  {
    image: event2022B,
    name: "Web3 dev. Bootcamp '22",
    link: "/blog/blockchain-hub-africa-partners-with-buildspace-to-train-web3-talents-in-africa-656",
    year: "2022",
    hasBeenHeld: true,
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

export const BuildNPitch2026Speakers = [
  {
    name: "Uche Edeoga",
    title: "Associate, Hashed Emergent",
    image: uchenna2026,
  },
  {
    name: "See Eun Ha",
    title: "Venture Partner, Lava VC",
    image: seeEunHa,
  },
  {
    name: "Emmanuel Nwafor",
    title: "Co-founder, BlockchainHub Africa",
    image: mrEmmanuel,
  },
  {
    name: "Ryan K. Uche-Tasie",
    title: "Intelligence Analyst, Lava VC",
    image: ryanTasie,
  },
]

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
