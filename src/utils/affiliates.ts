// Affiliate link configuration and management
export interface AffiliateLink {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'lending' | 'data' | 'insurance' | 'management' | 'education';
  featured: boolean;
  cta: string;
  logoUrl?: string;
  trustScore?: number;
}

// Central affiliate registry - Replace with your actual affiliate IDs
export const AFFILIATES: Record<string, AffiliateLink> = {
  // DSCR & Hard Money Lenders
  'lima-one': {
    id: 'lima-one',
    name: 'Lima One Capital',
    description: 'DSCR loans with competitive rates for real estate investors. No income verification required.',
    url: `https://limaone.com/apply?utm_source=${process.env.NEXT_PUBLIC_SITE_DOMAIN}&utm_medium=referral&utm_campaign=calculator`,
    category: 'lending',
    featured: true,
    cta: 'Get Pre-Qualified Today',
    trustScore: 95
  },
  
  'groundfloor': {
    id: 'groundfloor',
    name: 'Groundfloor',
    description: 'Hard money loans for fix-and-flip and BRRRR investments. Fast funding in 10 days.',
    url: `https://groundfloor.us/borrow?ref=${process.env.GROUNDFLOOR_AFFILIATE_ID}&utm_source=${process.env.NEXT_PUBLIC_SITE_DOMAIN}`,
    category: 'lending',
    featured: true,
    cta: 'Apply for Funding',
    trustScore: 90
  },

  'rental-property-financing': {
    id: 'rental-property-financing',
    name: 'Rental Property Financing',
    description: 'Specialized in rental property loans with flexible qualification requirements.',
    url: `https://rentalpropertyfinancing.com/?ref=${process.env.RPF_AFFILIATE_ID}`,
    category: 'lending',
    featured: false,
    cta: 'Get Quote'
  },

  // Property Data & Analysis Tools
  'airdna': {
    id: 'airdna',
    name: 'AirDNA',
    description: 'Short-term rental market data and analysis. Essential for Airbnb investment decisions.',
    url: `https://www.airdna.co/vacation-rental-data?utm_source=${process.env.NEXT_PUBLIC_SITE_DOMAIN}&utm_medium=affiliate&utm_campaign=calculator&ref=${process.env.AIRDNA_AFFILIATE_ID}`,
    category: 'data',
    featured: true,
    cta: 'Get Market Data',
    trustScore: 95
  },

  'rentometer': {
    id: 'rentometer',
    name: 'Rentometer',
    description: 'Compare rental prices in any neighborhood. Make data-driven rental pricing decisions.',
    url: `https://www.rentometer.com/?ref=${process.env.RENTOMETER_AFFILIATE_ID}`,
    category: 'data',
    featured: false,
    cta: 'Compare Rents'
  },

  'mashvisor': {
    id: 'mashvisor',
    name: 'Mashvisor',
    description: 'Real estate investment platform with comprehensive property analysis tools.',
    url: `https://www.mashvisor.com/signup?ref=${process.env.MASHVISOR_AFFILIATE_ID}`,
    category: 'data',
    featured: false,
    cta: 'Start Free Trial'
  },

  // Insurance Providers
  'steadily': {
    id: 'steadily',
    name: 'Steadily',
    description: 'Landlord insurance designed specifically for rental property investors.',
    url: `https://steadily.com/?utm_source=${process.env.NEXT_PUBLIC_SITE_DOMAIN}&utm_medium=affiliate&ref=${process.env.STEADILY_AFFILIATE_ID}`,
    category: 'insurance',
    featured: true,
    cta: 'Get Insurance Quote',
    trustScore: 90
  },

  'proper-insurance': {
    id: 'proper-insurance',
    name: 'Proper Insurance',
    description: 'Short-term rental insurance for Airbnb and VRBO properties.',
    url: `https://properinsurance.com/quote?ref=${process.env.PROPER_AFFILIATE_ID}`,
    category: 'insurance',
    featured: false,
    cta: 'Get STR Quote'
  },

  // Property Management Software
  'buildium': {
    id: 'buildium',
    name: 'Buildium',
    description: 'Complete property management software for landlords and property managers.',
    url: `https://www.buildium.com/free-trial/?utm_source=${process.env.NEXT_PUBLIC_SITE_DOMAIN}&ref=${process.env.BUILDIUM_AFFILIATE_ID}`,
    category: 'management',
    featured: false,
    cta: 'Start Free Trial'
  },

  'rentready': {
    id: 'rentready',
    name: 'RentReady',
    description: 'Streamlined property management for small to medium portfolios.',
    url: `https://www.rentready.com/signup?ref=${process.env.RENTREADY_AFFILIATE_ID}`,
    category: 'management',
    featured: false,
    cta: 'Try Free'
  },

  // Education & Resources
  'biggerpockets-pro': {
    id: 'biggerpockets-pro',
    name: 'BiggerPockets PRO',
    description: 'Premium real estate investing tools, calculators, and community access.',
    url: `https://www.biggerpockets.com/pro?utm_source=${process.env.NEXT_PUBLIC_SITE_DOMAIN}&ref=${process.env.BP_AFFILIATE_ID}`,
    category: 'education',
    featured: true,
    cta: 'Upgrade to PRO',
    trustScore: 95
  },

  'rei-course': {
    id: 'rei-course',
    name: 'Real Estate Investment Course',
    description: 'Complete course on rental property investing and wealth building.',
    url: `https://example-course.com/enroll?ref=${process.env.COURSE_AFFILIATE_ID}`,
    category: 'education',
    featured: false,
    cta: 'Enroll Now'
  }
};

/**
 * Get affiliate link by ID
 */
export const getAffiliateLink = (id: string): AffiliateLink | null => {
  return AFFILIATES[id] || null;
};

/**
 * Get all affiliate links by category
 */
export const getAffiliatesByCategory = (category: string): AffiliateLink[] => {
  return Object.values(AFFILIATES).filter(affiliate => affiliate.category === category);
};

/**
 * Get featured affiliate links
 */
export const getFeaturedAffiliates = (): AffiliateLink[] => {
  return Object.values(AFFILIATES).filter(affiliate => affiliate.featured);
};

/**
 * Get all affiliate links
 */
export const getAllAffiliates = (): AffiliateLink[] => {
  return Object.values(AFFILIATES);
};

/**
 * Track affiliate click (for analytics)
 */
export const trackAffiliateClick = (affiliateId: string, context?: string): void => {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      event_category: 'Affiliate',
      event_label: affiliateId,
      affiliate_id: affiliateId,
      context: context || 'unknown',
      page_location: window.location.href,
      page_title: document.title
    });
  }

  // Send to Plausible (if using)
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Affiliate Click', {
      props: {
        affiliate: affiliateId,
        context: context || 'unknown'
      }
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Affiliate click tracked:', { affiliateId, context });
  }
};

/**
 * Generate affiliate URL with UTM parameters
 */
export const generateAffiliateUrl = (
  affiliateId: string, 
  context?: string,
  customParams?: Record<string, string>
): string => {
  const affiliate = getAffiliateLink(affiliateId);
  if (!affiliate) {
    console.warn(`Affiliate link not found: ${affiliateId}`);
    return '#';
  }

  const url = new URL(affiliate.url);
  
  // Add standard UTM parameters
  url.searchParams.set('utm_medium', 'affiliate');
  url.searchParams.set('utm_campaign', 'rental_calculator');
  
  if (context) {
    url.searchParams.set('utm_content', context);
  }

  // Add custom parameters
  if (customParams) {
    Object.entries(customParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
};

/**
 * Get relevant affiliate suggestions based on calculation results
 */
export const getRelevantAffiliates = (results: {
  onePercentRule: number;
  cashFlow: number;
  capRate: number;
}): AffiliateLink[] => {
  const suggestions: AffiliateLink[] = [];

  // If property doesn't meet 1% rule, suggest data tools
  if (results.onePercentRule < 0.01) {
    suggestions.push(
      ...getAffiliatesByCategory('data').slice(0, 2)
    );
  }

  // If positive cash flow, suggest financing options
  if (results.cashFlow > 0) {
    suggestions.push(
      ...getAffiliatesByCategory('lending').slice(0, 2)
    );
  }

  // Always suggest insurance for viable deals
  if (results.cashFlow > 0) {
    suggestions.push(
      ...getAffiliatesByCategory('insurance').slice(0, 1)
    );
  }

  // For excellent deals, suggest education/tools
  if (results.capRate > 0.08 && results.cashFlow > 200) {
    suggestions.push(
      ...getAffiliatesByCategory('education').slice(0, 1),
      ...getAffiliatesByCategory('management').slice(0, 1)
    );
  }

  // Remove duplicates and limit to 4 suggestions
  const uniqueSuggestions = suggestions
    .filter((suggestion, index, self) => 
      index === self.findIndex(s => s.id === suggestion.id)
    )
    .slice(0, 4);

  return uniqueSuggestions;
};

/**
 * Validate affiliate configuration
 */
export const validateAffiliateConfig = (): boolean => {
  const requiredEnvVars = [
    'NEXT_PUBLIC_SITE_DOMAIN',
    'AIRDNA_AFFILIATE_ID',
    'STEADILY_AFFILIATE_ID'
  ];

  const missingVars = requiredEnvVars.filter(
    varName => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn('Missing affiliate environment variables:', missingVars);
    return false;
  }

  return true;
};

// Type declarations for global analytics
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
    plausible?: (eventName: string, options?: { props?: any }) => void;
  }
}