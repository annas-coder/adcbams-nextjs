import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import { loadPageData } from '@/lib/data/loadData';
import { generateMetadataFromPageData } from '@/lib/utils/metadata';
import { PageContent } from '@/components/page';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await loadPageData('investment-services-wealth-planning');
  return generateMetadataFromPageData(pageData);
}

export default async function WealthPlanningPage() {
  const pageData = await loadPageData('investment-services-wealth-planning');
  
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <PageContent content={pageData.content} />
    </SiteLayout>
  );
}

