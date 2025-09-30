/**
 * Utilities for handling client/server rendering differences in Next.js
 * This prevents hydration mismatches and SSR errors
 */

import { useEffect, useState, type ReactNode, type FC } from 'react';

/**
 * Hook to safely detect if we're running on the client side
 * Prevents hydration mismatches by returning false during SSR
 */
export const useIsClient = (): boolean => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

/**
 * Hook for safely accessing window object
 * Returns null during SSR, actual window object on client
 */
export const useWindow = (): Window | null => {
  const [windowObject, setWindowObject] = useState<Window | null>(null);

  useEffect(() => {
    setWindowObject(window);
  }, []);

  return windowObject;
};

/**
 * Safely execute client-side only code
 * @param callback Function to execute on client side only
 * @param fallback Optional fallback value for server side
 */
export const clientOnly = <T,>(callback: () => T, fallback?: T): T | undefined => {
  if (typeof window !== 'undefined') {
    return callback();
  }
  return fallback;
};

/**
 * Safely get current URL hash
 * Returns empty string during SSR
 */
export const useHash = (): string => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    
    // Set initial hash
    updateHash();
    
    // Listen for hash changes
    window.addEventListener('hashchange', updateHash);
    
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  return hash;
};

/**
 * Safely check if we're in development mode
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

/**
 * Safe console logging that only logs in development
 */
export const devLog = (...args: any[]): void => {
  if (isDevelopment()) {
    // eslint-disable-next-line no-console
    console.log('[DEV]', ...args);
  }
};

/**
 * NoSSR Component - Wrapper to prevent SSR for specific components
 */
interface NoSSRProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const NoSSR: FC<NoSSRProps> = ({ children, fallback = null }) => {
  const isClient = useIsClient();
  
  return <>{isClient ? children : fallback}</>;
};

/**
 * Safe way to access browser APIs
 */
export const safeBrowserAPI = {
  /**
   * Safely get current page URL
   */
  getCurrentUrl: (): string => {
    return clientOnly(() => window.location.href, '') || '';
  },

  /**
   * Safely get current pathname
   */
  getPathname: (): string => {
    return clientOnly(() => window.location.pathname, '/') || '/';
  },

  /**
   * Safely get current hash
   */
  getHash: (): string => {
    return clientOnly(() => window.location.hash, '') || '';
  },

  /**
   * Safely scroll to element
   */
  scrollToElement: (elementId: string, behavior: ScrollBehavior = 'smooth'): void => {
    clientOnly(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior });
      }
    });
  }
};

/**
 * Hook for safe navigation and URL handling
 */
export const useSafeNavigation = () => {
  const isClient = useIsClient();
  const hash = useHash();

  const navigateToHash = (elementId: string) => {
    if (isClient) {
      safeBrowserAPI.scrollToElement(elementId);
    }
  };

  const isActiveHash = (targetHash: string): boolean => {
    return isClient && hash === targetHash;
  };

  return {
    isClient,
    hash,
    navigateToHash,
    isActiveHash,
    currentUrl: safeBrowserAPI.getCurrentUrl(),
    pathname: safeBrowserAPI.getPathname()
  };
};

/**
 * Analytics helper for safe tracking
 */
export const safeAnalytics = {
  /**
   * Safely track events to Google Analytics
   */
  trackEvent: (event: string, parameters?: Record<string, any>): void => {
    clientOnly(() => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', event, parameters);
      }
    });
  },

  /**
   * Track page views safely
   */
  trackPageView: (url?: string): void => {
    clientOnly(() => {
      if (typeof window === 'undefined') return;
      
      const pageUrl = url || window.location.href;
      
      // Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
          page_location: pageUrl,
          page_title: document.title
        });
      }
    });
  }
};

// Type declarations for global objects
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
    plausible?: (eventName: string, options?: { props?: any }) => void;
  }
}