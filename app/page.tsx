import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { HashScroll } from "@/components/work/HashScroll";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Hero />
      <Manifesto />
      <SelectedWork />
      <Services />
      <Process />
      <TechStack />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
