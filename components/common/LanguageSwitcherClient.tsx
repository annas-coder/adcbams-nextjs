'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    $: any;
  }
}

export default function LanguageSwitcherClient() {
  useEffect(() => {
    // Language switcher script
    if (typeof window !== 'undefined' && (window as any).$) {
      const _pageloc = window.location.pathname;
      let _changelocation = '';

      if (_pageloc.indexOf('/en') >= 0) {
        const switchLang = document.getElementById('_switchLang');
        if (switchLang) {
          switchLang.textContent = switchLang.textContent?.replace('English', 'عربي') || '';
        }
        _changelocation = _pageloc.replace('/en/', '/ar/');
      }
      if (_pageloc.indexOf('/ar') >= 0) {
        const switchLang = document.getElementById('_switchLang');
        if (switchLang) {
          switchLang.textContent = switchLang.textContent?.replace('عربي', 'English') || '';
        }
        _changelocation = _pageloc.replace('/ar/', '/en/');
      }
      const switchLang = document.getElementById('_switchLang');
      if (switchLang && _changelocation) {
        switchLang.setAttribute('href', _changelocation);
      }
    }
  }, []);

  return null; // This component only handles client-side logic
}

