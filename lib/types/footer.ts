export interface FooterLogo {
  href: string;
  id: string;
  srOnly: string;
}

export interface SocialMediaLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedIn';
  href: string;
  srOnly: string;
}

export interface FooterNavigationItem {
  href?: string;
  label: string;
  target?: string;
  ariaLabel?: string;
  style?: {
    lineHeight?: number;
    padding?: string;
  };
  type?: 'address' | 'phone' | 'email';
  content?: string;
}

export interface FooterNavigationSection {
  title: string;
  items: FooterNavigationItem[];
}

export interface FooterLink {
  href: string;
  label: string;
  target?: string;
  rel?: string;
}

export interface FooterCopyright {
  text: string;
  additional: string;
}

export interface FooterData {
  logo: FooterLogo;
  socialMedia: SocialMediaLink[];
  navigation: FooterNavigationSection[];
  footerLinks: FooterLink[];
  copyright: FooterCopyright;
}


