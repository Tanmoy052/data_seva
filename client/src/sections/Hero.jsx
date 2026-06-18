import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden bg-[#0B0F19]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-bold mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
              </span>
              Empowering Digital Growth
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-[1.1] mb-6 md:mb-8 text-white tracking-tight"
            >
              Building Data <br />
              <span className="text-gradient">Architectures That</span> <br />
              Scale Businesses
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed"
            >
              Dataseva is a specialized data engineering agency. We partner with
              ambitious startups to craft high-performance data pipelines, AI
              solutions, and analytics platforms that drive growth.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 md:mb-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(37, 99, 235, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-9 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all w-full sm:w-auto"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white/10 text-white px-6 md:px-9 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all backdrop-blur-sm w-full sm:w-auto"
              >
                Our Work{" "}
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white" />
                </div>
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="relative perspective-1000 block mt-12 lg:mt-0"
          >
            <div className="relative z-10 w-full max-w-[500px] mx-auto aspect-square glass-card p-6 md:p-8 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/5 z-0" />

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Complex Animated Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] border border-blue-500/20 rounded-full animate-spin-slow" />
                  <div className="absolute w-[65%] h-[65%] border border-cyan-400/10 rounded-full animate-reverse-spin" />
                  <div className="absolute w-32 md:w-40 h-32 md:h-40 bg-blue-600/30 rounded-full blur-[60px] md:blur-[80px] animate-pulse" />
                </div>

                {/* Central Image Container */}
                <motion.div
                  whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  className="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20"
                >
                  <img
                    src="/dataseva.jpeg"
                    alt="Startup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                    <p className="text-white font-bold text-base md:text-lg leading-tight">
                      Dataseva Headquarters
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
