'use client';

import { useState, useEffect, useRef, createContext, useContext } from 'react';

// Context to share search state between icon and box components
export const SearchContext = createContext<{
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchBoxRef: React.RefObject<HTMLDivElement | null>;
} | null>(null);

// Search icon component (goes inside <ul>)
export function QuickLinksSearchIcon() {
  const context = useContext(SearchContext);
  if (!context) return null;

  const { isSearchOpen, setIsSearchOpen } = context;

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <li className="c-quick-links__item hidden-xs hidden-sm">
      <a href="#" className="c-quick-links__link icon-search js-toggleSearchBox" onClick={handleToggle}>
        <span className="sr-only">Search</span>
      </a>
    </li>
  );
}

// Search box component (goes outside <ul>)
export function QuickLinksSearchBox() {
  const context = useContext(SearchContext);
  if (!context) return null;

  const { isSearchOpen, setIsSearchOpen, searchBoxRef } = context;

  // Sync React state with CSS classes that toolkit.js might modify
  useEffect(() => {
    const searchBox = searchBoxRef.current;
    if (!searchBox) return;

    // Check initial state from CSS class
    const hasVisibleClass = searchBox.classList.contains('is-visible');
    if (hasVisibleClass !== isSearchOpen) {
      setIsSearchOpen(hasVisibleClass);
    }

    // Watch for class changes made by toolkit.js
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const hasVisible = searchBox.classList.contains('is-visible');
          if (hasVisible !== isSearchOpen) {
            setIsSearchOpen(hasVisible);
          }
        }
      });
    });

    observer.observe(searchBox, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [isSearchOpen, setIsSearchOpen, searchBoxRef]);

  // Update CSS class when React state changes
  useEffect(() => {
    const searchBox = searchBoxRef.current;
    if (!searchBox) return;

    if (isSearchOpen) {
      searchBox.classList.add('is-visible');
    } else {
      searchBox.classList.remove('is-visible');
    }
  }, [isSearchOpen, searchBoxRef]);

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div ref={searchBoxRef} className="c-search js-searchBox">
      <form name="ADCB Search" role="search" action="/en/search.aspx" method="get" target="_top" className="c-search__wrapper container">
        <div className="c-search__elements">
          <div className="c-search__input">
            <input id="st-search-input-header" className="full-box-search" name="stq" type="text" placeholder="I am looking for..." />
            <label className="c-input__label hide" htmlFor="st-search-input-header">search input header</label>
          </div>
          <div className="c-search__close js-toggleSearchBox">
            <a className="full-box-close" tabIndex={0} onClick={handleToggle}>
              <span className="icon-close"></span>
            </a>
          </div>
        </div>
        <ul className="c-search__listwrapper"></ul>
      </form>
    </div>
  );
}

// Main component that provides context
export default function QuickLinksSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  return (
    <SearchContext.Provider value={{ isSearchOpen, setIsSearchOpen, searchBoxRef }}>
      <QuickLinksSearchIcon />
      <QuickLinksSearchBox />
    </SearchContext.Provider>
  );
}

