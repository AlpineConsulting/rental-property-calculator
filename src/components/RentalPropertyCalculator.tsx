'use client';

import React, { useState, useCallback } from 'react';
import { Calculator, DollarSign, TrendingUp, AlertTriangle, Info, CheckCircle, XCircle, BarChart3, Target, Play } from 'lucide-react';
import Image from 'next/image';

interface CalculatorResults {
  purchasePrice: number;
  monthlyRent: number;
  downPayment: number;
  interestRate: number;
  propertyTax: number;
  insurance: number;
  maintenance: number;
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
}

export default function RentalPropertyCalculator() {
  // Input states - using object to prevent re-render issues
  const [inputs, setInputs] = useState({
    purchasePrice: '200000',
    monthlyRent: '2200',
    downPayment: '20000',
    interestRate: '5.99',
    propertyTax: '100',
    insurance: '100',
    maintenance: '200',
    vacancy: '5'
  });
  
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  // Stable input handler that doesn't cause re-renders
  const handleInputChange = useCallback((field: keyof typeof inputs, value: string) => {
    // Only allow numbers, decimals, and commas
    const sanitized = value.replace(/[^0-9.,]/g, '');
    
    setInputs(prev => ({
      ...prev,
      [field]: sanitized
    }));
  }, []);

  // Manual calculation function
  const performCalculation = useCallback(() => {
    setIsCalculating(true);
    
    // Parse all input values
    const values = {
      purchasePrice: parseFloat(inputs.purchasePrice.replace(/,/g, '')) || 0,
      monthlyRent: parseFloat(inputs.monthlyRent.replace(/,/g, '')) || 0,
      downPayment: parseFloat(inputs.downPayment.replace(/,/g, '')) || 0,
      interestRate: parseFloat(inputs.interestRate) || 0,
      propertyTax: parseFloat(inputs.propertyTax.replace(/,/g, '')) || 0,
      insurance: parseFloat(inputs.insurance.replace(/,/g, '')) || 0,
      maintenance: parseFloat(inputs.maintenance.replace(/,/g, '')) || 0,
      vacancy: parseFloat(inputs.vacancy) || 0
    };

    // Perform calculations
    const loanAmount = values.purchasePrice - values.downPayment;
    const monthlyRate = values.interestRate / 100 / 12;
    const monthlyPayment = loanAmount > 0 ? 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, 360)) / (Math.pow(1 + monthlyRate, 360) - 1) : 0;
    
    const grossIncome = values.monthlyRent;
    const vacancyLoss = grossIncome * (values.vacancy / 100);
    const effectiveIncome = grossIncome - vacancyLoss;
    const totalExpenses = values.propertyTax + values.insurance + values.maintenance;
    const noi = effectiveIncome - totalExpenses;
    const cashFlow = noi - monthlyPayment;
    
    const onePercentRule = values.purchasePrice > 0 ? (values.monthlyRent / values.purchasePrice) * 100 : 0;
    const capRate = values.purchasePrice > 0 ? ((noi * 12) / values.purchasePrice) * 100 : 0;
    const cashOnCash = values.downPayment > 0 ? ((cashFlow * 12) / values.downPayment) * 100 : 0;

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
      cashOnCash
    };

    // Simulate calculation time
    setTimeout(() => {
      setResults(calculatedResults);
      setIsCalculating(false);
      setHasCalculated(true);
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
        
        {/* Legal Disclaimer */}
        <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-white/90">
              <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. 
              Results are not investment advice. Consult qualified professionals before making investment decisions.
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
                <label className="block text-sm font-semibold text-gray-700">
                  Purchase Price
                  <span className="ml-2 text-gray-400 cursor-help" title="Total purchase price of the property">ℹ️</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.purchasePrice}
                    onChange={(e) => handleInputChange('purchasePrice', e.target.value)}
                    placeholder="400,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Monthly Rent */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Monthly Rent
                  <span className="ml-2 text-gray-400 cursor-help" title="Expected monthly rental income">ℹ️</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.monthlyRent}
                    onChange={(e) => handleInputChange('monthlyRent', e.target.value)}
                    placeholder="2,200"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Down Payment
                  <span className="ml-2 text-gray-400 cursor-help" title="Cash down payment amount">ℹ️</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.downPayment}
                    onChange={(e) => handleInputChange('downPayment', e.target.value)}
                    placeholder="80,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Interest Rate
                  <span className="ml-2 text-gray-400 cursor-help" title="Annual interest rate for the mortgage">ℹ️</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.interestRate}
                    onChange={(e) => handleInputChange('interestRate', e.target.value)}
                    placeholder="6.5"
                    className="w-full pr-8 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">%</span>
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
                  <span className="ml-2 text-gray-400 cursor-help" title="Monthly property tax amount">ℹ️</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.propertyTax}
                    onChange={(e) => handleInputChange('propertyTax', e.target.value)}
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
                  <span className="ml-2 text-gray-400 cursor-help" title="Monthly property insurance premium">ℹ️</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.insurance}
                    onChange={(e) => handleInputChange('insurance', e.target.value)}
                    placeholder="150"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Maintenance */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Maintenance
                  <span className="ml-2 text-gray-400 cursor-help" title="Monthly maintenance and repairs budget">ℹ️</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.maintenance}
                    onChange={(e) => handleInputChange('maintenance', e.target.value)}
                    placeholder="200"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              {/* Vacancy Rate */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Vacancy Rate
                  <span className="ml-2 text-gray-400 cursor-help" title="Expected vacancy percentage (typically 5-10%)">ℹ️</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inputs.vacancy}
                    onChange={(e) => handleInputChange('vacancy', e.target.value)}
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
                  <span>Calculate Investment Analysis</span>
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
              <li>3. Fill in monthly expenses (taxes, insurance, maintenance)</li>
              <li>4. Click "Calculate" to see your investment analysis</li>
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
                Ready to Analyze Your Property
              </h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                Fill in the property details on the left, then click "Calculate" to see your investment analysis.
              </p>
            </div>
          )}

          {isCalculating && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Your Investment</h3>
              <p className="text-gray-600 text-center">
                Calculating cash flow, cap rate, 1% rule compliance, and investment metrics...
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
                  Key Investment Metrics
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
                          ${Math.round(results.cashFlow).toLocaleString()}
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
                          {results.onePercentRule.toFixed(2)}%
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
                          {results.capRate.toFixed(2)}%
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
                          {results.cashOnCash.toFixed(2)}%
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
                  <Info className="w-5 h-5 text-blue-600 mr-2" />
                  Monthly Cash Flow Breakdown
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Gross Rental Income</span>
                    <span className="font-semibold text-gray-900">${results.grossIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Vacancy Loss ({results.vacancy}%)</span>
                    <span className="font-semibold text-red-600">-${Math.round(results.vacancyLoss).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="text-gray-600">Effective Gross Income</span>
                    <span className="font-semibold text-gray-900">${Math.round(results.effectiveIncome).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Operating Expenses</span>
                    <span className="font-semibold text-red-600">-${results.totalExpenses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="text-gray-600">Net Operating Income</span>
                    <span className="font-semibold text-gray-900">${Math.round(results.noi).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Debt Service</span>
                    <span className="font-semibold text-red-600">-${Math.round(results.monthlyPayment).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-t-2 border-gray-400 pt-3 text-base">
                    <span className="font-bold text-gray-900">Net Cash Flow</span>
                    <span className={`font-bold ${results.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${Math.round(results.cashFlow).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Investment Summary */}
              <div className={`p-6 rounded-2xl border-l-4 ${
                results.cashFlow > 100 && results.onePercentRule >= 1 && results.capRate >= 6 
                  ? 'bg-green-50 border-green-400' 
                  : results.cashFlow > 0 && (results.onePercentRule >= 0.8 || results.capRate >= 4)
                  ? 'bg-yellow-50 border-yellow-400'
                  : 'bg-red-50 border-red-400'
              }`}>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  {results.cashFlow > 100 && results.onePercentRule >= 1 && results.capRate >= 6 ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  )}
                  Investment Analysis Summary
                </h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>• <strong>Projected annual cash flow:</strong> ${(results.cashFlow * 12).toLocaleString()}</p>
                  <p>• <strong>Total cash invested:</strong> ${results.downPayment.toLocaleString()}</p>
                  <p>• <strong>Loan amount:</strong> ${results.loanAmount.toLocaleString()}</p>
                  <p className="pt-2 text-xs text-gray-600 border-t border-gray-200">
                    <strong>Note:</strong> This is a simplified calculation. Consider additional factors like 
                    market conditions, property management costs, capital improvements, and local market trends.
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