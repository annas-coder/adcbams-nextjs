'use client';

import { useRef, useEffect } from 'react';

export default function MenuButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Try to use toolkit.js if available
    if (typeof window !== 'undefined') {
      const $ = (window as any).$;
      const toolkit = (window as any).toolkit;
      
      if ($ && toolkit && toolkit.toggleMainNav) {
        // Use toolkit.js method if available
        toolkit.toggleMainNav();
        return;
      }
      
      // Fallback: Manual toggle if toolkit.js isn't available
      const menuButton = buttonRef.current;
      const mainNav = document.querySelector('.c-main-nav');
      const header = document.querySelector('header');
      const closeButton = document.querySelector('.o-close-button');
      const menuBar = document.querySelector('.menu-bar');
      const menuFooterBar = document.querySelector('.menu-footer-bar');
      const body = document.body;
      
      if (!mainNav) return;
      
      const isExpanded = mainNav.classList.contains('is-expanded');
      
      if (isExpanded) {
        // Close menu
        mainNav.classList.remove('is-expanded');
        if (menuButton) menuButton.classList.remove('is-active');
        if (header) header.classList.remove('is-header-transparent');
        if (closeButton) closeButton.classList.add('hidden');
        if (menuBar) menuBar.classList.remove('hidden');
        if (menuFooterBar) menuFooterBar.classList.add('hide');
        body.classList.remove('body-menu-opened');
      } else {
        // Open menu
        mainNav.classList.add('is-expanded');
        if (menuButton) menuButton.classList.add('is-active');
        if (header) header.classList.add('is-header-transparent');
        if (closeButton) closeButton.classList.remove('hidden');
        if (menuBar) menuBar.classList.add('hidden');
        if (menuFooterBar) menuFooterBar.classList.remove('hide');
        body.classList.add('body-menu-opened');
      }
    }
  };

  // Ensure toolkit.js handlers are attached when component mounts or route changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const $ = (window as any).$;
    const button = buttonRef.current;
    
    if ($ && button) {
      // Remove any existing handlers to avoid duplicates
      $(button).off('click');
      
      // Attach toolkit.js handler if available (it will handle the click)
      // Our onClick handler will also work as a fallback
    }
  }, []);

  return (
    <div className="o-menu-button">
      <a 
        ref={buttonRef}
        href="#" 
        className="o-menu-button__icon js-main-nav-toggle" 
        title="Navigation menu"
        onClick={handleToggle}
      >
        <span className="top-bar" role="presentation"></span>
        <span className="middle-bar" role="presentation"></span>
        <span className="bottom-bar" role="presentation"></span>
      </a>
      <label className="menu-bar">MENU</label>
    </div>
  );
}






