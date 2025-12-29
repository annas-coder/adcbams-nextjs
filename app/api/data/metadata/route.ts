import { NextResponse } from 'next/server';
import { loadMetadata } from '@/lib/api/dataLoader';

export async function GET() {
  try {
    const data = await loadMetadata();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error loading metadata:', error);
    return NextResponse.json(
      { error: 'Failed to load data' },
      { status: 500 }
    );
  }
}

