'use client';

import { useState } from 'react';

export default function QuickLinksSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <li className="c-quick-links__item hidden-xs hidden-sm">
        <a href="#" className="c-quick-links__link icon-search js-toggleSearchBox" onClick={(e) => { e.preventDefault(); setIsSearchOpen(!isSearchOpen); }}>
          <span className="sr-only">Search</span>
        </a>
      </li>
      {isSearchOpen && (
        <div className="c-search js-searchBox">
          <form name="ADCB Search" role="search" action="/en/search.aspx" method="get" target="_top" className="c-search__wrapper container">
            <div className="c-search__elements">
              <div className="c-search__input">
                <input id="st-search-input-header" className="full-box-search" name="stq" type="text" placeholder="I am looking for..." />
                <label className="c-input__label hide" htmlFor="st-search-input-header">search input header</label>
              </div>
              <div className="c-search__close js-toggleSearchBox">
                <a className="full-box-close" tabIndex={0} onClick={(e) => { e.preventDefault(); setIsSearchOpen(false); }}>
                  <span className="icon-close"></span>
                </a>
              </div>
            </div>
            <ul className="c-search__listwrapper"></ul>
          </form>
        </div>
      )}
    </>
  );
}

