import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Overlay />
      <ScrollyCanvas />
      
      <div className="relative z-20 bg-black">
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/10 bg-black flex justify-center items-center">
        <p className="text-gray-600 text-sm font-light uppercase tracking-widest">
          Saurabh Tandon © 2026.
        </p>
      </footer>
    </main>
  );
}
