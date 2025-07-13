import React from 'react';
import { SatisfactionFormData } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faBox, 
  faHeadset, 
  faTruck, 
  faDollarSign 
} from '@fortawesome/free-solid-svg-icons';

interface SatisfactionStep2Props {
  formData: SatisfactionFormData;
  updateFormData: (data: Partial<SatisfactionFormData>) => void;
}

const SatisfactionStep2: React.FC<SatisfactionStep2Props> = ({ formData, updateFormData }) => {
  const categories = [
    {
      key: 'productQuality' as keyof SatisfactionFormData,
      title: 'Qualidade do Produto',
      icon: faBox,
      description: 'Como você avalia a qualidade dos produtos recebidos?'
    },
    {
      key: 'customerService' as keyof SatisfactionFormData,
      title: 'Atendimento ao Cliente',
      icon: faHeadset,
      description: 'Como você avalia o atendimento da nossa equipe?'
    },
    {
      key: 'deliverySpeed' as keyof SatisfactionFormData,
      title: 'Velocidade de Entrega',
      icon: faTruck,
      description: 'Como você avalia a velocidade e pontualidade da entrega?'
    },
    {
      key: 'valueForMoney' as keyof SatisfactionFormData,
      title: 'Custo-Benefício',
      icon: faDollarSign,
      description: 'Como você avalia o valor pelo dinheiro gasto?'
    }
  ];

  const handleRatingChange = (category: keyof SatisfactionFormData, rating: number) => {
    updateFormData({ [category]: rating });
  };

  const renderStars = (category: keyof SatisfactionFormData, currentRating: number) => {
    return (
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`star-button ${currentRating >= star ? 'active' : ''}`}
            onClick={() => handleRatingChange(category, star)}
          >
            <FontAwesomeIcon 
              icon={faStar} 
              className={`star-icon ${currentRating >= star ? 'filled' : ''}`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="cell-md-10 cell-lg-8 offset-md-1 offset-lg-2">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                Avaliação Detalhada
              </h3>
            </div>
            <div className="card-content p-4">
              <div className="text-center mb-4">
                <p className="lead">
                  Agora vamos avaliar aspectos específicos da sua experiência
                </p>
              </div>

              <div className="categories-container">
                {categories.map((category) => (
                  <div key={category.key} className="category-item">
                    <div className="category-header">
                      <FontAwesomeIcon icon={category.icon} className="category-icon" />
                      <h4>{category.title}</h4>
                    </div>
                    <p className="category-description">{category.description}</p>
                    {renderStars(category.key, formData[category.key] as number)}
                    <div className="rating-label">
                      {formData[category.key] > 0 ? `${formData[category.key]}/5` : 'Clique para avaliar'}
                    </div>
                  </div>
                ))}
              </div>

              <style jsx>{`
                .categories-container {
                  display: grid;
                  gap: 2rem;
                }
                
                .category-item {
                  padding: 1.5rem;
                  border: 1px solid #e9ecef;
                  border-radius: 8px;
                  background-color: #f8f9fa;
                }
                
                .category-header {
                  display: flex;
                  align-items: center;
                  margin-bottom: 0.5rem;
                }
                
                .category-icon {
                  font-size: 1.5rem;
                  color: #007bff;
                  margin-right: 0.75rem;
                }
                
                .category-header h4 {
                  margin: 0;
                  color: #333;
                }
                
                .category-description {
                  color: #6c757d;
                  margin-bottom: 1rem;
                }
                
                .stars-container {
                  display: flex;
                  justify-content: center;
                  gap: 0.5rem;
                  margin-bottom: 0.5rem;
                }
                
                .star-button {
                  background: none;
                  border: none;
                  cursor: pointer;
                  padding: 0.25rem;
                  transition: transform 0.2s ease;
                }
                
                .star-button:hover {
                  transform: scale(1.1);
                }
                
                .star-icon {
                  font-size: 1.5rem;
                  color: #ddd;
                  transition: color 0.2s ease;
                }
                
                .star-icon.filled {
                  color: #ffd700;
                }
                
                .rating-label {
                  text-align: center;
                  font-weight: bold;
                  color: #007bff;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionStep2; 