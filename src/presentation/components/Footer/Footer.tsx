import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Wrench, Shield, Award } from 'lucide-react';
import { useLanguage } from '../../../application/context/LanguageContext';
import { contactInfo, schedule } from '../../../domain/data';
// import { contactInfo, socialLinks, schedule } from '../../../domain/data';

// const FacebookIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//   </svg>
// );

// const InstagramIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//   </svg>
// );

// const TwitterIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//   </svg>
// );

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">AT</span>
              </div>
              <div>
              <span className="font-bold text-xl block text-primary">Arlington Tire</span>
              <span className="text-accent text-sm">Auto Service LLC</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {[
                { label: t.nav.home, href: '#hero' },
                { label: t.nav.services, href: '#services' },
                { label: t.nav.schedule, href: '#schedule' },
                { label: t.nav.gallery, href: '#gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6">{language === 'en' ? 'Hours' : 'Horario'}</h3>
            <ul className="space-y-2">
              {schedule.map((item) => (
                <li key={item.day} className="flex justify-between text-gray-400">
                  <span>{getDayName(item.day)}</span>
                  <span>{item.hours || (language === 'en' ? 'Closed' : 'Cerrado')}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6">{language === 'en' ? 'Contact Us' : 'Contáctenos'}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-3 flex-shrink-0" size={20} />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-accent transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-3 flex-shrink-0" size={20} />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
{/* 
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">{t.footer.followUs}</h4>
              <div className="flex space-x-4">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <FacebookIcon />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <InstagramIcon />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <TwitterIcon />
                </a>
              </div>
            </div> */}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-800">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Wrench className="text-primary" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm">{language === 'en' ? 'Expert Technicians' : 'Técnicos Expertos'}</p>
              <p className="text-xs text-gray-500">{language === 'en' ? 'Certified professionals' : 'Profesionales certificados'}</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <Shield className="text-accent" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm">{language === 'en' ? 'Quality Guarantee' : 'Garantía de Calidad'}</p>
              <p className="text-xs text-gray-500">{language === 'en' ? 'Parts & labor' : 'Partes y mano de obra'}</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Award className="text-primary" size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm">{language === 'en' ? '10+ Years Experience' : '10+ Años de Experiencia'}</p>
              <p className="text-xs text-gray-500">{language === 'en' ? 'Serving Arlington' : 'Sirviendo Arlington'}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Arlington Tire Auto Service LLC. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
