'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const CreditCard = ({ 
  cardNumber, 
  cardHolder, 
  variant = 'primary', 
  className = '',
  index = 0 
}) => {
  const variants = {
    primary: 'from-[rgb(var(--color-primary-purple))] to-[rgb(var(--color-primary-purple))]',
    secondary: 'from-[rgb(var(--color-button-purple))] to-[rgb(var(--color-button-purple))]',
    gradient: 'from-[rgb(var(--color-primary-purple))] via-[rgb(var(--color-button-purple))] to-[rgb(var(--color-primary-purple))]'
  };

  const positions = [
    'rotate-[-10deg] translate-y-0',
    'rotate-[5deg] translate-y-5 translate-x-8',
    'rotate-[20deg] translate-y-10 translate-x-16'
  ];

  const zIndex = ['z-30', 'z-20', 'z-10'];

  return (
    <motion.div
      className={cn(
        'absolute w-[300px] h-[190px] rounded-[20px] backdrop-blur-[20px] border border-[rgb(255_255_255/0.3)]',
        'shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer',
        'p-8 text-white overflow-hidden',
        `bg-gradient-to-br ${variants[variant]}`,
        positions[index],
        zIndex[index],
        className
      )}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(255_255_255/0.1)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex-1" />
        <div className="space-y-2">
          <div className="font-mono text-lg tracking-wider text-[rgb(255_255_255/0.9)]">
            {cardNumber}
          </div>
          <div className="text-sm text-[rgb(255_255_255/0.8)] font-medium">
            {cardHolder}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CreditCard; 