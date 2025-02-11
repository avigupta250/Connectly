import {Carousel} from '@/src/components/Common/Carousel';
import './globals.css';

import HomePage from "@/src/components/HomePage";
import NavBar from "@/src/components/NavBar";
import Image from "next/image";
import Services from '@/src/components/Services';
import Faq from '@/src/components/Common/Faq';

export default function Home() {
  return (
   
  <div>
    {/* <Services/>
    <Faq/> */}
    <HomePage/>
  </div>
  

  
  );
}

// 'use client';

// import { motion } from 'motion/react';
// import { ChevronRight, Rocket, BarChart, Target } from 'lucide-react';
// import Link from 'next/link';

// export default function Page() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent overflow-hidden">
//       {/* Abstract Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/5 blur-3xl" />
//         <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-secondary/5 blur-3xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
//         <div className="text-center space-y-8 sm:space-y-12">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
//           >
//             <Rocket className="w-4 h-4 mr-2" />
//             Elevate Your Digital Presence
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
//           >
//             Transform Your Brand with
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"> Strategic Marketing</span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="max-w-2xl mx-auto text-xl text-muted-foreground"
//           >
//             We combine data-driven insights with creative excellence to deliver exceptional marketing solutions that drive real business growth.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <Link
//               href="/contact"
//               className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
//             >
//               Get Started
//               <ChevronRight className="ml-2 w-4 h-4" />
//             </Link>
//             <Link
//               href="/portfolio"
//               className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all duration-200"
//             >
//               View Our Work
//             </Link>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
//           >
//             {[
//               { icon: BarChart, label: 'Revenue Growth', value: '150%+' },
//               { icon: Target, label: 'Client Success Rate', value: '98%' },
//               { icon: Rocket, label: 'Projects Delivered', value: '500+' },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
//               >
//                 <stat.icon className="w-8 h-8 text-primary mb-4" />
//                 <div className="text-3xl font-bold">{stat.value}</div>
//                 <div className="text-sm text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }