import Link from 'next/link';
import { TabData } from '@/lib/types/page';

interface TabNavigationProps {
  tabs: TabData[];
}

export default function TabNavigation({ tabs }: TabNavigationProps) {
  return (
    <div className="o-comp o-tabs">
      <div className="o-comp__content container -tab-only">
        <div className="o-tabs__tab-nav__wrapper">
          <div className="o-tabs__tab-nav__holder">
            <div className="nav nav-prev hide"></div>
            <div className="o-tabs__tab-nav">
              <ul className="o-tabs__tab-nav-list">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`o-tabs__tab-nav-item ${tab.isActive ? 'is-selected' : ''}`}
                  >
                    {tab.isActive ? (
                      <a className="o-tabs__tab-nav-link-redirect is-active" href={tab.href}>
                        {tab.label}
                      </a>
                    ) : (
                      <Link className="o-tabs__tab-nav-link-redirect" href={tab.href}>
                        {tab.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav nav-next hide"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


