'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const CTA = ({ className = '' }) => {
  return (
    <section className={`mx-8 my-8 max-w-6xl mx-auto ${className}`}>
      <motion.div
        className="bg-[rgb(var(--color-primary-purple))] rounded-3xl overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 items-center min-h-[400px]">
          {/* Left Content */}
          <div className="p-12 lg:p-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Give us a shot
            </motion.h2>
            
            <motion.p
              className="text-xl text-[rgb(255_255_255/0.9)] mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join over 4,000+ startups already growing with Untitled UI.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="white" size="lg" className="text-lg px-8 py-4">
                Learn more
              </Button>
              <Button size="lg" className="text-lg px-8 py-4">
                Get started
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Office Scene */}
          <div className="h-[400px] lg:h-full overflow-hidden rounded-r-3xl">
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 relative">
              {/* Office Scene SVG */}
              <svg
                className="w-full h-full"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="400" height="300" fill="#f8f9fa" />
                
                {/* Floor */}
                <rect x="50" y="200" width="300" height="80" fill="#dee2e6" rx="8" />
                
                {/* Windows */}
                <circle cx="150" cy="120" r="30" fill="#ffc107" />
                <circle cx="250" cy="140" r="25" fill="#fd7e14" />
                
                {/* Office Elements */}
                <rect x="80" y="180" width="60" height="40" fill="#6f42c1" rx="4" />
                <rect x="200" y="190" width="80" height="30" fill="#198754" rx="4" />
                
                {/* Decorative Elements */}
                <rect x="120" y="160" width="20" height="20" fill="#0dcaf0" rx="2" />
                <rect x="280" y="170" width="15" height="15" fill="#dc3545" rx="2" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA; 