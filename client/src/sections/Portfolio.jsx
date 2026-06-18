import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eco-Track AI",
    category: "AI & Sustainability",
    tech: ["React", "TensorFlow", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "#",
  },
  {
    title: "CryptoFlow Wallet",
    category: "Web3 & Fintech",
    tech: ["Next.js", "Solidity", "Ethers.js"],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    link: "#",
  },
  {
    title: "HealthSync Pro",
    category: "Healthcare SaaS",
    tech: ["React Native", "Firebase", "AWS"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    link: "#",
  },
  {
    title: "Nexus E-commerce",
    category: "Scalable Commerce",
    tech: ["MERN Stack", "Stripe", "Redis"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-[#0B0F19] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-4"
            >
              Selected Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Proven Results For <br />
              <span className="text-gradient">Global Innovators</span>
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-bold border-2 border-white/10 hover:border-blue-600 px-8 py-4 rounded-2xl transition-all"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#161B22] border border-white/5 cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Overlay Content (Always visible on mobile) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent flex flex-col justify-end p-6 md:p-10">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-600/20 text-blue-400 px-3 md:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-600/30">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-4">
                    {project.title}{" "}
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  </h3>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-gray-400 text-xs font-medium"
                      >
                        {t} {i < project.tech.length - 1 ? "•" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
