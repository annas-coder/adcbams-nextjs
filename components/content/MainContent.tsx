import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <div className="site-content rs_preserve" id="site-content">
      {children}
    </div>
  );
}






