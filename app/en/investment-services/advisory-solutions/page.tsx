import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import { loadPageData } from '@/lib/data/loadData';
import { generateMetadataFromPageData } from '@/lib/utils/metadata';
import { TabbedPageContent } from '@/components/page';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await loadPageData('investment-services-advisory');
  return generateMetadataFromPageData(pageData);
}

export default async function AdvisorySolutionsPage() {
  const pageData = await loadPageData('investment-services-advisory');
  
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <TabbedPageContent content={pageData.content} />
    </SiteLayout>
  );
}

