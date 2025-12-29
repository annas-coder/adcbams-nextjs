'use client';

import DirhamSymbolProvider from '@/components/common/DirhamSymbolProvider';
import LanguageSwitcherClient from '@/components/common/LanguageSwitcherClient';

export default function HomePageClient() {
  return (
    <>
      <DirhamSymbolProvider />
      <LanguageSwitcherClient />
    </>
  );
}

