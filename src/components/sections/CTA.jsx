'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const CTA = ({ className = '' }) => {
  return (
    <section className={`bg-white py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="rounded-3xl overflow-hidden relative"
          style={{ backgroundColor: 'rgba(83, 56, 158, 1)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 items-center min-h-[400px]">
            {/* Left Content */}
            <div className="p-8 lg:p-12 flex flex-col items-center text-center">
              <motion.h2
                className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6 leading-tight"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Give us a shot
              </motion.h2>
              
              <motion.p
                className="text-base lg:text-lg xl:text-xl text-[rgb(255_255_255/0.9)] mb-6 lg:mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Join over 4,000+ startups already growing with Untitled UI.
              </motion.p>
              
              <motion.div
                className="flex flex-row gap-4 items-center w-full justify-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button 
                  variant="white" 
                  size="lg" 
                  className="flex items-center justify-center gap-2 rounded-lg border border-[rgba(127,86,217,1)] whitespace-nowrap text-sm lg:text-base px-6 py-3"
                  style={{ 
                    backgroundColor: "white",
                    color: "rgba(52, 64, 84, 1)",
                    borderRadius: "8px",
                    borderWidth: "1px"
                  }}
                >
                  Learn more
                </Button>
                <Button 
                  size="lg" 
                  className="flex items-center justify-center gap-2 rounded-lg border border-[rgba(127,86,217,1)] text-white whitespace-nowrap text-sm lg:text-base px-6 py-3"
                  style={{ 
                    backgroundColor: "rgba(127, 86, 217, 1)",
                    borderRadius: "8px",
                    borderWidth: "1px"
                  }}
                >
                  Get started
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <div className="h-full overflow-hidden flex items-center justify-center">
              <Image
                src="/ctaicon.svg"
                alt="CTA illustration"
                width={400}
                height={300}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 