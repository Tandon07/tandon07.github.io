'use client';

import { FaPython, FaDocker, FaAws, FaBrain, FaLink, FaGithub, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiPytorch, SiScikitlearn, SiHuggingface, SiOpenai } from 'react-icons/si';
import { BsCpuFill, BsDatabaseFillGear, BsDiagram3Fill, BsRobot, BsTools, BsPeopleFill, BsFileText } from 'react-icons/bs';
import { SkillGlobe } from './SkillGlobe';

const skills = [
  { name: 'Python', icon: FaPython },
  { name: 'NLTK', icon: BsFileText },
  { name: 'MCP (Model Context Protocol)', icon: BsDiagram3Fill },
  { name: 'A2A (Agent to Agent)', icon: BsCpuFill },
  { name: 'Hugging Face', icon: SiHuggingface },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'LangChain', icon: FaLink },
  { name: 'LangGraph', icon: BsDiagram3Fill },
  { name: 'LangSmith', icon: BsTools },
  { name: 'GenAI', icon: FaBrain },
  { name: 'LLMs', icon: BsRobot },
  { name: 'OpenAI', icon: SiOpenai },
  { name: 'CrewAI', icon: BsPeopleFill },
  { name: 'Tensorflow', icon: SiTensorflow },
  { name: 'Keras', icon: SiKeras },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'Bert', icon: BsRobot },
  { name: 'GPT', icon: SiOpenai },
  { name: 'GANs', icon: BsCpuFill },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git Actions', icon: FaGithub },
  { name: 'AWS', icon: FaAws },
  { name: 'Azure', icon: FaMicrosoft }
];

export default function Skills() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-t border-white/10" id="skills">
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-8 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center">Core Skills</h2>
        <p className="text-gray-400 mt-4 text-center max-w-2xl mx-auto">
          A comprehensive rotating ecosystem of my technical expertise, from fundamental programming to advanced Generative AI architectures.
        </p>
      </div>

      <div className="w-full relative z-20">
        <SkillGlobe skills={skills} />
      </div>
    </section>
  );
}
