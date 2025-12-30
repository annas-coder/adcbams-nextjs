import type { TopMenuItem } from '@/lib/types';

interface TopMenuProps {
  menuItems: TopMenuItem[];
}

export default function TopMenu({ menuItems }: TopMenuProps) {
  return (
    <>
      <div className="top-menu -desktop hidden-sm hidden-xs">
        <div className="o-switch-button">
          <div className="o-switch-button__text">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={item.className}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="top-menu -mobile hidden-md hidden-lg hidden-xl">
        <div className="o-switch-button">
          <div className="o-switch-button__text">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={item.className}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}






