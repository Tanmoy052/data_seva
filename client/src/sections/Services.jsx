import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Brain,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: "Data Engineering",
    desc: "Build robust data pipelines and data architectures for reliable and scalable systems.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: "Data Analytics",
    desc: "Turn your data into meaningful insights with advanced analytics and visualization.",
  },
  {
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    title: "AI & Machine Learning",
    desc: "Leverage AI/ML to predict trends, automate processes, and drive innovation.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    title: "Web Development",
    desc: "Build responsive and user-friendly web applications for your business.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "App Development",
    desc: "Develop native mobile applications for iOS and Android platforms.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[#0B0F19] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Specialized Data Services <br />
            <span className="text-gradient">Tailored For Growth</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                const contact = document.getElementById("contact");
                if (contact) {
                  contact.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-300 flex flex-col h-full group cursor-pointer"
            >
              <div className="flex flex-col gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>

              <div className="flex justify-end mt-auto">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
