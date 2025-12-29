import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import HeroBanner from '@/components/hero/HeroBanner';
import MainContent from '@/components/content/MainContent';
import InvestmentManagement from '@/components/content/InvestmentManagement';
import InvestmentSolutions from '@/components/content/InvestmentSolutions';
import GetStarted from '@/components/content/GetStarted';
import Footer from '@/components/footer/Footer';  
import TermsModal from '@/components/common/TermsModal';
import HomePageClient from '../components/HomePageClient';
import { loadGetStartedSteps, loadInvestmentSolutions, loadHeroBannerData } from '@/lib/data/loadData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'ADCB Asset Management Limited - Tailored Investment Management',
  description: 'Leading Abu Dhabi based asset manager with over USD2 Billion of assets under management. Offering self-directed investments, advisory solutions, and discretionary portfolio management.',
  keywords: [
    'ADCB Asset Management',
    'Investment Management',
    'Asset Management UAE',
    'Wealth Management',
    'Portfolio Management',
    'Investment Solutions',
    'Financial Services Abu Dhabi',
    'Discretionary Portfolio Management',
    'Advisory Solutions',
    'Self Directed Investments',
  ],
  openGraph: {
    title: 'ADCB Asset Management Limited - Tailored Investment Management',
    description: 'Leading Abu Dhabi based asset manager with over USD2 Billion of assets under management.',
    url: siteUrl,
    siteName: 'ADCB Asset Management',
    images: [
      {
        url: `${siteUrl}/en/Images/adcb-asset-management-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'ADCB Asset Management Limited',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADCB Asset Management Limited - Tailored Investment Management',
    description: 'Leading Abu Dhabi based asset manager with over USD2 Billion of assets under management.',
    images: [`${siteUrl}/en/Images/adcb-asset-management-twitter.jpg`],
  },
  alternates: {
    canonical: '/en',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

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
        <Header />
        <HeroBanner bannerData={bannerData} />
        <MainContent>
          <InvestmentManagement />
          <InvestmentSolutions solutions={solutions} />
          <GetStarted steps={steps} />
        </MainContent>
        <Footer />
        <TermsModal />
      </SiteLayout>
    </>
  );
}



