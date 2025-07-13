import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useSatisfactionForm } from '../hooks/useSatisfactionForm';
import SatisfactionStep1 from './SatisfactionStep1';
import SatisfactionStep2 from './SatisfactionStep2';
import SatisfactionStep3 from './SatisfactionStep3';
import ThankYouStep from './ThankYouStep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight, 
  faSignOutAlt,
  faUser 
} from '@fortawesome/free-solid-svg-icons';

const SatisfactionForm: React.FC = () => {
  const { user, logout } = useAuth();
  const { 
    formData, 
    currentStep, 
    updateFormData, 
    nextStep, 
    prevStep, 
    canProceed 
  } = useSatisfactionForm();

  const steps = [
    { title: 'Avaliação Geral', description: 'Como você avalia sua experiência?' },
    { title: 'Avaliação Detalhada', description: 'Avalie aspectos específicos' },
    { title: 'Comentários', description: 'Conte-nos mais sobre sua experiência' },
    { title: 'Conclusão', description: 'Obrigado pelo seu feedback!' }
  ];

  const handleNext = () => {
    if (canProceed(currentStep)) {
      nextStep();
    }
  };

  const handlePrev = () => {
    prevStep();
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <SatisfactionStep1 formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <SatisfactionStep2 formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <SatisfactionStep3 formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <ThankYouStep formData={formData} />;
      default:
        return null;
    }
  };

  if (currentStep === 3) {
    return renderCurrentStep();
  }

  return (
    <div className="satisfaction-form">
      {/* Header */}
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="cell-12">
              <div className="header-content">
                <div className="header-left">
                  <h2>
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Avaliação de Satisfação
                  </h2>
                  <p>Olá, {user?.name}! Sua opinião é muito importante para nós.</p>
                </div>
                <div className="header-right">
                  <button
                    type="button"
                    className="button secondary"
                    onClick={logout}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="container">
          <div className="row">
            <div className="cell-12">
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-steps">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`progress-step ${index <= currentStep ? 'active' : ''} ${index === currentStep ? 'current' : ''}`}
                    >
                      <div className="step-number">{index + 1}</div>
                      <div className="step-info">
                        <div className="step-title">{step.title}</div>
                        <div className="step-description">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="form-section">
        {renderCurrentStep()}
      </div>

      {/* Navigation */}
      <div className="navigation-section">
        <div className="container">
          <div className="row">
            <div className="cell-12">
              <div className="navigation-buttons">
                <button
                  type="button"
                  className="button secondary"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                  Anterior
                </button>
                
                {currentStep < 3 && (
                  <button
                    type="button"
                    className="button primary"
                    onClick={handleNext}
                    disabled={!canProceed(currentStep)}
                  >
                    Próximo
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .satisfaction-form {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .header-section {
          background-color: white;
          padding: 1.5rem 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .header-left h2 {
          margin: 0;
          color: #333;
        }
        
        .header-left p {
          margin: 0.5rem 0 0 0;
          color: #6c757d;
        }
        
        .progress-section {
          background-color: white;
          padding: 2rem 0;
          border-bottom: 1px solid #e9ecef;
        }
        
        .progress-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .progress-bar {
          height: 8px;
          background-color: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #007bff, #28a745);
          transition: width 0.3s ease;
        }
        
        .progress-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        
        .progress-step {
          display: flex;
          align-items: center;
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .progress-step.active {
          background-color: #f8f9fa;
          border: 2px solid #007bff;
        }
        
        .progress-step.current {
          background-color: #007bff;
          color: white;
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-right: 1rem;
        }
        
        .progress-step.current .step-number {
          background-color: white;
          color: #007bff;
        }
        
        .step-title {
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        
        .step-description {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .form-section {
          padding: 3rem 0;
        }
        
        .navigation-section {
          background-color: white;
          padding: 2rem 0;
          border-top: 1px solid #e9ecef;
        }
        
        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .navigation-buttons button {
          min-width: 120px;
        }
      `}</style>
    </div>
  );
};

export default SatisfactionForm; 