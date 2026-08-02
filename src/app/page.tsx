import { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';
import {
  JsonLd,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generatePersonSchema,
  generateFAQSchema,
} from '@/lib/seo/schemas';
import { faqs, SITE_URL } from '@/data/config';

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    type: 'website',
  },
};

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const personSchema = generatePersonSchema();
  
  // Format FAQs for schema generator
  const faqSchemaItems = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));
  const faqSchema = generateFAQSchema(faqSchemaItems);

  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema, personSchema, faqSchema]} />
      <HomeClient />
    </>
  );
}
