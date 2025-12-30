'use client';

import { useState, useEffect, useRef } from 'react';

interface QuickLinksLoginProps {
  isMobile?: boolean;
}

export default function QuickLinksLogin({ isMobile = false }: QuickLinksLoginProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const loginButtonRef = useRef<HTMLAnchorElement>(null);

  // Sync React state with CSS classes that toolkit.js might modify
  useEffect(() => {
    const dropdown = dropdownRef.current;
    const loginButton = loginButtonRef.current;
    if (!dropdown) return;

    // Check initial state from CSS class
    const hasExpandedClass = dropdown.classList.contains('is-expanded');
    if (hasExpandedClass !== isLoginOpen) {
      setIsLoginOpen(hasExpandedClass);
    }

    // Watch for class changes made by toolkit.js
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const hasExpanded = dropdown.classList.contains('is-expanded');
          if (hasExpanded !== isLoginOpen) {
            setIsLoginOpen(hasExpanded);
          }
          // Also sync button active state
          if (loginButton) {
            const shouldBeActive = dropdown.classList.contains('is-expanded');
            if (shouldBeActive) {
              loginButton.classList.add('is-active');
            } else {
              loginButton.classList.remove('is-active');
            }
          }
        }
      });
    });

    observer.observe(dropdown, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [isLoginOpen]);

  // Update CSS class when React state changes
  useEffect(() => {
    const dropdown = dropdownRef.current;
    const loginButton = loginButtonRef.current;
    if (!dropdown) return;

    if (isLoginOpen) {
      dropdown.classList.add('is-expanded');
      if (loginButton) {
        loginButton.classList.add('is-active');
      }
    } else {
      dropdown.classList.remove('is-expanded');
      if (loginButton) {
        loginButton.classList.remove('is-active');
      }
    }
  }, [isLoginOpen]);

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoginOpen(!isLoginOpen);
  };

  if (isMobile) {
    return (
      <li className="c-quick-links__item hidden-md hidden-lg hidden-xl c-quick-login">
        <a ref={loginButtonRef} className="c-quick-links__link js-toggleLoginNav" href="#" onClick={handleToggle}>
          LOGIN
        </a>
        <ul ref={dropdownRef} className="c-quick-login__list js-loginBox">
          <li className="c-quick-login__item adcb-list">
            <a className="icon-arrow" href="https://adcb.com/en/ib-prelogin.aspx" target="_blank">
              <span>Personal Banking</span>
            </a>
          </li>
          <li className="c-quick-login__item adcb-list">
            <a className="icon-arrow" href="https://adcb.com/en/procash-prelogin.aspx" target="_blank">
              <span>Business Banking</span>
            </a>
          </li>
        </ul>
      </li>
    );
  }

  return (
    <li className="c-quick-links__item hidden-sm hidden-xs c-quick-login">
      <a ref={loginButtonRef} className="c-quick-links__link btn-login icon-arrow-down js-toggleLoginNav" href="#" onClick={handleToggle}>
        LOGIN
      </a>
      <ul ref={dropdownRef} className="c-quick-login__list js-loginBox">
        <li className="c-quick-login__item adcb-list">
          <a className="icon-arrow" href="https://adcb.com/en/ib-prelogin.aspx" target="_blank">
            <span>Personal Banking</span>
          </a>
        </li>
        <li className="c-quick-login__item adcb-list">
          <a className="icon-arrow" href="https://adcb.com/en/procash-prelogin.aspx" target="_blank">
            <span>Business Banking</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

