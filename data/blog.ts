import { eventTestImage } from "../assets/images";

type Article = {
  _id: string,
  title: string,
  body: string,
  headshot: StaticImageData,
  status: string,
  date: string,
  duration: number,
  author: string,
}[];

export const articles: Article = [
  {
    _id: "1",
    title: "The wide adoption of Web3 in sub-saharan Africa",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "LATEST",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "2",
    title: "DAO: The future of business venture and investment",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "LATEST",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "Eben New"
  },
  {
    _id: "3",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Newman"
  },
  {
    _id: "4",
    title: "The wide adoption of Web3 in sub-saharan Africa",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "CASUAL",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "5",
    title: "DAO: The future of business venture and investment",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "CASUAL",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "6",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "7",
    title: "The wide adoption of Web3 in sub-saharan Africa",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "LATEST",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "8",
    title: "DAO: The future of business venture and investment",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "LATEST",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "9",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "10",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "11",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "12",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "13",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "14",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
  {
    _id: "15",
    title: "Africa’s Web3 silicon Valley",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo et lorem fames lacus, et mi. Massa natoque morbi ut mauris elit. Accumsan in sem dignissim venenatis in et neque felis pellentesque. Habitant dui sed gravida cum. Purus arcu, orci donec vitae maecenas arcu enim sed eget. Lobortis vestibulum mattis dapibus commodo pellentesque fermentum adipiscing habitant eget. Consequat nulla turpis fermentum donec. Urna, auctor molestie viverra a egestas euismod. Viverra adipiscing habitasse congue mauris commodo aliquet ut. Leo mi suspendisse faucibus quis dui arcu vel, elementum eu. Amet purus dolor aliquam et nunc, congue purus. Sit ac pellentesque in pellentesque. A, quis placerat lectus viverra in nulla sem. Nisi odio mi consequat dolor pulvinar in turpis sed facilisis. Etiam sapien id in at cras consequat. Diam ipsum convallis turpis vestibulum sit magna. Congue risus tortor eget sit. Nunc lectus consectetur cras sem ultrices. Euismod consequat, lobortis tincidunt dis euismod commodo enim dolor tempor. Duis in leo orci.",
    headshot: eventTestImage,
    status: "POPULAR",
    date: "Dec 18, 2021.",
    duration: 12,
    author: "John Champion Newman"
  },
]