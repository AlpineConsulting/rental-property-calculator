export const affiliateConfig = {
  // Master switch - turn off all affiliate features when not approved
  enabled: process.env.NEXT_PUBLIC_AFFILIATES_ENABLED === 'true',
  
  // Individual feature flags
  showResourcesPage: process.env.NEXT_PUBLIC_AFFILIATES_ENABLED === 'true',
  showAffiliateCTA: process.env.NEXT_PUBLIC_AFFILIATES_ENABLED === 'true',
  showInlineLinks: process.env.NEXT_PUBLIC_AFFILIATES_ENABLED === 'true',
  enableTracking: process.env.NEXT_PUBLIC_AFFILIATES_ENABLED === 'true',
};

// Helper function to get safe affiliate URLs
export const getSafeAffiliateUrl = (url: string): string => {
  if (!affiliateConfig.enabled) {
    return '#';
  }
  return url;
};