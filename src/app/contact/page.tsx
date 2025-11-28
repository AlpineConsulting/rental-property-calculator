'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { MessageCircle, Send, CheckCircle, AlertCircle, Coffee, Heart, Sparkles } from 'lucide-react';

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
      // In production, send to your API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Your message has been sent successfully.
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
            Get in Touch
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Us
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Have questions, feedback, or suggestions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes up 2 columns */}
            <div className="lg:col-span-2">
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
                      placeholder="Tell us what's on your mind..."
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
            </div>

            {/* Support Our Work Section */}
            <div className="space-y-6">
              {/* Ko-fi Support Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg border border-purple-200 p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Support Our Work
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    If our free calculator helped you, consider supporting us!
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span>Keep the tool free forever</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span>Help us build new features</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span>Support independent creators</span>
                  </div>
                </div>

                <a
                  href="https://ko-fi.com/rentalscoutpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Coffee className="w-5 h-5" />
                  <span>Buy Us a Coffee</span>
                </a>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Every contribution helps us improve
                </p>
              </div>

              {/* Quick Info Card */}
              <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  About This Tool
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Rental Scout Pro is a free tool built by real estate investors for everyone. We're committed to keeping it free and accessible.
                </p>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-xs text-gray-500">
                    100% free • No registration required • Privacy-focused
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