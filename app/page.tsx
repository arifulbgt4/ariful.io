import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Domains from '@/components/Domains';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06080D] text-[#C8D0E0] overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Domains />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Contact />
      <div className="section-divider" />
      <Footer />
    </main>
  );
}
