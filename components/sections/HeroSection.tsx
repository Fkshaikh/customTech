'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Bridging <span className="text-blue-700">Software</span> with <span className="text-blue-700">Hardware</span> Integration
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 max-w-lg"
            >
              CustomTech delivers seamless Suprema device integration and enterprise-grade software solutions for modern businesses.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-4 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="text-base font-medium">
                <Link href="#contact">Get a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base font-medium">
                <Link href="#services">Discover Our Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg shadow-2xl overflow-hidden"
          >
            <Image
              src="/heroimage.png"
              alt="CustomTech hardware-software integration"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-blue-700 mix-blend-overlay opacity-20 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
} 