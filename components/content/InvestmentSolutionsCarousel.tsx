'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useFlickity } from '@/lib/hooks/useFlickity';

declare global {
  interface Window {
    $: any;
  }
}

interface Solution {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface InvestmentSolutionsCarouselProps {
  solutions: Solution[];
}

export default function InvestmentSolutionsCarousel({ solutions }: InvestmentSolutionsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  useFlickity();

  useEffect(() => {
    // Wait for images to load and then resize Flickity
    const resizeCarousel = () => {
      if (typeof window !== 'undefined' && window.$ && carouselRef.current) {
        const $ = window.$;
        const $carousel = $(carouselRef.current).find('.slick-vertical-carousel');
        
        if ($carousel.length > 0 && $carousel.data('flickity')) {
          // Trigger resize after images load
          setTimeout(() => {
            $carousel.flickity('resize');
          }, 100);
        }
      }
    };

    // Wait for all images to load
    const images = carouselRef.current?.querySelectorAll('img');
    if (images && images.length > 0) {
      let loadedCount = 0;
      const totalImages = images.length;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          resizeCarousel();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener('load', checkAllLoaded);
          img.addEventListener('error', checkAllLoaded);
        }
      });
    } else {
      // Fallback: resize after a delay
      setTimeout(resizeCarousel, 500);
    }
  }, []);

  return (
    <>
      <div className="c-vertical__carousel c-container" ref={carouselRef}>
        <div className="c-vertical__carousel-wrapper slick-vertical-carousel">
          {solutions.map((solution, index) => (
            <div key={index} className="c-vertical__item">
              <div className="c-vertical__image" style={{ flex: 1 }}>
                <Image src={solution.image} alt={solution.title} width={500} height={300} />
              </div>
              <div className="c-vertical__content-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>
                  <h3 className="c-vertical__content-title-wrapper">
                    <strong>{solution.title}</strong>
                  </h3>
                  <p className="c-vertical__content-info-wrapper">{solution.description}</p>
                </div>
                <div className="c-vertical__action">
                  <Link href={solution.link} className="c-outline-button">
                    Find out more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .c-vertical__carousel .flickity-viewport {
          min-height: 400px !important;
        }
        .slick-vertical-carousel .flickity-viewport {
          height: auto !important;
        }
      `}</style>
    </>
  );
}
