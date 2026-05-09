import React from 'react';
import { motion } from 'framer-motion'; //

const strengths = [
  { title: 'Visual Design', desc: 'Mastering the principles of design, typography, and color selection to create visually appealing works that effectively convey a message across various media.' },
  { title: 'Strategic Branding', desc: 'Building a cohesive brand identity, from logo design to social media assets, to ensure visual consistency across all touchpoints' },
  { title: 'UI/UX Design', desc: 'Focus on user comfort when interacting with the app or website, from layout design to an easy-to-follow navigation flow.' },
  { title: 'Problem Solving', desc: 'Using a design-driven approach to problem solving, ensuring that every visual solution created is not only visually appealing but also effective for the target audience.' },
];

export default function AboutSection({ portraitImage }) {
  const finalImage = portraitImage || 'https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&w=600&auto=format&fit=crop';

  return (
    <section id="about" className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">01</span>
          <div className="h-px w-8 bg-indigo-600" />
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-10">
          
          {/* Left: Image Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl shadow-indigo-100/50">
              <img 
                src={finalImage} 
                alt="Adytio Pradana Profile"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 w-28 h-28 bg-indigo-50 rounded-2xl -z-10" 
            />
          </motion.div>

          {/* Right: Content Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              Design that prioritizes aesthetics and function
            </h2>
            <p className="text-base text-gray-500 mt-5 leading-relaxed">
              With 2 years of experience as a Graphic and UI/UX Designer, I focus on creating functional and aesthetic visual solutions. I believe that good design isn't just about beauty, but about how a product effectively communicates with its users.
            </p>

            {/* Strengths Grid with Staggered Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6 mt-10">
              {strengths.map((s, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                    <h3 className="text-sm font-semibold text-gray-800">{s.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-3.5">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}