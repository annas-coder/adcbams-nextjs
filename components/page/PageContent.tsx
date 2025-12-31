import { PageContent as PageContentType, IntroSection, ComparisonGridSection, FeaturedProductsSection, ContactAdvisorSection } from '@/lib/types/page';
import Link from 'next/link';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import TabNavigation from './TabNavigation';
import InvestmentServiceGrid from './InvestmentServiceGrid';
import Breadcrumb from './Breadcrumb';

interface PageContentProps {
  content: PageContentType;
}

export default function PageContent({ content }: PageContentProps) {
  return (
    <div className="site-content rs_preserve" id="site-content">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />
      
      {/* Hero Section - Only show for pages without tabs */}
      {content.hero && !content.tabs && (
        <HeroSection
          category={content.hero.category}
          title={content.hero.title}
          subtitle={content.subtitle}
        />
      )}

      {/* Main Content Container - Only use c-investment-solutions-container for pages with tabs */}
      {content.tabs ? (
        <div className={`c-investment-solutions-container ${content.hero?.category === 'Insights' ? 'c-investment-strategy-container' : ''}`}>
          {/* Title Section (for pages with tabs) */}
          {content.hero && (
            <div className="container">
              <div className="row">
                <div className="col-md-48">
                  <h1 className="c-block--title">
                    <sup className="hero-section__category">{content.hero.category}</sup>
                    {content.hero.title}
                  </h1>
                </div>
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="o-comp o-on-page-tabs">
            <div className="o-comp__content">
              <div className="o-tabs-content__wrapper">
                <TabNavigation tabs={content.tabs} />

                {/* Tab Content */}
                <div className="o-tabs__tab-content">
                  <div className="o-tabs__tab-content-item is-active">
                    {/* Banner Image */}
                    {content.bannerImage && (
                      <div className="container c-investment-solutions__banner">
                        <div className="row">
                          <div
                            className="col-md-48 hero-section__img-wrapper"
                            style={{ maxHeight: content.bannerImage.maxHeight || '460px' }}
                          >
                            <img
                              src={content.bannerImage.src}
                              alt={content.bannerImage.alt}
                              className="img-responsive"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content Sections */}
                    {content.sections && (
                      <div className="c-investment-services__container">
                        {content.sections.map((section, index) => {
                          // Handle special section types
                          if (section.type === 'intro') {
                            const introSection = section as IntroSection;
                            // Check if this is for insights pages (different styling)
                            const isInsightsPage = content.hero?.category === 'Insights';
                            return (
                              <div key={index} className={isInsightsPage ? 'c-investment-services__container c-investment-strategy__container' : 'c-self-directed-investment__container c-blue-container'}>
                                <div className="container">
                                  <div className={isInsightsPage ? 'row' : ''}>
                                    <div className={isInsightsPage ? 'col-md-48 c-investment-services__text-wrapper' : 'c-self-directed-investment__text-wrapper'}>
                                      <h2 className="c-block--title">{introSection.title}</h2>
                                      {introSection.content && <p className="c-desc-text">{introSection.content}</p>}
                                      {introSection.paragraphs?.map((para, pIndex) => (
                                        <p key={pIndex} className={isInsightsPage ? '' : 'c-desc-text'}>{para}</p>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          if (section.type === 'comparisonGrid') {
                            const gridSection = section as ComparisonGridSection;
                            return (
                              <div key={index}>
                                <InvestmentServiceGrid items={gridSection.items} />
                              </div>
                            );
                          }

                          if (section.type === 'featuredProducts') {
                            const productsSection = section as FeaturedProductsSection;
                            return (
                              <div key={index} className="c-range__container c-white-container">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-16">
                                      <div className="c-range-text__wrapper">
                                        <h4>{productsSection.title}</h4>
                                        <p>{productsSection.description}</p>
                                        {productsSection.disclaimer && <p>{productsSection.disclaimer}</p>}
                                      </div>
                                    </div>
                                    {productsSection.products.map((product, pIndex) => (
                                      <div key={pIndex} className="col-md-16">
                                        <div className="c-img-card-item">
                                          <div className="img-block">
                                            <img src={product.image} alt={product.alt} />
                                          </div>
                                          <div className="c-img-card-item__bottom-detail">
                                            <label>{product.category}</label>
                                            <p className="c-img-card-item__bottom-detail-title">{product.title}</p>
                                            <a href="#"><img src="/en/system/includes/images/arow-icon-100723.svg" alt="Arrow" /></a>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          if (section.type === 'contactAdvisor') {
                            const advisorSection = section as ContactAdvisorSection;
                            const isInsightsPage = content.hero?.category === 'Insights';
                            return (
                              <div key={index} className={`c-contact-advisor__container ${isInsightsPage ? '' : 'c-blue-container'}`}>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-32 c-contact-advisor__text-block">
                                      <h4 className="contact-advisor__title">{advisorSection.title}</h4>
                                      <p className="contact-advisor__text" style={{ opacity: 0.7 }}>
                                        {advisorSection.description}
                                      </p>
                                      <Link href={advisorSection.link.href} className="o-link-more icon-arrow-down">
                                        {advisorSection.link.label}
                                      </Link>
                                    </div>
                                    <div className="col-md-16 c-contact-advisor__img-block">
                                      <img src="/en/system/includes/images/contact-advisory-logo-100723.svg" alt="Contact Advisory" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          // Handle standard content sections
                          return <ContentSection key={index} section={section} />;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Content without tabs (simple pages like About, Contact) */
        <div className="o-comp c-cms-content no-top-pad">
          <div className="o-comp__content container">
            {content.sections
              ?.filter(section => section.type !== 'getInTouch')
              .map((section, index) => (
                <ContentSection key={index} section={section} />
              ))}
          </div>
          
          {/* Render getInTouch sections outside container */}
          {content.sections
            ?.filter(section => section.type === 'getInTouch')
            .map((section, index) => (
              <ContentSection key={index} section={section} />
            ))}
        </div>
      )}
    </div>
  );
}

