import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import { useLanguage } from '../../../application/context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80)',
        style={{
          backgroundImage: 'url(/logo.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Removed the logo from the hero */}
          {/* <motion.div variants={itemVariants} className="flex justify-center mb-4"> */}
            {/* <div className="w-48 h-48 rounded-full  flex items-center justify-center shadow-xl"> */}
              {/* <span className="text-white font-bold text-4xl">AT</span> */}
              {/* <img src="logo-g-removebg.png" alt="logo" /> */}
            {/* </div> */}
          {/* </motion.div> */}

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-accent font-semibold"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {t.hero.cta}
            </a>
            <a
              href="https://wa.me/14696551217"
              target='_blank'
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="mr-2" size={20} />
              (469) 655-1217
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#services" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown className="animate-bounce" size={40} />
        </a>
      </motion.div>
    </section>
  );
};
