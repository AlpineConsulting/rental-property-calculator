// src/app/api/mortgage-rate/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://www.freddiemac.com/pmms/pmms30.json',
      { 
        cache: 'no-store',
        next: { revalidate: 0 }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const latestRate = data[0];

    return NextResponse.json({
      rate: parseFloat(latestRate.value),
      date: latestRate.date,
      success: true
    });

  } catch (error) {
    console.error('Failed to fetch mortgage rate:', error);
    
    // Return fallback rate
    return NextResponse.json({
      rate: 5.99,
      date: '',
      success: false,
      error: 'Failed to fetch current rate'
    }, { status: 200 }); // Still return 200 so app doesn't break
  }
}

// Enable CORS for your own domain
export const runtime = 'edge'; // Use edge runtime for faster response
