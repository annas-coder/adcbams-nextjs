import { ReactNode } from 'react';
import Head from 'next/head';
import SiteWrap from './SiteWrap';
import SkipToContent from '../common/SkipToContent';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
     <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <SkipToContent />
      <SiteWrap>{children}</SiteWrap>
    </>
  );
}






