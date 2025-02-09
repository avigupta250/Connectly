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
