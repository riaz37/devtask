'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import ParticleSystem from '@/components/ui/ParticleSystem';
import Image from 'next/image';

const Hero = ({ className = '' }) => {
  return (
    <section className={`min-h-screen h-[994px] relative bg-[rgba(83,56,158,1)] flex flex-col overflow-hidden ${className}`}>
      {/* Floating particles */}
      <ParticleSystem count={50} />

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Main Headline */}
          <motion.h1
            className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Banking technology that has your back.
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p
            className="text-xl lg:text-2xl text-[rgb(255_255_255/0.9)] leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simple, transparent banking. No hidden fees and free overdrafts.
          </motion.p>
          
          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
                         <Button 
               variant="white" 
               size="lg" 
               className="w-[143px] h-[60px] flex items-center gap-3 px-7 py-4 rounded-lg border border-[rgba(208,213,221,1)]"
             >
              <Image
                src="/play.svg"
                alt="Play icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Demo
            </Button>
            <Button 
              variant="white" 
              size="lg" 
              className="w-[122px] h-[60px] flex items-center justify-center px-7 py-4 rounded-lg border border-[rgba(127,86,217,1)] text-white whitespace-nowrap"
              style={{ backgroundColor: 'rgba(127, 86, 217, 1)' }}
            >
              Sign up
            </Button>
          </motion.div>

          {/* Hero Icon Section - Responsive with Figma-like properties */}
          <motion.div
            className="w-full max-w-[1280px] h-[456px] mx-auto px-8 flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/hero.svg"
              alt="Hero illustration"
              width={1280}
              height={456}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 