import type { Metadata } from 'next';
import { PageData } from '@/lib/types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adcb.com';

/**
 * Helper function to generate metadata from page data
 */
export function generateMetadataFromPageData(pageData: PageData): Metadata {
  const metadata = pageData.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
    },
    openGraph: metadata.openGraph ? {
      title: metadata.openGraph.title || metadata.title,
      description: metadata.openGraph.description || metadata.description,
      url: metadata.openGraph.url || siteUrl,
      siteName: metadata.openGraph.siteName || 'ADCB Asset Management',
      images: metadata.openGraph.images,
      locale: metadata.openGraph.locale || 'en_US',
      type: (metadata.openGraph.type || 'website') as 'article' | 'website' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | undefined,
    } : undefined,
    twitter: metadata.twitter ? {
      card: (metadata.twitter.card || 'summary_large_image') as 'summary_large_image' | 'summary' | 'player' | 'app',
      title: metadata.twitter.title || metadata.title,
      description: metadata.twitter.description || metadata.description,
      images: metadata.twitter.images,
    } : undefined,
    robots: metadata.robots ? {
      index: metadata.robots.index,
      follow: metadata.robots.follow,
      googleBot: metadata.robots.googleBot ? {
        index: metadata.robots.googleBot.index,
        follow: metadata.robots.googleBot.follow,
        'max-video-preview': metadata.robots.googleBot['max-video-preview'],
        'max-image-preview': metadata.robots.googleBot['max-image-preview'] as 'none' | 'standard' | 'large' | undefined,
        'max-snippet': metadata.robots.googleBot['max-snippet'],
      } : undefined,
    } : undefined,
  };
}

