import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import AccessibilityComponent from '@/components/accessibility/AccessibilityComponent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

export const metadata: Metadata = {
  title: 'Contact Us - ADCB Asset Management Limited',
  description: 'Contact ADCB Asset Management Limited. Thank you for your interest in ADCB Asset Management. Please contact us on our premium line or email us.',
  alternates: {
    canonical: '/en/contact',
  },
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <AccessibilityComponent />
      <Header />
      <div className="site-content rs_preserve" id="site-content">
        <div className="hero-section">
          <div className="hero-section__content-wrapper container">
            <div className="hero-section__title-wrapper">
              <h1 className="hero-section__title hero-section__title">
                <sup className="hero-section__category">Contact</sup>
                Contact us
              </h1>
            </div>
          </div>
        </div>

        <div className="o-comp c-cms-content no-top-pad">
          <div className="o-comp__content container">
            <p>Thank you for your interest in ADCB Asset Management. Please contact us on our premium line or email us and one of our professionals will be pleased to assist you.</p>
            <br /><br />

            <div className="row">
              <div className="col-sm-22">
                <p>
                  ADCB Asset Management Limited <br />
                  Level 10, Al Sila Tower<br />
                  ADGM Square<br />
                  Al Maryah Island<br />
                  PO Box 939<br />
                  Abu Dhabi<br />
                  <a href="tel:+97126981777">Tel: +971 (0)2 698 1777</a>
                </p>
              </div>
              <div className="col-sm-4"> </div>
              <div className="col-sm-22">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14522.193067139748!2d54.37978175323946!3d24.501104044482922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6654ed46c84f%3A0x2f5bcb81cc2ed32b!2sAbu+Dhabi+Global+Market+Authorities+Building!5e0!3m2!1sen!2sae!4v1537777870646"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="ADCB Asset Management Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="o-comp c-get-started">
          <div className="o-comp__content c-container">
            <div className="o-comp__title">
              <h2 className="c-common__page-title">Get in Touch</h2>
            </div>
            <div className="row">
              <div className="col-sm-16">
                <div className="c-get-card">
                  <div className="c-get-card__icon">
                    <img src="/en/system/includes/images/phone-icon-100723.svg" alt="Contact Centre" />
                  </div>
                  <div className="c-get-card__title">Contact Centre</div>
                  <div className="c-get-card__content">
                    Call our 24-hour contact centre on <br />
                    <a href="tel:600502322" className="c-text-blue">600 50 2322</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-16">
                <div className="c-get-card">
                  <div className="c-get-card__icon">
                    <img src="/en/system/includes/images/message-icon-100723.svg" alt="Apply through SMS" />
                  </div>
                  <div className="c-get-card__title">Apply through SMS</div>
                  <div className="c-get-card__content">
                    SMS <span className="c-text-light-blue">'PRIVATE'</span> to <a href="sms:2626&body=PRIVATE" className="c-text-blue">2626</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-16">
                <div className="c-get-card">
                  <div className="c-get-card__icon">
                    <img src="/en/system/includes/images/marker-icon-100723.svg" alt="Visit Us" />
                  </div>
                  <div className="c-get-card__title">Visit Us</div>
                  <div className="c-get-card__content">We will be happy to welcome you at our exclusive Private Centers</div>
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

