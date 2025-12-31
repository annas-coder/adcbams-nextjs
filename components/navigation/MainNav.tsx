'use client';

import { useRef, useEffect } from 'react';
import NavLevels from './NavLevels';
import type { NavigationData } from '@/lib/types';

interface MainNavProps {
  navigationData: NavigationData;
}

export default function MainNav({ navigationData }: MainNavProps) {
  const closeButtonRef = useRef<HTMLAnchorElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Try to use toolkit.js if available
    if (typeof window !== 'undefined') {
      const $ = (window as any).$;
      const toolkit = (window as any).toolkit;
      
      if ($ && toolkit && toolkit.toggleMainNav) {
        // Use toolkit.js method if available
        toolkit.toggleMainNav(true); // Pass true to force close
        return;
      }
      
      // Fallback: Manual close if toolkit.js isn't available
      const mainNav = document.querySelector('.c-main-nav');
      const menuButton = document.querySelector('.o-menu-button__icon');
      const header = document.querySelector('header');
      const closeButton = document.querySelector('.o-close-button');
      const menuBar = document.querySelector('.menu-bar');
      const menuFooterBar = document.querySelector('.menu-footer-bar');
      const body = document.body;
      
      if (!mainNav) return;
      
      // Close menu
      mainNav.classList.remove('is-expanded');
      if (menuButton) menuButton.classList.remove('is-active');
      if (header) header.classList.remove('is-header-transparent');
      if (closeButton) closeButton.classList.add('hidden');
      if (menuBar) menuBar.classList.remove('hidden');
      if (menuFooterBar) menuFooterBar.classList.add('hide');
      body.classList.remove('body-menu-opened');
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const $ = (window as any).$;
    const closeButton = closeButtonRef.current;
    
    if ($ && closeButton) {
      // Remove any existing handlers to avoid duplicates
      $(closeButton).off('click');
    }
  }, []);

  return (
    <nav role="navigation" className="c-main-nav t-private theme-dark">
      <div className="c-main-nav__content container">
        <div className="main-header-nav">
          <div className="o-switch-button">
            <ul className="nav-header">
              <li className="o-close-button hidden">
                <a 
                  ref={closeButtonRef}
                  className="o-close-button__icon icon-close" 
                  href="#" 
                  aria-label="close"
                  onClick={handleClose}
                ></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-23 hidden-sm hidden-xs">
          <ul className="nav-lvl -js-md-plus-visible-nav-lvl">
            <li className="nav-lvl__item active-main is-active">
              <a href="/en/" className="is-hidden">{navigationData.mainNav.brandLabel}</a>
            </li>
          </ul>
        </div>

        <NavLevels
          brandLabel={navigationData.mainNav.brandLabel}
          overviewLink={navigationData.mainNav.overviewLink}
          menuItems={navigationData.mainNav.menuItems}
        />

        <div className="nav-footer menu-footer-bar hide" style={{}}>
          <ul className="nav-footer__list">
            {navigationData.navFooter.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target={item.target || '_self'}
                  className="nav-footer-item"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-footer__languages"></div>
        </div>
      </div>
    </nav>
  );
}






