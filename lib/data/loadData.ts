import { readFile } from 'fs/promises';
import { join } from 'path';
import type {
  NavigationData,
  FooterData,
  HeaderData,
  SiteConfig,
  PageData,
} from '@/lib/types';

/**
 * Load JSON data from the data directory
 * This utility is for server-side use only
 */
export async function loadJsonData<T>(filename: string): Promise<T> {
  const filePath = join(process.cwd(), 'data', filename);
  const fileContents = await readFile(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

/**
 * Load JSON data from the data/pages directory
 */
export async function loadPageJsonData<T>(filename: string): Promise<T> {
  const filePath = join(process.cwd(), 'data', 'pages', filename);
  const fileContents = await readFile(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

/**
 * Convert route pathname to page JSON filename
 * Examples:
 *   "/en" -> "home.json"
 *   "/en/about" -> "about.json"
 *   "/en/about/terms" -> "about-terms.json"
 *   "/en/investment-services/self-directed-investment" -> "investment-services-self-directed.json"
 */
export function getPageSlug(pathname: string): string {
  // Remove leading/trailing slashes and /en prefix
  let slug = pathname.replace(/^\/en\/?/, '').replace(/\/$/, '');
  
  // Handle root/home page
  if (!slug || slug === '') {
    return 'home';
  }
  
  // Replace slashes with hyphens
  slug = slug.replace(/\//g, '-');
  
  // Remove .aspx extension if present
  slug = slug.replace(/\.aspx$/, '');
  
  return slug;
}

/**
 * Load navigation data
 */
export async function loadNavigationData(): Promise<NavigationData> {
  return loadJsonData<NavigationData>('navigation.json');
}

/**
 * Load footer data
 */
export async function loadFooterData(): Promise<FooterData> {
  return loadJsonData<FooterData>('footer.json');
}

/**
 * Load header data
 */
export async function loadHeaderData(): Promise<HeaderData> {
  return loadJsonData<HeaderData>('header.json');
}

/**
 * Load site configuration
 */
export async function loadSiteConfig(): Promise<SiteConfig> {
  return loadJsonData<SiteConfig>('site-config.json');
}

/**
 * Load page-specific data (metadata + content) from individual JSON file
 * @param slug - Page slug (e.g., "home", "about", "about-terms")
 */
export async function loadPageData(slug: string): Promise<PageData> {
  const filename = `${slug}.json`;
  return loadPageJsonData<PageData>(filename);
}

/**
 * Load page data by pathname
 * @param pathname - Route pathname (e.g., "/en/about", "/en/investment-services/self-directed-investment")
 */
export async function loadPageDataByPath(pathname: string): Promise<PageData> {
  const slug = getPageSlug(pathname);
  return loadPageData(slug);
}

/**
 * Load get started steps data
 */
export async function loadGetStartedSteps() {
  return loadJsonData<Array<{
    icon: string;
    title: string;
    description: string;
    link: string | null;
    linkText?: string;
  }>>('get-started-steps.json');
}

/**
 * Load investment solutions data
 */
export async function loadInvestmentSolutions() {
  return loadJsonData<Array<{
    image: string;
    title: string;
    description: string;
    link: string;
  }>>('investment-solutions.json');
}

/**
 * Load hero banner data
 */
export async function loadHeroBannerData() {
  return loadJsonData<any[]>('hero-banner.json');
}

/**
 * Load metadata configuration (legacy - kept for backward compatibility)
 */
export async function loadMetadata() {
  return loadJsonData<{
    home?: {
      title: string;
      description: string;
      keywords: string[];
      canonical: string;
    };
    insights?: {
      title: string;
      description: string;
      canonical: string;
    };
    investmentServices?: {
      title: string;
      description: string;
      canonical: string;
    };
  }>('metadata.json');
}

