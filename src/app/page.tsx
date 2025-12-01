import RentalPropertyCalculator from '@/components/RentalPropertyCalculator';
import Header from '@/components/Header';
import AffiliateCallToAction from '@/components/AffiliateCallToAction';
import { Calculator, TrendingUp, DollarSign, Target, BarChart3, Shield, BookOpen, ArrowRight, Star, Users, Award, CheckCircle, Zap, Clock, Globe, Info, Coffee, Heart, Briefcase} from 'lucide-react';
import { affiliateConfig } from '@/utils/affiliateConfig';
import Link from 'next/link';


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-blue-800 text-sm font-semibold mb-8 shadow-lg">
              <Star className="w-5 h-25 text-yellow-500" />
              <span>Trusted by Real Estate Professionals</span>
              <Award className="w-4 h-4" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Analyze Your Next{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
                  Property
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full transform scale-x-0 animate-pulse"></div>
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Access the data you need to evaluate your next real estate opportunity with our comprehensive calculator. 
              Instantly analyze <strong>cap rates</strong>, <strong>cash flow</strong>, <strong>1% rule compliance</strong>, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="#calculator"
                className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-flex items-center"
              >
                <Calculator className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Try Calculator Free
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <div className="flex items-center text-gray-600 bg-white px-4 py-3 rounded-xl shadow-lg">
                <Users className="w-5 h-5 mr-3 text-blue-500" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">1,000+</div>
                  <div className="text-sm">Properties Analyzed</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center text-gray-500 bg-white px-4 py-2 rounded-full shadow-md">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                No Registration Required
              </div>
              <div className="flex items-center text-gray-500 bg-white px-4 py-2 rounded-full shadow-md">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                Instant Results
              </div>
              <div className="flex items-center text-gray-500 bg-white px-4 py-2 rounded-full shadow-md">
                <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                Professional Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for Property Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade metrics and insights in an intuitive interface designed for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Analysis</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Real-time calculations. No waiting, no delays, just instant professional analysis.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Lightning Fast
              </div>
            </div>
            
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cash Flow Projections</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Detailed monthly and annual cash flow analysis with comprehensive expense breakdowns and NOI calculations.
              </p>
              <div className="flex items-center text-green-600 font-semibold text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Detailed Breakdown
              </div>
            </div>
            
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1% Rule Check</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Quick screening tool to identify potentially profitable properties using the popular 1% rule.
              </p>
              <div className="flex items-center text-purple-600 font-semibold text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Smart Screening
              </div>
            </div>
            
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Metrics</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cap rate, DSCR, ROI, cash-on-cash return, and other essential real estate metrics.
              </p>
              <div className="flex items-center text-orange-600 font-semibold text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Professional Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Try Our Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant analysis of rental potential with our professional-grade calculator.
            </p>
          </div>
          
          {/* Calculator with Glow Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-3xl transform scale-105"></div>
            <div className="relative">
              <RentalPropertyCalculator />
              
            </div>
          </div>

          {/*Support Our Work*/}
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Find this tool helpful?</h3>
                  <p className="text-sm text-gray-600">Support us to keep it free forever</p>
                </div>
              </div>
              
              <a
                href="https://ko-fi.com/rentalscoutpro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <Coffee className="w-5 h-5" />
                <span>Buy Us a Coffee</span>
              </a>
            </div>
          </div>
          
          {affiliateConfig.showAffiliateCTA && <AffiliateCallToAction />}
          {/* Call to Action Below Calculator */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Ready to analyze more properties? Our calculator is completely free to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-colors duration-300"
              >
                <Info className="mr-2 w-5 h-5" />
                Learn More About Our Tool
              </Link>
              {affiliateConfig.showResourcesPage && (
              <Link 
                href="/guide/resources"
                className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors duration-300"
              >
                <Briefcase className="mr-2 w-5 h-5" />
                Resource Guide
              </Link>)}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Real Estate Professionals Everywhere
            </h2>
            <p className="text-lg text-gray-600">
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1K+</div>
              <div className="text-gray-700 font-semibold mb-1">Properties Analyzed</div>
              <div className="text-sm text-gray-500"></div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold mb-1">Fast</div>
              <div className="text-sm text-gray-500"></div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">5★</div>
              <div className="text-gray-700 font-semibold mb-1">User Rating</div>
              <div className="text-sm text-gray-500"></div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-semibold mb-1">Always Available</div>
              <div className="text-sm text-gray-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to start evaluating potential properties like a pro?
          </h2>
         {/* <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Start using the calculator
          </p> */}
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a 
              href="#calculator"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors shadow-2xl transform hover:scale-105"
            >
              <Calculator className="mr-3 w-6 h-6" />
              Start Analyzing Properties
            </a>
            <Link 
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More About Our Tool
            </Link>
          </div>

          <p className="text-blue-200 text-sm">
            🔒 No registration required • 100% free • Instant results
          </p>
        </div>
      </section>
    </div>
  );
}