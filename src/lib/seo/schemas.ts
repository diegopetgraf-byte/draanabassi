/**
 * JSON-LD Schema generators for SEO
 * These schemas help Google understand our content and enable rich snippets
 */

import React from 'react';
import { toAbsoluteUrl } from './utils';
import { professional } from '@/data/config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draanabassi.com.br';
const SITE_NAME = professional.name;
const LOGO_URL = toAbsoluteUrl('/logo.png');

export interface ProductSchemaInput {
  name: string;
  description: string;
  image: string;
  url: string;
  price: number;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  sku?: string;
  brand?: string;
  reviewCount?: number;
  ratingValue?: number;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CollectionSchemaInput {
  name: string;
  description: string;
  url: string;
  products: Array<{
    name: string;
    url: string;
    image?: string;
    price: number;
  }>;
}

/**
 * Generate Product schema with Offer
 */
export function generateProductSchema(product: ProductSchemaInput): object {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: toAbsoluteUrl(product.image),
    url: toAbsoluteUrl(product.url),
    brand: {
      '@type': 'Brand',
      name: product.brand || SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: isNaN(product.price) ? '0.00' : product.price.toFixed(2),
      priceCurrency: product.currency || 'BRL',
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      url: toAbsoluteUrl(product.url),
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
    sku: product.sku || product.url.split('/').pop(),
  };

  return schema;
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.url),
    })),
  };
}

/**
 * Generate FAQPage schema — must match visible FAQ content exactly
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate ItemList schema for collection pages
 */
export function generateItemListSchema(collection: CollectionSchemaInput): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: collection.name,
    description: collection.description,
    url: toAbsoluteUrl(collection.url),
    numberOfItems: collection.products.length,
    itemListElement: collection.products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        url: toAbsoluteUrl(product.url),
        image: toAbsoluteUrl(product.image || ''),
        offers: {
          '@type': 'Offer',
          price: isNaN(product.price) ? '0.00' : product.price.toFixed(2),
          priceCurrency: 'BRL',
        },
      },
    })),
  };
}

/**
 * Generate Organization schema for homepage
 */
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    description: 'Atendimento médico personalizado para saúde da pele, cabelos e bem-estar em Santo André. Agende sua consulta com a Dra. Ana Bassi, CRM/SP 129.959.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${professional.address.street}, ${professional.address.number} - ${professional.address.room}`,
      addressLocality: professional.address.city,
      addressRegion: professional.address.state,
      postalCode: professional.address.postalCode,
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: professional.phoneInternational,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      professional.instagramUrl,
    ],
  };
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: 'Dra. Ana Bassi Consultório Médico',
    url: SITE_URL,
    description: 'Cuidados médicos personalizados para a saúde da pele e dos cabelos com a Dra. Ana Bassi em Santo André, SP.',
    inLanguage: 'pt-BR',
  };
}

/**
 * Generate Physician / MedicalBusiness (LocalBusiness) schema
 */
export function generateLocalBusinessSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: LOGO_URL,
    url: SITE_URL,
    telephone: professional.phoneInternational,
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Cash, Credit Card, PIX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${professional.address.street}, ${professional.address.number} - ${professional.address.room}`,
      addressLocality: professional.address.city,
      addressRegion: professional.address.state,
      postalCode: professional.address.postalCode,
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'City',
      name: professional.address.city,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      }
    ],
    sameAs: [
      professional.instagramUrl,
    ],
  };
}

/**
 * Generate Person schema for Dra. Ana Bassi
 */
export function generatePersonSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person-ana-bassi`,
    name: professional.name,
    jobTitle: professional.professionalTitle,
    description: `Dra. Ana Bassi (${professional.crm}) realiza atendimento médico personalizado dedicado à saúde da pele, dos cabelos e bem-estar em Santo André, SP.`,
    image: LOGO_URL,
    worksFor: {
      '@id': `${SITE_URL}/#localbusiness`,
    },
    sameAs: [
      professional.instagramUrl,
    ],
  };
}

/**
 * Helper component to inject JSON-LD into the page
 */
export function JsonLd({ data }: { data: object | object[] }): React.ReactElement {
  const schemas = Array.isArray(data) ? data : [data];

  return React.createElement(
    React.Fragment,
    null,
    schemas.map((schema, index) =>
      React.createElement('script', {
        key: index,
        type: 'application/ld+json',
        dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
      })
    )
  );
}
