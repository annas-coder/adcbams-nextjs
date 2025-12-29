import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

// Define all valid slugs for this dynamic route
const VALID_SLUGS = ['investment-insights', 'investment-strategy'];

/**
 * generateStaticParams is optional for SSR
 * It pre-renders these paths at build time for better performance (ISR)
 * Unknown slugs will still work via SSR
 */
export async function generateStaticParams() {
  // Return array of objects where keys match the dynamic segment name [slug]
  return VALID_SLUGS.map((slug) => ({
    slug: slug,
  }));
}

/**
 * Generate metadata for each path (works with SSR)
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';
  
  const metadataMap: Record<string, Metadata> = {
    'investment-insights': {
      title: 'Investment Insights - ADCB Asset Management Limited',
      description: 'To aid you in your wealth journey, our experts regularly identify products, themes and securities that are timely and pertinent to your investment needs.',
      alternates: {
        canonical: `/en/insights/${slug}`,
      },
      openGraph: {
        title: 'Investment Insights - ADCB Asset Management Limited',
        description: 'To aid you in your wealth journey, our experts regularly identify products, themes and securities that are timely and pertinent to your investment needs.',
        url: `${siteUrl}/en/insights/${slug}`,
        siteName: 'ADCB Asset Management',
        locale: 'en_US',
        type: 'website',
      },
    },
    'investment-strategy': {
      title: 'Investment Strategy - ADCB Asset Management Limited',
      description: 'Our investment strategy and approach to portfolio management.',
      alternates: {
        canonical: `/en/insights/${slug}`,
      },
      openGraph: {
        title: 'Investment Strategy - ADCB Asset Management Limited',
        description: 'Our investment strategy and approach to portfolio management.',
        url: `${siteUrl}/en/insights/${slug}`,
        siteName: 'ADCB Asset Management',
        locale: 'en_US',
        type: 'website',
      },
    },
  };

  return metadataMap[slug] || {
    title: 'Insights - ADCB Asset Management Limited',
    description: 'Investment decision support at every juncture.',
    alternates: {
      canonical: `/en/insights/${slug}`,
    },
  };
}

/**
 * Page component for dynamic route (SSR)
 */
export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Validate slug - return 404 for unknown slugs
  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  // Render different content based on slug
  // This will be server-rendered on each request for unknown slugs
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <Header />
      <div className="site-content rs_preserve" id="site-content">
        <h1>Insight: {slug}</h1>
        {/* Your page content here */}
      </div>
      <Footer />
    </SiteLayout>
  );
}

