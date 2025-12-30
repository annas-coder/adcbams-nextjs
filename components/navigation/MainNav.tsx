import NavLevels from './NavLevels';
import type { NavigationData } from '@/lib/types';

interface MainNavProps {
  navigationData: NavigationData;
}

export default function MainNav({ navigationData }: MainNavProps) {
  return (
    <nav role="navigation" className="c-main-nav t-private theme-dark">
      <div className="c-main-nav__content container">
        <div className="main-header-nav">
          <div className="o-switch-button">
            <ul className="nav-header">
              <li className="o-close-button hidden">
                <a className="o-close-button__icon icon-close" href="#" aria-label="close"></a>
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






