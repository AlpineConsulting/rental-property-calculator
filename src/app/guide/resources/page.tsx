import Link from 'next/link';
import { ExternalLink, TrendingUp, Shield, Building2, Briefcase, BookOpen, Star } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Investment Resources & Tools | Rental Scout Pro',
  description: 'Curated resources for rental property investors: lenders, market data tools, insurance providers, and property management software.',
  keywords: 'real estate resources, investment tools, DSCR lenders, property insurance, market data',
};

export default function ResourcesPage() {
  const lenders = [
    {
      name: 'Rocket Mortgage',
      description: 'America\'s largest online mortgage lender. Perfect for first-time rental property investors.',
      features: ['Fast online approvals', 'Competitive rates', 'Investment property loans'],
      url: '/go/rocket-mortgage',
      rating: 4.8
    },
    {
      name: 'Better.com',
      description: 'Tech-forward mortgage lender offering investment property loans with streamlined digital experience.',
      features: ['Quick pre-approval', 'Low fees', 'Investment properties'],
      url: '/go/better',
      rating: 4.6
    },
    {
      name: 'Lima One Capital',
      description: 'DSCR loans with no income verification. Competitive rates for experienced investors.',
      features: ['No income docs required', 'Up to 80% LTV', 'Close in 14-21 days'],
      url: '/go/lima-one',
      rating: 4.8
    },
    {
      name: 'LoanDepot',
      description: 'Major national lender offering both conventional and portfolio loan options for investors.',
      features: ['Portfolio loan options', 'Multiple property financing', 'Experienced with investors'],
      url: '/go/loandepot',
      rating: 4.5
    },
    {
      name: 'Groundfloor',
      description: 'Hard money loans for fix-and-flip and BRRRR investments. Fast funding.',
      features: ['10-day funding', 'Up to 90% LTV', 'Bridge loans'],
      url: '/go/groundfloor',
      rating: 4.6
    }
  ];

  const dataTools = [
    {
      name: 'AirDNA',
      description: 'Short-term rental market data. Essential for Airbnb investment analysis.',
      features: ['Market trends', 'Revenue estimates', 'Competition analysis'],
      url: '/go/airdna',
      rating: 4.7
    },
    {
      name: 'Rentometer',
      description: 'Compare rental prices in any neighborhood. Data-driven rent pricing.',
      features: ['Neighborhood comps', 'Rent estimates', 'Market reports'],
      url: '/go/rentometer',
      rating: 4.5
    }
  ];

  const insurance = [
    {
      name: 'Steadily',
      description: 'Landlord insurance designed specifically for rental property investors.',
      features: ['Fast online quotes', 'Flexible coverage', 'Competitive rates'],
      url: '/go/steadily',
      rating: 4.7
    },
    {
      name: 'Proper Insurance',
      description: 'Specialized short-term rental insurance for Airbnb and VRBO hosts.',
      features: ['STR-specific coverage', 'Liability protection', 'Guest damage coverage'],
      url: '/go/proper',
      rating: 4.6
    }
  ];

  const propertyMgmt = [
    {
      name: 'Buildium',
      description: 'Complete property management software for landlords.',
      features: ['Tenant screening', 'Rent collection', 'Maintenance tracking'],
      url: '/go/buildium',
      rating: 4.6
    }
  ];

  const education = [
    {
      name: 'BiggerPockets PRO',
      description: 'Premium tools, calculators, and real estate investing community.',
      features: ['Deal analyzer', 'Forums', 'Networking'],
      url: '/go/biggerpockets-pro',
      rating: 4.8
    }
  ];

  const businessSoftware = [
    {
      name: 'QuickBooks',
      description: 'Industry-leading accounting software for rental property businesses and real estate investors.',
      features: ['Expense tracking', 'Tax preparation', 'Financial reports'],
      url: '/go/quickbooks',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4 mr-2" />
            Resources
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Investor Resources & Tools
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Curated to help you deternime your need to finance, analyze, insure, and manage properties.
          </p>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 px-4 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-yellow-800">
            <strong>Affiliate Disclosure:</strong> We may earn commissions from some of these resources at no cost to you. 
            This helps us keep our calculator free. We only recommend services we believe provide value to our visitors.
          </p>
        </div>
      </section>

      {/* Lending Resources */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Financing Options</h2>
              <p className="text-gray-600">Conventional loans, DSCR financing, and bridge loans for rental property investors</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lenders.map((lender, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{lender.name}</h3>
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="font-bold text-yellow-700 text-sm">{lender.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{lender.description}</p>

                <div className="space-y-2 mb-6">
                  {lender.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={lender.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl text-sm"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/financing"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              Compare All Lenders
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Market Data Tools */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Building2 className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Market Data & Analysis Tools</h2>
              <p className="text-gray-600">Research tools to evaluate rental markets and property potential</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{tool.name}</h3>
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="font-bold text-yellow-700 text-sm">{tool.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{tool.description}</p>

                <div className="space-y-2 mb-6">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/market-data"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
            >
              Compare All Market Tools
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-purple-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Insurance Providers</h2>
              <p className="text-gray-600">Protect your investment with landlord and rental property insurance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {insurance.map((provider, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="font-bold text-yellow-700 text-sm">{provider.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{provider.description}</p>

                <div className="space-y-2 mb-6">
                  {provider.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={provider.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Get Quote
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/insurance"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
            >
              Compare All Insurance Options
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Property Management & Education */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Property Management */}
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="w-7 h-7 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Property Management</h2>
              </div>

              {propertyMgmt.map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all p-6 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                    <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-bold text-yellow-700 text-sm">{tool.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{tool.description}</p>

                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    Start Free Trial
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>

            {/* Business Software */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="w-7 h-7 text-teal-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Business Software</h2>
              </div>

              {businessSoftware.map((software, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl border-2 border-teal-200 hover:border-teal-400 hover:shadow-xl transition-all p-6 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{software.name}</h3>
                    <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-bold text-yellow-700 text-sm">{software.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{software.description}</p>

                  <div className="space-y-2 mb-6">
                    {software.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={software.url}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    Try Free
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="w-7 h-7 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Education & Community</h2>
              </div>

              {education.map((resource, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{resource.name}</h3>
                    <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-bold text-yellow-700 text-sm">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{resource.description}</p>

                  <div className="space-y-2 mb-6">
                    {resource.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Analyze Your First Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Use our free calculator to run the numbers, then connect with these resources for financing and data.
          </p>
          <Link 
            href="/#calculator"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Try Calculator Free
          </Link>
        </div>
      </section>
    </div>
  );
}