import { useState } from 'react';
import { SatisfactionFormData } from '../types';

const initialFormData: SatisfactionFormData = {
  overallSatisfaction: 0,
  productQuality: 0,
  customerService: 0,
  deliverySpeed: 0,
  valueForMoney: 0,
  comments: '',
  wouldRecommend: false
};

export const useSatisfactionForm = () => {
  const [formData, setFormData] = useState<SatisfactionFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);

  const updateFormData = (data: Partial<SatisfactionFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
  };

  const canProceed = (step: number): boolean => {
    switch (step) {
      case 0: // Overall satisfaction
        return formData.overallSatisfaction > 0;
      case 1: // Detailed ratings
        return formData.productQuality > 0 && 
               formData.customerService > 0 && 
               formData.deliverySpeed > 0 && 
               formData.valueForMoney > 0;
      case 2: // Comments and recommendation
        return formData.wouldRecommend !== undefined;
      default:
        return true;
    }
  };

  return {
    formData,
    currentStep,
    updateFormData,
    nextStep,
    prevStep,
    resetForm,
    canProceed
  };
}; 