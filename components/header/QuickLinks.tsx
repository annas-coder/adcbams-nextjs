'use client';

import { useState, useRef } from 'react';
import QuickLinksLogin from './QuickLinksLogin';
import { QuickLinksSearchIcon, QuickLinksSearchBox, SearchContext } from './QuickLinksSearch';

export default function QuickLinks() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  return (
    <SearchContext.Provider value={{ isSearchOpen, setIsSearchOpen, searchBoxRef }}>
      <ul className="c-quick-links">
        <li className="c-quick-links__item lang-ar hidden-xs hidden-sm hide">
          <a href="/ar/personal/" id="_switchLang" lang="ar-AE" className="c-quick-links__link lang-switch">
            عربي
          </a>
        </li>
        <QuickLinksLogin isMobile={true} />
        <QuickLinksSearchIcon />
        <QuickLinksLogin isMobile={false} />
      </ul>
      <QuickLinksSearchBox />
    </SearchContext.Provider>
  );
}






