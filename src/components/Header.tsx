'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calculator, Menu, X, Home, BookOpen, Info, Mail, ArrowRight, Zap, Briefcase } from 'lucide-react';
import { affiliateConfig } from '@/utils/affiliateConfig';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/#calculator') {
      return pathname === '/' && typeof window !== 'undefined' && window.location.hash === '#calculator';
    }
    return pathname.startsWith(href.replace('/#', '/'));
  };

  // Base navigation items (always shown)
  const baseNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Calculator', href: '/#calculator', icon: Calculator },
    { name: 'Blog', href: '/guide/blog', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  // Add Resources link only if affiliates are enabled
  const navigation = affiliateConfig.showResourcesPage
    ? [...baseNavigation.slice(0, 2), { name: 'Resources', href: '/guide/resources', icon: Briefcase }, ...baseNavigation.slice(2)]
    : baseNavigation;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300 shadow-lg group-hover:shadow-xl overflow-hidden">
             <Image 
              src="public/images/logo-white.png" 
                alt="Rental Scout Pro" 
                width={32} 
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                Rental Scout Pro
              </span>
            </div>
            <div className="block sm:hidden">
              <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                RC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'text-blue-600 bg-blue-50 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#calculator"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
            >
              <Zap className="mr-2 w-4 h-4" />
              Try Calculator
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 p-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg rounded-b-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                      active
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <Link
                  href="/#calculator"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Zap className="w-5 h-5" />
                  <span>Try Calculator</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Trust Badge */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-2 text-center">
            <p className="text-sm text-gray-600">
              ⭐ <span className="font-semibold">Trusted by Real Estate Investors</span> 
              <span className="hidden sm:inline"> | Free Professional Analysis</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}