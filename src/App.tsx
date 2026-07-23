import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import OurSpace from './components/OurSpace';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuizModal from './components/QuizModal';

function smoothScroll(targetY: number, duration: number) {
  const startY = window.scrollY;
  const difference = targetY - startY;
  const startTime = performance.now();

  function step() {
    const time = performance.now();
    let elapsed = (time - startTime) / duration;
    if (elapsed > 1) elapsed = 1;

    const ease = elapsed < 0.5 ? 2 * elapsed * elapsed : -1 + (4 - 2 * elapsed) * elapsed;

    window.scrollTo(0, startY + difference * ease);

    if (elapsed < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        const targetId = anchor.hash.replace('#', '');
        if (targetId === '') return;
        
        const elem = document.getElementById(targetId);
        if (elem) {
          e.preventDefault();
          const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80;
          smoothScroll(offsetTop, 1000); // 1 segundo de duração
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-x-hidden relative">
      {/* Watermark Overlay */}
      <div className="fixed inset-[-100%] pointer-events-none z-[9999] flex flex-wrap justify-center content-center gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-10 md:gap-x-12 md:gap-y-16 opacity-[0.12] transform -rotate-[30deg] select-none overflow-hidden">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="text-xl sm:text-2xl md:text-4xl font-black tracking-tighter text-black whitespace-nowrap">
            VERSÃO DE DEMONSTRAÇÃO
          </div>
        ))}
      </div>

      <Header />
      <main className="flex-grow">
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
        <About />
        <Services onOpenQuiz={() => setIsQuizOpen(true)} />
        <Team />
        <HowItWorks />
        <Testimonials />
        <Clients />
        <FAQ />
        <OurSpace />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}

export default App;
