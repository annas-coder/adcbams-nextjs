import TopMenu from './TopMenu';
import MenuButton from '../navigation/MenuButton';
import MainNav from '../navigation/MainNav';
import SiteLogo from './SiteLogo';
import QuickLinks from './QuickLinks';
import type { HeaderData, NavigationData } from '@/lib/types';

interface HeaderProps {
  headerData: HeaderData;
  navigationData: NavigationData;
}

export default function Header({ headerData, navigationData }: HeaderProps) {
  return (
    <header
      className={headerData.className}
      data-lang={headerData.dataAttributes['data-lang']}
      data-theme={headerData.dataAttributes['data-theme']}
      data-type={headerData.dataAttributes['data-type']}
    >
      <div className="container site-header__content -top-menu-content">
        <TopMenu menuItems={navigationData.topMenu} />
      </div>
      <div className="container site-header__content -top-menu-left">
        <MenuButton />
        <MainNav navigationData={navigationData} />
        <SiteLogo />
        <QuickLinks />
      </div>
    </header>
  );
}



