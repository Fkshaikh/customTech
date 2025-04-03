'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            About CustomTech
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-24 h-1 bg-blue-700 mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/office.jpg"
              alt="CustomTech office"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-700">Our Mission</h3>
            <p className="text-lg text-gray-700">
              At CustomTech, our mission is to bridge the gap between sophisticated hardware and intelligent software, creating seamless integration solutions that empower businesses to achieve unprecedented efficiency and security.
            </p>
            
            <h3 className="text-2xl font-semibold text-blue-700 pt-4">Our Expertise</h3>
            <p className="text-lg text-gray-700">
              With deep expertise in Suprema device integration and enterprise-grade software development, we deliver custom solutions that transform how businesses leverage technology. Our team specializes in creating robust platforms that connect hardware capabilities with powerful software applications.
            </p>
            
            <h3 className="text-2xl font-semibold text-blue-700 pt-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              We envision a future where hardware and software work in perfect harmony, enabling organizations to maximize their technological investments. CustomTech is committed to leading this integration revolution through innovation, expertise, and dedicated partnership with our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 