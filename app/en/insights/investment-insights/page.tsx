import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Investment Insights - ADCB Asset Management Limited',
  description: 'To aid you in your wealth journey, our experts regularly identify products, themes and securities that are timely and pertinent to your investment needs.',
  alternates: {
    canonical: '/en/insights/investment-insights',
  },
};

export default function InvestmentInsightsPage() {
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
                  The power of knowledge
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
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/insights/investment-strategy/">Investment Strategy</Link>
                            </li>
                            <li className="o-tabs__tab-nav-item is-selected">
                              <a className="o-tabs__tab-nav-link-redirect is-active" href="/en/insights/investment-insights/">Investment Insights</a>
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
                          <img src="/en/Images/aaml-insights.jpg" className="c-img-fluid" alt="Investment Insights" />
                        </div>
                      </div>
                    </div>
                    <div className="c-investment-services__container c-investment-strategy__container">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-48 c-investment-services__text-wrapper">
                            <h2 className="c-block--title">Investment Insights</h2>
                            <p>
                              To aid you in your wealth journey, our experts regularly identify products, themes and securities that are timely and pertinent to your investment needs. In-depth and insightful, these ideas are selected to guide you in your portfolio decision but should always be considered in a broader diversified portfolio context.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="c-contact-advisor__container">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-32 c-contact-advisor__text-block">
                            <h4 className="contact-advisor__title">Is this the optimal solution for me?</h4>
                            <p className="contact-advisor__text" style={{ opacity: 0.7 }}>
                              Are you an investment savvy, hands-on investor looking for a "one stop shop" to manage your own portfolio? If yes, then this is the solution for you.
                            </p>
                            <Link href="/en/contact/" className="o-link-more icon-arrow-down">Contact us</Link>
                          </div>
                          <div className="col-md-16 c-contact-advisor__img-block">
                            <img src="/en/system/includes/images/contact-advisory-logo-100723.svg" alt="Contact Advisory" />
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

