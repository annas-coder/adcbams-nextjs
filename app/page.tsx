import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import HeroBanner from '@/components/hero/HeroBanner';
import MainContent from '@/components/content/MainContent';
import InvestmentManagement from '@/components/content/InvestmentManagement';
import InvestmentSolutions from '@/components/content/InvestmentSolutions';
import GetStarted from '@/components/content/GetStarted';
import TermsModal from '@/components/common/TermsModal';
import HomePageClient from './components/HomePageClient';
import { loadGetStartedSteps, loadInvestmentSolutions, loadHeroBannerData, loadPageData } from '@/lib/data/loadData';
import { generateMetadataFromPageData } from '@/lib/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await loadPageData('home');
  return generateMetadataFromPageData(pageData);
}

export default async function Home() {
  // Load data server-side to avoid API exposure
  const [steps, solutions, bannerData] = await Promise.all([
    loadGetStartedSteps(),
    loadInvestmentSolutions(),
    loadHeroBannerData(),
  ]);

  return (
    <>
      <HomePageClient />
      <SiteLayout>
        <AccessibilityComponent />
        <HeroBanner bannerData={bannerData} />
        <MainContent>
          <InvestmentManagement />
          <InvestmentSolutions solutions={solutions} />
          <GetStarted steps={steps} />
        </MainContent>
        <TermsModal />
      </SiteLayout>
    </>
  );
}
