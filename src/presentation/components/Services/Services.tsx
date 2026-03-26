import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useLanguage } from '../../../application/context/LanguageContext';
import { useScrollAnimation } from '../../../application/hooks/useScrollAnimation';
import { services } from '../../../domain/data';

const iconMap: { [key: string]: React.ElementType } = {
  Wrench: Icons.Wrench,
  Gauge: Icons.Gauge,
  RotateCw: Icons.RotateCw,
  Settings: Icons.Settings,
  Circle: Icons.Circle,
  AlignCenter: Icons.AlignCenter,
  Droplets: Icons.Droplets,
  Snowflake: Icons.Snowflake,
  Disc: Icons.Disc,
  Zap: Icons.Zap,
};

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Icons.Car;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <IconComponent className="text-primary group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {getNestedValue(t, service.titleKey)}
                </h3>
                <p className="text-sm text-gray-600">
                  {getNestedValue(t, service.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
