'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { 
      href: '#products', 
      label: 'Products',
      hasDropdown: true,
      dropdownItems: [
        { href: '#banking', label: 'Banking Solutions' },
        { href: '#payments', label: 'Payment Processing' },
        { href: '#analytics', label: 'Analytics & Insights' },
        { href: '#security', label: 'Security & Compliance' }
      ]
    },
    { 
      href: '#resources', 
      label: 'Resources',
      hasDropdown: true,
      dropdownItems: [
        { href: '#documentation', label: 'Documentation' },
        { href: '#api', label: 'API Reference' },
        { href: '#tutorials', label: 'Tutorials' },
        { href: '#support', label: 'Support Center' }
      ]
    },
    { href: '#pricing', label: 'Pricing' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleDropdownToggle = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 ${className}`}>
      <nav className="bg-transparent px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-white">Untitled UI</span>
          </motion.div>

          <motion.ul 
            className="hidden md:flex gap-8 list-none ml-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <li key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      onBlur={() => setTimeout(closeDropdown, 150)}
                      className="text-white no-underline font-medium transition-all duration-300 hover:text-white/80 flex items-center gap-1 cursor-pointer"
                    >
                      {link.label}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.dropdownItems.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                              onClick={closeDropdown}
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-white no-underline font-medium transition-all duration-300 hover:text-white/80"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </motion.ul>

          <motion.div 
            className="hidden md:flex gap-4 items-center ml-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#" className="text-white no-underline font-medium hover:text-white/80 transition-colors duration-200">
              Log in
            </a>
            <Button 
              variant="white" 
              size="sm"
              className="text-white rounded-lg"
              style={{ backgroundColor: 'rgba(127, 86, 217, 1)' }}
            >
              Sign up
            </Button>
          </motion.div>

          <motion.button
            className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer ml-auto"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ≡
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[rgba(83,56,158,1)] z-50 md:hidden"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-12">
                              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-semibold text-white">Untitled UI</span>
              </div>
                <button
                  className="text-white text-3xl bg-transparent border-none cursor-pointer"
                  onClick={closeMobileMenu}
                >
                  ×
                </button>
              </div>

              <ul className="list-none mb-12 space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(link.label)}
                          className="text-white text-2xl font-semibold no-underline transition-all duration-300 hover:text-white/70 flex items-center gap-2 w-full text-left"
                        >
                          {link.label}
                          <svg 
                            className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.ul
                              className="ml-6 mt-4 space-y-3"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {link.dropdownItems.map((item) => (
                                <li key={item.href}>
                                  <a
                                    href={item.href}
                                    className="text-white/80 text-lg no-underline transition-all duration-300 hover:text-white block"
                                    onClick={closeMobileMenu}
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white text-2xl font-semibold no-underline transition-all duration-300 hover:text-white/70 block"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 mt-auto">
                <a href="#" className="text-white text-lg font-medium no-underline text-center py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors duration-200">
                  Log in
                </a>
                <Button 
                  variant="white" 
                  size="lg" 
                  className="w-full text-white rounded-lg"
                  style={{ backgroundColor: 'rgba(127, 86, 217, 1)' }}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 