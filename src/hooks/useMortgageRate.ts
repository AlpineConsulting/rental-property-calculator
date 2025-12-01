// src/hooks/useMortgageRate.ts
'use client';

import { useState, useEffect } from 'react';

interface MortgageRateData {
  rates: {
    '30-year-fixed': number;
    '15-year-fixed': number;
    '20-year-fixed': number;
    '10-year-fixed': number;
    '5-1-arm': number;
    '7-1-arm': number;
  };
  lastUpdated: string;
  isLoading: boolean;
  error: boolean;
  cached: boolean; // Track if data came from cache
}

const CACHE_KEY = 'mortgage-rates-cache';
const CACHE_VERSION = 'v2.1'; // Change this when you update labels/structure
const CACHE_DURATION = 86400000;

export function useMortgageRate(): MortgageRateData {
  const [rateData, setRateData] = useState<MortgageRateData>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          
          // ⭐ ADD THIS: Check version FIRST
          if (parsed.version !== CACHE_VERSION) {
            console.log('⚠️ Cache version mismatch, clearing old cache...');
            sessionStorage.removeItem(CACHE_KEY);
            // Return default state, will fetch fresh data
            return {
              rates: {
                '30-year-fixed': 6.79,
                '15-year-fixed': 5.99,
                '20-year-fixed': 6.29,
                '10-year-fixed': 5.79,
                '5-1-arm': 6.49,
                '7-1-arm': 6.59,
              },
              lastUpdated: '',
              isLoading: true,
              error: false,
              cached: false
            };
          }
          
          // Now check age
          const age = Date.now() - parsed.timestamp;
          
          // If cache is less than 24 hours old, use it
          if (age < CACHE_DURATION) {
            console.log(`✅ Using cached rates (${Math.round(age / 60000)} minutes old)`);
            return {
              ...parsed.data,
              cached: true,
              isLoading: false
            };
          } else {
            console.log('⏰ Cache expired, will fetch fresh data');
            sessionStorage.removeItem(CACHE_KEY);
          }
        }
      } catch (error) {
        console.error('Error reading cache:', error);
        sessionStorage.removeItem(CACHE_KEY);
      }
    }
    
    // Default state if no cache or cache invalid
    return {
      rates: {
        '30-year-fixed': 6.79,
        '15-year-fixed': 5.99,
        '20-year-fixed': 6.29,
        '10-year-fixed': 5.79,
        '5-1-arm': 6.49,
        '7-1-arm': 6.59,
      },
      lastUpdated: '',
      isLoading: true,
      error: false,
      cached: false
    };
  });

  useEffect(() => {
    async function fetchRates() {
      // Check cache again (in case state initialization didn't load it)
      if (typeof window !== 'undefined') {
        try {
          const cached = sessionStorage.getItem(CACHE_KEY);
          if (cached) {
            const parsed = JSON.parse(cached);
            const age = Date.now() - parsed.timestamp;
            
            if (age < CACHE_DURATION) {
              console.log('✅ Cache still valid, skipping API call');
              setRateData({
                ...parsed.data,
                cached: true,
                isLoading: false
              });
              return; // Skip API call
            }
          }
        } catch (error) {
          console.error('Error reading cache:', error);
        }
      }

      // Cache miss or expired - fetch from API
      console.log('🔍 Fetching fresh mortgage rates from API...');
      
      try {
        const response = await fetch('/api/mortgage-rate', { 
          cache: 'no-store' 
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success !== false) {
          const newRateData: MortgageRateData = {
            rates: data.rates || {
              '30-year-fixed': data.rate || 6.79,
              '15-year-fixed': data.rate ? data.rate - 0.5 : 5.99,
              '20-year-fixed': data.rate ? data.rate - 0.3 : 6.29,
              '10-year-fixed': data.rate ? data.rate - 0.7 : 5.79,
              '5-1-arm': data.rate ? data.rate + 0.2 : 6.49,
              '7-1-arm': data.rate ? data.rate + 0.3 : 6.59,
            },
            lastUpdated: data.date || new Date().toISOString().split('T')[0],
            isLoading: false,
            error: false,
            cached: false
          };
          
          setRateData(newRateData);
          
          // Cache in sessionStorage
          if (typeof window !== 'undefined') {
            try {
              sessionStorage.setItem(CACHE_KEY, JSON.stringify({
                version: CACHE_VERSION,
                data: {
                  rates: newRateData.rates,
                  lastUpdated: newRateData.lastUpdated,
                  error: false
                },
                timestamp: Date.now()
              }));
              console.log('💾 Rates cached for 24 hours');
            } catch (error) {
              console.error('Error caching rates:', error);
            }
          }

          // Log success to Google Analytics
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'mortgage_rates_loaded', {
              event_category: 'api_success',
              event_label: 'all_loan_types',
              value: 1
            });
          }

          console.log(`✅ Fresh rates loaded and cached`);
        } else {
          throw new Error('API returned unsuccessful response');
        }
        
      } catch (error) {
        console.error('❌ Failed to fetch mortgage rates:', error);
        
        // Log error to Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'mortgage_rates_fetch_failed', {
            event_category: 'api_error',
            event_label: 'client_cache_miss',
            value: 1
          });
        }

        // Use fallback rates
        setRateData(prev => ({
          ...prev,
          isLoading: false,
          error: true,
          cached: false
        }));
        
        console.log('⚠️ Using fallback rates');
      }
    }

    // Only fetch if we don't have cached data
    if (!rateData.cached || rateData.isLoading) {
      fetchRates();
    }
  }, []); // Empty dependency array - only run once on mount

  return rateData;
}

// Export function to manually clear cache (useful for development/testing)
export function clearMortgageRateCache() {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(CACHE_KEY);
    console.log('🗑️ Mortgage rate cache cleared');
  }
}
