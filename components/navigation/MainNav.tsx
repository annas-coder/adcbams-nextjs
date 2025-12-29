import NavLevels from './NavLevels';

export default function MainNav() {
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
              <a href="/en/" className="is-hidden">ADCB Asset Management Limited</a>
            </li>
          </ul>
        </div>

        <NavLevels />

        <div className="nav-footer menu-footer-bar hide" style={{}}>
          <ul className="nav-footer__list">
            <li>
              <a href="/en/contact/" target="_self" className="nav-footer-item">
                Contact Us
              </a>
            </li>
            <li>
              <a className="nav-footer-item" href="/en/about/" target="_blank">
                About Us
              </a>
            </li>
          </ul>
          <div className="nav-footer__languages"></div>
        </div>
      </div>
    </nav>
  );
}






