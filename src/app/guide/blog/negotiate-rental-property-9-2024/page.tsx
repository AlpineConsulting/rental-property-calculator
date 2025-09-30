import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Handshake, TrendingDown } from 'lucide-react';

export const metadata = {
  title: 'How to Negotiate 10% Off Any Rental Property | Rental Scout Pro',
  description: 'Real negotiation tactics that work. Learn what motivates sellers and how to structure winning offers below asking price.',
  keywords: 'real estate negotiation, property negotiation, investment strategy, below market deals',
};

export default function NegotiateBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/guide/blog" 
            className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            Deal Making
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How to Negotiate 10% Off Any Rental Property
          </h1>
          
          <div className="flex items-center gap-6 text-green-100">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              September 1, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              8 min read
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Paying full asking price is for amateurs. Here's how experienced investors consistently negotiate better deals—even in competitive markets.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">The Negotiation Mindset</h3>
              <p className="text-green-800 mb-0">
                Every seller has a number they'll actually accept. It's rarely their asking price. Your job is to find that number while protecting your interests.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Seller Motivation</h2>
            
            <p>
              Before you make any offer, understand why they're selling. Motivated sellers accept lower offers. Unmotivated sellers don't budge.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                <h4 className="font-bold text-red-900 mb-3">Highly Motivated (Negotiate Aggressively)</h4>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Divorce situations</li>
                  <li>• Job relocation</li>
                  <li>• Financial distress</li>
                  <li>• Inherited property (non-investor heir)</li>
                  <li>• Property on market 90+ days</li>
                  <li>• Already purchased replacement property</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Less Motivated (Tread Carefully)</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• First week on market</li>
                  <li>• "Testing the waters"</li>
                  <li>• Multiple offers received</li>
                  <li>• Emotional attachment to property</li>
                  <li>• Overpriced listing (unrealistic expectations)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The 5-Step Negotiation Framework</h2>

            <div className="space-y-8 my-8">
              <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Research Comparable Sales</h4>
                    <p className="text-gray-700 mb-3">
                      Pull 5-10 recent sales (last 6 months) of similar properties in the same neighborhood. This gives you ammunition for your offer justification.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                      Pro tip: Focus on properties that needed work or sold quickly—these show what motivated sellers actually accepted.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Identify Property Issues</h4>
                    <p className="text-gray-700 mb-3">
                      During showings, document every issue. Deferred maintenance is your negotiating leverage:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm list-disc pl-5">
                      <li>Roof age and condition</li>
                      <li>HVAC system age</li>
                      <li>Plumbing or electrical issues</li>
                      <li>Foundation cracks</li>
                      <li>Cosmetic updates needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Structure Your Offer Strategically</h4>
                    <p className="text-gray-700 mb-3">
                      Don't just low-ball. Structure your offer to address seller concerns while protecting your interests:
                    </p>
                    <div className="bg-gray-50 p-4 rounded space-y-2 text-sm text-gray-700">
                      <p><strong>Offer 10-15% below asking</strong> but justify it with comps</p>
                      <p><strong>Quick close</strong> if they need fast sale (14-21 days)</p>
                      <p><strong>Flexible closing date</strong> if they need time</p>
                      <p><strong>Waive contingencies strategically</strong> (inspection but not financing)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Use Inspection for Second Negotiation</h4>
                    <p className="text-gray-700 mb-3">
                      Your offer is just round one. The inspection gives you a second bite at the apple:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm list-disc pl-5">
                      <li>Get a thorough inspection ($400-600 well spent)</li>
                      <li>Request repair credits for major items</li>
                      <li>Or request additional price reduction</li>
                      <li>Focus on safety/structural issues for maximum leverage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Be Ready to Walk Away</h4>
                    <p className="text-gray-700 mb-0">
                      Your strongest negotiating position is genuine willingness to walk away. If you're desperate to buy, sellers smell it and hold firm on price.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real Negotiation Example</h2>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl my-8">
              <h4 className="font-bold text-gray-900 mb-6 text-xl">Case Study: $440,000 List to $395,000 Purchase</h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-gray-400">
                  <p className="font-semibold text-gray-900 mb-2">Property Details:</p>
                  <p className="text-gray-700 text-sm">3/2 single family, 102 days on market, sellers relocating for job</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-900 mb-2">Initial Offer: $400,000</p>
                  <p className="text-gray-700 text-sm">Justified with 3 recent comps averaging $395k. Offered 14-day close and $5k earnest money.</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-900 mb-2">Counter: $425,000</p>
                  <p className="text-gray-700 text-sm">Seller countered high but showed willingness to negotiate.</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-900 mb-2">Our Counter: $410,000</p>
                  <p className="text-gray-700 text-sm">Moved up slightly, emphasized our financing is solid and close is guaranteed.</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-900 mb-2">Inspection Findings:</p>
                  <p className="text-gray-700 text-sm">Roof needed $8,500 in repairs, HVAC was 18 years old</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-2">Final Agreement: $395,000</p>
                  <p className="text-gray-700 text-sm">Requested $15k reduction for repairs. Settled at $395k with seller providing $5k credit.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-100 rounded">
                <p className="font-bold text-green-900 mb-1">Result: $45,000 saved (10.2% off asking)</p>
                <p className="text-sm text-green-800">This increased our cash-on-cash return by 2.3 percentage points.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advanced Tactics</h2>

            <div className="space-y-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">The "Reluctant Buyer" Play</h4>
                <p className="text-gray-700">
                  Act like you're doing the seller a favor by buying their problem property. Point out every flaw, sigh about the work needed, mention other properties you're considering. This psychological framing puts them on defense.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">The "Escalation Clause Alternative"</h4>
                <p className="text-gray-700">
                  Instead of escalation clauses that show your max price, offer: "Best and final offer of $X. If you receive a higher offer, give us the opportunity to match it." You get the upside without revealing your ceiling.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">The "Cash vs Financing" Leverage</h4>
                <p className="text-gray-700">
                  Even if you plan to finance, get pre-approved for both cash and financing. Offer cash at a lower price OR financed at a higher price. Many sellers prefer the certainty of cash even at 5-10% less.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What NOT to Do</h2>

            <div className="space-y-4 my-8">
              <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-2">❌ Don't insult the seller</p>
                <p className="text-red-800 text-sm">"This place is a dump" might be true, but it kills negotiations. Stay professional.</p>
              </div>

              <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-2">❌ Don't make arbitrary low-ball offers</p>
                <p className="text-red-800 text-sm">Offering 50% of asking with no justification gets your offer thrown in the trash.</p>
              </div>

              <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-2">❌ Don't reveal your budget</p>
                <p className="text-red-800 text-sm">Never tell an agent "I can go up to $X." That becomes your minimum, not maximum.</p>
              </div>

              <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-2">❌ Don't negotiate against yourself</p>
                <p className="text-red-800 text-sm">If they counter, wait for them to move again. Don't immediately raise your offer.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Math of Negotiating</h2>

            <p>
              Here's why negotiating matters so much for investors:
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-gray-900 mb-4">Impact of $40,000 Price Reduction:</h4>
              <div className="space-y-3 text-gray-700">
                <p>Purchase at $440,000 vs $400,000 with 20% down:</p>
                <div className="bg-white p-4 rounded space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Down payment savings:</span>
                    <span className="font-bold text-green-700">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lower monthly payment:</span>
                    <span className="font-bold text-green-700">$200/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional annual cash flow:</span>
                    <span className="font-bold text-green-700">$2,400</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                    <span className="font-bold">Year 1 total benefit:</span>
                    <span className="font-bold text-green-700">$10,400</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white mt-12">
              <TrendingDown className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Calculate Your Negotiating Power</h3>
              <p className="text-green-100 mb-6">
                See how much a price reduction improves your cash flow and returns.
              </p>
              <Link 
                href="/#calculator"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg"
              >
                Try Calculator Now
              </Link>
            </div>

          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/guide/blog/should-you-buy-9-2024"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Should You Buy in 2024?</h4>
              <p className="text-gray-600 text-sm">Market conditions and timing strategies</p>
            </Link>
            <Link 
              href="/guide/cash-flow"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Cash Flow Analysis</h4>
              <p className="text-gray-600 text-sm">How purchase price affects your returns</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}