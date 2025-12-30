export interface DefaultMetadata {
  title: string;
  description: string;
  siteUrl: string;
}

export interface SiteConfig {
  siteName: string;
  defaultLanguage: string;
  defaultMetadata: DefaultMetadata;
  favicon: string;
}

