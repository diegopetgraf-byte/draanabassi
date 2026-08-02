import { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    return [
        {
            url: `${SITE_URL}/`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        }
    ];
}
