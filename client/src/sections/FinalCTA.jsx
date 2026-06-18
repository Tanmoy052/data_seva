import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#161B22] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5 shadow-2xl"
        >
          {/* Decorative background effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-400/5 blur-[80px] rounded-full -z-10" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-10 text-blue-500"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              Let’s Architect Your <br />
              <span className="text-gradient">Digital Dominance</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              We're ready to deploy our senior-led team to solve your most
              complex digital challenges. Are you ready to scale?
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(37, 99, 235, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center gap-3"
              >
                Launch Your Project <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center gap-3 backdrop-blur-sm"
              >
                Talk to a Consultant
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
