'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';

interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true, // Always true
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences and initialize tracking
      const savedPrefs = JSON.parse(consent);
      setPreferences(savedPrefs);
      initializeTracking(savedPrefs);
    }
  }, []);

  const initializeTracking = (prefs: ConsentPreferences) => {
    // Initialize Google Analytics if consented
    if (prefs.analytics && typeof window !== 'undefined') {
      const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      if (gaId) {
        // Load GA4 script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);

        // Initialize GA4
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', gaId, {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure',
        });
      }
    }

    // Initialize Google AdSense if consented
    if (prefs.advertising && typeof window !== 'undefined') {
      const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
      if (adsenseId) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    }
  };

  const savePreferences = (prefs: ConsentPreferences) => {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setPreferences(prefs);
    initializeTracking(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      essential: true,
      analytics: true,
      advertising: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential: ConsentPreferences = {
      essential: true,
      analytics: false,
      advertising: false,
    };
    savePreferences(onlyEssential);
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'essential') return; // Can't disable essential
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-gray-200">
          {!showSettings ? (
            // Main Banner
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Cookie className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    We Value Your Privacy
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, 
                    and serve personalized advertisements. By clicking "Accept All," you consent 
                    to our use of cookies.
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    <strong>Important:</strong> Our rental property calculator works completely 
                    without cookies. Affiliate links also function without requiring any tracking. 
                    You can safely reject cookies and still use all core features.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="btn-primary flex-1 sm:flex-none"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="btn-secondary flex-1 sm:flex-none"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex-1 sm:flex-none"
                    >
                      <Settings className="w-5 h-5" />
                      Cookie Settings
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    By using our site, you agree to our{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Settings className="w-7 h-7 text-blue-600" />
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close settings"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Manage your cookie preferences. You can enable or disable different types 
                of cookies below. Changes will take effect immediately.
              </p>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Essential Cookies
                        <span className="ml-2 text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded">
                          Always Active
                        </span>
                      </h3>
                      <p className="text-sm text-gray-600">
                        These cookies are necessary for the website to function and cannot be 
                        disabled. They are usually only set in response to actions made by you, 
                        such as setting your privacy preferences.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-blue-600 rounded-full cursor-not-allowed opacity-50"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Analytics Cookies
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        These cookies help us understand how visitors interact with our website 
                        by collecting and reporting information anonymously. We use Google Analytics 
                        to improve our service.
                      </p>
                      <p className="text-xs text-gray-500">
                        Cookies: _ga, _gid, _ga_*
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className="ml-4"
                      aria-label="Toggle analytics cookies"
                    >
                      <div
                        className={`w-12 h-6 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                            preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                          } mt-0.5`}
                        />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Advertising Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Advertising Cookies
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        These cookies are used to display personalized advertisements that are 
                        relevant to you. We use Google AdSense to show ads that help support this 
                        free service. Without these cookies, you'll see non-personalized ads.
                      </p>
                      <p className="text-xs text-gray-500">
                        Cookies: Various Google advertising cookies
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('advertising')}
                      className="ml-4"
                      aria-label="Toggle advertising cookies"
                    >
                      <div
                        className={`w-12 h-6 rounded-full transition-colors ${
                          preferences.advertising ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                            preferences.advertising ? 'translate-x-6' : 'translate-x-0.5'
                          } mt-0.5`}
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t-2 border-gray-200">
                <button
                  onClick={handleSaveSettings}
                  className="btn-primary flex-1"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="btn-secondary flex-1"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// TypeScript declarations for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
