import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import { loadPageData } from '@/lib/data/loadData';
import { generateMetadataFromPageData } from '@/lib/utils/metadata';
import { PageContent } from '@/components/page';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await loadPageData('insights-investment-strategy');
  return generateMetadataFromPageData(pageData);
}

export default async function InvestmentStrategyPage() {
  const pageData = await loadPageData('insights-investment-strategy');
  
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <PageContent content={pageData.content} />
    </SiteLayout>
  );
}

