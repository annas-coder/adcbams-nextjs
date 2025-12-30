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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await loadPageData('home');
  const metadata = pageData.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
    },
    openGraph: metadata.openGraph ? {
      title: metadata.openGraph.title || metadata.title,
      description: metadata.openGraph.description || metadata.description,
      url: metadata.openGraph.url || siteUrl,
      siteName: metadata.openGraph.siteName || 'ADCB Asset Management',
      images: metadata.openGraph.images,
      locale: metadata.openGraph.locale || 'en_US',
      type: metadata.openGraph.type || 'website',
    } : undefined,
    twitter: metadata.twitter ? {
      card: metadata.twitter.card || 'summary_large_image',
      title: metadata.twitter.title || metadata.title,
      description: metadata.twitter.description || metadata.description,
      images: metadata.twitter.images,
    } : undefined,
    robots: metadata.robots,
  };
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
