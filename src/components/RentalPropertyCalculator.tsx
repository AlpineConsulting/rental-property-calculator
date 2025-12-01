'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {DollarSign, TrendingUp, AlertTriangle, Info, CheckCircle, XCircle, BarChart3, Target, Play } from 'lucide-react';
import Image from 'next/image';
import { useMortgageRate } from '@/hooks/useMortgageRate';
import { InfoTooltip } from '@/components/InfoTooltip';

interface CalculatorResults {
  purchasePrice: number;
  monthlyRent: number;
  downPayment: number;
  closingCosts: number;
  rehabCosts: number;
  loanType: string;
  loanTerm: number;
  interestRate: number;
  propertyTax: number;
  insurance: number;
  hoaFees: number;
  propertyManagement: number;
  maintenance: number;
  capex: number;
  utilities: number;
  vacancy: number;
  loanAmount: number;
  monthlyPayment: number;
  grossIncome: number;
  vacancyLoss: number;
  effectiveIncome: number;
  totalExpenses: number;
  noi: number;
  cashFlow: number;
  onePercentRule: number;
  capRate: number;
  cashOnCash: number;
  totalCashInvested: number;
  dscr: number;
  breakEvenOccupancy: number;
  paybackPeriod: number;
  operatingExpenseRatio: number;
  profitPer1000: number;
}

// Add window.gtag type definition
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

// Utility functions for consistent rounding to 2 decimal places
// Standard rounding: 0.345 → 0.35, 0.344 → 0.34
const roundTo2Decimals = (value: number): number => {
  return Math.round(value * 100) / 100;
};

const formatCurrency = (value: number): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const formatPercent = (value: number): string => {
  return value.toFixed(2);
};

// Loan type options
const LOAN_TYPES = [
  { value: '30-year-fixed', label: '30-Year Fixed', term: 30 },
  { value: '15-year-fixed', label: '15-Year Fixed', term: 15 },
  { value: '20-year-fixed', label: '20-Year Fixed', term: 20 },
  { value: '10-year-fixed', label: '10-Year Fixed', term: 10 },
  { value: '5-1-arm', label: '5/1 ARM', term: 30 },
  { value: '7-1-arm', label: '7/1 ARM', term: 30 },
];

export default function RentalPropertyCalculator() {
  // Fetch current mortgage rates
  const { rates, lastUpdated, isLoading: rateLoading, error: rateError } = useMortgageRate();

  // Input states - using object to prevent re-render issues
  const [inputs, setInputs] = useState({
    purchasePrice: '200000',
    monthlyRent: '2200',
    downPayment: '20000',
    closingCosts: '6000',
    rehabCosts: '0',
    loanType: '30-year-fixed', // NEW
    loanTerm: '30', // NEW
    interestRate: '5.99', // Will be updated by useEffect when rate loads
    propertyTax: '100',
    insurance: '100',
    hoaFees: '0',
    propertyManagement: '0',
    maintenance: '200',
    capex: '100',
    utilities: '0',
    vacancy: '5'
  });
  
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  // Update interest rate when it loads from API or loan type changes
  useEffect(() => {
    if (!rateLoading && !rateError && rates) {
      const currentRate = rates[inputs.loanType as keyof typeof rates] || rates['30-year-fixed'];
      setInputs(prev => ({
        ...prev,
        interestRate: currentRate.toFixed(2)
      }));
    }
  }, [rates, inputs.loanType, rateLoading, rateError]);

  // Stable input handler that doesn't cause re-renders
  const handleInputChange = useCallback((field: keyof typeof inputs, value: string) => {
    // Only allow numbers, decimals, and commas
    const sanitized = value.replace(/[^0-9.,]/g, '');
    
    setInputs(prev => ({
      ...prev,
      [field]: sanitized
    }));
  }, []);

// Handle loan type change - updates both loan type and term
const handleLoanTypeChange = useCallback((loanType: string) => {
  const selectedLoan = LOAN_TYPES.find(loan => loan.value === loanType);
  
  if (selectedLoan) {
    setInputs(prev => ({
      ...prev,
      loanType: loanType,
      loanTerm: selectedLoan.term.toString()
    }));
  }
}, []);

  // Format input to 2 decimals when user leaves the field
  const handleInputBlur = useCallback((field: keyof typeof inputs) => {
    const value = inputs[field];
    const numValue = parseFloat(value.replace(/,/g, ''));
    
    if (!isNaN(numValue)) {
      // Round to 2 decimals
      const rounded = roundTo2Decimals(numValue);
      setInputs(prev => ({
        ...prev,
        [field]: rounded.toFixed(2) // Always show 2 decimals
      }));
    }
  }, [inputs]);

  // Manual calculation function
  const performCalculation = useCallback(() => {
    setIsCalculating(true);
    
    // Parse all input values
    const values = {
      purchasePrice: parseFloat(inputs.purchasePrice.replace(/,/g, '')) || 0,
      monthlyRent: parseFloat(inputs.monthlyRent.replace(/,/g, '')) || 0,
      downPayment: parseFloat(inputs.downPayment.replace(/,/g, '')) || 0,
      closingCosts: parseFloat(inputs.closingCosts.replace(/,/g, '')) || 0,
      rehabCosts: parseFloat(inputs.rehabCosts.replace(/,/g, '')) || 0,
      loanType: inputs.loanType,
      loanTerm: parseFloat(inputs.loanTerm) || 30,
      interestRate: parseFloat(inputs.interestRate) || 0,
      propertyTax: parseFloat(inputs.propertyTax.replace(/,/g, '')) || 0,
      insurance: parseFloat(inputs.insurance.replace(/,/g, '')) || 0,
      hoaFees: parseFloat(inputs.hoaFees.replace(/,/g, '')) || 0,
      propertyManagement: parseFloat(inputs.propertyManagement.replace(/,/g, '')) || 0,
      maintenance: parseFloat(inputs.maintenance.replace(/,/g, '')) || 0,
      capex: parseFloat(inputs.capex.replace(/,/g, '')) || 0,
      utilities: parseFloat(inputs.utilities.replace(/,/g, '')) || 0,
      vacancy: parseFloat(inputs.vacancy) || 0
    };

    // Perform calculations
    const loanAmount = roundTo2Decimals(values.purchasePrice - values.downPayment);
    const loanTermYears = values.loanTerm;
    const monthlyRate = values.interestRate / 100 / 12;
    const numPayments = loanTermYears * 12; // Use dynamic loan term instead of hardcoded 360
    const monthlyPayment = loanAmount > 0 ? 
      roundTo2Decimals((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)) : 0;
    
    const grossIncome = roundTo2Decimals(values.monthlyRent);
    const vacancyLoss = roundTo2Decimals(grossIncome * (values.vacancy / 100));
    const effectiveIncome = roundTo2Decimals(grossIncome - vacancyLoss);
    
    // Total monthly operating expenses
    const totalExpenses = roundTo2Decimals(
      values.propertyTax + 
      values.insurance + 
      values.hoaFees + 
      values.propertyManagement + 
      values.maintenance + 
      values.capex + 
      values.utilities
    );

    const noi = roundTo2Decimals(effectiveIncome - totalExpenses);
    const cashFlow = roundTo2Decimals(noi - monthlyPayment);
    
    // Total cash invested (includes one-time costs)
    const totalCashInvested = roundTo2Decimals(values.downPayment + values.closingCosts + values.rehabCosts);
    
    const onePercentRule = values.purchasePrice > 0 ? roundTo2Decimals((values.monthlyRent / values.purchasePrice) * 100) : 0;
    const capRate = values.purchasePrice > 0 ? roundTo2Decimals(((noi * 12) / values.purchasePrice) * 100) : 0;
    const cashOnCash = totalCashInvested > 0 ? roundTo2Decimals(((cashFlow * 12) / totalCashInvested) * 100) : 0;

    // Additional investment metrics
    const dscr = monthlyPayment > 0 ? roundTo2Decimals(noi / monthlyPayment) : 0;
    const breakEvenOccupancy = grossIncome > 0 ? roundTo2Decimals(((monthlyPayment + totalExpenses) / grossIncome) * 100) : 0;
    const paybackPeriod = cashFlow > 0 ? roundTo2Decimals(totalCashInvested / (cashFlow * 12)) : 0;
    const operatingExpenseRatio = grossIncome > 0 ? roundTo2Decimals((totalExpenses / grossIncome) * 100) : 0;
    const profitPer1000 = totalCashInvested > 0 ? roundTo2Decimals(cashFlow / (totalCashInvested / 1000)) : 0;
    
    // Store results
    const calculatedResults: CalculatorResults = {
      ...values,
      loanAmount,
      monthlyPayment,
      grossIncome,
      vacancyLoss,
      effectiveIncome,
      totalExpenses,
      noi,
      cashFlow,
      onePercentRule,
      capRate,
      cashOnCash,
      totalCashInvested,
      dscr,
      breakEvenOccupancy,
      paybackPeriod,
      operatingExpenseRatio,
      profitPer1000
    };

    // Simulate calculation time
    setTimeout(() => {
      setResults(calculatedResults);
      setIsCalculating(false);
      setHasCalculated(true);
      
      // Track calculator usage in Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'calculator_used', {
          event_category: 'engagement',
          event_label: 'property_analysis',
          value: 1
        } as any);
      }
    }, 800);
  }, [inputs]);

  const resetCalculation = useCallback(() => {
    setResults(null);
    setHasCalculated(false);
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white p-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <Image src="/images/logo-white.png" alt="Rental Scout Pro" width={100} height={100} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Rental Scout Analysis</h2>
            <p className="text-blue-100 text-lg">
              Professional-grade calculator
            </p>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-white/90">
              <strong>Disclaimer:</strong>This tool is for Informational and Educational Purposes Only.<br></br>
              The 1% rule is not a measure of profitability or a formal investment metric; it is simply a general rule of thumb.<br></br>
              This calculator provides estimates for informational purposes only. 
              Results are not investment advice. Consult qualified professionals before making decisions.
              <br></br>
              Colors, Icons, and Symbols used in this model are not investment ratings. They are simply visual cues to help you read the results more easily and should not be taken as advice or guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Input Section */}
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 space-y-8">
          {/* Property Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              Property Information
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {/* Purchase Price */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  Purchase Price
                  <InfoTooltip text="Total purchase price of the property" />
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.purchasePrice}
                    onChange={(e) => handleInputChange('purchasePrice', e.target.value)}
                    onBlur={() => handleInputBlur('purchasePrice')}
                    placeholder="200,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Monthly Rent */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  Monthly Rent
                  <InfoTooltip  text="Expected monthly rental income" />
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.monthlyRent}
                    onChange={(e) => handleInputChange('monthlyRent', e.target.value)}
                    onBlur={() => handleInputBlur('monthlyRent')}
                    placeholder="2,200"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  Down Payment
                  <InfoTooltip text="Cash down payment amount"/>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.downPayment}
                    onChange={(e) => handleInputChange('downPayment', e.target.value)}
                    onBlur={() => handleInputBlur('downPayment')}
                    placeholder="20,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Loan Type - NEW FIELD */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  Loan Type
                  <InfoTooltip text="Type of mortgage loan. Different loan types have different interest rates and terms."/>
                </label>
                <div className="relative">
                  <select
                    value={inputs.loanType}
                    onChange={(e) => handleLoanTypeChange(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 font-medium appearance-none bg-white cursor-pointer"
                  >
                    {LOAN_TYPES.map(loan => (
                      <option key={loan.value} value={loan.value}>
                        {loan.label}
                      </option>
                    ))}
                  </select>
                  {/* Dropdown arrow icon */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {/* Show loan term info */}
                <p className="text-xs text-gray-500 mt-1">
                  Term: {inputs.loanTerm} years
                </p>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Interest Rate
                  {!rateLoading && !rateError && lastUpdated && (
                    <span className="ml-2 text-xs text-green-600 font-normal">
                      ✓ Market Estimate (updated {new Date(lastUpdated).toLocaleDateString()})
                    </span>
                  )}
                  {rateError && (
                    <span className="ml-2 text-xs text-gray-500 font-normal">
                      (using default rate)
                    </span>
                  )}
                  <InfoTooltip text="Annual interest rate on the loan"/>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={inputs.interestRate}
                    onChange={(e) => handleInputChange('interestRate', e.target.value)}
                    onBlur={() => handleInputBlur('interestRate')}
                    className="w-full pl-4 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 font-medium"
                    placeholder="5.99"
                    disabled={isCalculating}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* One-Time Costs */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              One-Time Costs
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {/* Closing Costs */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Closing Costs
                  <InfoTooltip text="One-time costs: appraisal, title, escrow fees (typically 2-3% of purchase price)"/>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    type="text"
                    value={inputs.closingCosts}
                    onChange={(e) => handleInputChange('closingCosts', e.target.value)}
                    onBlur={() => handleInputBlur('closingCosts')}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 font-medium"
                    placeholder="6,000"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Rehab/Repair Costs */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Rehab/Repair Costs
                  <InfoTooltip text="One-time renovation or repair costs before renting"/>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    type="text"
                    value={inputs.rehabCosts}
                    onChange={(e) => handleInputChange('rehabCosts', e.target.value)}
                    onBlur={() => handleInputBlur('rehabCosts')}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 font-medium"
                    placeholder="0"
                    disabled={isCalculating}
                  />
                </div>
              </div>
            </div>
          </div>


          {/* Monthly Expenses */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              Monthly Expenses
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Property Tax */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Property Tax
                  <InfoTooltip text="Monthly property tax amount"/>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.propertyTax}
                    onChange={(e) => handleInputChange('propertyTax', e.target.value)}
                    onBlur={() => handleInputBlur('propertyTax')}
                    placeholder="300"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Insurance */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Insurance
                  <InfoTooltip text="Monthly property insurance premium"/>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.insurance}
                    onChange={(e) => handleInputChange('insurance', e.target.value)}
                    onBlur={() => handleInputBlur('insurance')}
                    placeholder="150"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* HOA Fees - NEW */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  HOA Fees
                  <InfoTooltip text="Homeowners Association fees (common for condos/townhomes)"/>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    type="text"
                    value={inputs.hoaFees}
                    onChange={(e) => handleInputChange('hoaFees', e.target.value)}
                    onBlur={() => handleInputBlur('hoaFees')}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 font-medium"
                    placeholder="0"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Property Management - NEW */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Property Management
                  <InfoTooltip text="Property management fee (typically 8-10% of rent or $100-200/month)"/>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    type="text"
                    value={inputs.propertyManagement}
                    onChange={(e) => handleInputChange('propertyManagement', e.target.value)}
                    onBlur={() => handleInputBlur('propertyManagement')}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 font-medium"
                    placeholder="0"
                    disabled={isCalculating}
                  />
                </div>
              </div>              

              {/* Maintenance */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Maintenance
                  <InfoTooltip text="Monthly maintenance and repairs budget"/>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.maintenance}
                    onChange={(e) => handleInputChange('maintenance', e.target.value)}
                    onBlur={() => handleInputBlur('maintenance')}
                    placeholder="200"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* CapEx - NEW */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  CapEx Reserve
                  <InfoTooltip text="Capital expenditure reserve for major repairs (roof, HVAC, etc.). Recommended: $100-200/month"/>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    type="text"
                    value={inputs.capex}
                    onChange={(e) => handleInputChange('capex', e.target.value)}
                    onBlur={() => handleInputBlur('capex')}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 font-medium"
                    placeholder="100"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Utilities - NEW */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Utilities (Owner Paid)
                  <InfoTooltip text="Water, sewer, trash, or other utilities paid by landlord"/>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    type="text"
                    value={inputs.utilities}
                    onChange={(e) => handleInputChange('utilities', e.target.value)}
                    onBlur={() => handleInputBlur('utilities')}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 font-medium"
                    placeholder="0"
                  />
                </div>
              </div>
               
              {/* Vacancy Rate */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Vacancy Rate
                  <InfoTooltip text="Expected vacancy percentage (typically 5-10%)"/>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.vacancy}
                    onChange={(e) => handleInputChange('vacancy', e.target.value)}
                    onBlur={() => handleInputBlur('vacancy')}
                    placeholder="5"
                    className="w-full pr-8 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="pt-4">
            <button
              onClick={performCalculation}
              disabled={isCalculating}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                isCalculating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
              } text-white`}
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Calculating...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Perform Analysis</span>
                </>
              )}
            </button>

            {hasCalculated && (
              <button
                onClick={resetCalculation}
                className="w-full mt-3 py-2 px-4 border-2 border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Clear Results & Recalculate
              </button>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
              <Info className="w-4 h-4 mr-2" />
              How to Use
            </h4>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. Enter the property purchase price and expected monthly rent</li>
              <li>2. Add your down payment amount and loan interest rate</li>
              <li>3. Input one-time costs (closing costs, rehab)</li>
              <li>4. Fill in monthly expenses (taxes, insurance, maintenance)</li>
              <li>5. Click "Perform" to see your analysis</li>
            </ol>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 space-y-8 bg-white">
          {!hasCalculated && !isCalculating && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
               {/*} <Calculator className="w-10 h-10 text-gray-400" /> */}
               <Image src="/images/logo-gradient.png" alt="calculator" width={100} height={100} />
               
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ready to Analyze a Property
              </h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                Fill in the property details on the left, then click "Perform" to see your analysis.
              </p>
            </div>
          )}

          {isCalculating && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Opportunity</h3>
              <p className="text-gray-600 text-center">
                Calculating cash flow, cap rate, 1% rule compliance, and other metrics...
              </p>
            </div>
          )}

          {results && !isCalculating && (
            <>
              {/* Key Metrics Grid */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  Key Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                    results.cashFlow > 0 ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-green-200/50' : 
                    'bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-red-200/50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <DollarSign className="w-4 h-4 text-gray-600" />
                          <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Monthly Cash Flow</h4>
                        </div>
                        <p className={`text-2xl font-bold ${results.cashFlow > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ${formatCurrency(results.cashFlow)}
                        </p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        results.cashFlow > 0 ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {results.cashFlow > 0 ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                    results.onePercentRule >= 1 ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-green-200/50' : 
                    'bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-red-200/50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Target className="w-4 h-4 text-gray-600" />
                          <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">1% Rule</h4>
                        </div>
                        <p className={`text-2xl font-bold ${results.onePercentRule >= 1 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatPercent(results.onePercentRule)}%
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {results.onePercentRule >= 1 ? 'MEETS GUIDELINE' : 'BELOW GUIDELINE'}
                        </p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        results.onePercentRule >= 1 ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {results.onePercentRule >= 1 ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                    results.capRate >= 6 ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-green-200/50' : 
                    'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-gray-200/50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <BarChart3 className="w-4 h-4 text-gray-600" />
                          <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Cap Rate</h4>
                        </div>
                        <p className={`text-2xl font-bold ${results.capRate >= 6 ? 'text-green-600' : 'text-gray-900'}`}>
                          {formatPercent(results.capRate)}%
                        </p>
                      </div>
                      {results.capRate >= 6 && (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                    results.cashOnCash >= 8 ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-green-200/50' : 
                    'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-gray-200/50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-gray-600" />
                          <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Cash-on-Cash Return</h4>
                        </div>
                        <p className={`text-2xl font-bold ${results.cashOnCash >= 8 ? 'text-green-600' : 'text-gray-900'}`}>
                          {formatPercent(results.cashOnCash)}%
                        </p>
                      </div>
                      {results.cashOnCash >= 8 && (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cash Flow Breakdown */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                  Monthly Cash Flow Breakdown
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Gross Rental Income</span>
                    <span className="font-semibold text-gray-900">${results.grossIncome}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Vacancy Loss ({results.vacancy}%)</span>
                    <span className="font-semibold text-red-600">-${formatCurrency(results.vacancyLoss)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="text-gray-600">Effective Gross Income</span>
                    <span className="font-semibold text-gray-900">${formatCurrency(results.effectiveIncome)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Operating Expenses</span>
                    <span className="font-semibold text-red-600">-${formatCurrency(results.totalExpenses)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 pl-4">
                    <span>• Property Tax</span>
                    <span>${formatCurrency(results.propertyTax)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 pl-4">
                    <span>• Insurance</span>
                    <span>${formatCurrency(results.insurance)}</span>
                  </div>
                  {results.hoaFees > 0 && (
                    <div className="flex justify-between items-center text-xs text-gray-500 pl-4">
                      <span>• HOA Fees</span>
                      <span>${formatCurrency(results.hoaFees)}</span>
                    </div>
                  )}
                  {results.propertyManagement > 0 && (
                    <div className="flex justify-between items-center text-xs text-gray-500 pl-4">
                      <span>• Property Management</span>
                      <span>${formatCurrency(results.propertyManagement)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-xs text-gray-500 pl-4">
                    <span>• Maintenance</span>
                    <span>${formatCurrency(results.maintenance)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 pl-4">
                    <span>• CapEx Reserve</span>
                    <span>${formatCurrency(results.capex)}</span>
                  </div>
                  {results.utilities > 0 && (
                    <div className="flex justify-between items-center text-xs text-gray-500 pl-4">
                      <span>• Utilities</span>
                      <span>${formatCurrency(results.utilities)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="text-gray-600">Net Operating Income</span>
                    <span className="font-semibold text-gray-900">${formatCurrency(results.noi)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Debt Service</span>
                    <span className="font-semibold text-red-600">-${formatCurrency(results.monthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t-2 border-gray-400 pt-3 text-base">
                    <span className="font-bold text-gray-900">Net Cash Flow</span>
                    <span className={`font-bold ${results.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${formatCurrency(results.cashFlow)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Peroformance Summary */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                  Performance Summary
                </h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>• <strong>Projected annual cash flow:</strong> ${(results.cashFlow * 12).toLocaleString()}</p>
                  <p>• <strong>Total cash invested:</strong> ${results.totalCashInvested.toLocaleString()}</p>
                  <p>• <strong>Loan amount:</strong> ${results.loanAmount.toLocaleString()}</p>
                  <p>• <strong>DSCR (Debt Service Coverage):</strong> {formatPercent(results.dscr)}</p>
                  <p>• <strong>Break-even occupancy:</strong> {formatPercent(results.breakEvenOccupancy)}%</p>
                  <p>• <strong>Payback period:</strong> {results.paybackPeriod > 0 && results.paybackPeriod < 100 ? `${formatPercent(results.paybackPeriod)} years` : 'N/A'}</p>
                  <p>• <strong>Operating expense ratio:</strong> {formatPercent(results.operatingExpenseRatio)}%</p>
                  <p>• <strong>Monthly profit per $1,000 invested:</strong> ${formatPercent(results.profitPer1000)}</p>
                  <p>• <strong>Annual return on investment:</strong> {formatPercent(results.cashOnCash)}%</p>

                 <p className="pt-2 mt-3 text-xs text-gray-600 border-t border-gray-200">
                    <strong>Note:</strong> This is a simplified calculation for informational purposes only. Consider additional factors like 
                    market conditions, and local market trends. Always consult professionals before making any decisions.
                  </p>
                  <p className="pt-2 text-xs text-gray-600 border-t border-gray-200">
                    Colors, Icons, and Symbols used in this model are not investment ratings. They are simply visual cues to help you read the results more easily and should not be taken as advice or guidance.
                  </p>
                  <p className="pt-2 text-xs text-gray-600 border-t border-gray-200">
                    All values are rounded to 2 decimal places (0.005+ rounds up, 0.004- rounds down).
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}