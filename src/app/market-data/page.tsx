import Link from 'next/link';
import { ExternalLink, LineChart, Star, CheckCircle, ArrowRight, MapPin, TrendingUp, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Market Data & Analysis Tools | Rental Research Platforms',
  description: 'Compare top rental market research tools. Analyze neighborhoods, rental rates, occupancy trends, and investment opportunities with data-driven insights.',
  keywords: 'rental market data, real estate research tools, AirDNA, Rentometer, market analysis, rental comps',
};

export default function MarketDataPage() {
  const tools = [
    {
      name: 'AirDNA',
      featured: true,
      description: 'The industry-leading platform for short-term rental data. Analyze Airbnb and VRBO markets with precision before you invest.',
      logo: '📊',
      rating: 4.7,
      reviews: '3,200+ reviews',
      features: [
        { icon: MapPin, text: 'Hyper-local market insights' },
        { icon: TrendingUp, text: 'Revenue projection tools' },
        { icon: BarChart3, text: 'Competition analysis' },
      ],
      highlights: [
        'Historic and future market trends',
        'Occupancy rate forecasting',
        'Pricing optimization tools',
        'Property performance benchmarking',
        'Seasonality and demand patterns',
        'Regulation tracking by city'
      ],
      bestFor: 'Short-term rental investors (Airbnb, VRBO)',
      pricing: 'From $19.95/month',
      url: '/go/airdna',
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Rentometer',
      featured: false,
      description: 'Instantly compare rental prices across neighborhoods. Perfect for traditional long-term rental investors doing market research.',
      logo: '🏘️',
      rating: 4.5,
      reviews: '1,500+ reviews',
      features: [
        { icon: MapPin, text: 'Neighborhood rent comps' },
        { icon: BarChart3, text: 'Market percentile ranking' },
        { icon: TrendingUp, text: 'Rental rate trends' },
      ],
      highlights: [
        'Instant rent price comparisons',
        'Neighborhood-level data',
        'Historical rent trends',
        'Market percentile calculations',
        'PDF market reports',
        'API access available'
      ],
      bestFor: 'Long-term rental investors and landlords',
      pricing: 'From $24.99/month',
      url: '/go/rentometer',
      ctaText: 'Get Started Free'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <LineChart className="w-4 h-4 mr-2" />
            Data-Driven Investment Decisions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Research Markets Before<br />You Invest
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Make smarter investment decisions with real-time rental market data, neighborhood comps, and revenue forecasting.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Accurate Market Data</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Revenue Projections</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Competition Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-6 px-4 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-yellow-800">
            <strong>Disclosure:</strong> We may earn a commission if you subscribe to these tools. This helps keep our calculator free for investors.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                tool.featured ? 'border-green-400' : 'border-gray-200'
              }`}
            >
              {tool.featured && (
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-2 px-4 text-sm font-bold">
                  ⭐ BEST FOR SHORT-TERM RENTALS
                </div>
              )}

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  {/* Left: Logo and Title */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{tool.logo}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{tool.name}</h2>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
                            <span className="font-bold text-yellow-700 text-sm">{tool.rating}</span>
                          </div>
                          <span className="text-sm text-gray-600">{tool.reviews}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      {tool.description}
                    </p>

                    {/* Key Features */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {tool.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
                          <feature.icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">What You Get:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {tool.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best For & Pricing */}
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-sm font-semibold text-blue-900">Best For: </span>
                        <span className="text-sm text-blue-800">{tool.bestFor}</span>
                      </div>
                      <div className="bg-green-50 px-4 py-2 rounded-lg">
                        <span className="text-sm font-semibold text-green-900">Pricing: </span>
                        <span className="text-sm text-green-800">{tool.pricing}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="md:w-64 flex-shrink-0">
                    <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6 border-2 border-green-200">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-gray-900 mb-1">Try It Free</div>
                        <div className="text-sm text-gray-600">No credit card required</div>
                      </div>

                      <a
                        href={tool.url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold text-center rounded-xl transition-all shadow-lg hover:shadow-xl mb-3"
                      >
                        {tool.ctaText}
                        <ExternalLink className="w-4 h-4 inline ml-2" />
                      </a>

                      <p className="text-xs text-gray-600 text-center">
                        Cancel anytime • Full access trial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Market Data Matters */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Market Data Matters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Avoid Bad Deals</h3>
              <p className="text-gray-700">
                Don't rely on seller claims or outdated comps. Get real-time data on rental rates, occupancy, and demand before you make an offer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Maximize Revenue</h3>
              <p className="text-gray-700">
                Price your rental competitively with neighborhood data. Understand seasonality and demand patterns to optimize your income.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Find Hidden Opportunities</h3>
              <p className="text-gray-700">
                Discover undervalued markets with strong rental demand. Use data to find neighborhoods before they become saturated.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Benchmark Performance</h3>
              <p className="text-gray-700">
                Compare your properties against market averages. Know if you're outperforming or leaving money on the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Which Tool Is Right for You?
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">AirDNA</th>
                  <th className="px-6 py-4 text-center">Rentometer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-center text-sm">Short-term rentals</td>
                  <td className="px-6 py-4 text-center text-sm">Long-term rentals</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Revenue Projections</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Rent Comps</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Occupancy Data</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Starting Price</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold">$19.95/mo</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold">$24.99/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Researching Your Next Market
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Try these tools risk-free and make data-driven investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/go/airdna"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-xl hover:bg-green-50 transition-colors shadow-lg"
            >
              Try AirDNA Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <Link 
              href="/#calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-800 hover:bg-green-900 text-white font-bold text-lg rounded-xl transition-colors"
            >
              Back to Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}