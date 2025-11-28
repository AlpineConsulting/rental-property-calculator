import Link from 'next/link';
import { ExternalLink, TrendingUp, Star, CheckCircle, ArrowRight, DollarSign, Clock, FileText, Home } from 'lucide-react';

export const metadata = {
  title: 'Rental Property Financing Options | Investment Loans & DSCR Lenders',
  description: 'Compare top rental property lenders. Conventional loans, DSCR financing, and bridge loans for real estate investors at every stage.',
  keywords: 'rental property financing, investment property loans, DSCR loans, conventional lenders, real estate financing',
};

export default function FinancingPage() {
  const conventionalLenders = [
    {
      name: 'Rocket Mortgage',
      featured: true,
      description: 'America\'s largest online mortgage lender. Perfect for first-time rental property investors seeking conventional financing.',
      logo: '🚀',
      rating: 4.8,
      reviews: '15,000+ reviews',
      features: [
        { icon: Clock, text: 'Fast online approvals' },
        { icon: DollarSign, text: 'Competitive rates' },
        { icon: FileText, text: 'Investment property loans' },
      ],
      highlights: [
        '15-25% down payment',
        'Excellent for good credit scores',
        'Purchase and refinance options',
        'Digital application process',
        'Nationwide lending',
        'Transparent pricing'
      ],
      bestFor: 'First-time investors with W-2 income',
      loanTypes: 'Conventional investment loans',
      url: '/go/rocket-mortgage',
      ctaText: 'Get Pre-Approved'
    },
    {
      name: 'Better.com',
      featured: false,
      description: 'Tech-forward mortgage lender offering investment property loans with a streamlined digital experience.',
      logo: '💻',
      rating: 4.6,
      reviews: '8,500+ reviews',
      features: [
        { icon: Clock, text: 'Quick pre-approval' },
        { icon: DollarSign, text: 'Low fees' },
        { icon: Home, text: 'Investment properties' },
      ],
      highlights: [
        'Modern online platform',
        'Competitive rates',
        'Investment property specialists',
        'Quick closing process',
        'Excellent customer service',
        'Multiple property types'
      ],
      bestFor: 'Tech-savvy investors seeking convenience',
      loanTypes: 'Conventional & FHA loans',
      url: '/go/better',
      ctaText: 'Start Application'
    }
  ];

  const dscrLenders = [
    {
      name: 'Lima One Capital',
      featured: true,
      description: 'Industry-leading DSCR loans with no income verification. Perfect for experienced investors building their portfolio.',
      logo: '🏦',
      rating: 4.8,
      reviews: '2,400+ reviews',
      features: [
        { icon: FileText, text: 'No tax returns or W2s needed' },
        { icon: DollarSign, text: 'Up to 80% LTV available' },
        { icon: Clock, text: 'Close in as little as 14 days' },
      ],
      highlights: [
        'Purchase and refinance options',
        'Single-family to 4-unit properties',
        'Self-employed friendly',
        'Nationwide lending',
        'Portfolio loan options',
        'Experienced investor focus'
      ],
      bestFor: 'Portfolio builders & self-employed investors',
      loanTypes: 'DSCR loans (no income verification)',
      url: '/go/lima-one',
      ctaText: 'Get Pre-Qualified'
    },
    {
      name: 'LoanDepot',
      featured: false,
      description: 'Major national lender offering both conventional and portfolio loan options for serious real estate investors.',
      logo: '🏢',
      rating: 4.5,
      reviews: '12,000+ reviews',
      features: [
        { icon: TrendingUp, text: 'Portfolio loan options' },
        { icon: DollarSign, text: 'Multiple property financing' },
        { icon: Clock, text: 'Experienced with investors' },
      ],
      highlights: [
        'Conventional investment loans',
        'Portfolio loan programs',
        'Multiple property financing',
        'Jumbo loan options',
        'Commercial property loans',
        'Experienced loan officers'
      ],
      bestFor: 'Investors with multiple properties',
      loanTypes: 'Conventional & portfolio loans',
      url: '/go/loandepot',
      ctaText: 'Compare Options'
    }
  ];

  const bridgeLenders = [
    {
      name: 'Groundfloor',
      featured: false,
      description: 'Fast bridge loans for fix-and-flip and BRRRR strategy investors. Quick funding for value-add deals.',
      logo: '🏗️',
      rating: 4.6,
      reviews: '1,800+ reviews',
      features: [
        { icon: Clock, text: 'Funding in 10 business days' },
        { icon: DollarSign, text: 'Up to 90% LTV available' },
        { icon: TrendingUp, text: 'Perfect for value-add deals' },
      ],
      highlights: [
        'Fix-and-flip financing',
        'Bridge loans available',
        'Flexible terms',
        'Rehab budget included',
        'Fast approval process',
        'Construction draws'
      ],
      bestFor: 'Fix-and-flip & BRRRR investors',
      loanTypes: 'Hard money & bridge loans',
      url: '/go/groundfloor',
      ctaText: 'Apply for Funding'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Find Your Perfect Financing
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Financing for Every Type<br />of Rental Property Investor
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            From first-time buyers to experienced portfolio builders. Conventional loans, DSCR financing, and bridge loans from lenders.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>First-Time Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Income Verification Options</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Fast Approvals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-6 px-4 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-yellow-800">
            <strong>Disclosure:</strong> We may earn a commission if you choose one of these lenders. This helps keep our calculator free for everyone.
          </p>
        </div>
      </section>

      {/* Conventional Lenders Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              <Home className="w-4 h-4 mr-2" />
              First Investment Property?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start with Conventional Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Best rates and terms for investors with W-2 income and good credit scores
            </p>
          </div>

          <div className="space-y-8">
            {conventionalLenders.map((lender, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                  lender.featured ? 'border-blue-400' : 'border-gray-200'
                }`}
              >
                {lender.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-2 px-4 text-sm font-bold">
                    ⭐ MOST POPULAR FOR BEGINNERS
                  </div>
                )}

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-5xl">{lender.logo}</div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{lender.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                              <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
                              <span className="font-bold text-yellow-700 text-sm">{lender.rating}</span>
                            </div>
                            <span className="text-sm text-gray-600">{lender.reviews}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-700 mb-6">{lender.description}</p>

                      <div className="grid sm:grid-cols-3 gap-4 mb-6">
                        {lender.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
                            <feature.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-800 font-medium">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {lender.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="bg-blue-50 px-4 py-2 rounded-lg">
                          <span className="text-sm font-semibold text-blue-900">Best For: </span>
                          <span className="text-sm text-blue-800">{lender.bestFor}</span>
                        </div>
                        <div className="bg-green-50 px-4 py-2 rounded-lg">
                          <span className="text-sm font-semibold text-green-900">Loan Types: </span>
                          <span className="text-sm text-green-800">{lender.loanTypes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-64 flex-shrink-0">
                      <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-blue-200">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-gray-900 mb-1">Start Today</div>
                          <div className="text-sm text-gray-600">Free pre-qualification</div>
                        </div>

                        <a
                          href={lender.url}
                          target="_blank"
                          rel="nofollow sponsored noopener noreferrer"
                          className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold text-center rounded-xl transition-all shadow-lg hover:shadow-xl mb-3"
                        >
                          {lender.ctaText}
                          <ExternalLink className="w-4 h-4 inline ml-2" />
                        </a>

                        <p className="text-xs text-gray-600 text-center">
                          No impact to credit score
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DSCR & Portfolio Lenders */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Building a Portfolio?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DSCR & Portfolio Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No income verification needed. Perfect for self-employed investors and portfolio builders
            </p>
          </div>

          <div className="space-y-8">
            {dscrLenders.map((lender, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                  lender.featured ? 'border-purple-400' : 'border-gray-200'
                }`}
              >
                {lender.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 px-4 text-sm font-bold">
                    ⭐ BEST FOR PORTFOLIO BUILDERS
                  </div>
                )}

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-5xl">{lender.logo}</div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{lender.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                              <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
                              <span className="font-bold text-yellow-700 text-sm">{lender.rating}</span>
                            </div>
                            <span className="text-sm text-gray-600">{lender.reviews}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-700 mb-6">{lender.description}</p>

                      <div className="grid sm:grid-cols-3 gap-4 mb-6">
                        {lender.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 bg-purple-50 p-3 rounded-lg">
                            <feature.icon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-800 font-medium">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {lender.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="bg-purple-50 px-4 py-2 rounded-lg">
                          <span className="text-sm font-semibold text-purple-900">Best For: </span>
                          <span className="text-sm text-purple-800">{lender.bestFor}</span>
                        </div>
                        <div className="bg-green-50 px-4 py-2 rounded-lg">
                          <span className="text-sm font-semibold text-green-900">Loan Types: </span>
                          <span className="text-sm text-green-800">{lender.loanTypes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-64 flex-shrink-0">
                      <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-gray-900 mb-1">Get Started</div>
                          <div className="text-sm text-gray-600">No tax returns needed</div>
                        </div>

                        <a
                          href={lender.url}
                          target="_blank"
                          rel="nofollow sponsored noopener noreferrer"
                          className="block w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-center rounded-xl transition-all shadow-lg hover:shadow-xl mb-3"
                        >
                          {lender.ctaText}
                          <ExternalLink className="w-4 h-4 inline ml-2" />
                        </a>

                        <p className="text-xs text-gray-600 text-center">
                          Qualify based on property income
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge/Hard Money Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Fix & Flip or BRRRR Strategy?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bridge & Hard Money Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fast funding for value-add deals and renovation projects
            </p>
          </div>

          {bridgeLenders.map((lender, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-200">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{lender.logo}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{lender.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
                            <span className="font-bold text-yellow-700 text-sm">{lender.rating}</span>
                          </div>
                          <span className="text-sm text-gray-600">{lender.reviews}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">{lender.description}</p>

                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {lender.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 bg-orange-50 p-3 rounded-lg">
                          <feature.icon className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {lender.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="bg-orange-50 px-4 py-2 rounded-lg">
                        <span className="text-sm font-semibold text-orange-900">Best For: </span>
                        <span className="text-sm text-orange-800">{lender.bestFor}</span>
                      </div>
                      <div className="bg-green-50 px-4 py-2 rounded-lg">
                        <span className="text-sm font-semibold text-green-900">Loan Types: </span>
                        <span className="text-sm text-green-800">{lender.loanTypes}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-64 flex-shrink-0">
                    <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-6 border-2 border-orange-200">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-gray-900 mb-1">Fast Funding</div>
                        <div className="text-sm text-gray-600">10-day closings</div>
                      </div>

                      <a
                        href={lender.url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="block w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold text-center rounded-xl transition-all shadow-lg hover:shadow-xl mb-3"
                      >
                        {lender.ctaText}
                        <ExternalLink className="w-4 h-4 inline ml-2" />
                      </a>

                      <p className="text-xs text-gray-600 text-center">
                        Perfect for rehab projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Loan Type Comparison */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Which Loan Type Is Right for You?
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Loan Type</th>
                  <th className="px-6 py-4 text-center">Best For</th>
                  <th className="px-6 py-4 text-center">Down Payment</th>
                  <th className="px-6 py-4 text-center">Income Docs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Conventional</td>
                  <td className="px-6 py-4 text-center text-sm">First property</td>
                  <td className="px-6 py-4 text-center text-sm">15-25%</td>
                  <td className="px-6 py-4 text-center text-sm">Required</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">DSCR</td>
                  <td className="px-6 py-4 text-center text-sm">Portfolio building</td>
                  <td className="px-6 py-4 text-center text-sm">20-25%</td>
                  <td className="px-6 py-4 text-center text-sm">Not required</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Portfolio</td>
                  <td className="px-6 py-4 text-center text-sm">Multiple properties</td>
                  <td className="px-6 py-4 text-center text-sm">25-30%</td>
                  <td className="px-6 py-4 text-center text-sm">Varies</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Bridge/Hard Money</td>
                  <td className="px-6 py-4 text-center text-sm">Fix & flip</td>
                  <td className="px-6 py-4 text-center text-sm">10-30%</td>
                  <td className="px-6 py-4 text-center text-sm">Not required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Pre-Qualified?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Compare rates and terms from multiple lenders. Find the best financing for your investment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/go/rocket-mortgage"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Compare Lenders
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <Link 
              href="/#calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-bold text-lg rounded-xl transition-colors"
            >
              Back to Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}