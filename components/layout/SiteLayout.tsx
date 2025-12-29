import { ReactNode } from 'react';
import SiteWrap from './SiteWrap';
import SkipToContent from '../common/SkipToContent';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <SkipToContent />
      <SiteWrap>{children}</SiteWrap>
    </>
  );
}






