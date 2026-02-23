import Image from "next/image";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Nav from "@/ui/nav";
import Hero from "@/ui/hero";
import UrlInput from "@/ui/urlinput";
import Footer from "@/ui/footer";
import Getstarted from "@/ui/getstarted";
import Sectionfourcontent from "@/ui/sectionfourcontent";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export default function Home() {
  return (
    <div
      className={`${poppins.className} flex flex-col min-h-screen items-center  mx-auto w-full dark:bg-black`}
    >
      <Nav />
      <div className=" w-full mx-auto">
        <Hero />
        {/* <UrlInput/> */}
        <Sectionfourcontent/>
        <Getstarted/>
        <Footer/>
      </div>
    </div>
  );
}
