import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Discretionary Portfolio Management - ADCB Asset Management Limited',
  description: 'ADCB Asset Management offers a tailor made, actively managed discretionary portfolio solutions designed to meet your unique investment needs.',
  alternates: {
    canonical: '/en/investment-services/discretionary-portfolio-management',
  },
};

export default function DiscretionaryPortfolioManagementPage() {
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
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/investment-services/advisory-solutions/">Advisory Solutions</Link>
                            </li>
                            <li className="o-tabs__tab-nav-item is-selected">
                              <a className="o-tabs__tab-nav-link-redirect is-active" href="/en/investment-services/discretionary-portfolio-management/">Discretionary Portfolio Management</a>
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
                          <img src="/en/Images/aaml-discretionary-portfolio-anagement.jpg" alt="Discretionary Portfolio Management" className="img-responsive" />
                        </div>
                      </div>
                    </div>
                    <div className="c-self-directed-investment__container c-blue-container">
                      <div className="container">
                        <div className="c-self-directed-investment__text-wrapper c-portfolio_text-wrapper">
                          <h2 className="c-block--title">Discretionary Portfolio Management</h2>
                          <p className="c-desc-text">
                            ADCB Asset Management offers a tailor made, actively managed discretionary portfolio solutions designed to meet your unique investment needs.
                          </p>
                          <p className="c-desc-text">
                            Discretionary portfolio management is a hands-on, actively managed portfolio solution for designed with your specific needs in mind. Our portfolio management team uses a carefully selected combination of single securities, investment funds and other financial instruments to achieve the optimal level of diversification for your portfolio, and provide a service tailored to your personal needs and goals.
                          </p>
                        </div>

                        <div className="c-two-column__block">
                          <div className="row">
                            <div className="col-sm-24">
                              <div className="c-two-column__image">
                                <img src="/en/Images/discretionary-portfolio-management-thumbnail.png" alt="Discretionary Portfolio Solutions" />
                              </div>
                            </div>
                            <div className="col-sm-24">
                              <div className="c-two-column__block-wrapper">
                                <h3 className="c-two-column__block-title">Discretionary Portfolio Solutions</h3>
                                <div className="c-tick-list" style={{ margin: 0, padding: 0 }}>
                                  <ul className="c-two-column__block__service-list">
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>Regional Direct Equity and Fixed Income Mandates</li>
                                    <li style={{ marginBottom: 0, paddingBottom: 0 }}>Global Balanced Multi- Manager Mandates</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="c-benefits__container c-white-container">
                      <div className="container">
                        <div className="c-benefits__text-wrapper">
                          <h2 className="c-block--title">Your benefits at a glance</h2>
                        </div>
                        <div className="c-benefits__content">
                          <ul className="c-benefits__block-list">
                            <li>
                              <div className="c-content-block">
                                <img src="/en/system/includes/images/shield-risk-100723.svg" alt="Financial goals" />
                                <h4>Financial goals</h4>
                                <p className="c-desc-text">Your personal portfolio is based on an investment strategy which has been tailored to your financial needs and goals.</p>
                              </div>
                            </li>
                            <li>
                              <div className="c-content-block">
                                <img src="/en/system/includes/images/coin-100723.svg" alt="Risk management" />
                                <h4>Risk management</h4>
                                <p className="c-desc-text">With full consideration of your understanding and attitude towards risk, the investment strategies and restrictions are tailored to the level of risk and complexity most suitable for you as an individual.</p>
                              </div>
                            </li>
                            <li>
                              <div className="c-content-block">
                                <img src="/en/system/includes/images/chat-line-up-100723.svg" alt="Unconstrained investment universe" />
                                <h4>Unconstrained investment universe</h4>
                                <p className="c-desc-text">Benefit from a wide array of investment opportunities carefully evaluated and selected based on mutually agreed restrictions and parameters</p>
                              </div>
                            </li>
                          </ul>
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

