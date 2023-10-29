import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
