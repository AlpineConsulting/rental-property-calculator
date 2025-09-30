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

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Scale className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Legal Information
          </h1>
          <p className="text-gray-600">
            Last Updated: [2025] | Effective Date: [September 30, 2025]
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#disclaimer" className="text-blue-600 hover:underline">1. Disclaimer & Important Notice</a></li>
            <li><a href="#terms" className="text-blue-600 hover:underline">2. Terms of Service</a></li>
            <li><a href="#privacy" className="text-blue-600 hover:underline">3. Privacy Policy</a></li>
            <li><a href="#affiliates" className="text-blue-600 hover:underline">4. Affiliate Disclosures</a></li>
            <li><a href="#contact" className="text-blue-600 hover:underline">5. Contact Information</a></li>
          </ul>
        </nav>

        {/* Section 1: Disclaimer */}
        <section id="disclaimer" className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              1. Disclaimer & Important Notice
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
              professionals including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Licensed real estate attorneys</li>
              <li>Certified public accountants (CPAs) or tax professionals</li>
              <li>Licensed financial advisors</li>
              <li>Real estate agents or brokers</li>
              <li>Property inspectors and appraisers</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6">No Guarantees</h3>
            <p>
              All calculations provided are ESTIMATES based on information YOU provide. We make 
              NO WARRANTIES, express or implied, regarding:
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
              <li>Verifying all calculations independently</li>
              <li>Conducting thorough due diligence on any property</li>
              <li>Understanding all risks associated with real estate investment</li>
              <li>Making your own informed investment decisions</li>
              <li>Complying with all applicable laws and regulations</li>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. Terms of Service
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-red-600 font-bold">
            These Terms of Use apply to all users of this Site, whether or not you are a registered member. By accessing or using any part of this Site or Content or by clicking a box that states that you accept or agree to these Terms of Use, you agree that you have read and agree to comply with and be bound by these Terms of Use. If you do not agree to these Terms of Use, you may not access or use this Site or any Content. If you are entering into these Terms of Use on behalf of an entity, by accessing or using any part of this Site or Content or by clicking a box that states that you accept or agree to these Terms of Use, you represent and warrant that you have authority to bind that entity to these Terms of Use.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900">Acceptance of Terms</h3>
            <p>
              By accessing or using Rental Scout Pro, you agree to be bound by these Terms of 
              Service. If you do not agree, do not use this service.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">Use License</h3>
            <p>
              [ATTORNEY TO SPECIFY: Permitted uses, restrictions, intellectual property rights]
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">User Conduct</h3>
            <p>
              [ATTORNEY TO SPECIFY: Prohibited activities, acceptable use policy]
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">No Warranty</h3>
            <p>
              This service is provided "AS IS" without warranties of any kind.
            </p>
          </div>
        </section>

        {/* Section 3: Privacy Policy 
        <section id="privacy" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. Privacy Policy
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-red-600 font-bold">
              [ATTORNEY MUST DRAFT - GDPR/CCPA compliance required]
            </p>

            <h3 className="text-xl font-bold text-gray-900">Information We Collect</h3>
            <p>
              [ATTORNEY TO SPECIFY: What data you collect, how you collect it, cookies, analytics]
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">How We Use Information</h3>
            <p>
              [ATTORNEY TO SPECIFY: Data usage, third-party services, analytics providers]
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">Data Protection Rights</h3>
            <p>
              [ATTORNEY TO SPECIFY: GDPR rights, CCPA rights, data deletion requests]
            </p>
          </div>
        </section> */}

        {/* Section 4: Affiliate Disclosures */}
        <section id="affiliates" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. Affiliate Disclosures
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="font-semibold text-blue-900">
                REQUIRED BY FTC: This site may contain affiliate links. We may receive 
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

            {/*<p className="text-red-600 font-bold">
              [ATTORNEY TO REVIEW: FTC 16 CFR Part 255 compliance, state-specific requirements]
            </p>*/}
          </div>
        </section>

        {/* Section 5: Contact */}
       {/*} <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. Contact Information
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              For questions about these terms, privacy practices, or affiliate relationships:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mt-4">
              <p className="font-mono">
                <strong>[YOUR LLC LEGAL NAME]</strong><br />
                [Street Address]<br />
                [City, State ZIP]<br />
                Email: [legal@yourdomLin.com]<br />
                Website: [yourwebsite.com]
              </p>
            </div>
          </div>
        </section>*/}

        {/* Footer Warning */}
        <div className="border-t-2 border-gray-200 pt-8 mt-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-2">
              ⚠️ Demo Website
            </h3>
            <p className="text-red-800 text-sm">
              This website has been launched for demo purposes only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}