import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#0B0F19] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-4">
              About Dataseva
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
              A Strategic Data Partner <br />
              <span className="text-blue-400">For Ambitious Ventures</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              At Dataseva, we specialize in transforming raw data into
              competitive advantages. As a senior-led data agency, we combine
              deep engineering expertise with strategic analytics to help
              startups scale efficiently and effectively.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              {[
                "Data Strategy & Roadmap",
                "Senior-Level Engineering",
                "Scalable Data Pipelines",
                "AI-First Methodology",
                
               
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/process">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all"
              >
                Our detailed process
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-square sm:aspect-video lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Dataseva strategic session"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-0 sm:right-10 glass-card p-8 border border-white/20 shadow-2xl text-center min-w-[240px] z-20">
              <div className="flex flex-col items-center">
                <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                  Client Satisfaction
                </p>
                <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
