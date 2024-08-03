import Image from 'next/image';
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Product from "@/components/product";
import Footer from '@/components/footer';

export default function Home() {
  return(
    <>
      <Hero/>
      <Mission/>
      <Product/>
      <Footer/>
    </>
  )
}