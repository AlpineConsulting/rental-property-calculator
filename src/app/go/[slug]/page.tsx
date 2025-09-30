import { redirect } from 'next/navigation';
import { getAffiliateLink, trackAffiliateClick } from '@/utils/affiliates';

interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    context?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  };
}

export default async function AffiliatePage({ params, searchParams }: Props) {
  const { slug } = params;
  const { context } = searchParams;
  
  // Get affiliate link
  const affiliate = getAffiliateLink(slug);
  
  if (!affiliate) {
    // If affiliate not found, redirect to homepage
    redirect('/');
  }
  
  // Track the click server-side (you could also log to a database here)
  console.log('Affiliate redirect:', {
    affiliate: slug,
    context: context || 'direct',
    timestamp: new Date().toISOString(),
    userAgent: 'server-side'
  });
  
  // Build final URL with any additional parameters
  const finalUrl = new URL(affiliate.url);
  
  // Preserve any existing UTM parameters from the affiliate URL
  // and add any additional ones from the request
  if (searchParams.utm_source) {
    finalUrl.searchParams.set('utm_source', searchParams.utm_source);
  }
  if (searchParams.utm_medium) {
    finalUrl.searchParams.set('utm_medium', searchParams.utm_medium);
  }
  if (searchParams.utm_campaign) {
    finalUrl.searchParams.set('utm_campaign', searchParams.utm_campaign);
  }
  if (context) {
    finalUrl.searchParams.set('utm_content', context);
  }
  
  // Perform the redirect
  redirect(finalUrl.toString());
}

// Generate metadata for the redirect page (SEO-friendly)
export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const affiliate = getAffiliateLink(slug);
  
  if (!affiliate) {
    return {
      title: 'Redirect Not Found',
      description: 'The requested affiliate link could not be found.',
      robots: 'noindex,nofollow'
    };
  }
  
  return {
    title: `Redirecting to ${affiliate.name}`,
    description: `You are being redirected to ${affiliate.name}: ${affiliate.description}`,
    robots: 'noindex,nofollow' // Don't index redirect pages
  };
}