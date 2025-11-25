import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Rental Property Calculator | Free ROI & Cash Flow Analysis Tool',
    template: '%s | Rental Property Calculator'
  },
  description: 'Free rental property calculator to analyze investment returns, cash flow, cap rate, and 1% rule. Make smarter real estate investment decisions with our comprehensive analysis tool.',
  keywords: [
    'rental property calculator',
    'real estate investment calculator', 
    'cash flow calculator rental property',
    'cap rate calculator',
    '1% rule calculator',
    'rental property ROI calculator',
    'investment property analysis',
    'rental property analyzer',
    'real estate calculator',
    'property investment calculator',
    'rental income calculator',
    'buy and hold calculator',
    'BRRRR calculator',
    'real estate cash flow analysis',
    'property flip calculator',
    'rental property profit calculator'
  ],
  authors: [{ name: 'Rental Scout Pro' }],
  creator: 'Rental Scout Pro',
  publisher: 'Rental Scout Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://unclepoochercom'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Rental Property Calculator | Free ROI & Cash Flow Analysis Tool',
    description: 'Free rental property calculator to analyze investment returns, cash flow, cap rate, and 1% rule. Make smarter real estate investment decisions.',
    siteName: 'Rental Property Calculator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rental Property Calculator - Free Investment Analysis Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rental Scout Pro | Free ROI & Cash Flow Analysis Tool',
    description: 'Free rental property calculator to analyze investment returns, cash flow, cap rate, and 1% rule.',
    images: ['/twitter-image.png'],
    creator: '@RentalScoutPro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Plausible Analytics (Alternative) */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
        
        {/* Enhanced Structured Data for SEO */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rental Property Calculator",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://unclepoocher.com",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://unclepoocher.com"}/logo.png`,
              "description": "Free rental property calculator and real estate investment analysis tools for investors, landlords, and real estate professionals",
              "foundingDate": "2025",
              "sameAs": [
                "https://twitter.com/rentalscoutpro",
                "https://facebook.com/rentalscoutpro"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />

        {/* WebApplication Structured Data for Calculator Tool */}
        <Script
          id="structured-data-webapp"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Rental Property Calculator",
              "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://unclepoocher.com"}/calculator`,
              "description": "Free online calculator for analyzing rental property investments, cash flow, ROI, and cap rates",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Any",
              "permissions": "No special permissions required",
              "isAccessibleForFree": true,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />

        {/* FAQ Structured Data */}
        <Script
          id="structured-data-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the 1% rule in real estate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The 1% rule is a real estate investment guideline stating that monthly rental income should be at least 1% of the property's purchase price to ensure positive cash flow."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How do I calculate rental property cash flow?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rental property cash flow is calculated by subtracting all monthly expenses (mortgage, taxes, insurance, maintenance, vacancy) from monthly rental income."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a good cap rate for rental property?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A good cap rate typically ranges from 4-12%, depending on location, property type, and market conditions. Higher cap rates generally indicate higher returns but may come with increased risk."
                  }
                }
              ]
            })
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* AdSense - Only load after consent */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  )
}