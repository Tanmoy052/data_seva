import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What industries does Dataseva specialize in?",
    answer: "We specialize in working with high-growth startups and established enterprises across Fintech, Healthcare SaaS, E-commerce, and AI-driven sustainability sectors."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A strategic design phase usually takes 2-4 weeks, while full-scale engineering projects can range from 3 to 6 months."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We offer comprehensive support and maintenance packages to ensure your digital products remain secure, performant, and up-to-date with the latest technologies."
  },
  {
    question: "How do you handle project management?",
    answer: "We use agile methodologies with weekly sprints and transparent communication through dedicated Slack channels and project management tools like Jira or Linear."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-12 md:py-16 bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <p className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-4">Common Inquiries</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`glass rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-white/5 border-blue-600/30' : 'hover:bg-white/5'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="text-xl font-bold text-white">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-white/10 text-gray-400'}`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-400 text-lg leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
