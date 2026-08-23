import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import WellnessSanctuary from "@/sections/WellnessSanctuary";
import Innovation from "@/sections/Innovation";
import ElementisStory from "@/sections/ElementisStory";
import SustainableRetreat from "@/sections/SustainableRetreat";
import Form from "@/sections/Form";
import Footer from "@/sections/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <WellnessSanctuary />
      <Innovation />
      <ElementisStory />
      <SustainableRetreat />
      <Form />
      <Footer />
      <NavBar />
    </main>
  );
}
