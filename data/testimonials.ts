import { TestimonialHeadshot1, TestimonialHeadshot2, TestimonialHeadshot3 } from "../assets/images";

type Testimonial = {
  name: string,
  role: string,
  title: string,
  desc: string,
  headshot: StaticImageData,
}[];

export const testimonials: Testimonial = [
  {
    name: "Jonathan Newman",
    role: "Chairman of App Finance",
    title: "Generated Over $100M+ from our App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros ipsum adipiscing mattis ultricies ornare malesuada placerat. Urna ipsum nulla ac nibh id vel placerat. Cursus morbi tellus ultricies egestas ut pharetra.",
    headshot: TestimonialHeadshot1
  },
  {
    name: "Katherine Jenna",
    role: "Chairman of App Finance",
    title: "Generated Over $100M+ from our App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros ipsum adipiscing mattis ultricies ornare malesuada placerat. Urna ipsum nulla ac nibh id vel placerat. Cursus morbi tellus ultricies egestas ut pharetra.",
    headshot: TestimonialHeadshot2
  },
  {
    name: "Bruce  Barner",
    role: "Chairman of App Finance",
    title: "Generated Over $100M+ from our App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros ipsum adipiscing mattis ultricies ornare malesuada placerat. Urna ipsum nulla ac nibh id vel placerat. Cursus morbi tellus ultricies egestas ut pharetra.",
    headshot: TestimonialHeadshot3
  },
]