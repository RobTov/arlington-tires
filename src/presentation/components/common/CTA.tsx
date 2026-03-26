import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../../../application/context/LanguageContext';
import { useScrollAnimation } from '../../../application/hooks/useScrollAnimation';

export const CTA: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-red-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-white/80 mb-10">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#footer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl"
            >
              {t.cta.button}
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="https://wa.me/14696551217"
              target='_blank'
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="mr-2" size={20} />
              (469) 655-1217
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
