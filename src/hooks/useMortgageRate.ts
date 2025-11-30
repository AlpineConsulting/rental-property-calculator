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
      console.log('🔍 Fetching mortgage rate from API route...');
      
      try {
        // Call our own API route instead of external API (bypasses CORS)
        const response = await fetch('/api/mortgage-rate', { 
          cache: 'no-store' 
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success) {
          setRateData({
            rate: data.rate,
            lastUpdated: data.date,
            isLoading: false,
            error: false
          });

          // Log success to Google Analytics
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'mortgage_rate_loaded', {
              event_category: 'api_success',
              event_label: 'freddie_mac_rate',
              value: Math.round(data.rate * 100)
            });
          }

          console.log(`✅ Mortgage rate loaded: ${data.rate}% (updated ${data.date})`);
        } else {
          throw new Error('API returned unsuccessful response');
        }
        
      } catch (error) {
        console.error('❌ Failed to fetch mortgage rate:', error);
        
        // Log error to Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'mortgage_rate_fetch_failed', {
            event_category: 'api_error',
            event_label: 'api_route_failed',
            value: 1
          });
        }

        // Use fallback rate
        setRateData({
          rate: 5.99,
          lastUpdated: '',
          isLoading: false,
          error: true
        });
        
        console.log('⚠️ Using fallback rate: 5.99%');
      }
    }

    fetchRate();
  }, []);

  return rateData;
}
