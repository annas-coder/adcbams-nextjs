import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Self Directed Investments - ADCB Asset Management Limited',
  description: "In addition to ADCB Asset Management's in-house managed funds, our open architecture platform provides access to global mutual funds, international equities and ETF's, bonds, private equity, hedge funds and structured products.",
  alternates: {
    canonical: '/en/investment-services/self-directed-investment',
  },
};

export default function SelfDirectedInvestmentPage() {
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
                            <li className="o-tabs__tab-nav-item is-selected">
                              <a className="o-tabs__tab-nav-link-redirect is-active" href="/en/investment-services/self-directed-investment/">Self Directed Investments</a>
                            </li>
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/investment-services/advisory-solutions/">Advisory Solutions</Link>
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
                  <div className="o-tabs__tab-content-item is-active">
                    <div className="container c-investment-solutions__banner">
                      <div className="row">
                        <div className="col-md-48 hero-section__img-wrapper" style={{ maxHeight: '460px' }}>
                          <img src="/en/Images/self-directed-investments.png" alt="Self Directed Investments" className="img-responsive" />
                        </div>
                      </div>
                    </div>
                    <div className="c-self-directed-investment__container c-blue-container">
                      <div className="container">
                        <div className="c-self-directed-investment__text-wrapper">
                          <h2 className="c-block--title">Self Directed Investments</h2>
                          <p className="c-desc-text">
                            In addition to ADCB Asset Management's in-house managed funds, our open architecture platform provides access to global mutual funds, international equities and ETF's, bonds, private equity, hedge funds and structured products.
                          </p>
                          <p className="c-desc-text">
                            Our market execution partners span most developed and emerging markets, covering equities, bonds, preferreds, perpetuals, ETF's, REITS, warrants, futures, options, as well as the ability to participate in IPOs. Custody is arranged through a global network of custody partners.
                          </p>
                        </div>

                        <div className="c-two-column__block">
                          <div className="row">
                            <div className="col-sm-24">
                              <div className="c-two-column__image">
                                <img src="/en/Images/self-directed-investments-thumbnail.png" alt="Self Directed Investment" />
                              </div>
                            </div>
                            <div className="col-sm-24">
                              <div className="c-two-column__block-wrapper">
                                <h3 className="c-two-column__block-title">Self Directed Investment</h3>
                                <div className="c-tick-list" style={{ margin: 0, padding: 0 }}>
                                  <ul className="c-two-column__block__service-list">
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>ADCB Managed Funds</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>International Equity Trading</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>Fixed Income Trading</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>3rd Party Funds and Alternatives (PE, Hedge, Real Estate, Derivatives)</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>Structured Products</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="c-range__container c-white-container">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-16">
                            <div className="c-range-text__wrapper">
                              <h4>Featured products</h4>
                              <p>Refer to this page or ask your Relationship Manager about new products, IPO's and issues currently open for subscription.</p>
                              <p>Any investment, regardless of the level of diligence and research, has an element of investment risk. Always consult with your Investment Advisor or Relationship Manager to ensure suitability before entering into an investment transaction.</p>
                            </div>
                          </div>
                          <div className="col-md-16">
                            <div className="c-img-card-item">
                              <div className="img-block">
                                <img src="/en/Images/adcb-managed-funds-thumbnail.png" alt="ADCB Managed Funds" />
                              </div>
                              <div className="c-img-card-item__bottom-detail">
                                <label>Self Directed Investments</label>
                                <p className="c-img-card-item__bottom-detail-title">ADCB Managed Funds</p>
                                <a href="#"><img src="/en/system/includes/images/arow-icon-100723.svg" alt="Arrow" /></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-16">
                            <div className="c-img-card-item">
                              <div className="img-block">
                                <img src="/en/Images/3rd-party-mutual-funds-new-thumbnail.png" alt="3rd Party Mutual Funds" />
                              </div>
                              <div className="c-img-card-item__bottom-detail">
                                <label>Self Directed Investments</label>
                                <p className="c-img-card-item__bottom-detail-title">3rd Party Mutual Funds</p>
                                <a href="#"><img src="/en/system/includes/images/arow-icon-100723.svg" alt="Arrow" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="c-contact-advisor__container c-blue-container">
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

