import { Metadata } from 'next';
import Header from '@/components/Header';
import { Calculator, Target, TrendingUp, Shield, Users, Award, CheckCircle, BarChart3, Clock, Zap, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import { affiliateConfig } from '@/utils/affiliateConfig';
import ResourcesPage from '../guide/resources/page';

export const metadata: Metadata = {
  title: 'About Us | Rental Property Calculator - Free Real Estate Analysis Tool',
  description: 'Learn about our mission to help real estate investors make smarter decisions with our free rental property calculator and comprehensive analysis tools.',
  keywords: 'rental property calculator, real estate analysis, investment calculator, about us, real estate tools',
  openGraph: {
    title: 'About Rental Property Calculator - Free Real Estate Investment Tool',
    description: 'Discover how our free calculator helps thousands of investors analyze rental properties and make informed investment decisions.',
    type: 'website',
  },
};

export default function AboutPage() {
  const stats = [
    { number: '1,000+', label: 'Properties Analyzed', icon: BarChart3 },
    { number: '100%', label: 'Fast', icon: Target },
    { number: '5★', label: 'User Rating', icon: Award },
    { number: '24/7', label: 'Always Available', icon: Clock },
  ];

  const features = [
    {
      icon: Calculator,
      title: 'Professional Grade Calculations',
      description: 'Industry-standard formulas for cap rate, cash flow, ROI, and 1% rule analysis.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Real-time calculations that update as you type, no waiting required.',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No registration required, no data stored, completely anonymous usage.',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Available Worldwide',
      description: 'Trusted by investors Worldwide.',
      color: 'orange'
    }
  ];

  const team = [
    {
      role: 'Passionate Real Estate Investors',
      description: 'Experiences hustlers with a passion for real estate investment and analysis.'
    },
    {
      role: 'Software Developer',
      description: 'Full-stack developer specializing in financial calculators and real estate technology solutions.'
    },
    {
      role: 'UX Designer',
      description: 'User experience expert focused on making simple and intuitive platforms.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Trusted by Professional
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Mission
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            We believe every real estate investor deserves access to professional-grade 
            analysis tools without the high cost or complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#calculator"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Try Our Calculator
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600">
              Built by real estate investors, for everyone
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                It started with a simple frustration: <strong>Why were the best real estate analysis tools 
                so expensive and complicated?</strong>
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                As active real estate investors ourselves, we found that most calculators were either 
                too basic to be useful, or too expensive for beginning investors. We wanted to create 
                something that was both <strong>professional-grade</strong> and <strong>completely free</strong>.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our rental property calculator uses the same formulas and methodologies used by 
                commercial real estate professionals, but presents them in a clean, intuitive interface 
                that anyone can use. No complex spreadsheets, no expensive software licenses, 
                no registration required.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-blue-900 font-semibold mb-2">Our Core Belief</p>
                <p className="text-blue-800">
                  "Every investor, regardless of experience level or budget, deserves access to 
                  professional-quality analysis tools to make informed decisions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Trust Our Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've designed every aspect of our tool with the real estate investor in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600 bg-blue-50 border-blue-200',
                green: 'from-green-500 to-green-600 bg-green-50 border-green-200',
                purple: 'from-purple-500 to-purple-600 bg-purple-50 border-purple-200',
                orange: 'from-orange-500 to-orange-600 bg-orange-50 border-orange-200'
              };
              
              return (
                <div key={index} className={`p-8 rounded-2xl border ${colorClasses[feature.color as keyof typeof colorClasses].split(' ').slice(2).join(' ')} hover:shadow-lg transition-shadow duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built by Experts
            </h2>
            <p className="text-lg text-gray-600">
              Our team combines real estate expertise with technical excellence
            </p>
          </div>

          <div className="space-y-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.role}</h3>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Always Free</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe quality analysis tools should be accessible to everyone, 
                regardless of budget or experience level.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accuracy First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every formula is verified against industry standards to ensure 
                you get reliable, professional-grade calculations.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                No registration, no data collection, no tracking. 
                Your investment analysis remains completely private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Analyze Your Next Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#calculator"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Calculator className="mr-3 w-6 h-6" />
              Try Calculator Now
            </Link>

            {affiliateConfig.showResourcesPage && (
            <Link 
              href="/guide/resources"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              <TrendingUp className="mr-3 w-6 h-6" />
              Resources
            </Link> )}
          </div>
        </div>
      </section>
    </div>
  );
}