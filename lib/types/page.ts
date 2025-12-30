export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: string;
      'max-snippet'?: number;
    };
  };
}

// Hero Section Data
export interface HeroSectionData {
  category: string;
  title: string;
}

// Tab Navigation Data
export interface TabData {
  href: string;
  label: string;
  isActive?: boolean;
}

// Content Section Types
export interface ParagraphSection {
  type: 'paragraph';
  content: string;
}

export interface ListSection {
  type: 'list';
  columns?: number;
  items: string[];
}

export interface ContactInfoSection {
  type: 'contactInfo';
  address: {
    company: string;
    address: string[];
    phone?: {
      href: string;
      label: string;
    };
  };
  map?: {
    src: string;
    title: string;
  };
}

export interface ContactCardItem {
  icon: string;
  title: string;
  content: string;
  highlight?: string;
  link?: {
    href: string;
    label: string;
    className?: string;
  };
}

export interface GetInTouchSection {
  type: 'getInTouch';
  title: string;
  items: ContactCardItem[];
}

export interface TwoColumnSection {
  type: 'twoColumn';
  image?: string | { src: string; alt: string };
  imageAlt?: string;
  title?: string;
  content?: string;
  listItems?: string[];
  items?: string[];
  reverse?: boolean;
}

export interface FeaturedProduct {
  image: string;
  alt: string;
  category: string;
  title: string;
}

export interface FeaturedProductsSection {
  type: 'featuredProducts';
  title: string;
  description: string;
  disclaimer?: string;
  products: FeaturedProduct[];
}

export interface ContactAdvisorSection {
  type: 'contactAdvisor';
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
}

export interface PdfDownloadItem {
  title: string;
  date?: string;
  href: string;
}

export interface PdfDownloadsSection {
  type: 'pdfDownloads' | 'downloads';
  items: PdfDownloadItem[];
}

export interface ImageBannerSection {
  type: 'imageBanner';
  src: string;
  alt: string;
  maxHeight?: string;
}

export interface InvestmentServiceGridSection {
  type: 'investmentServiceGrid';
  grid: any; // Complex grid structure
}

export interface IntroSection {
  type: 'intro';
  title: string;
  content?: string;
  paragraphs?: string[];
}

export interface ComparisonGridItem {
  title: string;
  ideaGeneration: string;
  tradeDecision: string;
  services: string[];
  link?: {
    href: string;
    label: string;
  };
}

export interface ComparisonGridSection {
  type: 'comparisonGrid';
  items: ComparisonGridItem[];
}

export type ContentSection =
  | ParagraphSection
  | ListSection
  | ContactInfoSection
  | GetInTouchSection
  | TwoColumnSection
  | PdfDownloadsSection
  | ImageBannerSection
  | InvestmentServiceGridSection
  | IntroSection
  | ComparisonGridSection
  | FeaturedProductsSection
  | ContactAdvisorSection;

// Page Content Structure
export interface PageContent {
  hero?: HeroSectionData;
  subtitle?: string;
  sections?: ContentSection[];
  tabs?: TabData[];
  bannerImage?: {
    src: string;
    alt: string;
    maxHeight?: string;
  };
  grid?: any; // Investment service grid
  [key: string]: any; // Allow additional properties
}

export interface PageData {
  metadata: PageMetadata;
  content: PageContent;
}

