export default function NavLevels() {
  return (
    <div className="col-md-25 nav-levels -js-sm-minus-visible-nav-levels">
      <ul className="nav-lvl hidden-md hidden-lg hidden-xl" menu-level="1">
        <li className="nav-lvl__item -active-private active-main is-active">
          <a href="#" className="is-hidden" aria-label="private">
            ADCB Asset Management Limited
          </a>
        </li>
      </ul>

      <ul data-property="/private" className="nav-lvl01 is-private show">
        <li className="nav-lvl01__item o-comp-collapse hidden-md hidden-lg hidden-xl collapsed">
          <a href="/en/" className="nav-lvl01__link">Overview</a>
        </li>

        <li className="nav-lvl01__item o-comp-collapse">
          <a className="nav-lvl01__link -js-has-children" href="/en/investment-services/" target="_self">
            Investment Services
          </a>
          <ul className="nav-lvl02 o-comp-collapse__content">
            <li className="nav-lvl02__item">
              <a className="nav-lvl02__link" href="/en/investment-services/self-directed-investment/" target="_self">
                Self directed investments
              </a>
            </li>
            <li className="nav-lvl02__item">
              <a className="nav-lvl02__link" href="/en/investment-services/advisory-solutions/" target="_self">
                Advisory Solutions
              </a>
            </li>
            <li className="nav-lvl02__item">
              <a className="nav-lvl02__link" href="/en/investment-services/discretionary-portfolio-management/" target="_self">
                Discretionary Portfolio Management
              </a>
            </li>
            <li className="nav-lvl02__item">
              <a className="nav-lvl02__link" href="/en/investment-services/wealth-planning/" target="_self">
                Wealth Planning
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-lvl01__item o-comp-collapse">
          <a className="nav-lvl01__link -js-has-children" href="/en/insights/" target="_self">
            Insights
          </a>
          <ul className="nav-lvl02 o-comp-collapse__content">
            <li className="nav-lvl02__item">
              <a className="nav-lvl02__link" href="/en/insights/investment-insights" target="_self">
                Investment Insights
              </a>
            </li>
            <li className="nav-lvl02__item">
              <a className="nav-lvl02__link" href="/en/insights/investment-strategy" target="_self">
                Investment Strategy
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}






