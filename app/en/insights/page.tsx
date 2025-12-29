import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Insights - ADCB Asset Management Limited',
  description: 'Investment decision support at every juncture. ADCB Asset Management understands the power of knowledge. Our strategists and advisors are committed to delivering the highest quality insights.',
  alternates: {
    canonical: '/en/insights',
  },
};

export default function InsightsPage() {
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <Header />
      <div className="site-content rs_preserve" id="site-content">
        <div className="c-investment-solutions-container c-investment-strategy-container">
          <div className="container">
            <div className="row">
              <div className="col-md-48">
                <h1 className="c-block--title">
                  <sup className="hero-section__category">Insights</sup>
                  Investment decision support at every juncture
                </h1>
              </div>
            </div>
          </div>
          <div className="o-comp o-on-page-tabs">
            <div className="o-comp__content">
              <div className="o-tabs-content__wrapper">
                <div className="o-comp o-tabs">
                  <div className="o-comp__content container -tab-only">
                    <div className="o-tabs__tab-nav__wrapper">
                      <div className="o-tabs__tab-nav__holder">
                        <div className="nav nav-prev hide"></div>
                        <div className="o-tabs__tab-nav">
                          <ul className="o-tabs__tab-nav-list">
                            <li className="o-tabs__tab-nav-item is-selected">
                              <a className="o-tabs__tab-nav-link-redirect is-active" href="/en/insights/">Overview</a>
                            </li>
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/insights/investment-strategy/">Investment Strategy</Link>
                            </li>
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/insights/investment-insights/">Investment Insights</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="nav nav-next hide"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="o-tabs__tab-content">
                  <div className="o-tabs__tab-content-item is-active">
                    <div className="container c-investment-solutions__banner">
                      <div className="row">
                        <div className="col-md-48 hero-section__img-wrapper" style={{ maxHeight: '460px' }}>
                          <img src="/en/Images/AssetManagmentHome.jpg" className="c-img-fluid" alt="Investment Insights" />
                        </div>
                      </div>
                    </div>

                    <div className="c-investment-services__container c-investment-strategy__container">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-48 c-investment-services__text-wrapper">
                            <h2 className="c-block--title">Investment decision support at every juncture</h2>
                            <p>
                              ADCB Asset Management understands the power of knowledge. Our strategists and advisors are committed to delivering the highest quality insights into key global investment trends and themes across asset classes, sectors, countries and regions, as well as topical, relevant and tradable investment ideas.
                            </p>
                            <p>
                              Any investment, regardless of the level of diligence and research, has an element of investment risk. Always consult with your Investment Advisor or Relationship Manager to ensure suitability before entering into an investment transaction.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </SiteLayout>
  );
}

