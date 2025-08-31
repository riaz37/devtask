'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Partners = ({ className = '' }) => {
  const partners = [
    { icon: '/partners/boltshift.svg', name: 'Boltshift' },
    { icon: '/partners/lightbox.svg', name: 'Lightbox' },
    { icon: '/partners/featherdev.svg', name: 'FeatherDev' },
    { icon: '/partners/spherrule.svg', name: 'Spherule' },
    { icon: '/partners/globalbank.svg', name: 'GlobalBank' },
    { icon: '/partners/nietzsche.svg', name: 'Nietzsche' }
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
    <section className={`bg-white py-16 text-center ${className}`}>
      <div className="max-w-6xl mx-auto px-8">
        <motion.p
          className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 font-medium text-center px-4"
          style={{ color: 'rgba(16, 24, 40, 1)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join 4,000+ companies already growing
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 transition-all duration-300 cursor-pointer hover:scale-105"
              variants={itemVariants}
            >
              <Image
                src={partner.icon}
                alt={`${partner.name} logo`}
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span 
                className="text-3xl font-bold"
                style={{ color: 'rgba(16, 24, 40, 1)' }}
              >
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