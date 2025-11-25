'use client';

import { useState, useEffect } from 'react';
import { Cookie, Check } from 'lucide-react';

interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
}

export default function CookieSettingsPage() {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    analytics: false,
    advertising: false,
  });
  const [saved, setSaved] = useState(false);
  const [consentDate, setConsentDate] = useState<string | null>(null);

  useEffect(() => {
    // Load current preferences
    const consent = localStorage.getItem('cookie_consent');
    if (consent) {
      setPreferences(JSON.parse(consent));
    }
    const date = localStorage.getItem('cookie_consent_date');
    if (date) {
      setConsentDate(new Date(date).toLocaleDateString());
    }
  }, []);

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'essential') return; // Can't disable essential
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setSaved(true);
    
    // Show confirmation briefly
    setTimeout(() => setSaved(false), 3000);

    // Reload page to apply new consent settings
    setTimeout(() => window.location.reload(), 1000);
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      essential: true,
      analytics: true,
      advertising: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie_consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setSaved(true);
    setTimeout(() => window.location.reload(), 1000);
  };

  const handleRejectAll = () => {
    const onlyEssential: ConsentPreferences = {
      essential: true,
      analytics: false,
      advertising: false,
    };
    setPreferences(onlyEssential);
    localStorage.setItem('cookie_consent', JSON.stringify(onlyEssential));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setSaved(true);
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <main className="min-h-screen pt-32">
      {/* Header */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Cookie className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Cookie Settings</h1>
          <p className="text-xl text-white/90">
            Manage your cookie preferences and privacy settings
          </p>
        </div>
      </section>

      {/* Settings Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          {saved && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-3">
              <Check className="w-6 h-6 text-green-600" />
              <p className="text-green-800 font-semibold">
                Your preferences have been saved and will take effect shortly.
              </p>
            </div>
          )}

          {/* Current Status */}
          {consentDate && (
            <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> {consentDate}
              </p>
            </div>
          )}

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gradient">About Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device when you visit our website. 
              We use cookies to improve your browsing experience and analyze how our site is used.
            </p>
            <p className="text-gray-700 font-semibold">
              <strong>Good news:</strong> Our rental property calculator and affiliate links 
              work perfectly without cookies. You can safely disable all optional cookies and 
              still access all core features.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="card p-6 border-2 border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Essential Cookies
                    <span className="ml-2 text-xs bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
                      Always Active
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-3">
                    These cookies are strictly necessary for the website to function. They enable 
                    core functionality such as security, network management, and accessibility.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Currently used:</strong> None - Our site functions without requiring 
                      any essential cookies.
                    </p>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="w-14 h-7 bg-blue-600 rounded-full cursor-not-allowed opacity-50 flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full shadow-md transform translate-x-7" />
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="card p-6 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-600 mb-3">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously. We use this data to improve 
                    our service and user experience.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg mb-3">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Provider:</strong> Google Analytics 4
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Purpose:</strong> Track pageviews, user behavior, traffic sources
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Cookies:</strong> _ga, _gid, _ga_* (expires: 2 years)
                    </p>
                  </div>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Google Privacy Policy →
                  </a>
                </div>
                <button
                  onClick={() => togglePreference('analytics')}
                  className="ml-6"
                  aria-label="Toggle analytics cookies"
                >
                  <div
                    className={`w-14 h-7 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                        preferences.analytics ? 'translate-x-7' : 'translate-x-0.5'
                      } mt-0.5`}
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Advertising Cookies */}
            <div className="card p-6 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Advertising Cookies
                  </h3>
                  <p className="text-gray-600 mb-3">
                    These cookies are used to display personalized advertisements that are relevant 
                    to you and your interests. They also help us measure the effectiveness of 
                    advertising campaigns.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg mb-3">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Provider:</strong> Google AdSense
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Purpose:</strong> Show relevant ads, measure ad performance
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Impact if disabled:</strong> You'll still see ads, but they won't be 
                      personalized to your interests
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Cookies:</strong> Multiple Google advertising cookies
                    </p>
                  </div>
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Google Ads Privacy Policy →
                  </a>
                </div>
                <button
                  onClick={() => togglePreference('advertising')}
                  className="ml-6"
                  aria-label="Toggle advertising cookies"
                >
                  <div
                    className={`w-14 h-7 rounded-full transition-colors ${
                      preferences.advertising ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                        preferences.advertising ? 'translate-x-7' : 'translate-x-0.5'
                      } mt-0.5`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSave}
              className="btn-primary flex-1"
            >
              Save My Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="btn-secondary flex-1"
            >
              Accept All Cookies
            </button>
            <button
              onClick={handleRejectAll}
              className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors flex-1"
            >
              Reject All Optional
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Your Privacy Rights</h3>
            <p className="text-gray-700 mb-3">
              Under GDPR and CCPA, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Know what data we collect and how we use it</li>
              <li>Request access to your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of the sale of personal information</li>
              <li>Change your cookie preferences at any time</li>
            </ul>
            <p className="text-gray-700 mt-4">
              For more information, please read our{' '}
              <a href="/privacy" className="text-blue-600 hover:underline font-semibold">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
