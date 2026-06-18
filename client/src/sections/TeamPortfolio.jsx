import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const teamMembers = [
  {
    name: "Tanmoy Pal",
    role: "Full-Stack Developer",
    bio: "Full-stack developer & data engineer with expertise in building scalable web applications.",
    portfolioLink: "https://tanmoypal-portfolio.vercel.app/",
    image: "/dataseva.jpeg",
  },
  {
    name: "Alex Johnson",
    role: "Backend Developer",
    bio: "Backend developer with expertise in building scalable web applications.",
    portfolioLink: "#",
    image: "/tanmoy_pal.png",
  },
  {
    name: "Sarah Williams",
    role: "Data Scientist",
    bio: "Machine learning expert specializing in predictive analytics and data visualization.",
    portfolioLink: "#",
    image: "/dataseva.jpeg",
  },
  {
    name: "Mike Chen",
    role: "DevOps Engineer",
    bio: "Infrastructure specialist building robust, scalable cloud architectures.",
    portfolioLink: "#",
    image: "/dataseva.jpeg",
  },
];

const TeamPortfolio = () => {
  return (
    <section
      id="team-portfolio"
      className="py-16 md:py-24 bg-[#0B0F19] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-4"
          >
            Our Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Meet Our Team Members
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[1.5rem] md:rounded-[2rem] border border-white/10 overflow-hidden flex flex-col h-full"
            >
              {/* Team Member Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - Portfolio`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Info Section */}
              <div className="p-4 md:p-6 bg-[#0B0F19] flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed flex-grow">
                  {member.bio}
                </p>

                <a
                  href={member.portfolioLink}
                  target={member.portfolioLink !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
                  >
                    View Portfolio
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPortfolio;
