// Utility function for rounding to 2 decimal places
// Uses standard rounding: 0.005 rounds to 0.01, 0.004 rounds to 0.00
const roundTo2Decimals = (value: number): number => {
  return Math.round(value * 100) / 100;
};

// Format currency with 2 decimal places for display
const formatCurrency = (value: number): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// Format percentage with 2 decimal places for display
const formatPercent = (value: number): string => {
  return value.toFixed(2);
};