'use client';

import Link from 'next/link';
import { TrendingUp, LineChart, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function AffiliateCallToAction() {
  const cards = [
    {
      icon: TrendingUp,
      title: "Need Financing?",
      description: "Conventional, DSCR, and bridge loans for every investor. Get pre-qualified in minutes.",
      benefits: ["No tax returns needed", "Up to 80% LTV", "Close in 14-21 days"],
      href: "/financing",
      gradient: "from-blue-600 to-blue-700",
      hoverGradient: "from-blue-700 to-blue-800",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: LineChart,
      title: "Need Market Data?",
      description: "Research rental rates, occupancy trends, and investment opportunities.",
      benefits: ["Neighborhood comps", "Revenue estimates", "Market analytics"],
      href: "/market-data",
      gradient: "from-green-600 to-green-700",
      hoverGradient: "from-green-700 to-green-800",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Shield,
      title: "Need Insurance?",
      description: "Protect your investment with landlord and rental property coverage.",
      benefits: ["Landlord policies", "STR coverage", "Fast online quotes"],
      href: "/insurance",
      gradient: "from-purple-600 to-purple-700",
      hoverGradient: "from-purple-700 to-purple-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            What will grow your business most right now?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header with Icon */}
              <div className="p-6 pb-4">
                <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {card.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-4">
                  {card.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${card.iconColor.replace('text-', 'bg-')}`}></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <div className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${card.gradient} group-hover:${card.hoverGradient} text-white font-bold rounded-xl transition-all shadow-md group-hover:shadow-xl`}>
                  Explore Options
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Effect Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Trust Signal */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            <strong>Sponsored Links:</strong> We may earn commissions from some of these partners.{' '}
            <Link href="/guide/resources" className="text-blue-600 hover:text-blue-700 underline">
              See all resources →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}