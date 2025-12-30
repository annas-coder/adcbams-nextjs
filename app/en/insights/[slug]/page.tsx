import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import { loadPageData } from '@/lib/data/loadData';
import { generateMetadataFromPageData } from '@/lib/utils/metadata';
import { PageContent } from '@/components/page';

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
  
  // Map slug to page data filename
  const slugToFilename: Record<string, string> = {
    'investment-insights': 'insights-investment-insights',
    'investment-strategy': 'insights-investment-strategy',
  };
  
  const filename = slugToFilename[slug] || slug;
  
  try {
    const pageData = await loadPageData(filename);
    return generateMetadataFromPageData(pageData);
  } catch (error) {
    // Fallback metadata if page data not found
    return {
      title: 'Insights - ADCB Asset Management Limited',
      description: 'Investment decision support at every juncture.',
      alternates: {
        canonical: `/en/insights/${slug}`,
      },
    };
  }
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

  // Map slug to page data filename
  const slugToFilename: Record<string, string> = {
    'investment-insights': 'insights-investment-insights',
    'investment-strategy': 'insights-investment-strategy',
  };
  
  const filename = slugToFilename[slug] || slug;
  
  try {
    const pageData = await loadPageData(filename);
    return (
      <SiteLayout>
        <AccessibilityComponent />
        <PageContent content={pageData.content} />
      </SiteLayout>
    );
  } catch (error) {
    // Fallback if page data not found
    return (
      <SiteLayout>
        <AccessibilityComponent />
        <div className="site-content rs_preserve" id="site-content">
          <h1>Insight: {slug}</h1>
        </div>
      </SiteLayout>
    );
  }
}

