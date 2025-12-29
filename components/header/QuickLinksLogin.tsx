'use client';

import { useState } from 'react';

interface QuickLinksLoginProps {
  isMobile?: boolean;
}

export default function QuickLinksLogin({ isMobile = false }: QuickLinksLoginProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  if (isMobile) {
    return (
      <li className="c-quick-links__item hidden-md hidden-lg hidden-xl c-quick-login">
        <a className="c-quick-links__link js-toggleLoginNav" href="#" onClick={(e) => { e.preventDefault(); setIsLoginOpen(!isLoginOpen); }}>
          LOGIN
        </a>
        {isLoginOpen && (
          <ul className="c-quick-login__list js-loginBox">
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
        )}
      </li>
    );
  }

  return (
    <li className="c-quick-links__item hidden-sm hidden-xs c-quick-login">
      <a className="c-quick-links__link btn-login icon-arrow-down js-toggleLoginNav" href="#" onClick={(e) => { e.preventDefault(); setIsLoginOpen(!isLoginOpen); }}>
        LOGIN
      </a>
      {isLoginOpen && (
        <ul className="c-quick-login__list js-loginBox">
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
      )}
    </li>
  );
}

