'use client';

import { useEffect } from 'react';

export function useDirhamSymbol() {
  useEffect(() => {
    // Inject style for .icon-z-dirham class
    const style = document.createElement('style');
    style.textContent = `
      .icon-z-dirham:before {
        font-family: "icon-font";
        content: "\\E014";
        display: inline-block;
        line-height: inherit !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        font-size: inherit;
        text-decoration: inherit;
        text-transform: none;
        text-rendering: auto;
        vertical-align: -0.15em;
        speak: none;
      }
    `;
    document.head.appendChild(style);

    function replaceDirhamSymbols() {
      const elements = document.querySelectorAll(
        '.site-content *:not(script):not(style):not(noscript):not(p), .c-calculator *'
      );

      elements.forEach((el) => {
        if ((el as HTMLElement).closest('[no-dirham-symbol]')) return;

        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        let node;

        while ((node = walker.nextNode())) {
          if (
            /AED|درهم/.test(node.nodeValue || '') &&
            !(node.parentNode as Element)?.closest?.('.icon-z-dirham') &&
            !(node.parentNode as Element)?.closest?.('[no-dirham-symbol]')
          ) {
            const parent = node.parentNode;
            if (!parent) return;

            const replaced = (node.nodeValue || '')
              .replace(/(\d)\s?AED\b/g, '$1 <i aria-hidden="true" class="icon-z-dirham"><span class="sr-only" no-dirham-symbol>AED</span></i>')
              .replace(/\bAED\s?(\d)/g, '<i aria-hidden="true" class="icon-z-dirham"><span class="sr-only" no-dirham-symbol>AED</span></i>$1');

            if (replaced !== node.nodeValue) {
              const span = document.createElement('span');
              span.innerHTML = replaced;

              while (span.firstChild) {
                parent.insertBefore(span.firstChild, node);
              }
              parent.removeChild(node);
            }
          }
        }
      });
    }

    if (document.readyState !== 'loading') {
      replaceDirhamSymbols();
    }

    document.addEventListener('DOMContentLoaded', () => {
      replaceDirhamSymbols();
      setTimeout(() => {
        replaceDirhamSymbols();
      }, 1000);
    });

    window.addEventListener('load', replaceDirhamSymbols);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
}



