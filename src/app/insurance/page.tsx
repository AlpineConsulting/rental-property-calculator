import Link from 'next/link';
import { ExternalLink, Shield, Star, CheckCircle, ArrowRight, Home, DollarSign, Clock } from 'lucide-react';

export const metadata = {
  title: 'Rental Property Insurance | Landlord & Short-Term Rental Coverage',
  description: 'Compare landlord insurance and short-term rental coverage. Protect your investment property with specialized policies for real estate investors.',
  keywords: 'landlord insurance, rental property insurance, short-term rental insurance, Airbnb insurance, property coverage',
};

export default function InsurancePage() {
  const providers = [
    {
      name: 'Steadily',
      featured: true,
      description: 'Specialized landlord insurance designed specifically for rental property investors. Get covered in minutes with flexible, affordable policies.',
      logo: '🏠',
      rating: 4.7,
      reviews: '4,100+ reviews',
      features: [
        { icon: Clock, text: 'Instant online quotes' },
        { icon: DollarSign, text: 'Competitive pricing' },
        { icon: Shield, text: 'Comprehensive coverage' },
      ],
      highlights: [
        'Liability protection up to $2M',
        'Property damage coverage',
        'Loss of rental income protection',
        'Legal defense costs included',
        'Vandalism and theft coverage',
        'Flexible payment options',
        'Covers single-family to 4-unit properties',
        'No inspection required for most properties'
      ],
      bestFor: 'Traditional long-term rental properties',
      avgPrice: '$50-150/month',
      url: '/go/steadily',
      ctaText: 'Get Instant Quote'
    },
    {
      name: 'Proper Insurance',
      featured: false,
      description: 'The leading insurance provider for short-term rental hosts. Specialized coverage for Airbnb, VRBO, and vacation rental properties.',
      logo: '✈️',
      rating: 4.6,
      reviews: '2,800+ reviews',
      features: [
        { icon: Home, text: 'STR-specific policies' },
        { icon: Shield, text: 'Guest injury protection' },
        { icon: DollarSign, text: 'Property damage coverage' },
      ],
      highlights: [
        'Covers short-term rental activity',
        'Guest liability protection',
        'Contents and personal property coverage',
        'Business interruption coverage',
        'Damage by guests covered',
        'Primary or excess coverage options',
        'Worldwide coverage available',
        'Platform-approved insurance'
      ],
      bestFor: 'Short-term rental hosts (Airbnb, VRBO)',
      avgPrice: '$75-200/month',
      url: '/go/proper',
      ctaText: 'Get STR Quote'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Investor-Focused Coverage
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Protect Your Rental<br />Property Investment
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized insurance for landlords and short-term rental hosts. Get covered in minutes with policies designed for real estate investors.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-300" />
              <span>Fast Online Quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-300" />
              <span>Investor-Focused Policies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-300" />
              <span>Flexible Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-6 px-4 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-yellow-800">
            <strong>Disclosure:</strong> We may earn a commission if you purchase insurance through these partners. This helps keep our calculator free.
          </p>
        </div>
      </section>

      {/* Insurance Providers Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {providers.map((provider, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                provider.featured ? 'border-purple-400' : 'border-gray-200'
              }`}
            >
              {provider.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 px-4 text-sm font-bold">
                  ⭐ BEST FOR LONG-TERM RENTALS
                </div>
              )}

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  {/* Left: Logo and Title */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{provider.logo}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{provider.name}</h2>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
                            <span className="font-bold text-yellow-700 text-sm">{provider.rating}</span>
                          </div>
                          <span className="text-sm text-gray-600">{provider.reviews}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      {provider.description}
                    </p>

                    {/* Key Features */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {provider.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 bg-purple-50 p-3 rounded-lg">
                          <feature.icon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Coverage Includes:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {provider.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best For & Pricing */}
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-sm font-semibold text-blue-900">Best For: </span>
                        <span className="text-sm text-blue-800">{provider.bestFor}</span>
                      </div>
                      <div className="bg-purple-50 px-4 py-2 rounded-lg">
                        <span className="text-sm font-semibold text-purple-900">Avg. Price: </span>
                        <span className="text-sm text-purple-800">{provider.avgPrice}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="md:w-64 flex-shrink-0">
                    <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-gray-900 mb-1">Get Covered</div>
                        <div className="text-sm text-gray-600">Instant online quotes</div>
                      </div>

                      <a
                        href={provider.url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="block w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-center rounded-xl transition-all shadow-lg hover:shadow-xl mb-3"
                      >
                        {provider.ctaText}
                        <ExternalLink className="w-4 h-4 inline ml-2" />
                      </a>

                      <p className="text-xs text-gray-600 text-center">
                        No obligation • Compare rates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Landlord Insurance */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Rental Property Insurance Matters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">❌ Homeowners Insurance Won't Cover It</h3>
              <p className="text-gray-700">
                Standard homeowners policies exclude rental activity. If a tenant causes damage or someone gets injured, you could be personally liable without proper landlord insurance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">🛡️ Protect Your Income</h3>
              <p className="text-gray-700">
                Loss of rental income coverage keeps you financially stable if your property becomes uninhabitable due to covered damages. Don't lose months of income.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">⚖️ Liability Protection</h3>
              <p className="text-gray-700">
                If someone gets injured on your rental property, liability coverage protects your personal assets from lawsuits and medical claims.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">💰 Lender Requirements</h3>
              <p className="text-gray-700">
                Most lenders require landlord insurance for rental properties. Get the right coverage to satisfy lender requirements and close your deals faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Comparison */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Long-Term vs Short-Term Rental Insurance
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Coverage Type</th>
                  <th className="px-6 py-4 text-center">Steadily<br/><span className="text-xs font-normal">(Long-Term)</span></th>
                  <th className="px-6 py-4 text-center">Proper<br/><span className="text-xs font-normal">(Short-Term)</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Property Damage</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Liability Coverage</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Loss of Rental Income</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Guest Damage Coverage</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">STR Platform Approved</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Traditional Tenants</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Average Monthly Cost</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold">$50-150</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold">$75-200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">💡 Pro Tip:</h3>
            <p className="text-blue-800 text-sm">
              If you're doing both long-term and short-term rentals, you may need different policies for different properties. 
              Some investors keep both Steadily and Proper coverage active depending on their rental strategy.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Insurance Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do I need landlord insurance if I have homeowners insurance?</h3>
              <p className="text-gray-700 text-sm">
                Yes. Homeowners insurance typically excludes rental activity. If you're renting out a property, you need specialized landlord or rental property insurance to be properly covered.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">What's the difference between landlord insurance and homeowners insurance?</h3>
              <p className="text-gray-700 text-sm">
                Landlord insurance covers rental activity, tenant-caused damage, loss of rental income, and liability from tenant injuries. Homeowners insurance is designed for owner-occupied homes only.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Does my tenant's renters insurance cover my property?</h3>
              <p className="text-gray-700 text-sm">
                No. Your tenant's renters insurance only covers their personal belongings and their liability. You need landlord insurance to protect the building structure and your rental business.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Can I get insurance for Airbnb properties?</h3>
              <p className="text-gray-700 text-sm">
                Yes, but you need specialized short-term rental insurance like Proper. Traditional landlord policies often exclude short-term rental activity. Airbnb's host protection is supplemental, not primary insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Investment Today
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get instant quotes from specialized rental property insurance providers. Compare coverage and pricing in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/go/steadily"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-purple-50 transition-colors shadow-lg"
            >
              Get Insurance Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <Link 
              href="/#calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-800 hover:bg-purple-900 text-white font-bold text-lg rounded-xl transition-colors"
            >
              Back to Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}