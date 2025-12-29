import { readFile } from 'fs/promises';
import { join } from 'path';

/**
 * Load JSON data from the data directory
 * This utility is for server-side API routes only
 */
export async function loadJsonDataFromFile<T>(filename: string): Promise<T> {
  const filePath = join(process.cwd(), 'data', filename);
  const fileContents = await readFile(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

/**
 * Load get started steps data
 */
export async function loadGetStartedSteps() {
  return loadJsonDataFromFile<Array<{
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
  return loadJsonDataFromFile<Array<{
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
  return loadJsonDataFromFile<any[]>('hero-banner.json');
}

/**
 * Load metadata configuration
 */
export async function loadMetadata() {
  return loadJsonDataFromFile<{
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

