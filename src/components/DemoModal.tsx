'use client';

import { AlertTriangle, Shield, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DemoModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('demo-site-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('demo-site-accepted', 'true');
    setIsAccepted(true);
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const handleDecline = () => {
    window.location.href = 'https://google.com';
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] animate-fadeIn" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-t-2xl">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-8 h-8 animate-pulse" />
              <h2 className="text-2xl font-bold">⚠️ DEMO SITE WARNING</h2>
            </div>
            <p className="text-yellow-50 text-sm">Authorization Required for Access</p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
              <h3 className="font-bold text-red-900 text-lg mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                AUTHORIZED TESTERS ONLY
              </h3>
              <p className="text-red-800 text-sm">
                This website is in active testing and demonstration mode. Access is restricted to authorized testers only.
              </p>
            </div>

            <div className="space-y-3 text-gray-700">
              <p className="font-semibold text-gray-900">
                ⚠️ IMPORTANT NOTICES:
              </p>
              
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>Synthetic Data:</strong> All calculations, results, and information displayed on this site are for demonstration purposes only and DO NOT represent real financial data.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>Test Environment:</strong> Features, affiliate links, and tools are non-functional or redirected for testing purposes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>No Financial Advice:</strong> Nothing on this test site should be used for actual investment decisions or financial planning.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>Unauthorized Access:</strong> If you have received this link without explicit authorization from the site owner, you must exit immediately.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>Confidentiality:</strong> Do not share screenshots, data, or this URL with anyone outside the authorized testing group.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>For Authorized Testers:</strong> By clicking "I Understand & Accept" below, you acknowledge that you have been authorized to access this demo site and agree to the terms above.
              </p>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="p-6 bg-gray-50 rounded-b-2xl flex gap-4">
            <button
              onClick={handleDecline}
              className="flex-1 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-xl transition-colors"
            >
              Exit Site
            </button>
            <button
              onClick={handleAccept}
              className={`flex-1 px-6 py-3 font-bold rounded-xl transition-all ${
                isAccepted 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl'
              }`}
              disabled={isAccepted}
            >
              {isAccepted ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Accepted
                </span>
              ) : (
                'I Understand & Accept'
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}