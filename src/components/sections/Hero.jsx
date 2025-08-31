"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ParticleSystem from "@/components/ui/ParticleSystem";
import Image from "next/image";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`h-full relative bg-[rgba(83,56,158,1)] flex flex-col overflow-hidden ${className}`}
    >
      <ParticleSystem count={50} />

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 pt-16 sm:pt-20 relative z-10">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white/90 font-medium mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Super. Simple. Banking.
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Banking technology that has your back.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-[rgb(255_255_255/0.9)] leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Simple, transparent banking. No hidden fees and free overdrafts.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8 w-full max-w-sm sm:max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="white"
              size="lg"
              className="w-[343px] h-[48px] sm:w-[122px] sm:h-[60px] flex items-center justify-center gap-3 px-7 py-4 rounded-lg border border-[rgba(208,213,221,1)]"
              style={{ backgroundColor: "white", color: "rgba(52, 64, 84, 1)" }}
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
              className="w-[343px] h-[48px] sm:w-[122px] sm:h-[60px] flex items-center justify-center px-7 py-4 rounded-lg border border-[rgba(127,86,217,1)] text-white whitespace-nowrap"
              style={{ backgroundColor: "rgba(127, 86, 217, 1)" }}
            >
              Sign up
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10">
        <motion.div
          className="w-full max-w-[1280px] mx-auto flex justify-center items-end"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/hero.svg"
            alt="Hero illustration"
            width={1280}
            height={456}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
