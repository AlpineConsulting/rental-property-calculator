'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Header from '@/components/Header';
import { Mail, MessageCircle, Send, CheckCircle, Clock, MapPin, Phone, Globe, AlertCircle } from 'lucide-react';

// Note: Since this is a client component, metadata needs to be set differently
// You might want to move metadata to a parent server component or use next-seo

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate form submission
      // In a real app, you'd send this to your API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just simulate success
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@rentalscoutpro.com',
      description: 'We typically respond within 24 hours',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      description: 'Monday through Friday, 9 AM - 5 PM EST',
      color: 'green'
    },
    {
      icon: Globe,
      title: 'Support',
      content: '24/7 Online Help',
      description: 'Browse our guides and FAQ anytime',
      color: 'purple'
    }
  ];

  const faqItems = [
    {
      question: 'Is the calculator really free?',
      answer: 'Yes! Our calculator is completely free to use with no hidden fees, registration requirements, or usage limits.'
    },
    {
      question: 'How accurate are the calculations?',
      answer: 'Our calculator uses industry-standard formulas verified by real estate professionals. However, results should be used as estimates and supplemented with professional advice.'
    },
    {
      question: 'Can I save my calculations?',
      answer: 'Currently, calculations are not saved to protect your privacy. We recommend taking screenshots or writing down important results.'
    },
    {
      question: 'Do you offer consulting services?',
      answer: 'We focus on providing free tools. For personalized advice, we recommend consulting with qualified real estate professionals in your area.'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="pt-24 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-colors"
              >
                Send Another Message
              </button>
              <a
                href="/#calculator"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-xl transition-colors"
              >
                Back to Calculator
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            We're Here to Help
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Touch
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Have questions about our calculator or need help with your analysis? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a subject</option>
                    <option value="calculator-help">Calculator Help</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                    disabled={isSubmitting}
                  />
                </div>

                {error && (
                  <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const colorClasses = {
                      blue: 'from-blue-500 to-blue-600 bg-blue-50 border-blue-200',
                      green: 'from-green-500 to-green-600 bg-green-50 border-green-200',
                      purple: 'from-purple-500 to-purple-600 bg-purple-50 border-purple-200'
                    };
                    
                    return (
                      <div key={index} className={`p-6 rounded-2xl border ${colorClasses[info.color as keyof typeof colorClasses].split(' ').slice(2).join(' ')}`}>
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[info.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-gray-900 font-semibold mb-1">{info.content}</p>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-blue-800 text-sm">
                    <strong>Still have questions?</strong> Use the contact form and we'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}