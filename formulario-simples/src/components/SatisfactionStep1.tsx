import React from 'react';
import { SatisfactionFormData } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSmile, faFrown, faMeh } from '@fortawesome/free-solid-svg-icons';

interface SatisfactionStep1Props {
  formData: SatisfactionFormData;
  updateFormData: (data: Partial<SatisfactionFormData>) => void;
}

const SatisfactionStep1: React.FC<SatisfactionStep1Props> = ({ formData, updateFormData }) => {
  const handleRatingChange = (rating: number) => {
    updateFormData({ overallSatisfaction: rating });
  };

  const getRatingIcon = (rating: number) => {
    if (rating >= 4) return faSmile;
    if (rating >= 3) return faMeh;
    return faFrown;
  };

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 1: return 'Muito Insatisfeito';
      case 2: return 'Insatisfeito';
      case 3: return 'Neutro';
      case 4: return 'Satisfeito';
      case 5: return 'Muito Satisfeito';
      default: return 'Selecione uma avaliação';
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="cell-md-8 cell-lg-6 offset-md-2 offset-lg-3">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                Avaliação Geral
              </h3>
            </div>
            <div className="card-content p-4">
              <div className="text-center mb-4">
                <p className="lead">
                  Como você avalia sua experiência geral conosco?
                </p>
                <p className="text-muted">
                  Sua opinião é muito importante para continuarmos melhorando nossos serviços.
                </p>
              </div>

              <div className="rating-container text-center">
                <div className="stars-container mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-button ${formData.overallSatisfaction >= star ? 'active' : ''}`}
                      onClick={() => handleRatingChange(star)}
                    >
                      <FontAwesomeIcon 
                        icon={faStar} 
                        className={`star-icon ${formData.overallSatisfaction >= star ? 'filled' : ''}`}
                      />
                    </button>
                  ))}
                </div>

                {formData.overallSatisfaction > 0 && (
                  <div className="rating-feedback">
                    <FontAwesomeIcon 
                      icon={getRatingIcon(formData.overallSatisfaction)} 
                      className="rating-icon"
                    />
                    <h4 className="rating-text">
                      {getRatingText(formData.overallSatisfaction)}
                    </h4>
                  </div>
                )}
              </div>

              <style jsx>{`
                .rating-container {
                  padding: 2rem 0;
                }
                
                .stars-container {
                  display: flex;
                  justify-content: center;
                  gap: 1rem;
                }
                
                .star-button {
                  background: none;
                  border: none;
                  cursor: pointer;
                  padding: 0.5rem;
                  transition: transform 0.2s ease;
                }
                
                .star-button:hover {
                  transform: scale(1.2);
                }
                
                .star-icon {
                  font-size: 2.5rem;
                  color: #ddd;
                  transition: color 0.2s ease;
                }
                
                .star-icon.filled {
                  color: #ffd700;
                }
                
                .rating-feedback {
                  margin-top: 1rem;
                  padding: 1rem;
                  background-color: #f8f9fa;
                  border-radius: 8px;
                }
                
                .rating-icon {
                  font-size: 2rem;
                  color: #28a745;
                  margin-bottom: 0.5rem;
                }
                
                .rating-text {
                  margin: 0;
                  color: #333;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionStep1; 