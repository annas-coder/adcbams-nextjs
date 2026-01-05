import { PageContent } from '@/lib/types/page';
import Breadcrumb from './Breadcrumb';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';

interface SimplePageContentProps {
  content: PageContent;
}

export default function SimplePageContent({ content }: SimplePageContentProps) {
  return (
    <div className="site-content rs_preserve" id="site-content">
      <Breadcrumb />
      
      {content.hero && (
        <HeroSection
          category={content.hero.category}
          title={content.hero.title}
          subtitle={content.subtitle}
        />
      )}

      <div className="o-comp c-cms-content no-top-pad">
        <div className="o-comp__content container">
          {content.sections
            ?.filter(section => section.type !== 'getInTouch')
            .map((section, index) => (
              <ContentSection key={index} section={section} />
            ))}
        </div>
        
        {content.sections
          ?.filter(section => section.type === 'getInTouch')
          .map((section, index) => (
            <ContentSection key={index} section={section} />
          ))}
      </div>
    </div>
  );
}

