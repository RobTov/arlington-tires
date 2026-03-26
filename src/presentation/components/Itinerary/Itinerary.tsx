import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../../../application/context/LanguageContext';
import { useScrollAnimation } from '../../../application/hooks/useScrollAnimation';
import { schedule } from '../../../domain/data';

export const Itinerary: React.FC = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const dayTranslations: Record<string, { en: string; es: string }> = {
    'Saturday': { en: 'Saturday', es: 'Sábado' },
    'Sunday': { en: 'Sunday', es: 'Domingo' },
    'Monday': { en: 'Monday', es: 'Lunes' },
    'Tuesday': { en: 'Tuesday', es: 'Martes' },
    'Wednesday': { en: 'Wednesday', es: 'Miércoles' },
    'Thursday': { en: 'Thursday', es: 'Jueves' },
    'Friday': { en: 'Friday', es: 'Viernes' },
  };

  const getDayName = (day: string): string => {
    return dayTranslations[day]?.[language] || day;
  };

  return (
    <section id="schedule" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.schedule.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.schedule.subtitle}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center mb-8">
              <Clock className="text-accent mr-3" size={28} />
              <h3 className="text-2xl font-bold">{language === 'en' ? 'Weekly Schedule' : 'Horario Semanal'}</h3>
            </div>
            <div className="space-y-4">
              {schedule.map((item, index) => {
                const currentDayIndex = new Date().getDay();
                const dayNameMap: Record<string, number> = {
                  'Saturday': 6, 'Sunday': 0, 'Monday': 1, 'Tuesday': 2,
                  'Wednesday': 3, 'Thursday': 4, 'Friday': 5
                };
                const isToday = dayNameMap[item.day] === currentDayIndex;
                const isClosed = !item.hours;
                return (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg transition-all ${isToday ? 'bg-primary' : isClosed ? 'bg-gray-700/50' : 'bg-gray-700'
                      }`}
                  >
                    <span className={`font-semibold ${isToday ? 'text-white' : 'text-gray-300'}`}>
                      {getDayName(item.day)}
                    </span>
                    <span className={`${isClosed ? 'text-gray-500 italic' : isToday ? 'text-white font-bold' : 'text-gray-400'}`}>
                      {isClosed ? t.schedule.closed : item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-red-700 rounded-2xl p-8 text-center">
              <MapPin className="mx-auto mb-4 text-accent" size={48} />
              <h3 className="text-2xl font-bold mb-4">{language === 'en' ? 'Visit Us Today' : 'Visítenos Hoy'}</h3>
              <p className="text-gray-200 text-lg">
                2915 S Cooper St<br />
                Arlington, TX 76015
              </p>
              {/* href="https://maps.google.com/?q=Arlington+TX" */}
              <a
                target="_blank"
                href='https://maps.app.goo.gl/7c7dNQH2v5ZYqJKJ9'
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-accent text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-all"
              >
                {language === 'en' ? 'View on Map' : 'Ver en el Mapa'}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
