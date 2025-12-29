'use client';

import { useEffect } from 'react';

interface HeroBannerProps {
  bannerData?: any[];
}

export default function HeroBanner({ bannerData }: HeroBannerProps) {
  useEffect(() => {
    // Remove hide class when component mounts (jQuery equivalent)
    const banner = document.getElementById('personalized-banner');
    if (banner) {
      banner.classList.remove('hide');
    }

    // Banner data is passed as prop and embedded in data attribute to prevent public JSON exposure
  }, [bannerData]);

  // Stringify banner data for embedding in data attribute (legacy JS compatibility)
  const bannerDataJson = bannerData ? JSON.stringify(bannerData) : '[]';

  return (
    <div
      className="hero-premium hide"
      id="personalized-banner"
      data-banner-content={bannerDataJson}
      data-isdefault-first="N"
      data-defult-limit="3"
      data-personalized-limit="5"
      data-banner-design="Personalized"
    >
      <div className="hero-premium__carousel js-hero-carousel owl-carousel" id="banner-carousel"></div>
      <div className="hero-premium__scroll">
        <div className="hero-premium__scroll-wrapper">
          <span className="hero-premium__scroll-text">Scroll</span>
        </div>
      </div>
    </div>
  );
}



