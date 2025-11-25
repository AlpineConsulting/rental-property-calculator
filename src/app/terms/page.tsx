import { Shield, AlertTriangle, Scale } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service & Legal | Rental Scout Pro',
  description: 'Terms of Service, Privacy Policy, and legal disclaimers for Rental Scout Pro',
  robots: 'noindex, nofollow', // Don't index until reviewed by attorney
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        
        {/* Warning Banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-yellow-900 mb-2">
                Rental Scout Pro Terms of Use
              </h3>
              <p className="text-yellow-800">
              These Terms of Use apply to all users of this Site, whether or not you are a registered member. By accessing or using any part of this Site or Content or by clicking a box that states that you accept or agree to these Terms of Use, you agree that you have read and agree to comply with and be bound by these Terms of Use. If you do not agree to these Terms of Use, you may not access or use this Site or any Content. If you are entering into these Terms of Use on behalf of an entity, by accessing or using any part of this Site or Content or by clicking a box that states that you accept or agree to these Terms of Use, you represent and warrant that you have authority to bind that entity to these Terms of Use.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Disclaimer */}
        <section id="disclaimer" className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Disclaimer & Important Notice
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">CRITICAL DISCLAIMER</h3>
              <p className="text-red-800 font-semibold mb-4">
                Rental Scout Pro, this website, content and tools are provided for INFORMATIONAL AND 
                EDUCATIONAL PURPOSES ONLY and does NOT constitute:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-red-800">
                <li>Financial advice or financial planning services</li>
                <li>Investment advice or investment recommendations</li>
                <li>Legal advice or legal counsel</li>
                <li>Tax advice or tax preparation services</li>
                <li>Real estate brokerage or agency services</li>
                <li>Accounting or bookkeeping services</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6">No Professional Relationship</h3>
            <p>
              Use of this calculator does not create any professional relationship between you and 
              Rental Scout Pro, or any of its operators. We are not your financial 
              advisor, investment advisor, attorney, tax professional, or real estate agent.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">Consult Qualified Professionals</h3>
            <p>
              Before making ANY real estate or investment decision, you MUST consult with qualified 
              professionals.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">No Guarantees</h3>
            <p>
              All calculations provided are ESTIMATES based on information YOU provide. We make 
              NO WARRANTIES, express or implied, regarding or limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Accuracy of calculations</li>
              <li>Suitability for your specific situation</li>
              <li>Actual investment performance or returns</li>
              <li>Future market conditions or property values</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6">Your Responsibility</h3>
            <p className="font-semibold">
              YOU are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Understanding the limitations of the calculator and the information provided</li>
              <li>Using the calculator for informational purposes only</li>
              <li>Not relying on the calculator as a sole source of information</li>
              <li>Verifying all calculations independently</li>
              <li>Conducting thorough due diligence on any property</li>
              <li>Understanding all risks associated with real estate investment</li>
              <li>Making your own informed investment decisions</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Consulting with qualified professionals before making any decisions</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6">Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, Rental Scout Pro 
              shall not be liable for any direct, indirect, incidental, consequential, or 
              punitive damages arising from your use of this website, its content, and tool or any investment decisions 
              made based on information from this tool.
            </p>
          </div>
        </section>

        {/* Section 2: Terms of Service */}
        <section id="terms" className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 mt-6">
            Terms of Service
          </h3>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-red-600 font-bold">
            These Terms of Use apply to all users of this Site, whether or not you are a registered member. By accessing or using any part of this Site or Content or by clicking a box that states that you accept or agree to these Terms of Use, you agree that you have read and agree to comply with and be bound by these Terms of Use. If you do not agree to these Terms of Use, you may not access or use this Site or any Content. If you are entering into these Terms of Use on behalf of an entity, by accessing or using any part of this Site or Content or by clicking a box that states that you accept or agree to these Terms of Use, you represent and warrant that you have authority to bind that entity to these Terms of Use.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900">Acceptance of Terms</h3>
            <p>
              By accessing or using Rental Scout Pro, you agree to be bound by these Terms of 
              Service. If you do not agree, do not use this service.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">No Warranty</h3>
            <p>
              This service is provided "AS IS" without warranties of any kind.
            </p>
          </div>
        </section>

        {/* Section 4: Affiliate Disclosures */}
        <section id="affiliates" className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 mt-6">
            Affiliate Disclosures
          </h3>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="font-semibold text-blue-900">
                This site may contain affiliate links. We may receive 
                compensation when you click on or make purchases through these links, at 
                no additional cost to you.
              </p>
            </div>

            <p>
              Rental Scout Pro participates in various affiliate marketing programs. This means 
              we may earn commissions on qualifying purchases or sign-ups through links on this site.
            </p>

            <p className="font-semibold">
              Our affiliate relationships do NOT influence the calculator's calculations or the 
              educational content we provide. All calculations use industry-standard formulas 
              regardless of affiliate partnerships.
            </p>
          </div>
        </section>
        
        <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-6"> Privacy Policy</h2> 

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
            
              <p className="text-gray-800 mb-0">
                <strong>Your Privacy Matters:</strong> Rental Scout Pro is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and share information when you use our website and services.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Information We Collect</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4"> Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not require you to create an account or provide personal information to use our rental property calculator. 
              However, you may voluntarily provide information when you:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Contact us via email or contact forms</li>
              <li>• Subscribe to our newsletter (if applicable)</li>
              <li>• Participate in surveys or feedback requests</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you visit our website, we automatically collect certain information through cookies and similar technologies:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked</li>
              <li>• <strong>Device Information:</strong> Browser type, operating system, device type</li>
              <li>• <strong>IP Address:</strong> Your approximate geographic location (city/country level)</li>
              <li>• <strong>Referral Information:</strong> The website that referred you to us</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
              <p className="text-gray-800 mb-0">
                <strong>Important:</strong> Calculator inputs (purchase price, rent, expenses, etc.) are processed locally in your browser 
                and are NOT stored on our servers or transmitted to us. Your property analysis data remains completely private.
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6">How We Use Your Information</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Provide and improve our calculator and website functionality</li>
              <li>• Analyze website usage and optimize user experience</li>
              <li>• Respond to your inquiries and customer service requests</li>
              <li>• Send occasional updates or newsletters (only if you opt-in)</li>
              <li>• Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6">Cookies and Tracking Technologies</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We use cookies and similar technologies to enhance your experience and understand how our website is used.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Types of Cookies We Use</h3>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Essential Cookies</h4>
              <p className="text-gray-700 text-sm">
                Required for basic website functionality. These cannot be disabled as the site would not function properly without them.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Analytics Cookies (Google Analytics)</h4>
              <p className="text-gray-700 text-sm mb-2">
                Help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <p className="text-gray-600 text-xs italic">
                You can opt-out of Google Analytics by installing the{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Advertising Cookies (Google AdSense)</h4>
              <p className="text-gray-700 text-sm mb-2">
                Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. 
                These cookies enable Google and its partners to serve ads based on your visit history.
              </p>
              <p className="text-gray-600 text-xs italic">
                You can opt-out of personalized advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Google Ads Settings
                </a>{' '}
                or{' '}
                <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  www.aboutads.info
                </a>.
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6">Third-Party Services</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We use the following third-party services that may collect information:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Google Analytics</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Analytics and website usage tracking.
                </p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">
                  Google Privacy Policy →
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Google AdSense</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Display advertising on our website.
                </p>
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">
                  How Google Uses Data →
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Affiliate Partners</h4>
                <p className="text-gray-700 text-sm mb-2">
                  When you click on affiliate links, you may be redirected to third-party websites that have their own privacy policies. 
                  We are not responsible for the privacy practices of these external sites.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6">Data Sharing and Disclosure</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Service Providers:</strong> With trusted third-party services (Google Analytics, AdSense) that help us operate our website</li>
              <li>• <strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
              <li>• <strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6">Your Rights (GDPR & CCPA)</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your location, you may have the following rights:
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-900 mb-3">EU/EEA Users (GDPR Rights):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Access:</strong> Request a copy of data we hold about you</li>
                <li>• <strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li>• <strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li>• <strong>Restriction:</strong> Request limitation of data processing</li>
                <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                <li>• <strong>Objection:</strong> Object to processing of your data</li>
                <li>• <strong>Withdraw Consent:</strong> Withdraw consent at any time (for consent-based processing)</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-purple-900 mb-3">California Users (CCPA Rights):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Request disclosure of personal information collected</li>
                <li>• Request deletion of personal information</li>
                <li>• Opt-out of sale of personal information (we do not sell personal data)</li>
                <li>• Non-discrimination for exercising privacy rights</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              To exercise any of these rights, please contact us at the email address provided below.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6">Data Retention</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We retain information only as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Analytics Data:</strong> Retained according to Google Analytics retention settings (typically 26 months)</li>
              <li>• <strong>Contact Form Data:</strong> Deleted within 2 years unless required for legal purposes</li>
              <li>• <strong>Calculator Inputs:</strong> Never stored - processed locally in your browser only</li>
            </ul>
      </div>
    </div>
  );
}