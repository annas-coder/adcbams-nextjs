import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'About Us - ADCB Asset Management Limited',
  description: 'ADCB Asset Management Limited is a wholly owned subsidiary of Abu Dhabi Commercial Bank PJSC, authorised and regulated by the Financial Services Regulatory Authority.',
  alternates: {
    canonical: '/en/about',
  },
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <Header />
      <div className="site-content rs_preserve" id="site-content">
        <div className="hero-section">
          <div className="hero-section__content-wrapper container">
            <div className="hero-section__title-wrapper">
              <h1 className="hero-section__title hero-section__title">
                <sup className="hero-section__category">About</sup>
                ADCB Asset Management Limited
              </h1>
            </div>
            <p className="o-comp__title_desc" style={{ margin: 'auto' }}>
              Authorised and regulated by the Financial Services Regulatory Authority
            </p>
          </div>
        </div>

        <div className="o-comp c-cms-content no-top-pad">
          <div className="o-comp__content container">
            <p>
              Established on 11 April 2018, ADCB Asset Management Limited is a wholly owned subsidiary of Abu Dhabi Commercial Bank PJSC. Built from a proud, award winning history as a division of its parent bank, ADCB Asset Management became a stand alone subsidiary in order to expand its range of products and services, and to better serve its customers.
            </p>
            <p>
              ADCB Asset Management Limited is registered in the Abu Dhabi Global Market ("ADGM") (Registered Number 000001263), and is authorised and regulated by the Financial Services Regulatory Authority ("FSRA") (FSP Number 170036). The company holds a category 3C license with a retail endorsement and is authorised to conduct the Regulated Activities of:
            </p>

            <div className="c-tick-list -cols-2">
              <ul>
                <li style={{ paddingBottom: 0 }}>Managing Assets</li>
                <li style={{ paddingBottom: 0 }}>Advising of Investments or Credit</li>
                <li style={{ paddingBottom: 0 }}>Arranging Deals in Investments</li>
                <li style={{ paddingBottom: 0 }}>Arranging Custody</li>
                <li style={{ paddingBottom: 0 }}>Arranging Credit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </SiteLayout>
  );
}

