import type { Service, ScheduleDay, NavigationLink, ContactInfo, SocialLinks, GalleryImage } from '../types';

export const services: Service[] = [
  { id: 'maintenance', icon: 'Wrench', titleKey: 'services.maintenance.title', descriptionKey: 'services.maintenance.description' },
  { id: 'sensorCheck', icon: 'Gauge', titleKey: 'services.sensorCheck.title', descriptionKey: 'services.sensorCheck.description' },
  { id: 'tireRotation', icon: 'RotateCw', titleKey: 'services.tireRotation.title', descriptionKey: 'services.tireRotation.description' },
  { id: 'shocks', icon: 'Settings', titleKey: 'services.shocks.title', descriptionKey: 'services.shocks.description' },
  { id: 'tires', icon: 'Circle', titleKey: 'services.tires.title', descriptionKey: 'services.tires.description' },
  { id: 'alignment', icon: 'AlignCenter', titleKey: 'services.alignment.title', descriptionKey: 'services.alignment.description' },
  { id: 'oilChange', icon: 'Droplets', titleKey: 'services.oilChange.title', descriptionKey: 'services.oilChange.description' },
  { id: 'ac', icon: 'Snowflake', titleKey: 'services.ac.title', descriptionKey: 'services.ac.description' },
  { id: 'brakes', icon: 'Disc', titleKey: 'services.brakes.title', descriptionKey: 'services.brakes.description' },
  { id: 'tuneUp', icon: 'Zap', titleKey: 'services.tuneUp.title', descriptionKey: 'services.tuneUp.description' },
];

export const schedule: ScheduleDay[] = [
  { day: 'Saturday', hours: '7:00 AM - 8:00 PM' },
  { day: 'Sunday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Monday', hours: '7:00 AM - 8:00 PM' },
  { day: 'Tuesday', hours: '7:00 AM - 8:00 PM' },
  { day: 'Wednesday', hours: '7:00 AM - 8:00 PM' },
  { day: 'Thursday', hours: '7:00 AM - 8:00 PM' },
  { day: 'Friday', hours: '7:00 AM - 8:00 PM' },
];

export const navigationLinks: NavigationLink[] = [
  { id: 'home', labelKey: 'nav.home', href: '#hero' },
  { id: 'services', labelKey: 'nav.services', href: '#services' },
  { id: 'schedule', labelKey: 'nav.schedule', href: '#schedule' },
  { id: 'gallery', labelKey: 'nav.gallery', href: '#gallery' },
  { id: 'contact', labelKey: 'nav.contact', href: '#footer' },
];

export const contactInfo: ContactInfo = {
  address: '2915 S Cooper St, Arlington, TX 76015',
  phone: '(469) 655-1217', 
  email: 'info@arlingtontire.com',
  mapUrl: 'https://maps.app.goo.gl/kSA3tpw9Jq2MKuNRA',
};

export const socialLinks: SocialLinks = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
};

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80', alt: 'Auto repair workshop', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', alt: 'Tire installation', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80', alt: 'Wheel alignment', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80', alt: 'Car service', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=400&q=80', alt: 'Oil change', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80', alt: 'Car exterior', span: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80', alt: 'Luxury car', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80', alt: 'Tire stack', span: 'col-span-1 row-span-1' },
];
