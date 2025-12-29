import { ReactNode } from 'react';

interface SiteWrapProps {
  children: ReactNode;
}

export default function SiteWrap({ children }: SiteWrapProps) {
  return (
    <div className="site-wrap" data-url="http://int.adcbam.com/en/default.aspx">
      {children}
    </div>
  );
}






