import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Shield, FileText, CheckCircle, XCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { affiliateConfig } from '@/utils/affiliateConfig';

export const metadata = {
  title: 'How to Screen Tenants: A Complete Landlord\'s Guide | Rental Scout Pro',
  description: 'Complete guide to tenant screening for landlords. Learn how to evaluate rental applications, check credit, verify income, and avoid problem tenants legally.',
  keywords: 'tenant screening, landlord guide, rental application, credit check, background check, tenant verification',
};

export default function TenantScreeningGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/guide/blog"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="inline-block px-4 py-1 bg-blue-500/30 rounded-full text-sm font-semibold mb-4">
            Beginner Tips
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How to Screen Tenants: A Complete Landlord's Guide
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>October 31 </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
              <p className="text-lg text-gray-800 leading-relaxed mb-0">
                <strong>The Foundation of Successful Landlording:</strong> Finding good tenants is the single most important factor 
                in rental property success. A thorough screening process protects your investment, reduces turnover, and saves you 
                thousands in potential damages and lost rent.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Tenant Screening Matters</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The difference between a profitable rental and a nightmare property often comes down to one decision: who you choose 
              as your tenant. Consider the costs of a bad tenant:
            </p>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">The True Cost of a Bad Tenant:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Lost Rent:</strong> 3-6 months of unpaid rent during eviction process ($6,000-$12,000 on a $2K/month property)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Legal Fees:</strong> $2,000-$5,000 for eviction attorneys and court costs</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Property Damage:</strong> $3,000-$10,000+ in repairs beyond security deposit</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Vacancy Costs:</strong> Lost rent during turnover and re-leasing ($2,000-$4,000)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Time & Stress:</strong> Months of dealing with problems, court appearances, and cleanup</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t-2 border-red-300">
                <p className="text-red-900 font-bold mb-0">Total Potential Loss: $15,000-$35,000+ per bad tenant</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">The Value of Good Screening:</h3>
              <p className="text-gray-700 mb-3">
                Spending 2-3 hours on thorough tenant screening can save you tens of thousands of dollars and countless headaches. 
                Good tenants pay on time, care for the property, and renew leases - making your job as a landlord easy and profitable.
              </p>
              <p className="text-green-800 font-semibold mb-0">
                A $50 background check and a few hours of verification is the best investment you'll make as a landlord.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Complete Tenant Screening Process</h2>
            
            <div className="space-y-8 mb-12">
              
              {/* Step 1 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-Screen with Clear Rental Criteria</h3>
                    <p className="text-gray-600 text-sm">Before showing the property, establish and advertise your requirements</p>
                  </div>
                </div>
                
                <div className="ml-14">
                  <h4 className="font-bold text-gray-900 mb-3">Minimum Qualifications to Advertise:</h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Income Requirement:</strong> Gross monthly income 3x the rent (some use 2.5-3x)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Credit Score:</strong> Minimum 600-650 (adjust based on your market)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Rental History:</strong> No evictions in the past 7 years</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Employment:</strong> Current employment or verifiable income source</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Criminal Background:</strong> No violent crimes or drug-related felonies</span>
                    </li>
                  </ul>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 mb-0">
                      <strong>Legal Tip:</strong> Apply the same criteria to all applicants consistently. Different standards 
                      for different applicants can violate Fair Housing laws.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Rental Application</h3>
                    <p className="text-gray-600 text-sm">Collect detailed information before running paid background checks</p>
                  </div>
                </div>
                
                <div className="ml-14">
                  <h4 className="font-bold text-gray-900 mb-3">Essential Application Information:</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Personal Information:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Full legal name</li>
                        <li>• Date of birth</li>
                        <li>• Social Security number</li>
                        <li>• Driver's license number</li>
                        <li>• Phone and email</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Current Housing:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Current address</li>
                        <li>• Landlord contact info</li>
                        <li>• Monthly rent amount</li>
                        <li>• Move-in and move-out dates</li>
                        <li>• Reason for leaving</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Employment & Income:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Employer name and address</li>
                        <li>• Supervisor contact info</li>
                        <li>• Job title and length of employment</li>
                        <li>• Gross monthly income</li>
                        <li>• Other income sources</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Additional Information:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Vehicles (make, model, license)</li>
                        <li>• Pets (type, size, breed)</li>
                        <li>• Emergency contact</li>
                        <li>• Personal references</li>
                        <li>• Previous rental history (2-3 years)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 mb-0">
                      <strong>Pro Tip:</strong> Charge a non-refundable application fee ($30-$50) to cover screening costs. 
                      This also filters out unserious applicants who aren't willing to invest in the process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Credit & Background Check</h3>
                    <p className="text-gray-600 text-sm">Use professional screening services for accurate, legal reports</p>
                  </div>
                </div>
                
                <div className="ml-14">
                  <h4 className="font-bold text-gray-900 mb-3">What to Look For:</h4>
                  
                  <div className="mb-6">
                    <p className="font-semibold text-gray-900 mb-2 flex items-center">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      Credit Report Analysis:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-7">
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong>Credit Score:</strong> 650+ is good, 600-650 is borderline, below 600 needs strong compensating factors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong>Payment History:</strong> Look for consistent on-time payments on credit cards, auto loans, student loans</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong>Collections:</strong> Medical debt is less concerning than unpaid rent or utilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong>Debt-to-Income:</strong> Total monthly debts shouldn't exceed 40-45% of income</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-2">🚩</span>
                        <span><strong>Red Flags:</strong> Recent evictions, unpaid rent, utility collections, or bankruptcies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      Criminal Background Check:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-7">
                      <li className="flex items-start">
                        <span className="text-green-600 font-bold mr-2">•</span>
                        <span><strong>Focus on:</strong> Violent crimes, property crimes, drug manufacturing/distribution, sex offenses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 font-bold mr-2">•</span>
                        <span><strong>Consider:</strong> How recent was the offense? What was the severity? Has the person been rehabilitated?</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 font-bold mr-2">•</span>
                        <span><strong>Legal Note:</strong> Cannot automatically reject based on arrests (only convictions). Check local laws.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 mb-2">
                      <strong>Recommended Services:</strong>
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• TransUnion SmartMove - $25-40 per applicant</li>
                      <li>• RentPrep - $21-40 per applicant</li>
                      <li>• MyRental - $30+ per applicant</li>
                      <li>• Buildium (property management software with built-in screening)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Income Verification</h3>
                    <p className="text-gray-600 text-sm">Confirm the applicant can actually afford your rent</p>
                  </div>
                </div>
                
                <div className="ml-14">
                  <h4 className="font-bold text-gray-900 mb-3">Required Documentation:</h4>
                  <ul className="space-y-3 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>W-2 Employees:</strong>
                        <p className="text-sm mt-1">Last 2-3 pay stubs AND offer letter or employment verification call</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Self-Employed:</strong>
                        <p className="text-sm mt-1">Last 2 years of tax returns (1040s with Schedule C) + recent bank statements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Retirement/Social Security:</strong>
                        <p className="text-sm mt-1">Award letter from SSA or pension statements showing monthly amount</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Other Income:</strong>
                        <p className="text-sm mt-1">Child support orders, alimony agreements, investment statements with history</p>
                      </div>
                    </li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 mb-2">
                      <strong>Verification Call Script:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      "Hi, this is [Name] from [Your Company]. I'm calling to verify employment for [Applicant Name] who has 
                      applied to rent one of our properties. Can you confirm:"
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Current employment status and start date?</li>
                      <li>• Job title and full-time/part-time status?</li>
                      <li>• Approximate annual salary or hourly wage?</li>
                      <li>• Any planned layoffs or employment changes?</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Landlord References</h3>
                    <p className="text-gray-600 text-sm">The most valuable part of tenant screening</p>
                  </div>
                </div>
                
                <div className="ml-14">
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-4">
                    <p className="text-green-900 font-semibold mb-2">Why This Step Is Critical:</p>
                    <p className="text-gray-700 text-sm mb-0">
                      Past behavior is the best predictor of future behavior. A previous landlord has no incentive to lie 
                      (unlike friends or family references) and can tell you exactly what kind of tenant this person will be.
                    </p>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-3">Questions to Ask Previous Landlords:</h4>
                  <div className="space-y-3 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-900 text-sm mb-1">1. "Did [Applicant] pay rent on time every month?"</p>
                      <p className="text-xs text-gray-600">If they hesitate or say "mostly," that's a red flag.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-900 text-sm mb-1">2. "Did they give proper notice before moving out?"</p>
                      <p className="text-xs text-gray-600">Shows respect for lease terms and proper procedures.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-900 text-sm mb-1">3. "How did they maintain the property?"</p>
                      <p className="text-xs text-gray-600">Listen for "clean," "took good care of it," or concerning hesitation.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-900 text-sm mb-1">4. "Were there any noise complaints or issues with neighbors?"</p>
                      <p className="text-xs text-gray-600">Important for multi-family or close-proximity properties.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-900 text-sm mb-1">5. "How much was their security deposit, and did they get it back?"</p>
                      <p className="text-xs text-gray-600">If they lost the deposit, ask why. Damage? Unpaid rent?</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-900 text-sm mb-1">6. "Would you rent to them again?"</p>
                      <p className="text-xs text-gray-600">The most important question. A "yes" or immediate hesitation tells you everything.</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 mb-2">
                      <strong className="text-red-900">Warning:</strong> Call the landlord BEFORE the current one.
                    </p>
                    <p className="text-sm text-gray-700 mb-0">
                      Current landlords might give glowing reviews to problem tenants just to get rid of them. 
                      The previous landlord has no motivation to lie.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Red Flags to Watch For</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Immediate Disqualifiers
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lying on the application (different info when verified)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recent evictions (within 3-7 years)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Income less than 2.5x rent with no compensating factors</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multiple unpaid rent collections on credit report</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Violent criminal history or property crimes</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cannot verify employment or income sources</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Previous landlord says they wouldn't rent to them again</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Warning Signs (Proceed with Caution)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rushing you to make a decision ("I need to move in tomorrow")</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Offering to pay several months upfront (could be avoiding credit check)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cannot provide landlord references ("I've always lived with family")</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Frequent job changes (every 3-6 months)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multiple recent moves (red flag for serial evaders)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Credit score below 600 with no explanation</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evasive or defensive when asked screening questions</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Fair Housing Laws: What You MUST Know</h2>
            
            <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Protected Classes (Federal Level)</h3>
              <p className="text-gray-700 mb-4">
                You cannot discriminate or apply different standards based on:
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Race or color</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                    <span>National origin</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Religion</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Sex (including gender identity and sexual orientation)</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Familial status (children under 18)</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Disability (physical or mental)</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Source of income (in some states)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
              <h3 className="text-lg font-bold text-red-900 mb-3">What You CANNOT Do:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>❌ Apply different screening criteria to different applicants</li>
                <li>❌ Ask about plans to have children or family status</li>
                <li>❌ Refuse service animals (different from pets)</li>
                <li>❌ Discriminate based on criminal history without individualized assessment (some jurisdictions)</li>
                <li>❌ Ask about disabilities or require disclosure</li>
                <li>❌ Refuse Section 8 or housing vouchers (illegal in many states)</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl mb-8">
              <h3 className="text-lg font-bold text-green-900 mb-3">What You CAN Do:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Apply consistent financial criteria (income, credit, rental history)</li>
                <li>✅ Verify employment and income for all applicants</li>
                <li>✅ Check criminal background (but apply standards consistently)</li>
                <li>✅ Require all occupants to be on the lease</li>
                <li>✅ Set reasonable occupancy limits (typically 2 per bedroom + 1)</li>
                <li>✅ Reject based on insufficient income, poor credit, or bad rental history</li>
                <li>✅ Require pet deposits for pets (not service/support animals)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Making the Final Decision</h2>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Decision Framework:</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-green-900 mb-2">✅ APPROVE if:</p>
                  <ul className="text-gray-700 space-y-1 ml-6">
                    <li>• Meets all minimum qualifications</li>
                    <li>• Positive landlord references</li>
                    <li>• Verified stable income 3x+ rent</li>
                    <li>• Clean criminal background or acceptable explanation</li>
                    <li>• Good credit (650+) OR acceptable credit (600-650) with strong compensating factors</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-yellow-900 mb-2">⚠️ CONDITIONAL APPROVAL if:</p>
                  <ul className="text-gray-700 space-y-1 ml-6">
                    <li>• Borderline credit (600-650) but strong income and references</li>
                    <li>• Limited rental history but excellent employment and income</li>
                    <li>• Consider: Higher security deposit, co-signer, or additional month's rent upfront</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-red-900 mb-2">❌ DENY if:</p>
                  <ul className="text-gray-700 space-y-1 ml-6">
                    <li>• Fails to meet minimum income requirements</li>
                    <li>• Recent evictions or collections for unpaid rent</li>
                    <li>• Cannot verify employment or income</li>
                    <li>• Negative landlord references</li>
                    <li>• Lied on application</li>
                    <li>• Disqualifying criminal history per your consistent policy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Denial Letter Requirements:</h3>
              <p className="text-gray-700 mb-3">
                If you deny an application, you MUST provide an adverse action letter within 7-10 days explaining:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>The specific reason(s) for denial (insufficient income, negative reference, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>The source of information (credit bureau, landlord reference, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Their right to dispute inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contact information for the screening company or credit bureau used</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Time-Saving Tips for Efficient Screening</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Use Technology:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Online applications (Zillow, Apartments.com, TurboTenant)</li>
                  <li>• Automated background check services</li>
                  <li>• Digital lease signing (DocuSign, HelloSign)</li>
                  <li>• Property management software (Buildium, AppFolio)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Pre-Screen Before Showings:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Ask about income and credit score on initial call</li>
                  <li>• Screen out unqualified applicants before wasting time</li>
                  <li>• Send property details and requirements via email first</li>
                  <li>• Schedule group showings to save time</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Standardize Your Process:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Use the same application for everyone</li>
                  <li>• Create scripts for landlord reference calls</li>
                  <li>• Keep checklist of required documents</li>
                  <li>• Document everything for legal protection</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">First-Come, First-Qualified:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Screen in order applications are received</li>
                  <li>• Stop accepting applications once one is approved</li>
                  <li>• Avoid "shopping" between qualified applicants</li>
                  <li>• Protects you from discrimination claims</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Mistakes to Avoid</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-2">❌ Skipping Steps to Fill Vacancy Quickly</h4>
                <p className="text-gray-700 text-sm">
                  One month of lost rent is better than six months of problems with a bad tenant. Never rush screening.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-2">❌ Trusting Your "Gut Feeling"</h4>
                <p className="text-gray-700 text-sm">
                  Charm and good first impressions don't pay rent. Stick to objective criteria and verification.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-2">❌ Not Calling Previous Landlords</h4>
                <p className="text-gray-700 text-sm">
                  This is the single most valuable step. A 5-minute call can save you thousands in headaches.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-2">❌ Accepting "Cash Only" Tenants</h4>
                <p className="text-gray-700 text-sm">
                  Tenants who insist on cash often can't pass normal screening or have IRS issues. Require traceable payments.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-2">❌ Making Exceptions for "Special Circumstances"</h4>
                <p className="text-gray-700 text-sm">
                  Every bad tenant has a sob story. Apply your criteria consistently or you'll regret it.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
              <p className="text-lg leading-relaxed mb-4">
                Tenant screening isn't about being harsh or judgmental - it's about protecting your investment and ensuring 
                a positive rental experience for everyone involved. Good tenants appreciate living with a landlord who takes 
                screening seriously, because it means their neighbors are also quality tenants.
              </p>
              <p className="text-lg leading-relaxed mb-0">
                Invest the time upfront to screen thoroughly, apply your criteria consistently, and you'll build a portfolio 
                of reliable tenants who pay on time, respect the property, and make landlording profitable and enjoyable.
              </p>
            </div>

          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Calculate Your Rental Property Returns
            </h3>
            <p className="text-gray-700 mb-6">
              Before you find the perfect tenant, make sure you have the right property. Use our free calculator to 
              analyze potential investments.
            </p>
            <Link 
              href="/#calculator"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Try Calculator Free
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/guide/blog/negotiate-rental-property-9-2025"
                className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  How to Negotiate
                </h4>
                <p className="text-gray-600 text-sm">Learn what motivates sellars and how to structure offers that get accepted below asking price.</p>
              </Link>
              <Link 
                href="/guide/blog/hidden-costs-9-2025"
                className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-400 hover:shadow-lg transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">5 Hidden Landlord Costs</h4>
                <p className="text-gray-600 text-sm">Budget for these expenses before becoming a landlord</p>
              </Link>
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
      </article>
    </div>
  );
}