export interface User {
  id: string;
  email: string;
  name: string;
  isAuthenticated: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface SatisfactionFormData {
  overallSatisfaction: number;
  productQuality: number;
  customerService: number;
  deliverySpeed: number;
  valueForMoney: number;
  comments: string;
  wouldRecommend: boolean;
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
  component: React.ComponentType<any>;
} 