import Link from 'next/link';
import { Target, Calculator, TrendingUp, BookOpen, ArrowLeft, CheckCircle, AlertTriangle, X } from 'lucide-react';

export const metadata = {
  title: 'The 1% Rule for Rental Properties Explained | Rental Scout Pro',
  description: 'Learn how to use the 1% rule to quickly screen rental property investments. Complete guide with examples, limitations, and alternatives.',
  keywords: '1% rule, one percent rule, rental property screening, real estate investing, property analysis',
};

export default function OnePercentRulePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/guide" 
            className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The 1% Rule for Rental Properties
          </h1>
          <p className="text-xl text-purple-100">
            Quick screening tool to identify potentially profitable rental investments
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* What is the 1% Rule */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">What is the 1% Rule?</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The 1% rule is a quick screening guideline used by real estate investors to evaluate whether 
              a rental property is worth investigating further. It states that the monthly rental income should 
              be at least 1% of the total property purchase price.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Simple Definition</h3>
              <p className="text-purple-800 text-lg font-semibold">
                Monthly Rent ≥ 1% of Purchase Price = Property Passes the 1% Rule
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Quick Examples:</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white p-4 rounded-lg border-2 border-green-300">
                  <div>
                    <p className="font-mono text-gray-700">$200,000 property × 1% = $2,000/month rent</p>
                    <p className="text-sm text-gray-600 mt-1">Actual rent: $2,200/month</p>
                  </div>
                  <div className="flex items-center text-green-700 font-bold">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    PASSES
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-white p-4 rounded-lg border-2 border-red-300">
                  <div>
                    <p className="font-mono text-gray-700">$400,000 property × 1% = $4,000/month rent</p>
                    <p className="text-sm text-gray-600 mt-1">Actual rent: $2,800/month</p>
                  </div>
                  <div className="flex items-center text-red-700 font-bold">
                    <X className="w-5 h-5 mr-2" />
                    FAILS
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Calculate */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">How to Calculate the 1% Rule</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Step-by-Step:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-900 mb-2">Step 1: Identify Purchase Price</h4>
                  <p className="text-gray-700 mb-2">
                    Include the total acquisition cost (asking price + closing costs + any immediate repairs).
                  </p>
                  <p className="font-mono text-lg text-blue-700">Example: $300,000</p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-900 mb-2">Step 2: Calculate 1% of Purchase Price</h4>
                  <p className="text-gray-700 mb-2">
                    Multiply the purchase price by 0.01 (or simply move the decimal two places left).
                  </p>
                  <p className="font-mono text-lg text-green-700">$300,000 × 0.01 = $3,000</p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-900 mb-2">Step 3: Compare to Monthly Rent</h4>
                  <p className="text-gray-700 mb-2">
                    Check if the expected monthly rent meets or exceeds the 1% threshold.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="font-mono text-gray-700">1% Threshold: $3,000/month</p>
                    <p className="font-mono text-gray-700">Actual Market Rent: $3,200/month</p>
                    <p className="font-mono text-lg text-green-700 font-bold border-t border-gray-300 pt-2 mt-2">
                      Result: PASSES (1.07%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why the 1% Rule Matters</h2>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              The 1% rule helps investors quickly filter out properties that are unlikely to produce positive 
              cash flow before conducting detailed analysis. It saves time by identifying deals worth investigating.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Benefits
                </h4>
                <ul className="space-y-2 text-green-800">
                  <li>• Quick screening tool (30 seconds)</li>
                  <li>• Eliminates obviously bad deals</li>
                  <li>• Easy to calculate mentally</li>
                  <li>• Good starting point for beginners</li>
                  <li>• Helps focus on promising properties</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center text-lg">
                  <Target className="w-6 h-6 mr-2" />
                  Best Use Cases
                </h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Initial property screening</li>
                  <li>• Comparing multiple markets</li>
                  <li>• Quick "back-of-napkin" analysis</li>
                  <li>• Setting search parameters</li>
                  <li>• First-pass due diligence</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Important Limitations of the 1% Rule
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Warning: Not a Complete Analysis</h4>
                  <p className="text-yellow-800">
                    The 1% rule is a screening tool, NOT a complete investment analysis. Never make 
                    investment decisions based solely on this rule.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-900 mb-2">Doesn't Account for Operating Expenses</h4>
                <p className="text-gray-700">
                  The rule ignores property taxes, insurance, maintenance, HOA fees, property management, 
                  and other expenses that significantly impact profitability.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-900 mb-2">Ignores Financing Terms</h4>
                <p className="text-gray-700">
                  Doesn't consider down payment amount, interest rates, or loan terms—all critical 
                  factors for cash flow analysis.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-900 mb-2">Varies by Market</h4>
                <p className="text-gray-700">
                  Properties in expensive markets (NYC, SF, LA) rarely meet the 1% rule but may still 
                  be good investments due to appreciation potential and other factors.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-bold text-gray-900 mb-2">Oversimplifies Complex Decisions</h4>
                <p className="text-gray-700">
                  Doesn't consider location quality, property condition, tenant quality, local market trends, 
                  or long-term appreciation potential.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Alternative Screening Rules
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                <h4 className="text-2xl font-bold text-purple-700 mb-3">2% Rule</h4>
                <p className="text-gray-700 mb-4">
                  More aggressive screening: rent should be 2% of purchase price.
                </p>
                <div className="bg-white p-4 rounded border border-purple-200">
                  <p className="text-sm text-gray-600 mb-1">Example:</p>
                  <p className="font-mono text-sm text-gray-900">$150,000 property</p>
                  <p className="font-mono text-sm text-purple-700 font-bold">= $3,000+ rent needed</p>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  Rare in most markets; typically only achievable in low-cost areas.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <h4 className="text-2xl font-bold text-blue-700 mb-3">0.7% Rule</h4>
                <p className="text-gray-700 mb-4">
                  More realistic for expensive markets like coastal cities.
                </p>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Example:</p>
                  <p className="font-mono text-sm text-gray-900">$500,000 property</p>
                  <p className="font-mono text-sm text-blue-700 font-bold">= $3,500+ rent needed</p>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  Used in high-appreciation markets where cash flow is secondary.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <h4 className="text-2xl font-bold text-green-700 mb-3">50% Rule</h4>
                <p className="text-gray-700 mb-4">
                  Assumes operating expenses equal 50% of gross rent.
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Example:</p>
                  <p className="font-mono text-sm text-gray-900">$2,000/mo rent</p>
                  <p className="font-mono text-sm text-green-700 font-bold">= $1,000 for expenses</p>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  More comprehensive than 1% rule; includes expense estimation.
                </p>
              </div>
            </div>
          </section>

          {/* Real World Application */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Real-World Application
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Right Way to Use the 1% Rule:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start bg-white p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <span className="font-bold text-blue-700">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Initial Screening</h4>
                    <p className="text-gray-700">Use the 1% rule to quickly eliminate obviously poor deals.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <span className="font-bold text-blue-700">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Detailed Analysis</h4>
                    <p className="text-gray-700">For properties that pass, conduct thorough cash flow and ROI analysis.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <span className="font-bold text-blue-700">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Market Context</h4>
                    <p className="text-gray-700">Adjust expectations based on local market conditions and investment strategy.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <span className="font-bold text-blue-700">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Final Decision</h4>
                    <p className="text-gray-700">Make investment decisions based on complete analysis, not just the 1% rule.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <Calculator className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Go Beyond the 1% Rule
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Use our comprehensive calculator to analyze cash flow, cap rate, ROI, and all the metrics 
              the 1% rule doesn't cover.
            </p>
            <Link 
              href="/#calculator"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-colors shadow-lg"
            >
              Try Full Analysis Calculator
            </Link>
          </section>

        </article>

        {/* Related Guides */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Related Guides</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/guide/cash-flow-analysis"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Cash Flow Analysis Guide</h4>
              <p className="text-gray-600 text-sm">Learn comprehensive cash flow calculation beyond simple rules</p>
            </Link>
            <Link 
              href="/guide/cap-rate-explained"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Cap Rate Explained</h4>
              <p className="text-gray-600 text-sm">Understanding capitalization rate for property analysis</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}