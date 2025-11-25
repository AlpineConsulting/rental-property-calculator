import Link from 'next/link';
import { DollarSign, Calculator, TrendingUp, BookOpen, ArrowLeft, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { affiliateConfig } from '@/utils/affiliateConfig';

export const metadata = {
  title: 'Cash Flow Analysis Guide for Rental Properties | Rental Scout Pro',
  description: 'Complete guide to calculating and analyzing rental property cash flow. Learn NOI, operating expenses, and cash-on-cash return formulas.',
  keywords: 'cash flow analysis, rental property cash flow, NOI, net operating income, real estate investing',
};

export default function CashFlowGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/guide" 
            className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rental Property Cash Flow Analysis
          </h1>
          <p className="text-xl text-green-100">
            Master the fundamentals of calculating and analyzing rental property cash flow
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* What is Cash Flow */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">What is Cash Flow?</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Cash flow is the money that remains after you collect rent and pay all operating expenses 
              and mortgage payments. It's the actual profit you put in your pocket each month from your 
              rental property investment.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Why Cash Flow Matters</h3>
              <p className="text-green-800 mb-4">
                Positive cash flow means your property generates more income than expenses—you're making 
                money each month. Negative cash flow means you're losing money and must cover the 
                difference from other sources.
              </p>
              <p className="text-green-800 font-semibold">
                Most successful rental property investors prioritize positive cash flow over appreciation.
              </p>
            </div>
          </section>

          {/* The Formula */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Cash Flow Calculation</h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl mb-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  Cash Flow = Total Income − Total Expenses
                </div>
                <p className="text-gray-600">Breaking it down further:</p>
                <div className="text-xl font-bold text-gray-900 mt-4">
                  Monthly Cash Flow = Gross Rent − (Operating Expenses + Mortgage Payment)
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Calculation:</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3 text-lg">Step 1: Calculate Gross Rental Income</h4>
                <p className="text-blue-800 mb-3">
                  Start with your monthly rental income from the property:
                </p>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-mono text-gray-900">Monthly Rent: $2,500</p>
                  <p className="font-mono text-gray-900">+ Other Income (laundry, parking): $100</p>
                  <p className="font-mono text-green-700 font-bold border-t border-gray-300 mt-2 pt-2">
                    = Gross Monthly Income: $2,600
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <h4 className="font-bold text-orange-900 mb-3 text-lg">Step 2: Subtract Vacancy Allowance</h4>
                <p className="text-orange-800 mb-3">
                  Account for expected vacancy (typically 5-10% of rent):
                </p>
                <div className="bg-white p-4 rounded border border-orange-200">
                  <p className="font-mono text-gray-900">Gross Monthly Income: $2,600</p>
                  <p className="font-mono text-red-600">− Vacancy (5%): −$130</p>
                  <p className="font-mono text-green-700 font-bold border-t border-gray-300 mt-2 pt-2">
                    = Effective Gross Income: $2,470
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h4 className="font-bold text-red-900 mb-3 text-lg">Step 3: Subtract Operating Expenses</h4>
                <p className="text-red-800 mb-3">
                  Deduct all monthly operating expenses:
                </p>
                <div className="bg-white p-4 rounded border border-red-200 space-y-1">
                  <p className="font-mono text-gray-700">Property Taxes: $300</p>
                  <p className="font-mono text-gray-700">Insurance: $150</p>
                  <p className="font-mono text-gray-700">Repairs/Maintenance: $200</p>
                  <p className="font-mono text-gray-700">Property Management (10%): $250</p>
                  <p className="font-mono text-gray-700">HOA Fees: $0</p>
                  <p className="font-mono text-gray-700">CapEx Reserve: $100</p>
                  <p className="font-mono text-red-600 font-bold border-t border-gray-300 mt-2 pt-2">
                    Total Operating Expenses: $1,000
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-3 text-lg">Step 4: Calculate NOI</h4>
                <p className="text-purple-800 mb-3">
                  Net Operating Income (before mortgage):
                </p>
                <div className="bg-white p-4 rounded border border-purple-200">
                  <p className="font-mono text-gray-900">Effective Gross Income: $2,470</p>
                  <p className="font-mono text-red-600">− Operating Expenses: −$1,000</p>
                  <p className="font-mono text-green-700 font-bold border-t border-gray-300 mt-2 pt-2">
                    = Net Operating Income (NOI): $1,470
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3 text-lg">Step 5: Subtract Mortgage Payment</h4>
                <p className="text-green-800 mb-3">
                  Finally, deduct your monthly mortgage payment:
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="font-mono text-gray-900">Net Operating Income: $1,470</p>
                  <p className="font-mono text-red-600">− Mortgage Payment: −$1,200</p>
                  <p className="font-mono text-green-700 font-bold text-xl border-t-2 border-gray-400 mt-3 pt-3">
                    = Monthly Cash Flow: $270
                  </p>
                  <p className="font-mono text-green-700 font-bold text-lg mt-2">
                    = Annual Cash Flow: $3,240
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Operating Expenses Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Operating Expenses
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Operating expenses are the costs of running and maintaining your rental property. 
              These are recurring expenses you'll pay regardless of whether you have a mortgage.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Include in Operating Expenses
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Property taxes</li>
                  <li>• Insurance (landlord policy)</li>
                  <li>• Property management fees</li>
                  <li>• Repairs and maintenance</li>
                  <li>• HOA/condo fees</li>
                  <li>• Utilities (if landlord pays)</li>
                  <li>• Landscaping/snow removal</li>
                  <li>• Capital expenditure reserves</li>
                  <li>• Advertising/vacancy costs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Do NOT Include
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mortgage payments (principal & interest)</li>
                  <li>• Income taxes</li>
                  <li>• Depreciation</li>
                  <li>• Capital improvements</li>
                  <li>• Down payment/purchase costs</li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Mortgage payments come after NOI calculation 
                    to determine cash flow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Positive vs Negative */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Positive vs Negative Cash Flow</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  Positive Cash Flow
                </h3>
                <p className="text-green-900 mb-4">
                  Income exceeds all expenses—you profit each month.
                </p>
                <div className="bg-white p-4 rounded border border-green-300">
                  <p className="font-mono text-gray-700">Income: $2,500</p>
                  <p className="font-mono text-gray-700">Expenses: $2,200</p>
                  <p className="font-mono text-green-700 font-bold border-t border-gray-300 mt-2 pt-2">
                    Cash Flow: +$300/month
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-green-900 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sustainable investment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Builds equity while profiting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Buffer for unexpected costs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-300">
                <h3 className="text-2xl font-bold text-red-700 mb-4">
                  Negative Cash Flow
                </h3>
                <p className="text-red-900 mb-4">
                  Expenses exceed income—you pay the difference out of pocket.
                </p>
                <div className="bg-white p-4 rounded border border-red-300">
                  <p className="font-mono text-gray-700">Income: $2,000</p>
                  <p className="font-mono text-gray-700">Expenses: $2,400</p>
                  <p className="font-mono text-red-700 font-bold border-t border-gray-300 mt-2 pt-2">
                    Cash Flow: -$400/month
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-red-900 text-sm">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Requires monthly subsidy</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risky if income drops</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Only works if appreciation expected</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-2">When Negative Cash Flow Might Be Acceptable:</h4>
              <p className="text-yellow-800">
                Some investors accept temporary negative cash flow if they expect significant appreciation, 
                tax benefits, or plan to increase rents soon. However, this is riskier and requires adequate 
                reserves to cover monthly shortfalls.
              </p>
            </div>
          </section>

          {/* Cash-on-Cash Return */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cash-on-Cash Return
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Cash-on-cash return measures your actual return on the cash you invested, including 
              down payment, closing costs, and any rehab expenses.
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  Cash-on-Cash Return = (Annual Cash Flow / Total Cash Invested) × 100
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-blue-500 mt-6">
                <h4 className="font-bold text-gray-900 mb-4">Example:</h4>
                <div className="space-y-2">
                  <p className="font-mono text-gray-700">Annual Cash Flow: $3,240</p>
                  <p className="font-mono text-gray-700">Down Payment: $80,000</p>
                  <p className="font-mono text-gray-700">Closing Costs: $8,000</p>
                  <p className="font-mono text-gray-700">Total Cash Invested: $88,000</p>
                  <p className="font-mono text-blue-700 font-bold text-lg border-t-2 border-gray-300 mt-3 pt-3">
                    Cash-on-Cash Return: 3.68%
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips for Maximizing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tips for Maximizing Cash Flow
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Increase Income</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Screen tenants carefully to reduce turnover</li>
                  <li>• Increase rents to market rate</li>
                  <li>• Add income streams (laundry, parking, storage)</li>
                  <li>• Consider short-term rentals if allowed</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">Reduce Expenses</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Shop insurance annually for better rates</li>
                  <li>• Appeal property tax assessments</li>
                  <li>• Improve energy efficiency</li>
                  <li>• Build handyman skills for minor repairs</li>
                  <li>• Refinance to lower interest rates</li>
                </ul>
              </div>
            </div>
          </section>

           {/* Resource Banner */}
          {affiliateConfig.showResourcesPage && (
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
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
              href="/guide/cap-rate"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Cap Rate Explained</h4>
              <p className="text-gray-600 text-sm">Understanding capitalization rate for property analysis</p>
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
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white mt-12">
            <Calculator className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Calculate Cash Flow for Your Property
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Use our free calculator to instantly analyze cash flow, NOI, and other 
              essential metrics for your rental property investment.
            </p>
            <Link 
              href="/#calculator"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg"
            >
              Try Calculator Now
            </Link>
          </section>

      </div>
    </div>
  );
}