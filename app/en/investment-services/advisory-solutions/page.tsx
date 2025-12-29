import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Advisory Solutions - ADCB Asset Management Limited',
  description: 'An opportunistic approach to investment ideas and solutions, designed for clients who wish to retain a level of control over the management of their investment portfolios.',
  alternates: {
    canonical: '/en/investment-services/advisory-solutions',
  },
};

export default function AdvisorySolutionsPage() {
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <Header />
      <div className="site-content rs_preserve" id="site-content">
        <div className="c-investment-solutions-container">
          <div className="container">
            <div className="row">
              <div className="col-md-48">
                <h1 className="c-block--title">
                  <sup className="hero-section__category">Investment Services</sup>
                  Whatever you need, whenever you need it
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
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/investment-services/">Overview</Link>
                            </li>
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/investment-services/self-directed-investment/">Self Directed Investments</Link>
                            </li>
                            <li className="o-tabs__tab-nav-item is-selected">
                              <a className="o-tabs__tab-nav-link-redirect is-active" href="/en/investment-services/advisory-solutions/">Advisory Solutions</a>
                            </li>
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/investment-services/discretionary-portfolio-management/">Discretionary Portfolio Management</Link>
                            </li>
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/investment-services/wealth-planning/">Wealth Planning</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="nav nav-next hide"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="o-tabs__tab-content">
                  <div className="o-tabs__tab-content-item c-advisory-solutions__tab is-active">
                    <div className="container c-investment-solutions__banner">
                      <div className="row">
                        <div className="col-md-48 hero-section__img-wrapper" style={{ maxHeight: '460px' }}>
                          <img src="/en/Images/aaml-advisory-solutions.jpg" alt="Advisory Solutions" className="img-responsive" />
                        </div>
                      </div>
                    </div>
                    <div className="c-self-directed-investment__container c-blue-container">
                      <div className="container">
                        <div className="c-self-directed-investment__text-wrapper c-adivisory-wrapper">
                          <h2 className="c-block--title">Advisory Solutions</h2>
                          <p className="c-desc-text">
                            An opportunistic approach to investment ideas and solutions, designed for clients who wish to retain a level of control over the management of their investment portfolios. Our specialist advisory team use complex modelling to construct and source innovative thematic ideas in global financial markets.
                          </p>
                          <p className="c-desc-text">
                            ADCB Asset Management's Advisory Solutions are designed to identify new investment opportunities and proactively help clients make investment decisions.
                          </p>
                          <p className="c-desc-text">
                            Drawing from an unconstrained investment universe, our advisory solutions offer clients direct access to the advisory desk which provides bespoke trade ideas across asset classes. Bridging the gap between fully discretionary and self directed services, the advisory proposition provides investors with greater control and oversight of their investment portfolio while benefiting from professional research and management. Reacting proactively to changes to market conditions, ADCB Asset Management's investment advisors will advise clients on emerging investment trends, themes and trade ideas. Tactical ideas will aim to take advantage of short term market momentum. Strategic ideas will aim to capitalise on long term views.
                          </p>
                          <p className="c-desc-text">
                            Comfortable in the knowledge that an advisor is close at hand, our clients take the final investment decision after understanding the investment merits and inherent risks.
                          </p>
                        </div>

                        <div className="c-two-column__block">
                          <div className="row">
                            <div className="col-sm-24">
                              <div className="c-two-column__image">
                                <img src="/en/Images/advisory-solutions-thumbnail.png" alt="Bespoke Advised Solutions" />
                              </div>
                            </div>
                            <div className="col-sm-24">
                              <div className="c-two-column__block-wrapper">
                                <h3 className="c-two-column__block-title">Bespoke Advised Solutions</h3>
                                <div className="c-tick-list" style={{ margin: 0, padding: 0 }}>
                                  <ul className="c-two-column__block__service-list">
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>International Equity</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>Fixed Income</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>Local and International Mutual Funds</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>FX and money market</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>Structured Products</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>Alternatives (PE, Hedge, Real Estate, Derivatives)</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
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

