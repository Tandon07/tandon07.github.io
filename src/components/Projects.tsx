import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Agentic HRMS AI System',
    category: 'Enterprise AI',
    description: 'Architected and deployed a production-grade Agentic AI application that transformed how employees interact with HR systems. By designing intelligent multi-agent orchestration using LangGraph for state-based workflow management and Advanced-RAG pipelines for contextual accuracy, the system seamlessly handles leave requests, attendance, payslips, policy queries, and ticketing — all through natural conversation. I built secure RESTful API connectors for real-time HRMS integration and deployed the solution via Azure Bot Services, embedding it directly into Microsoft Teams for enterprise-wide adoption. The result was a measurable 50% reduction in HR time spent on repetitive queries, delivering a scalable, reliable, and self-service AI experience across the organization.',
    tags: ['LangGraph', 'Advanced-RAG', 'Azure Bot', 'Teams']
  },
  {
    title: 'GenAI-Powered Project Retrieval Platform',
    category: 'Knowledge Web App',
    description: 'Developed an intelligent web application that brought the power of Generative AI into everyday team workflows. Using Python, LangChain, OpenAI, FAISS, and Streamlit, I built a smart retrieval system that allowed the team to instantly surface relevant project data from large internal databases — eliminating redundant research and cutting duplicate efforts by 25%. By leveraging advanced RAG techniques for enhanced semantic search, the platform streamlined project creation processes end-to-end, saving over 30 hours of manual effort every month and significantly improving team-wide productivity and knowledge reuse.',
    tags: ['LangChain', 'OpenAI', 'FAISS', 'RAG']
  },
  {
    title: 'Customer Sentiment Intelligence Platform',
    category: 'NLP Pipeline',
    description: 'Led the end-to-end development of a customer feedback analytics system that turned raw, unstructured data into actionable business intelligence. I designed a structured MySQL pipeline to ingest feedback from surveys, forms, and reviews, then preprocessed the text using Python, NLTK, and scikit-learn — applying tokenization, stopword removal, and TF-IDF vectorization to make the data model-ready. I trained and evaluated classical ML models including Logistic Regression, Random Forest, and SVM for multi-class sentiment classification, while also applying LDA-based topic modeling to surface recurring pain points and improvement themes. The insights were made accessible through a FastAPI-powered web interface with visual dashboards, enabling stakeholders to track customer sentiment trends in real time.',
    tags: ['NLP', 'TF-IDF', 'SVM', 'Random Forest', 'FastAPI']
  },
  {
    title: 'Chat with YouTube — Conversational Video AI',
    category: 'LLM App',
    description: 'Chat with YouTube is an advanced AI application that reimagines how users engage with video content — turning any YouTube video into an interactive, conversational knowledge source. I engineered the system using Streamlit as the interface layer, with Whisper and YouTubeTranscriptApi handling seamless audio transcription. Text was chunked, embedded using HuggingFace models, and stored as vectors in FAISS for efficient semantic retrieval. At the core of the experience is a dynamic ConversationalRetrievalChain with persistent memory, enabling nuanced, multi-turn conversations that retain context across the session. The system was powered by the Gemma language model via HuggingFace and Groq APIs, delivering fast, high-quality responses that make exploring long-form video content feel effortless.',
    tags: ['Streamlit', 'Whisper', 'LangChain', 'FAISS', 'Gemma']
  },
  {
    title: 'Thyroid Detection — ML-Powered Medical Diagnostic Tool',
    category: 'Machine Learning',
    description: 'This project involved building a robust, end-to-end machine learning solution for early detection of thyroid abnormalities using a real-world clinical dataset of over 12,000 records. I handled the full ML lifecycle — from data cleaning and feature engineering to preprocessing and model building — ultimately fine-tuning a Decision Tree classifier with a maximum depth of 8, achieving a strong 92% test accuracy. To take the model from notebook to production, I containerized it using Docker, pushed the image to AWS ECR, and deployed it on EC2, with a GitHub Actions CI/CD pipeline ensuring smooth, automated releases. A Flask-based web interface was built on top, allowing users to input clinical parameters and receive diagnostic predictions instantly — demonstrating how machine learning can be made both accessible and deployable at scale.',
    tags: ['Decision Tree', 'Docker', 'AWS EC2', 'GitHub Actions', 'Flask']
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
