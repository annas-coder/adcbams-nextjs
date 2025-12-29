'use client';

import { useDirhamSymbol } from '@/lib/hooks/useDirhamSymbol';

export default function DirhamSymbolProvider() {
  useDirhamSymbol();
  return null;
}

