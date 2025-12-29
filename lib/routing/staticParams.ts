/**
 * Static Params Utilities
 * 
 * Helper functions for generating static params for Next.js static export.
 * Since we're using output: 'export', all routes must be statically generated.
 */

/**
 * Get all static routes for the application
 * This can be used with generateStaticParams for dynamic routes
 */
export function getAllStaticRoutes(): string[] {
  return [
    '/',
    '/en',
    '/en/about',
    '/en/about/sof',
    '/en/about/terms',
    '/en/contact',
    '/en/investment-services',
    '/en/investment-services/self-directed-investment',
    '/en/investment-services/advisory-solutions',
    '/en/investment-services/discretionary-portfolio-management',
    '/en/investment-services/wealth-planning',
    '/en/insights',
    '/en/insights/investment-insights',
    '/en/insights/investment-strategy',
  ];
}

/**
 * Generate static params for a dynamic route segment
 * Example usage in [slug]/page.tsx:
 * 
 * export async function generateStaticParams() {
 *   return generateParamsForSegment(['page1', 'page2', 'page3']);
 * }
 */
export function generateParamsForSegment(
  segments: string[]
): Array<{ [key: string]: string }> {
  return segments.map((segment) => ({ slug: segment }));
}

/**
 * Generate static params for nested dynamic routes
 * Example: [lang]/[category]/[slug]
 */
export function generateNestedParams(
  params: Record<string, string[]>
): Array<Record<string, string>> {
  const keys = Object.keys(params);
  const values = keys.map((key) => params[key]);
  
  // Generate all combinations
  const combinations: Array<Record<string, string>> = [];
  
  function generateCombinations(
    current: Record<string, string>,
    index: number
  ) {
    if (index === keys.length) {
      combinations.push({ ...current });
      return;
    }
    
    const key = keys[index];
    const valueArray = values[index];
    
    for (const value of valueArray) {
      generateCombinations({ ...current, [key]: value }, index + 1);
    }
  }
  
  generateCombinations({}, 0);
  return combinations;
}

/**
 * Example: Generate params for language-based routes
 * [lang]/page.tsx
 */
export function generateLanguageParams(): Array<{ lang: string }> {
  return [{ lang: 'en' }, { lang: 'ar' }];
}


