import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Your exceptional data science skills have made a profound impact. Your proficiency in Python, statistical techniques, and machine learning models sets you apart. Your ability to uncover valuable insights and drive business impact is unparalleled. You consistently deliver innovative solutions and can help companies make data-driven decisions. Your dedication and expertise in data science are truly commendable.",
    author: "Krish Naik",
    role: "Data Science Mentor / Industry Expert"
  },
  {
    text: "During his internship programme with us, he demonstrated exceptional skills with a self-motivated attitude to learn new things and implement them end to end with all of our mentioned industrial standards. His performance was excellent and was able to complete the project successfully on time.",
    author: "Sudhanshu Kumar",
    role: "AI / ML Technical Leader"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-black text-white relative border-t border-white/10 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((test, idx) => (
            <div 
              key={idx}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              <Quote className="text-white/20 w-12 h-12 absolute top-8 right-8" />
              <p className="text-xl text-gray-300 font-light leading-relaxed italic mb-8 relative z-10">
                "{test.text}"
              </p>
              <div className="mt-auto">
                <h4 className="text-lg font-bold">{test.author}</h4>
                <span className="text-sm text-gray-500 uppercase tracking-widest">{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
