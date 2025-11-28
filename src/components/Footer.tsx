import Link from 'next/link';
import { Calculator, Twitter, Linkedin, Mail, ExternalLink, AlertTriangle, Heart, Code, Star } from 'lucide-react';
import Image from 'next/image';
import { affiliateConfig } from '@/utils/affiliateConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    calculator: [
      { name: 'Rental Scout Analysis', href: '/#calculator' },
      //{ name: 'Investment Guide', href: '/guide' },
      { name: 'Cap Rate Explained', href: '/guide/cap-rate' },
      { name: 'Cash Flow Analysis', href: '/guide/cash-flow' },
    ],
    resources: [
      { name: '1% Rule Guide', href: '/guide/1-percent-rule' },      //{ name: 'FAQ', href: '/faq' }
      ...(affiliateConfig.showResourcesPage ? [{ name: 'Resources', href: '/guide/resources' }] : []),
      { name: 'Blog', href: '/guide/blog' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      //{ name: 'Privacy Policy', href: '/privacy' }
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Image src="/images/logo-white.png" alt="Rental Scout Pro" width={100} height={100} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Rental Scout Pro
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Free rental property calculator and real estate investment analysis tools. 
              Make smarter investment decisions with comprehensive property analysis.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center px-3 py-1 bg-blue-900/30 rounded-full text-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-blue-200">10,000+ Users</span>
              </div>
              <div className="flex items-center px-3 py-1 bg-green-900/30 rounded-full text-sm">
                <Calculator className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-green-200">100% Free</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/rentalscoutpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-3 rounded-xl hover:bg-gray-800"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Calculator Tools */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-200">
              Calculator
            </h3>
            <ul className="space-y-4">
              {footerLinks.calculator.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:underline decoration-blue-400 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-200">
              Resources
            </h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:underline decoration-green-400 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-200">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:underline decoration-purple-400 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500" />
            <a 
              href="https://ko-fi.com/rentalscoutpro" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Support Our Work
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-200 mb-2">Important Disclaimer</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  This calculator provides estimates for informational and educational purposes only. 
                  Results are not investment, financial, or legal advice. Real estate investments carry risks. 
                  Consult with qualified professionals before making investment decisions. 
                  Actual results may vary significantly from calculations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Rental Scout Pro. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                Made for real estate investors
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}