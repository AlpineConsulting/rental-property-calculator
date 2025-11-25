import Link from 'next/link';
import { TrendingUp, Calculator, Target, BookOpen, ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { affiliateConfig } from '@/utils/affiliateConfig';

export const metadata = {
  title: 'What is Cap Rate? Complete Guide for Real Estate Investors | Rental Scout Pro',
  description: 'Learn how to calculate and use capitalization rate (cap rate) to evaluate rental property investments. Complete guide with examples and formulas.',
  keywords: 'cap rate, capitalization rate, real estate investment, NOI, property analysis',
};

export default function CapRateGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/guide" 
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cap Rate Explained: Complete Guide
          </h1>
          <p className="text-xl text-blue-100">
            Understanding capitalization rate for rental property investment analysis
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* What is Cap Rate */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">What is Cap Rate?</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Capitalization rate (cap rate) is one of the most important metrics in real estate investing. 
              It measures the potential return on investment (ROI) of a rental property based on the income 
              it generates relative to its purchase price.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Simple Definition</h3>
              <p className="text-blue-800">
                Cap rate shows you what percentage return you can expect from a property based on its 
                current income, without considering financing costs.
              </p>
            </div>
          </section>

          {/* The Formula */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">The Cap Rate Formula</h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl mb-6">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Cap Rate = (Net Operating Income / Property Purchase Price) × 100
                </div>
                <div className="text-gray-600">or simply:</div>
                <div className="text-3xl font-bold text-blue-600 mt-2">
                  Cap Rate = NOI ÷ Purchase Price
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding the Components:</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white border-2 border-blue-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Net Operating Income (NOI)</h4>
                <p className="text-gray-700">
                  Annual rental income minus all operating expenses (property taxes, insurance, 
                  maintenance, property management, HOA fees, etc.). Does NOT include mortgage payments.
                </p>
              </div>

              <div className="bg-white border-2 border-green-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Property Purchase Price</h4>
                <p className="text-gray-700">
                  The total cost to acquire the property. Some investors use current market value 
                  instead of purchase price when evaluating existing holdings.
                </p>
              </div>
            </div>
          </section>

          {/* Example Calculation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Example</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Property Analysis:</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Purchase Price:</span>
                  <span className="font-bold text-gray-900">$400,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Monthly Rent:</span>
                  <span className="font-bold text-gray-900">$2,500</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Annual Gross Income:</span>
                  <span className="font-bold text-gray-900">$30,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Operating Expenses/Year:</span>
                  <span className="font-bold text-red-600">-$9,000</span>
                </div>
                <div className="flex justify-between items-center bg-green-100 p-3 rounded-lg font-bold">
                  <span className="text-gray-900">Net Operating Income (NOI):</span>
                  <span className="text-green-700">$21,000</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">Calculation:</h4>
                <p className="text-lg text-gray-700 mb-2">
                  Cap Rate = $21,000 ÷ $400,000 = 0.0525
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  Cap Rate = 5.25%
                </p>
              </div>
            </div>
          </section>

          {/* What's a Good Cap Rate */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">What's a Good Cap Rate?</h2>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              There's no universal "good" cap rate—it depends on location, property type, market 
              conditions, and your investment strategy. However, here are general guidelines:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">4-6%</div>
                <h4 className="font-bold text-gray-900 mb-2">Lower Cap Rate</h4>
                <p className="text-gray-700 text-sm">
                  Typically in prime locations with strong appreciation potential. Lower returns 
                  but more stable, less risky markets.
                </p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl">
                <div className="text-3xl font-bold text-yellow-600 mb-2">7-10%</div>
                <h4 className="font-bold text-gray-900 mb-2">Average Cap Rate</h4>
                <p className="text-gray-700 text-sm">
                  Balanced markets with moderate risk and return. Most investors target this range 
                  for rental properties.
                </p>
              </div>

              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">10%+</div>
                <h4 className="font-bold text-gray-900 mb-2">Higher Cap Rate</h4>
                <p className="text-gray-700 text-sm">
                  Often in emerging or higher-risk markets. Higher returns but may come with 
                  increased vacancy, maintenance, or market volatility.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Important Context:</h4>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Major cities (NYC, SF, LA) often have lower cap rates (4-6%)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Midwest and secondary markets typically have higher cap rates (8-12%)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Class A properties usually have lower cap rates than Class C</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Limitations of Cap Rate
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              While cap rate is valuable, it has limitations you should understand:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-900 mb-2">Doesn't Consider Financing</h4>
                <p className="text-gray-700">
                  Cap rate doesn't account for mortgage payments, interest rates, or leverage effects. 
                  Two properties with identical cap rates can have very different cash-on-cash returns.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-900 mb-2">Ignores Appreciation</h4>
                <p className="text-gray-700">
                  Cap rate only measures current income return, not property value appreciation over time.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-900 mb-2">Assumes Stable Income</h4>
                <p className="text-gray-700">
                  Based on current NOI, which may fluctuate with vacancy rates, market rents, and expenses.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-900 mb-2">No Standard for Operating Expenses</h4>
                <p className="text-gray-700">
                  Different sellers may calculate operating expenses differently, making comparisons difficult.
                </p>
              </div>
            </div>
          </section>

          {/* Resource Banner */}
          {affiliateConfig.showResourcesPage && (
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Need Tools for Your Analysis?</h3>
                  <p className="text-blue-100 text-lg">
                    Explore lenders, market data tools, and insurance options to support your investment.
                  </p>
                </div>
                <Link 
                  href="/guide/resources"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
                >
                  View Resources
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          )}

        </article>

        {/* Related Guides */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Related Guides</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/guide/cash-flow"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Cash Flow Analysis Guide</h4>
              <p className="text-gray-600 text-sm">Learn how to calculate and analyze rental property cash flow</p>
            </Link>
            <Link 
              href="/guide/1-percent-rule"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">The 1% Rule Explained</h4>
              <p className="text-gray-600 text-sm">Quick screening tool for evaluating rental properties</p>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
            <Calculator className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Calculate Cap Rate for Your Property
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use our free calculator to instantly calculate cap rate along with cash flow, 
              ROI, and other essential investment metrics.
            </p>
            <Link 
              href="/#calculator"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Try Calculator Now
            </Link>
          </section>

      </div>
    </div>
  );
}