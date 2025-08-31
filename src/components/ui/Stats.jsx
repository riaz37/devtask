'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const StatItem = ({ number, label, suffix = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = number / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      className="text-center text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      <span className="block text-4xl font-black text-white mb-2">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-[rgb(255_255_255/0.8)]">
        {label}
      </span>
    </motion.div>
  );
};

const Stats = ({ stats = [], className = '' }) => {
  const defaultStats = [
    { number: 1440, label: 'Fill' },
    { number: 1074, label: 'Hug' },
    { number: 99.9, label: 'Uptime', suffix: '%' },
    { number: 24, label: 'Support', suffix: '/7' }
  ];

  const statsToShow = stats.length > 0 ? stats : defaultStats;

  return (
    <div className={`py-8 bg-[rgb(255_255_255/0.1)] backdrop-blur-[20px] border-t border-[rgb(255_255_255/0.2)] relative z-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-around items-center flex-wrap gap-8">
          {statsToShow.map((stat, index) => (
            <StatItem
              key={stat.label}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats; 