'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

/**
 * Converts URL segment to readable label
 * e.g., "self-directed-investment" -> "Self Directed Investment"
 */
function segmentToLabel(segment: string): string {
  // Handle empty segment
  if (!segment) return '';
  
  // Replace hyphens with spaces and capitalize each word
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Generates breadcrumb items from pathname
 */
function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: Array<{ href: string; label: string }> = [];
  
  // Always start with Home
  breadcrumbs.push({ href: '/en/', label: 'Home' });
  
  // Build path progressively
  let currentPath = '/en';
  segments.forEach((segment, index) => {
    // Skip 'en' segment as it's already in the base path
    if (segment === 'en') return;
    
    currentPath += `/${segment}`;
    const label = segmentToLabel(segment);
    breadcrumbs.push({ href: currentPath, label });
  });
  
  return breadcrumbs;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/en' || pathname === '/en/') {
    return null;
  }
  
  const breadcrumbs = generateBreadcrumbs(pathname);
  
  // Don't show if only Home (shouldn't happen, but safety check)
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  return (
    <nav 
      className="c-breadcrumbs" 
      aria-label="Breadcrumb"
      style={{ borderTop: '1px solid rgba(255,255,255,.3)' }}
    >
      <div className="container">
        <ul className="c-breadcrumbs__list">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={crumb.href} className="c-breadcrumbs__item">
                <span style={{ marginRight: '6px' }}>&gt;</span>
                {isLast ? (
                  <span className="c-breadcrumbs__link">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="c-breadcrumbs__link">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Hide the :before pseudo-element since we're using JSX */
            .c-breadcrumbs__link:before {
              display: none !important;
            }
          `
        }} />
      </div>
    </nav>
  );
}

