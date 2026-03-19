import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'HRMS Agentic Automation',
    category: 'Blueflame Labs',
    description: 'Designed and deployed conversational AI pipelines using LangGraph and CrewAI to automate enterprise HRMS workflows, saving 50% of HR resolution time.',
    tags: ['LangGraph', 'CrewAI', 'Azure Bot Services', 'RAG']
  },
  {
    title: 'GenAI Project Retrieval',
    category: 'Capgemini',
    description: 'Developed a Python/Streamlit web app with LangChain, OpenAI, and FAISS to retrieve relevant project data, reducing duplicate efforts by 25%.',
    tags: ['Python', 'Streamlit', 'LangChain', 'OpenAI', 'FAISS']
  },
  {
    title: 'Customer Sentiment Engine',
    category: 'Cognizant',
    description: 'Built an end-to-end ML solution utilizing NLTK, TF-IDF, Logistic Regression, and LDA topic modeling to classify and visualize customer feedback semantics.',
    tags: ['Python', 'NLTK', 'Scikit-learn', 'MySQL', 'Flask']
  },
  {
    title: 'Chat with YouTube',
    category: 'Personal Project',
    description: 'Engineered a ConversationalRetrievalChain powered by Whisper, HuggingFace embeddings, FAISS, and Gemma models to enable intelligent chat with YouTube video transcripts.',
    tags: ['Streamlit', 'Whisper', 'HuggingFace', 'Gemma', 'FAISS']
  },
  {
    title: 'Thyroid Detection System',
    category: 'Machine Learning',
    description: 'Developed a classification model achieving 92% accuracy. Containerized with Docker and deployed to AWS EC2 via GitHub Actions CI/CD.',
    tags: ['Scikit-learn', 'Pandas', 'MongoDB', 'Docker', 'AWS EC2', 'GitHub Actions']
  }
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-black text-white py-32 px-6 md:px-24 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Selected Work
          </h2>
          <p className="text-gray-400 mt-4 max-w-md text-lg font-light">
            A curated collection of digital experiences pushing the boundaries of Web architecture and aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 flex flex-col h-full"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-start mb-16 relative z-10">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  {project.category}
                </span>
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 flex-grow flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Tech Stacks / Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold tracking-wider text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
