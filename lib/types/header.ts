export interface HeaderDataAttributes {
  'data-lang': string;
  'data-theme': string;
  'data-type': string;
}

export interface QuickLinksLoginItem {
  href: string;
  label: string;
  target: string;
}

export interface QuickLinksLogin {
  mobile: {
    label: string;
    items: QuickLinksLoginItem[];
  };
  desktop: {
    label: string;
    items: QuickLinksLoginItem[];
  };
}

export interface QuickLinksSearch {
  enabled: boolean;
  action: string;
  method: string;
  placeholder: string;
  inputId: string;
  inputName: string;
}

export interface QuickLinks {
  languageSwitcher: {
    enabled: boolean;
    href: string;
    label: string;
    lang: string;
  };
  login: QuickLinksLogin;
  search: QuickLinksSearch;
}

export interface HeaderData {
  className: string;
  dataAttributes: HeaderDataAttributes;
  quickLinks: QuickLinks;
}


