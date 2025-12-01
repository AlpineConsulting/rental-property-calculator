import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, AlertTriangle, DollarSign, ExternalLink} from 'lucide-react';
import { affiliateConfig } from '@/utils/affiliateConfig';

export const metadata = {
  title: '5 Hidden Costs First-Time Landlords Always Forget | Rental Scout Pro',
  description: 'Avoid these commonly overlooked expenses that can derail your first rental property investment. Budget like an experienced landlord.',
  keywords: 'landlord expenses, hidden costs, rental property budget, first-time landlord',
};

export default function HiddenCostsBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/guide/blog" 
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Beginner Tips
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            5 Hidden Costs First-Time Landlords Always Forget
          </h1>
          
          <div className="flex items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              September 14
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              6 min read
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              You've run the numbers. The property cash flows. You're ready to buy your first rental-then reality hits. 
              Here are the expenses seasoned landlords budget for that beginners almost always miss.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-2">The Real Cost</h3>
                  <p className="text-red-800 mb-0">
                    These hidden expenses can easily add $200-500/month to your operating costs. If you didn't budget 
                    for them, your "cash flowing" property might actually lose money.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Capital Expenditures (CapEx)</h2>
            
            <p>
              Your roof won't last forever. Neither will your HVAC system, water heater, or appliances. These big-ticket 
              items don't break every month, but when they do, you're looking at thousands of dollars.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-gray-900 mb-4">What to Budget:</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Roof replacement (every 20-30 years):</span>
                  <span className="font-semibold">$50-100/month reserve</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>HVAC replacement (every 15-20 years):</span>
                  <span className="font-semibold">$30-50/month reserve</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Appliances, water heater, flooring:</span>
                  <span className="font-semibold">$20-40/month reserve</span>
                </div>
                <div className="flex justify-between bg-blue-50 p-3 rounded mt-2">
                  <span className="font-bold text-gray-900">Total CapEx Reserve:</span>
                  <span className="font-bold text-blue-700">$100-190/month</span>
                </div>
              </div>
            </div>

            <p className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-gray-700 italic">
              Pro tip: Many first-timers skip this, thinking "I'll deal with it when it breaks." That's how you end 
              up draining your emergency fund or putting repairs on credit cards.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Vacancy Costs</h2>
            
            <p>
              Your property won't be rented 100% of the time. Between tenants, you'll have vacancy periods for 
              turnover, cleaning, minor repairs, and finding new tenants.
            </p>

            <p>
              Even great properties in strong rental markets should budget 5-8% for vacancy. In weaker markets or 
              with seasonal rentals, plan for 10-15%.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-gray-900 mb-3">Vacancy Math Example:</h4>
              <p className="text-gray-700 mb-2">Monthly rent: $2,000</p>
              <p className="text-gray-700 mb-2">Vacancy rate: 8%</p>
              <p className="text-blue-700 font-bold">Effective monthly loss: $160</p>
              <p className="text-sm text-gray-600 mt-3">
                That's almost 20 days vacant per year—one turnover with a 2-3 week gap between tenants.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Leasing and Tenant Screening Costs</h2>
            
            <p>
              Finding good tenants isn't free. Between listing fees, background checks, credit reports, and your time 
              (or a property manager's commission), tenant placement has real costs.
            </p>

            <div className="space-y-3 my-6">
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Listing photos/marketing:</span>
                  <span className="font-semibold text-gray-900">$50-200</span>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Background/credit checks (per applicant):</span>
                  <span className="font-semibold text-gray-900">$30-50</span>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Property manager leasing fee:</span>
                  <span className="font-semibold text-gray-900">50-100% of 1 month rent</span>
                </div>
              </div>
            </div>

            <p>
              If you turn over tenants every 2-3 years, this averages to $30-80/month in hidden costs.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Landscaping and Snow Removal</h2>
            
            <p>
              Unless you're renting an apartment where the HOA handles it, somebody needs to mow the lawn and shovel 
              the driveway. Even if your lease says "tenant responsible," many landlords end up doing it themselves 
              when tenants don't maintain the property to code.
            </p>

            <div className="bg-green-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-gray-900 mb-3">Typical Costs:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Lawn mowing (April-October): $100-150/month</li>
                <li>Snow removal (November-March): $50-100/month</li>
                <li>Spring/fall cleanup: $200-400 annually</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 mb-0">
                Average monthly impact: $75-125, depending on your market and property size.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Pest Control and Preventive Maintenance</h2>
            
            <p>
              Reactive maintenance is expensive. Proactive maintenance saves money in the long run but costs money upfront.
            </p>

            <p>
              Smart landlords budget for regular HVAC servicing, gutter cleaning, pest control, and other preventive 
              measures that keep small problems from becoming expensive emergencies.
            </p>

            <div className="space-y-3 my-6">
              <div className="flex justify-between bg-white border-2 border-gray-200 p-4 rounded-lg">
                <span className="text-gray-700">HVAC servicing (2x/year):</span>
                <span className="font-semibold text-gray-900">$15-25/month</span>
              </div>
              <div className="flex justify-between bg-white border-2 border-gray-200 p-4 rounded-lg">
                <span className="text-gray-700">Pest control (quarterly):</span>
                <span className="font-semibold text-gray-900">$30-50/month</span>
              </div>
              <div className="flex justify-between bg-white border-2 border-gray-200 p-4 rounded-lg">
                <span className="text-gray-700">Gutter cleaning, dryer vent, etc.:</span>
                <span className="font-semibold text-gray-900">$20-40/month</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Real Operating Expense Budget</h2>

            <p>
              Here's what your actual monthly expenses look like when you include everything:
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl my-8">
              <h4 className="font-bold text-gray-900 mb-6 text-xl">Complete Monthly Budget Example:</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Mortgage (P&I)</span>
                  <span className="font-mono">$1,200</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Property tax</span>
                  <span className="font-mono">$300</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Insurance</span>
                  <span className="font-mono">$150</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Property management (10%)</span>
                  <span className="font-mono">$200</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Maintenance reserve (1%)</span>
                  <span className="font-mono">$200</span>
                </div>
                <div className="border-t-2 border-gray-300 pt-3 mt-3"></div>
                <div className="flex justify-between text-red-700 font-semibold">
                  <span>CapEx reserve</span>
                  <span className="font-mono">$150</span>
                </div>
                <div className="flex justify-between text-red-700 font-semibold">
                  <span>Vacancy (8%)</span>
                  <span className="font-mono">$160</span>
                </div>
                <div className="flex justify-between text-red-700 font-semibold">
                  <span>Leasing costs</span>
                  <span className="font-mono">$50</span>
                </div>
                <div className="flex justify-between text-red-700 font-semibold">
                  <span>Landscaping/snow</span>
                  <span className="font-mono">$100</span>
                </div>
                <div className="flex justify-between text-red-700 font-semibold">
                  <span>Pest/preventive maintenance</span>
                  <span className="font-mono">$65</span>
                </div>
                <div className="border-t-2 border-gray-400 pt-4 mt-4"></div>
                <div className="flex justify-between text-gray-900 font-bold text-lg">
                  <span>Total Monthly Expenses</span>
                  <span className="font-mono">$2,575</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 mb-2">
                  <strong>With $2,000/month rent:</strong> You're losing $575/month
                </p>
                <p className="text-sm text-blue-800 mb-0">
                  <strong>Need $2,650/month rent just to break even</strong>
                </p>
              </div>
            </div>

            <p>
              Notice those 5 "hidden" costs add up to $525/month—over $6,000/year. That's the difference between a 
              property that looks profitable on paper and one that actually makes money in real life.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Action Steps</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">1. Recalculate Your Deal</p>
                <p className="text-gray-700 mb-0">
                  Go back to any property you're analyzing and add these 5 costs. Does it still cash flow?
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">2. Set Up Reserves</p>
                <p className="text-gray-700 mb-0">
                  Open a separate savings account for CapEx and vacancy reserves. Fund it monthly.
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">3. Use Conservative Estimates</p>
                <p className="text-gray-700 mb-0">
                  When in doubt, budget more for expenses. Better to be pleasantly surprised than scrambling for cash.
                </p>
              </div>
            </div>

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

          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/guide/cash-flow"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Cash Flow Analysis Guide</h4>
              <p className="text-gray-600 text-sm">Complete breakdown of rental property expenses</p>
            </Link>
            <Link 
              href="/guide/blog/buying-during-high-rates"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Should You Buy a Rental Property During High Interest Rates?</h4>
              <p className="text-gray-600 text-sm">Strategic advice for navigating rental property investments when mortgage rates are elevated. Learn when high rates create opportunities.</p>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Calculate Your True Expenses</h3>
              <p className="text-blue-100 mb-6">
                Use our calculator with all the hidden costs included to see your real cash flow.
              </p>
              <Link 
                href="/#calculator"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Try Calculator Now
              </Link>
            </div>
      </article>
    </div>
  );
}