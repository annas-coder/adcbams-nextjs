import QuickLinksLogin from './QuickLinksLogin';
import QuickLinksSearch from './QuickLinksSearch';

export default function QuickLinks() {
  return (
    <>
      <ul className="c-quick-links">
        <li className="c-quick-links__item lang-ar hidden-xs hidden-sm hide">
          <a href="/ar/personal/" id="_switchLang" lang="ar-AE" className="c-quick-links__link lang-switch">
            عربي
          </a>
        </li>
        <QuickLinksLogin isMobile={true} />
        <QuickLinksSearch />
        <QuickLinksLogin isMobile={false} />
      </ul>
    </>
  );
}






