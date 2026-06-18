import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-[#0B0F19] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Meet Our Team Member
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden">
            {/* Team Member Image */}
            <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden">
              <img
                src="/dataseva.jpeg"
                alt="Tanmoy Pal - Portfolio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Info Section */}
            <div className="p-6 md:p-10 bg-[#0B0F19]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tanmoy Pal
              </h3>
              <p className="text-gray-400 text-sm md:text-lg mb-8 leading-relaxed">
                Full-stack developer & data engineer with expertise in building scalable, high-performance web applications. Passionate about transforming data into competitive advantages for ambitious startups.
              </p>

              <a
                href="https://tanmoypal-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl flex items-center gap-3 transition-all shadow-xl shadow-blue-600/20"
                >
                  View Live Portfolio
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
