import { MetadataRoute } from 'next';

// Robots.txt works with SSR - no need for dynamic export
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
        // disallow: [
        //   '/api/',
        //   '/admin/',
        //   '/_next/',
        //   '/private/',
        // ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

