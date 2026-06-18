import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    title: "Discovery",
    description:
      "We understand your business needs, goals, and target audience to define a clear project direction.",
  },
  {
    title: "Strategy",
    description:
      "We plan the right approach, technology, and structure to ensure scalability and performance.",
  },
  {
    title: "Design & Development",
    description:
      "We create modern, user-friendly designs and build robust, high-performing applications.",
  },
  {
    title: "Testing",
    description:
      "We ensure quality, security, and seamless performance across all devices.",
  },
  {
    title: "Deployment",
    description: "We launch your project smoothly with optimized performance.",
  },
  {
    title: "Support",
    description:
      "We provide ongoing support and improvements to help your business grow.",
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0B0F19] relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Process
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We follow a streamlined and results-driven approach to deliver
            high-quality digital solutions that align with your business goals.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.1 }}
              className="glass-card p-10 rounded-3xl border border-white/5 hover:border-blue-600/30 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8">
                <span className="text-blue-500 font-bold text-2xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
