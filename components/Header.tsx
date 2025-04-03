'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-blue-700">CustomTech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-blue-700 transition-colors">
            About
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-700 transition-colors">
            Services
          </Link>
          <Link href="#why-choose-us" className="text-gray-700 hover:text-blue-700 transition-colors">
            Why Choose Us
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">
            Contact
          </Link>
          <Button asChild>
            <Link href="#contact">Get a Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-gray-700 hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#why-choose-us" className="text-gray-700 hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>
              Why Choose Us
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild className="w-full" onClick={toggleMenu}>
              <Link href="#contact">Get a Consultation</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
} 