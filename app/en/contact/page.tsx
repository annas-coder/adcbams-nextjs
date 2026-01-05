import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import { loadPageData } from '@/lib/data/loadData';
import { generateMetadataFromPageData } from '@/lib/utils/metadata';
import { SimplePageContent } from '@/components/page';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await loadPageData('contact');
  return generateMetadataFromPageData(pageData);
}

export default async function ContactPage() {
  const pageData = await loadPageData('contact');
  
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <SimplePageContent content={pageData.content} />
    </SiteLayout>
  );
}

