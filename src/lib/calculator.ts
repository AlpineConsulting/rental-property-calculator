import { 
  PropertyInputs, 
  CalculatedResults, 
  ExpenseBreakdown, 
  IncomeBreakdown, 
  AnalysisSummary 
} from '@/types/calculator';

/**
 * Safely parse a string to float, returning 0 if invalid
 */
export const parseInput = (value: string): number => {
  const parsed = parseFloat(value.replace(/,/g, ''));
  return isNaN(parsed) ? 0 : parsed;
};

/**
 * Format number as currency
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Format number as percentage
 */
export const formatPercentage = (decimal: number): string => {
  return `${(decimal * 100).toFixed(2)}%`;
};

/**
 * Format number with commas
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Calculate monthly mortgage payment using standard amortization formula
 */
export const calculateMortgagePayment = (
  loanAmount: number,
  annualRate: number,
  loanTermYears: number
): number => {
  if (loanAmount <= 0 || annualRate <= 0 || loanTermYears <= 0) {
    return 0;
  }

  const monthlyRate = annualRate / 100 / 12;
  const numPayments = loanTermYears * 12;
  
  const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                        (Math.pow(1 + monthlyRate, numPayments) - 1);
  
  return monthlyPayment;
};

/**
 * Calculate all rental property metrics
 */
export const calculateRentalProperty = (inputs: PropertyInputs): CalculatedResults => {
  // Parse all inputs
  const purchasePrice = parseInput(inputs.purchasePrice);
  const downPayment = parseInput(inputs.downPayment);
  const loanAmount = parseInput(inputs.loanAmount) || (purchasePrice - downPayment);
  const interestRate = parseInput(inputs.interestRate);
  const loanTerm = parseInput(inputs.loanTerm);
  const monthlyRent = parseInput(inputs.monthlyRent);
  const otherIncome = parseInput(inputs.otherIncome);
  const propertyTaxes = parseInput(inputs.propertyTaxes);
  const insurance = parseInput(inputs.insurance);
  const hoaFees = parseInput(inputs.hoaFees);
  const propertyManagement = parseInput(inputs.propertyManagement);
  const vacancy = parseInput(inputs.vacancy);
  const repairs = parseInput(inputs.repairs);
  const capex = parseInput(inputs.capex);
  const otherExpenses = parseInput(inputs.otherExpenses);

  // Calculate mortgage payment
  const monthlyMortgagePayment = calculateMortgagePayment(loanAmount, interestRate, loanTerm);

  // Calculate monthly income
  const totalMonthlyIncome = monthlyRent + otherIncome;

  // Calculate monthly expenses
  const vacancyLoss = (monthlyRent * vacancy) / 100;
  const effectiveGrossIncome = totalMonthlyIncome - vacancyLoss;
  
  const totalMonthlyExpenses = propertyTaxes + insurance + hoaFees + 
                              propertyManagement + repairs + capex + otherExpenses;

  // Calculate NOI (Net Operating Income)
  const netOperatingIncome = effectiveGrossIncome - totalMonthlyExpenses;

  // Calculate cash flow
  const monthlyCashFlow = netOperatingIncome - monthlyMortgagePayment;
  const annualCashFlow = monthlyCashFlow * 12;

  // Calculate total cash invested
  const totalCashInvested = downPayment + parseInput(inputs.otherExpenses || '0'); // Closing costs, etc.

  // Calculate key metrics
  const capRate = purchasePrice > 0 ? (netOperatingIncome * 12) / purchasePrice : 0;
  const cashOnCashReturn = totalCashInvested > 0 ? annualCashFlow / totalCashInvested : 0;
  const onePercentRule = purchasePrice > 0 ? (monthlyRent / purchasePrice) : 0;
  const twoPercentRule = purchasePrice > 0 ? (monthlyRent / purchasePrice) : 0;
  const rentToValueRatio = purchasePrice > 0 ? (monthlyRent * 12) / purchasePrice : 0;
  const debtServiceCoverageRatio = monthlyMortgagePayment > 0 ? netOperatingIncome / monthlyMortgagePayment : 0;
  const grossRentMultiplier = monthlyRent > 0 ? purchasePrice / (monthlyRent * 12) : 0;
  const returnOnInvestment = totalCashInvested > 0 ? annualCashFlow / totalCashInvested : 0;

  return {
    monthlyMortgagePayment,
    totalMonthlyExpenses,
    totalMonthlyIncome: effectiveGrossIncome,
    netOperatingIncome,
    monthlyCashFlow,
    annualCashFlow,
    totalCashInvested,
    capRate,
    cashOnCashReturn,
    onePercentRule,
    twoPercentRule,
    rentToValueRatio,
    debtServiceCoverageRatio,
    grossRentMultiplier,
    returnOnInvestment
  };
};

/**
 * Calculate expense breakdown
 */
export const calculateExpenseBreakdown = (inputs: PropertyInputs): ExpenseBreakdown => {
  const propertyTaxes = parseInput(inputs.propertyTaxes);
  const insurance = parseInput(inputs.insurance);
  const hoaFees = parseInput(inputs.hoaFees);
  const propertyManagement = parseInput(inputs.propertyManagement);
  const vacancy = parseInput(inputs.vacancy);
  const repairs = parseInput(inputs.repairs);
  const capex = parseInput(inputs.capex);
  const otherExpenses = parseInput(inputs.otherExpenses);
  
  const loanAmount = parseInput(inputs.loanAmount) || 
                    (parseInput(inputs.purchasePrice) - parseInput(inputs.downPayment));
  const mortgagePayment = calculateMortgagePayment(
    loanAmount,
    parseInput(inputs.interestRate),
    parseInput(inputs.loanTerm)
  );

  const total = mortgagePayment + propertyTaxes + insurance + hoaFees + 
               propertyManagement + vacancy + repairs + capex + otherExpenses;

  return {
    mortgagePayment,
    propertyTaxes,
    insurance,
    hoaFees,
    propertyManagement,
    vacancy,
    repairs,
    capex,
    otherExpenses,
    total
  };
};

/**
 * Calculate income breakdown
 */
export const calculateIncomeBreakdown = (inputs: PropertyInputs): IncomeBreakdown => {
  const monthlyRent = parseInput(inputs.monthlyRent);
  const otherIncome = parseInput(inputs.otherIncome);
  
  return {
    monthlyRent,
    otherIncome,
    total: monthlyRent + otherIncome
  };
};

/**
 * Generate analysis summary with recommendations
 */
export const generateAnalysisSummary = (
  inputs: PropertyInputs, 
  results: CalculatedResults
): AnalysisSummary => {
  const onePercentRulePassed = results.onePercentRule >= 0.01;
  const twoPercentRulePassed = results.twoPercentRule >= 0.02;
  const positiveCashFlow = results.monthlyCashFlow > 0;

  // Determine recommendation level
  let recommendationLevel: 'excellent' | 'good' | 'fair' | 'poor';
  
  if (results.cashOnCashReturn > 0.15 && onePercentRulePassed && positiveCashFlow) {
    recommendationLevel = 'excellent';
  } else if (results.cashOnCashReturn > 0.08 && positiveCashFlow) {
    recommendationLevel = 'good';
  } else if (results.cashOnCashReturn > 0 && positiveCashFlow) {
    recommendationLevel = 'fair';
  } else {
    recommendationLevel = 'poor';
  }

  const isGoodInvestment = recommendationLevel === 'excellent' || recommendationLevel === 'good';

  const keyMetrics = [
    {
      name: 'Monthly Cash Flow',
      value: results.monthlyCashFlow,
      isPositive: results.monthlyCashFlow > 0,
      format: 'currency' as const
    },
    {
      name: 'Annual Cash Flow',
      value: results.annualCashFlow,
      isPositive: results.annualCashFlow > 0,
      format: 'currency' as const
    },
    {
      name: 'Cash-on-Cash Return',
      value: results.cashOnCashReturn,
      isPositive: results.cashOnCashReturn > 0.08,
      format: 'percentage' as const
    },
    {
      name: 'Cap Rate',
      value: results.capRate,
      isPositive: results.capRate > 0.06,
      format: 'percentage' as const
    },
    {
      name: '1% Rule',
      value: results.onePercentRule,
      isPositive: results.onePercentRule >= 0.01,
      format: 'percentage' as const
    },
    {
      name: 'DSCR',
      value: results.debtServiceCoverageRatio,
      isPositive: results.debtServiceCoverageRatio > 1.25,
      format: 'ratio' as const
    }
  ];

  return {
    isGoodInvestment,
    onePercentRulePassed,
    twoPercentRulePassed,
    positiveCashFlow,
    recommendationLevel,
    keyMetrics
  };
};

/**
 * Validate calculator inputs
 */
export const validateInputs = (inputs: PropertyInputs): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (parseInput(inputs.purchasePrice) <= 0) {
    errors.purchasePrice = 'Purchase price must be greater than 0';
  }

  if (parseInput(inputs.monthlyRent) <= 0) {
    errors.monthlyRent = 'Monthly rent must be greater than 0';
  }

  if (parseInput(inputs.downPayment) < 0) {
    errors.downPayment = 'Down payment cannot be negative';
  }

  if (parseInput(inputs.interestRate) < 0 || parseInput(inputs.interestRate) > 50) {
    errors.interestRate = 'Interest rate must be between 0% and 50%';
  }

  if (parseInput(inputs.loanTerm) <= 0 || parseInput(inputs.loanTerm) > 50) {
    errors.loanTerm = 'Loan term must be between 1 and 50 years';
  }

  if (parseInput(inputs.vacancy) < 0 || parseInput(inputs.vacancy) > 100) {
    errors.vacancy = 'Vacancy rate must be between 0% and 100%';
  }

  return errors;
};

/**
 * Get default calculator inputs
 */
export const getDefaultInputs = (): PropertyInputs => ({
  purchasePrice: '400000',
  downPayment: '80000',
  loanAmount: '320000',
  interestRate: '6.5',
  loanTerm: '30',
  monthlyRent: '2200',
  otherIncome: '0',
  propertyTaxes: '300',
  insurance: '150',
  hoaFees: '0',
  propertyManagement: '110',
  vacancy: '5',
  repairs: '100',
  capex: '50',
  otherExpenses: '50'
});