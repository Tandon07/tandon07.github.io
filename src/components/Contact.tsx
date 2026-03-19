'use client';
import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ subject: '', message: '' });

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:tandonsaurabh07@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailto;
  };

  return (
    <section className="py-32 bg-black text-white border-t border-white/10 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Socials & Info */}
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Let's Talk.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-md">
            Interested in collaborating on Agentic AI or data engineering projects? Drop a message or connect with me via social channels.
          </p>

          <div className="flex flex-col gap-6">
            <a 
              href="mailto:tandonsaurabh07@gmail.com" 
              className="group flex items-center gap-4 text-xl font-light hover:text-white transition-colors text-gray-400"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/20 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              tandonsaurabh07@gmail.com
            </a>
            
            <a 
              href="https://github.com/tandon07" 
              target="_blank" rel="noreferrer"
              className="group flex items-center gap-4 text-xl font-light hover:text-white transition-colors text-gray-400"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/20 transition-all">
                <Github className="w-6 h-6" />
              </div>
              github.com/tandon07
            </a>

            <a 
              href="https://www.linkedin.com/in/tandon07/" 
              target="_blank" rel="noreferrer"
              className="group flex items-center gap-4 text-xl font-light hover:text-white transition-colors text-gray-400"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/20 transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              linkedin.com/in/tandon07/
            </a>
          </div>
        </div>

        {/* Contact Form Mailto Generator */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
          <form onSubmit={handleConnect} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Subject</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-white/20 pb-2 text-xl focus:outline-none focus:border-white transition-colors"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            
            <div className="mt-4">
              <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea 
                required
                className="w-full bg-transparent border-b border-white/20 pb-2 text-xl focus:outline-none focus:border-white transition-colors resize-none h-32"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="group mt-12 flex items-center justify-between bg-white text-black px-8 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              Send via Email Client
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
