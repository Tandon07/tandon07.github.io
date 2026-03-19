import { FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiPytorch, SiScikitlearn, SiHuggingface, SiOpenai } from 'react-icons/si';
import { BsCpuFill, BsDatabaseFillGear } from 'react-icons/bs';

const skills = [
  { name: 'Python', icon: FaPython },
  { name: 'OpenCV', icon: BsCpuFill },
  { name: 'NLTK', icon: BsDatabaseFillGear },
  { name: 'GANs', icon: BsCpuFill },
  { name: 'Hugging Face', icon: SiHuggingface },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'LangChain', icon: SiOpenai },
  { name: 'GenAI', icon: BsCpuFill },
  { name: 'LLMs', icon: SiOpenai },
  { name: 'Tensorflow', icon: SiTensorflow },
  { name: 'Keras', icon: SiKeras },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'MCP (Model Context Protocol)', icon: BsDatabaseFillGear },
  { name: 'A2A (Agent to Agent)', icon: BsCpuFill },
  { name: 'Bert / GPT', icon: SiOpenai },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git Actions', icon: BsDatabaseFillGear },
  { name: 'AWS EC2', icon: FaAws }
];

export default function Skills() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Core Skills</h2>
      </div>

      <div className="flex whitespace-nowrap overflow-hidden py-8">
        {/* Double the array for seamless marquee scrolling */}
        <div className="flex animate-marquee min-w-full items-center gap-12 px-6">
          {[...skills, ...skills].map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full py-4 px-8 text-lg font-medium text-gray-300 transition hover:bg-white/10 flex-shrink-0 cursor-default"
              >
                <Icon className="text-2xl text-banana" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
