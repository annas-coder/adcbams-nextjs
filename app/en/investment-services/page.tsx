import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Investment Services - ADCB Asset Management Limited',
  description: 'Financial solutions that put you in control. Our core investment service proposition caters to clients seeking self-directed investments, advisory solutions and discretionary portfolio management.',
  alternates: {
    canonical: '/en/investment-services',
  },
};

export default function InvestmentServicesPage() {
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
                  Financial solutions that put you in control
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
                              <a className="o-tabs__tab-nav-link-redirect is-active" href="/en/investment-services/">Overview</a>
                            </li>
                            <li className="o-tabs__tab-nav-item">
                              <Link className="o-tabs__tab-nav-link-redirect" href="/en/investment-services/self-directed-investment/">Self Directed Investments</Link>
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
                          <img src="/en/Images/aaml-investment-services.jpg" alt="Investment Services" className="img-responsive" />
                        </div>
                      </div>
                    </div>
                    <div className="c-investment-services__container">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-48 c-investment-services__text-wrapper">
                            <h2 className="c-block--title">Investment Services</h2>
                            <p>Our core investment service proposition caters to clients seeking self-directed investments, advisory solutions and discretionary portfolio management.</p>
                          </div>
                        </div>
                      </div>
                      <div className="container grid-responsive">
                        <div className="c-investment-service__grid">
                          <div className="c-investment-service__grid-item" style={{ background: 'rgba(255,255,255, .5)', color: '#00205b', fontWeight: 'bold' }}></div>
                          <div className="c-investment-service__grid-item"><h4>Self Directed</h4></div>
                          <div className="c-investment-service__grid-item"><h4>Advisory</h4></div>
                          <div className="c-investment-service__grid-item"><h4>Discretionary</h4></div>
                          <div className="c-investment-service__grid-item" style={{ background: 'rgba(255,255,255, 1)', color: '#00205b', fontWeight: 'bold' }}>
                            <span>Idea Generation</span>
                          </div>
                          <div className="c-investment-service__grid-item"><span>Client</span></div>
                          <div className="c-investment-service__grid-item"><span>ADCB AM</span></div>
                          <div className="c-investment-service__grid-item"><span>ADCB AM</span></div>
                          <div className="c-investment-service__grid-item" style={{ background: 'rgba(255,255,255, 1)', color: '#00205b', fontWeight: 'bold' }}>
                            <span>Trade Decision</span>
                          </div>
                          <div className="c-investment-service__grid-item"><span>Client</span></div>
                          <div className="c-investment-service__grid-item"><span>Client</span></div>
                          <div className="c-investment-service__grid-item"><span>ADCB AM</span></div>
                          <div className="c-investment-service__grid-item" style={{ background: 'rgba(62, 94, 169, .5)' }}></div>
                          <div className="c-investment-service__grid-item">Strategy and Research / Decision Support</div>
                          <div className="c-investment-service__grid-item" style={{ background: 'rgba(255,255,255, .5)', color: '#00205b', fontWeight: 'bold' }}></div>
                          <div className="c-investment-service__grid-item">
                            <h4>Self Directed Investment</h4>
                            <ul>
                              <li>ADCB Managed Funds</li>
                              <li>International Equity Trading</li>
                              <li>Fixed Income Trading</li>
                              <li>3rd Party Funds and Alternatives (PE, Hedge, Real Estate, Derivatives)</li>
                              <li>Structured Products</li>
                            </ul>
                          </div>
                          <div className="c-investment-service__grid-item">
                            <h4>Bespoke Advised Solutions</h4>
                            <ul>
                              <li>International Equity</li>
                              <li>Fixed Income</li>
                              <li>Local and International Mutual Funds</li>
                              <li>FX and money market</li>
                              <li>Structured Products</li>
                              <li>Alternatives (PE, Hedge, Real Estate, Derivatives)</li>
                            </ul>
                          </div>
                          <div className="c-investment-service__grid-item">
                            <h4>Discretionary Portfolio Solutions</h4>
                            <ul>
                              <li>Regional Direct Equity and Fixed Income Mandates</li>
                              <li>Global Balanced Multi- Manager Mandates</li>
                            </ul>
                          </div>
                          <div className="c-investment-service__grid-item"></div>
                          <div className="c-investment-service__grid-item">
                            <Link href="/en/investment-services/self-directed-investment/" className="c-outline-button">DISCOVER MORE</Link>
                          </div>
                          <div className="c-investment-service__grid-item">
                            <Link href="/en/investment-services/advisory-solutions/" className="c-outline-button">DISCOVER MORE</Link>
                          </div>
                          <div className="c-investment-service__grid-item">
                            <Link href="/en/investment-services/discretionary-portfolio-management/" className="c-outline-button">DISCOVER MORE</Link>
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

