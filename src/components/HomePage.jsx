import React from 'react'
import HeroScetion from './HomePage/HeroScetion'

import { AnimatedTestimonials } from './HomePage/Testimonial'
import testi1 from "../../public/TestiImage1.jpg"
import testi2 from "../../public/TestiImage2.jpg"
import testi3 from "../../public/TestiImage3.jpg"

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: testi1,
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: testi3,
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src:testi1,
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: testi3,
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: testi1,
  },
];

const HomePage = () => {
  return (
   <section className=' w-[100vw]'>
       
       <HeroScetion/>
       <AnimatedTestimonials testimonials={testimonials} />
   </section>
  )
}

export default HomePage