'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    $: any;
  }
}

export function useFlickity() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.$) {
      return;
    }

    const $ = window.$;

    // Report carousel initialization
    const initReportCarousel = () => {
      if ($('.c-slick-report-carousel').length > 0) {
        let scroll: NodeJS.Timeout | null = null;
        let scrollCount = 0;

        $('.c-slick-report-carousel').flickity({
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          prevNextButtons: false,
          wrapAround: true,
          autoPlay: 5000,
          pauseAutoPlayOnHover: false,
          imagesLoaded: true,
          adaptiveHeight: true,
          initialIndex: 0,
          selectedAttraction: 0.01,
          friction: 0.15,
        });

        // Previous button
        $('.button--report-prev').on('click', function () {
          $('.c-slick-report-carousel').flickity('previous');
        });

        // Next button
        $('.button--report-next').on('click', function () {
          $('.c-slick-report-carousel').flickity('next');
        });

        // Enable vertical scrolling with mouse wheel
        $('.c-slick-report-carousel').on('wheel', function (this: HTMLElement, e: any) {
          e.preventDefault();
          if (scroll) clearTimeout(scroll);
          scroll = setTimeout(function () {
            scrollCount = 0;
          }, 40);
          if (scrollCount) return 0;
          scrollCount = 1;
          if (e.originalEvent.deltaY < 0 || e.originalEvent.deltaX < 0) {
            $(this).flickity('previous');
          } else if (e.originalEvent.deltaY > 0 || e.originalEvent.deltaX > 0) {
            $(this).flickity('next');
          }
        });
      }
    };

    // Vertical carousel initialization
    const initVerticalCarousel = () => {
      if ($('.slick-vertical-carousel').length > 0) {
        $('.slick-vertical-carousel').each(function(this: HTMLElement) {
          const $carousel = $(this);
          let scroll: NodeJS.Timeout | null = null;
          let scrollCount = 0;
          
          // Initialize Flickity with adaptiveHeight
          $carousel.flickity({
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            pageDots: true,
            draggable: true,
            imagesLoaded: true,
            adaptiveHeight: true,
          });

          // Resize carousel after images load
          $carousel.on('imagesLoaded', function() {
            $carousel.flickity('resize');
          });

          // Resize on window resize (debounced)
          let resizeTimeout: NodeJS.Timeout;
          const handleResize = function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
              $carousel.flickity('resize');
            }, 100);
          };
          $(window).on('resize', handleResize);

          // Handle wheel events
          $carousel.on('wheel', function (this: HTMLElement, e: any) {
            e.preventDefault();
            if (scroll) clearTimeout(scroll);
            scroll = setTimeout(function () {
              scrollCount = 0;
            }, 40);
            if (scrollCount) return 0;
            scrollCount = 1;
            if (e.originalEvent.deltaY < 0 || e.originalEvent.deltaX < 0) {
              $carousel.flickity('previous');
            } else if (e.originalEvent.deltaY > 0 || e.originalEvent.deltaX > 0) {
              $carousel.flickity('next');
            }
          });

          // Trigger resize after a short delay to ensure images are loaded
          setTimeout(function() {
            $carousel.flickity('resize');
          }, 500);
        });
      }
    };

    // Wait for jQuery and Flickity to be available
    const checkAndInit = () => {
      if (window.$ && window.$.fn && window.$.fn.flickity) {
        $(document).ready(function () {
          initReportCarousel();
          initVerticalCarousel();
        });
      } else {
        setTimeout(checkAndInit, 100);
      }
    };

    checkAndInit();
  }, []);
}

