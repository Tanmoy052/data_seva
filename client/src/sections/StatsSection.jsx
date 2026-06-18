import React from "react";
import { motion } from "framer-motion";
import { Users, Package, ShieldCheck, Globe } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    value: "150+",
    label: "Strategic Partners",
  },
  {
    icon: <Package className="w-6 h-6 text-blue-400" />,
    value: "300+",
    label: "Products Launched",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    value: "10+",
    label: "Expert Consultants",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    value: "20+",
    label: "Global Markets",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-[#0B0F19] py-16 md:py-24 relative overflow-hidden border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.4em] text-blue-500 uppercase">
            Our Impact In Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ring-1 ring-blue-500/20 group-hover:ring-blue-500/50">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
