'use client';

import { motion } from 'framer-motion';

const Partners = ({ className = '' }) => {
  const partners = [
    { icon: '⚡', name: 'Boltshift' },
    { icon: '💡', name: 'Lightbox' },
    { icon: '🪶', name: 'FeatherDev' },
    { icon: '🔮', name: 'Spherule' },
    { icon: '🌐', name: 'GlobalBank' },
    { icon: '🔥', name: 'Nietzsche' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`bg-white py-16 text-center border-t border-purple-100 ${className}`}>
      <div className="max-w-6xl mx-auto px-8">
        <motion.p
          className="text-lg text-gray-600 mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join 4,000+ companies already growing
        </motion.p>
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100 hover:-translate-y-1 hover:bg-purple-50"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl filter grayscale transition-all duration-300 group-hover:grayscale-0">
                {partner.icon}
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 