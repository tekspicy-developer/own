import Intro from "@/components/sections/Intro";
import Contact from "@/components/sections/Contact";
import OurWorks from "@/components/sections/OurWorks"
import Services from "@/components/sections/Services";


export default function Home() {
  return (
    <>
      <Intro/>
      <Services/>
      <OurWorks/>
      
      <Contact/>
    </>
  );
}
