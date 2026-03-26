import ContactPage from '@/components/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Global EB Tech. Call us at +94 770 677 157, email info@globalebtech.com, or visit us at 85C, 1/2, Galle Road, Dehiwala, Sri Lanka. Available Monday–Friday, 11AM–8PM.',
  alternates: {
    canonical: 'https://globalebtech.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Global EB Tech',
    description:
      'Reach out to Global EB Tech for BPO, digital solutions, branding, and event management services in Sri Lanka.',
    url: 'https://globalebtech.com/contact',
  },
};

export default function Contact() {
  return <ContactPage />;
}