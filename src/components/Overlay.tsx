'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 15%
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: 20% to 40%
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.4], [-50, 0]);

  // Section 3: 45% to 70%
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);
  
  // Hide entire overlay wrapper past 75%
  const display = useTransform(scrollYProgress, [0.7, 0.75], ['flex', 'none']);

  return (
    <motion.div style={{ display }} className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col">
      {/* Section 1: Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
          Saurabh Tandon.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mt-4 font-light tracking-wide">
          AI Specialist & Data Scientist.
        </p>
        <div className="mt-10">
          <a 
            href="/resume/Saurabh_Tandon_Resume.pdf" 
            target="_blank" 
            download 
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all text-sm font-semibold tracking-wide uppercase"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Section 2: Left Aligned */}
      <motion.div 
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight drop-shadow-xl">
          I build Agentic AI workflows.
        </h2>
        <div className="w-20 h-1 bg-white/50 mt-8 rounded-full" />
      </motion.div>

      {/* Section 3: Right Aligned */}
      <motion.div 
        style={{ opacity: opacity3, x: x3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight drop-shadow-xl">
          Bridging GenAI and Real-World Impact.
        </h2>
        <div className="w-20 h-1 bg-white/50 mt-8 rounded-full ml-auto" />
      </motion.div>
    </motion.div>
  );
}
