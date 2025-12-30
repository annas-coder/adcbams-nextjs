import type { NavigationMenuItem } from '@/lib/types';

interface NavLevelsProps {
  brandLabel: string;
  overviewLink: {
    href: string;
    label: string;
  };
  menuItems: NavigationMenuItem[];
}

export default function NavLevels({ brandLabel, overviewLink, menuItems }: NavLevelsProps) {
  return (
    <div className="col-md-25 nav-levels -js-sm-minus-visible-nav-levels">
      <ul className="nav-lvl hidden-md hidden-lg hidden-xl" menu-level="1">
        <li className="nav-lvl__item -active-private active-main is-active">
          <a href="#" className="is-hidden" aria-label="private">
            {brandLabel}
          </a>
        </li>
      </ul>

      <ul data-property="/private" className="nav-lvl01 is-private show">
        <li className="nav-lvl01__item o-comp-collapse hidden-md hidden-lg hidden-xl collapsed">
          <a href={overviewLink.href} className="nav-lvl01__link">{overviewLink.label}</a>
        </li>

        {menuItems.map((item, index) => (
          <li key={index} className="nav-lvl01__item o-comp-collapse">
            <a
              className={`nav-lvl01__link ${item.hasChildren ? '-js-has-children' : ''}`}
              href={item.href}
              target="_self"
            >
              {item.label}
            </a>
            {item.hasChildren && item.children && (
              <ul className="nav-lvl02 o-comp-collapse__content">
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} className="nav-lvl02__item">
                    <a className="nav-lvl02__link" href={child.href} target="_self">
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}






