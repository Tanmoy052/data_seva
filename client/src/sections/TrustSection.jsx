import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  'Microsoft', 'Google', 'aws', 'snowflake', 'Deloitte.', 'accenture', 'CLOUDERA'
];

const TrustSection = () => {
  return (
    <section className="bg-[#f8f9fa] py-16 relative overflow-hidden border-y border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-[10px] font-bold tracking-[0.3em] text-gray-500 mb-12 uppercase"
        >
          Trusted by businesses worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, index) => (
            <motion.span 
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl font-black text-[#1e293b] tracking-tighter cursor-default"
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
