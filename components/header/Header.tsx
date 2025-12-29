import TopMenu from './TopMenu';
import MenuButton from '../navigation/MenuButton';
import MainNav from '../navigation/MainNav';
import SiteLogo from './SiteLogo';
import QuickLinks from './QuickLinks';

export default function Header() {
  return (
    <header className="site-header t-premium__header -top-menu" data-lang="No" data-theme="premium" data-type="Accessibility">
      <div className="container site-header__content -top-menu-content">
        <TopMenu />
      </div>
      <div className="container site-header__content -top-menu-left">
        <MenuButton />
        <MainNav />
        <SiteLogo />
        <QuickLinks />
      </div>
    </header>
  );
}



