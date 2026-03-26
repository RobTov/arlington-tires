export type Language = 'en' | 'es';

export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface ScheduleDay {
  day: string;
  hours: string;
}

export interface NavigationLink {
  id: string;
  labelKey: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}
