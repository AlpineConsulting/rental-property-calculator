// src/app/api/mortgage-rate/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://api.hapi.so/rates?state=CA', // Change state as needed
      {
        headers: {
          'x-api-key': process.env.HAPI_API_KEY || ''
        },
        cache: 'no-store'
      }
    );

    if (!response.ok) {
      throw new Error(`h.api returned ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      rate: data.thirty_year_fixed,
      date: data.event_datetime.split('T')[0],
      success: true
    });

  } catch (error) {
    return NextResponse.json({
      rate: 6.79,
      date: new Date().toISOString().split('T')[0],
      success: false
    }, { status: 200 });
  }
}

// Enable CORS for your own domain
export const runtime = 'edge'; // Use edge runtime for faster response
