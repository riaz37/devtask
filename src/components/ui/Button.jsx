'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  asChild = false,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[rgb(var(--color-button-purple))] text-white hover:bg-purple-700 focus:ring-purple-500 hover:-translate-y-1 hover:shadow-lg',
    secondary: 'bg-[rgb(255_255_255/0.1)] text-white border-2 border-[rgb(255_255_255/0.3)] backdrop-blur-md hover:bg-[rgb(255_255_255/0.2)] hover:border-[rgb(255_255_255/0.5)] hover:-translate-y-1 hover:shadow-lg',
    outline: 'bg-transparent text-white border-2 border-[rgb(255_255_255/0.5)] hover:bg-[rgb(255_255_255/0.1)] hover:-translate-y-1 hover:shadow-lg',
    ghost: 'bg-transparent text-white hover:bg-[rgb(255_255_255/0.1)] hover:-translate-y-1',
    white: 'bg-white text-[rgb(var(--color-primary-purple))] hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );
  
  if (asChild) {
    return React.cloneElement(children, {
      className: classes,
      ref,
      ...props
    });
  }
  
  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 