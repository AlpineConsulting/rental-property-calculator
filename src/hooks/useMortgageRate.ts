// src/hooks/useMortgageRate.ts
'use client';

import { useState, useEffect } from 'react';

interface MortgageRateData {
  rate: number;
  lastUpdated: string;
  isLoading: boolean;
  error: boolean;
}

export function useMortgageRate(): MortgageRateData {
  const [rateData, setRateData] = useState<MortgageRateData>({
    rate: 5.99, // Fallback default
    lastUpdated: '',
    isLoading: true,
    error: false
  });

  useEffect(() => {
    async function fetchRate() {
      try {
        // Freddie Mac Primary Mortgage Market Survey (free, no API key)
        // Updated every Thursday with previous week's data
        const response = await fetch(
          'https://www.freddiemac.com/pmms/pmms30.json',
          { cache: 'no-store' }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Get most recent rate (first item in array)
        const latestRate = data[0];
        const rate = parseFloat(latestRate.value);

        setRateData({
          rate: rate,
          lastUpdated: latestRate.date,
          isLoading: false,
          error: false
        });

        // Log success to Google Analytics for monitoring
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'mortgage_rate_loaded', {
            event_category: 'api_success',
            event_label: 'freddie_mac_rate',
            value: Math.round(rate * 100) // e.g., 599 for 5.99%
          });
        }

        console.log(`✓ Mortgage rate loaded: ${rate}% (updated ${latestRate.date})`);
        
      } catch (error) {
        console.error('❌ Failed to fetch mortgage rate:', error);
        
        // Send error notification to Google Analytics
        // You can set up alerts in GA4 to email you when this fires
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'mortgage_rate_fetch_failed', {
            event_category: 'api_error',
            event_label: 'freddie_mac_api_down',
            value: 1
          });
        }

        // Use fallback rate
        setRateData({
          rate: 5.99, // Safe fallback
          lastUpdated: '',
          isLoading: false,
          error: true
        });
      }
    }

    fetchRate();
  }, []); // Only fetch once on mount

  return rateData;
}
