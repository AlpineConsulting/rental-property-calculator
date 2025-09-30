// Calculator Input Types
export interface PropertyInputs {
  purchasePrice: string;
  downPayment: string;
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  monthlyRent: string;
  otherIncome: string;
  propertyTaxes: string;
  insurance: string;
  hoaFees: string;
  propertyManagement: string;
  vacancy: string;
  repairs: string;
  capex: string;
  otherExpenses: string;
}

// Calculated Results Types
export interface CalculatedResults {
  monthlyMortgagePayment: number;
  totalMonthlyExpenses: number;
  totalMonthlyIncome: number;
  netOperatingIncome: number;
  monthlyCashFlow: number;
  annualCashFlow: number;
  totalCashInvested: number;
  capRate: number;
  cashOnCashReturn: number;
  onePercentRule: number;
  twoPercentRule: number;
  rentToValueRatio: number;
  debtServiceCoverageRatio: number;
  grossRentMultiplier: number;
  returnOnInvestment: number;
}

// Expense Breakdown Types
export interface ExpenseBreakdown {
  mortgagePayment: number;
  propertyTaxes: number;
  insurance: number;
  hoaFees: number;
  propertyManagement: number;
  vacancy: number;
  repairs: number;
  capex: number;
  otherExpenses: number;
  total: number;
}

// Income Breakdown Types
export interface IncomeBreakdown {
  monthlyRent: number;
  otherIncome: number;
  total: number;
}

// Analysis Summary Types
export interface AnalysisSummary {
  isGoodInvestment: boolean;
  onePercentRulePassed: boolean;
  twoPercentRulePassed: boolean;
  positiveCashFlow: boolean;
  recommendationLevel: 'excellent' | 'good' | 'fair' | 'poor';
  keyMetrics: {
    name: string;
    value: number | string;
    isPositive: boolean;
    format: 'currency' | 'percentage' | 'ratio' | 'number';
  }[];
}

// Calculator State Types
export interface CalculatorState {
  inputs: PropertyInputs;
  results: CalculatedResults | null;
  expenseBreakdown: ExpenseBreakdown | null;
  incomeBreakdown: IncomeBreakdown | null;
  analysisSummary: AnalysisSummary | null;
  isCalculated: boolean;
  errors: Record<string, string>;
}

// Form Validation Types
export interface ValidationRule {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

// Calculator Configuration Types
export interface CalculatorConfig {
  defaultValues: Partial<PropertyInputs>;
  validationRules: ValidationRules;
  calculationSettings: {
    defaultVacancyRate: number;
    defaultMaintenanceRate: number;
    defaultCapexRate: number;
    defaultManagementRate: number;
  };
}

// Market Data Types (for future enhancements)
export interface MarketData {
  averageRent: number;
  averagePropertyPrice: number;
  averageCapRate: number;
  marketAppreciation: number;
  rentGrowth: number;
  location: string;
  lastUpdated: Date;
}

// Comparison Types (for multiple properties)
export interface PropertyComparison {
  id: string;
  name: string;
  inputs: PropertyInputs;
  results: CalculatedResults;
  analysisSummary: AnalysisSummary;
}

// Export/Import Types
export interface CalculatorExport {
  version: string;
  timestamp: Date;
  inputs: PropertyInputs;
  results: CalculatedResults;
  analysis: AnalysisSummary;
}

// API Response Types (for future integrations)
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

// Affiliate Integration Types
export interface AffiliateOffer {
  id: string;
  name: string;
  description: string;
  category: 'lending' | 'insurance' | 'data' | 'management' | 'education';
  relevanceScore: number;
  url: string;
  cta: string;
}

// Analytics Event Types
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

// UI State Types
export interface UIState {
  isLoading: boolean;
  activeTab: string;
  showAdvancedOptions: boolean;
  showComparison: boolean;
  theme: 'light' | 'dark';
}