import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Terms and Conditions - ADCB Asset Management Limited',
  description: 'Terms and Conditions for ADCB Asset Management Limited. These terms apply to any person or entity that avail any product or service offered by ADCB Asset Management Limited.',
  alternates: {
    canonical: '/en/about/terms',
  },
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <Header />
      <div className="site-content rs_preserve" id="site-content">
        <div className="hero-section">
          <div className="hero-section__content-wrapper container">
            <div className="hero-section__title-wrapper">
              <h1 className="hero-section__title hero-section__title">
                <sup className="hero-section__category">ABOUT</sup>
                Terms and conditions
              </h1>
            </div>
          </div>
        </div>

        <div className="o-comp c-cms-content no-top-pad">
          <div className="o-comp__content container">
            <p>These terms apply to any person or entity that avail any product or service offered by ADCB Asset Management Limited.</p>
            <p>Find all the relevant Terms and Conditions from the link mentioned below. To download these files, you would need to install Adobe Acrobat Reader on your computer.</p>

            <div className="c-self-directed-inestment__container">
              <div className="container">
                <div className="c-box__gid c-two-column__grid">
                  <div className="c-content__box">
                    <h4>Terms and Conditions for ADCB Asset Management Ltd</h4><br /><br />
                    <a href="/en/system/assets-mgnt/AML_T&Cs_Eng.pdf" target="_blank" rel="noopener noreferrer">
                      <button className="c-outline-button">Download (PDF)</button>
                    </a>
                  </div>
                  <div className="c-content__box">
                    <h4>Schedule of Fees for ADCB Asset Management Ltd </h4>
                    (Effective from 1st of April 2022)<br /><br />
                    <a href="/en/system/assets-mgnt/aaml-sof-english-v2-150322.pdf" target="_blank" rel="noopener noreferrer">
                      <button className="c-outline-button">Download (PDF)</button>
                    </a>
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

