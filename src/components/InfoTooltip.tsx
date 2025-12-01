// src/components/InfoTooltip.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  text: string;
}

export function InfoTooltip({ text }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Fix hydration error: only render interactive tooltip after client-side mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // During SSR and initial hydration, render a simple non-interactive version
  if (!isMounted) {
    return (
      <span className="inline-block ml-2">
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-100">
          <Info className="w-3 h-3 text-blue-600" />
        </span>
      </span>
    );
  }

  // After hydration, render the full interactive tooltip
  return (
    <div className="relative inline-block ml-2">
      {/* Info Icon Button */}
      <button
        type="button"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={(e) => {
          e.preventDefault();
          setIsVisible(!isVisible);
        }}
        aria-label="More information"
      >
        <Info className="w-3 h-3 text-blue-600" />
      </button>

      {/* Tooltip */}
      {isVisible && (
        <div className="absolute z-[9999] bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none">
          <div className="relative bg-gray-900 text-white text-sm rounded-lg px-4 py-3 shadow-2xl w-64">
            {text}
            {/* Arrow pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-3 h-3 bg-gray-900 transform rotate-45"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
