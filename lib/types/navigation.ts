export interface TopMenuItem {
  href: string;
  label: string;
  className: string;
}

export interface NavigationChild {
  href: string;
  label: string;
}

export interface NavigationMenuItem {
  href: string;
  label: string;
  hasChildren: boolean;
  children?: NavigationChild[];
}

export interface NavigationData {
  topMenu: TopMenuItem[];
  mainNav: {
    brandLabel: string;
    overviewLink: {
      href: string;
      label: string;
    };
    menuItems: NavigationMenuItem[];
  };
  navFooter: Array<{
    href: string;
    label: string;
    target?: string;
  }>;
}


