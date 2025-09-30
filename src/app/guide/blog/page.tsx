import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Investment Blog | Rental Scout Pro',
  description: 'Latest news, tips, and insights on rental property investing, market trends, and real estate analysis.',
  keywords: 'real estate blog, rental property news, investment tips, market analysis',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Fed Rate Cut: What It Means for Real Estate Investors',
      slug: 'fed-rate-cut-9-2025',
      excerpt: 'The Federal Reserve just cut interest rates. Here\'s how this impacts your rental property investment strategy and what you should do now.',
      date: '2024-09-18',
      readTime: '5 min read',
      category: 'Market News',
      featured: true
    },
    {
      title: '5 Hidden Costs First-Time Landlords Always Forget',
      slug: 'hidden-costs-9-2024',
      excerpt: 'Don\'t let these overlooked expenses derail your first rental property investment. Learn what experienced landlords budget for that beginners miss.',
      date: '2024-09-15',
      readTime: '6 min read',
      category: 'Beginner Tips'
    },
    {
      title: 'Should You Buy a Rental Property in 2024?',
      slug: 'should-you-buy-9-2024',
      excerpt: 'Market conditions are shifting. We analyze current trends, cap rates by region, and whether now is the right time to invest in rental real estate.',
      date: '2024-09-10',
      readTime: '7 min read',
      category: 'Market Analysis'
    },
    {
      title: 'The Truth About the 1% Rule in Expensive Markets',
      slug: 'one-percent-rule-expensive-markets-9-2024',
      excerpt: 'The 1% rule doesn\'t work in San Francisco or New York. Here\'s how to adapt your screening process for high-cost coastal markets.',
      date: '2024-09-05',
      readTime: '5 min read',
      category: 'Investment Strategy'
    },
    {
      title: 'How to Negotiate 10% Off Any Rental Property',
      slug: 'negotiate-rental-property-9-2024',
      excerpt: 'Real negotiation tactics that work in today\'s market. Learn what motivates sellers and how to structure offers that get accepted below asking price.',
      date: '2024-09-01',
      readTime: '8 min read',
      category: 'Deal Making'
    }
  ];

  const categories = ['All Posts', 'Market News', 'Beginner Tips', 'Investment Strategy', 'Market Analysis', 'Deal Making'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Real Estate Insights
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Rental Property Investment Blog
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Market updates, investment strategies, and practical tips for rental property investors.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
          </div>
          
          {posts
            .filter(post => post.featured)
            .map((post, index) => (
              <Link
                key={index}
                href={`/guide/blog/${post.slug}`}
                className="group block bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                        NEW
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {posts
              .filter(post => !post.featured)
              .map((post, index) => (
                <Link
                  key={index}
                  href={`/guide/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full mb-4">
                      {post.category}
                    </span>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-1 transition-all">
                        Read
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated on Market Trends
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get notified when we publish new articles on rental property investing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
} 