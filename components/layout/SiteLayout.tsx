import { ReactNode } from 'react';
import SiteWrap from './SiteWrap';
import SkipToContent from '../common/SkipToContent';
import { loadNavigationData, loadFooterData, loadHeaderData } from '@/lib/data/loadData';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

interface SiteLayoutProps {
  children: ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  // Fetch header, footer, and navigation data server-side
  const [navigationData, footerData, headerData] = await Promise.all([
    loadNavigationData(),
    loadFooterData(),
    loadHeaderData(),
  ]);

  return (
    <>
      <SkipToContent />
      <SiteWrap>
        <Header headerData={headerData} navigationData={navigationData} />
        {children}
        <Footer footerData={footerData} />
      </SiteWrap>
    </>
  );
}






