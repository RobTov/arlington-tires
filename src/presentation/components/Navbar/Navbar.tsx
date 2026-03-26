import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../../application/context/LanguageContext';
import { navigationLinks } from '../../../domain/data';

const UKFlag = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-5 mr-1">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v60h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
  </svg>
);

const SpainFlag = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-5 mr-1">
    <path fill="#c60b1e" d="M0 0h640v480H0z"/>
    <path fill="#ffc400" d="M0 120h640v240H0z"/>
  </svg>
);

interface NavbarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { language, setLanguage, t } = useLanguage();

  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center space-x-3">
            <div className="w-20 h-20 rounded-full flex items-center justify-center">
              {/* <span className="text-white font-bold text-xl">AT</span> */}
              <img src="/logo-g-removebg.png" alt="logo" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-primary">
                Arlington Tire
              </span>
              <span className="block text-sm text-accent">
                Auto Service LLC
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {getNestedValue(t, link.labelKey)}
              </a>
            ))}

            <div className="flex items-center space-x-2 ml-4 border-l border-gray-300 pl-4">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                <UKFlag />
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  language === 'es'
                    ? 'bg-primary text-white'
                    : isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                <SpainFlag />
                ES
              </button>
            </div>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        className="lg:hidden overflow-hidden bg-white shadow-lg"
      >
        <div className="px-4 py-4 space-y-3">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-primary transition-colors py-2"
            >
              {getNestedValue(t, link.labelKey)}
            </a>
          ))}
          <div className="flex items-center space-x-2 pt-2 border-t">
            <button
              onClick={() => setLanguage('en')}
              className={`flex items-center px-3 py-2 rounded font-medium transition-all ${
                language === 'en' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'
              }`}
            >
              <UKFlag />
              English
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`flex items-center px-3 py-2 rounded font-medium transition-all ${
                language === 'es' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'
              }`}
            >
              <SpainFlag />
              Español
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
