import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Clients from '@/components/Clients';
import Team from '@/components/Team';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main id="content">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <Team />
      <Contact />
    </main>
  );
}
