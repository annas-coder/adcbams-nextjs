import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Investment Strategy - ADCB Asset Management Limited',
  description: 'Our investment strategy team follows a rigorous top-down macroeconomic approach with the aim of identifying key market drivers and determining the optimal asset class exposures.',
  alternates: {
    canonical: '/en/insights/investment-strategy',
  },
};

export default function InvestmentStrategyPage() {
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
                  Exceeding your expectations at every level
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
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/insights/">Overview</Link>
                            </li>
                            <li className="o-tabs__tab-nav-item is-selected">
                              <a className="o-tabs__tab-nav-link-redirect is-active" href="/en/insights/investment-strategy/">Investment Strategy</a>
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
                          <img src="/en/Images/aaml-investment-strategy.jpg" className="c-img-fluid" alt="Investment Strategy" />
                        </div>
                      </div>
                    </div>
                    <div className="c-investment-services__container c-investment-strategy__container">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-48 c-investment-services__text-wrapper">
                            <h2 className="c-block--title">Investment Strategy</h2>
                            <p>
                              Our investment strategy team follows a rigorous top-down macroeconomic approach with the aim of identifying key market drivers and determining the optimal asset class exposures. Not limited to any specific area or asset class, we look instead in a holistic and thematic manner across all geographies and major asset classes, in order to identify high conviction investment ideas.
                            </p>
                            <p>
                              We publish our key insights in a pointed and easily readable way in the ADCB Weekly Market View and in the ADCB Quarterly Investment View. We also intervene - from time to time - on ad hoc themes that may be of particular interest to the general public and our clients. Those specific views are published in the ADCB Strategy Note.
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

