import React from 'react';
import { SatisfactionFormData } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faStar, 
  faCheckCircle,
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';

interface ThankYouStepProps {
  formData: SatisfactionFormData;
}

const ThankYouStep: React.FC<ThankYouStepProps> = ({ formData }) => {
  const { user, logout } = useAuth();

  const getAverageRating = () => {
    const ratings = [
      formData.overallSatisfaction,
      formData.productQuality,
      formData.customerService,
      formData.deliverySpeed,
      formData.valueForMoney
    ].filter(rating => rating > 0);
    
    if (ratings.length === 0) return 0;
    return (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1);
  };

  const getSatisfactionMessage = () => {
    const average = parseFloat(getAverageRating());
    if (average >= 4.5) return "Excelente! Estamos muito felizes com sua avaliação!";
    if (average >= 4) return "Muito bom! Obrigado pela sua avaliação positiva!";
    if (average >= 3) return "Obrigado pelo seu feedback! Vamos trabalhar para melhorar.";
    return "Obrigado pelo seu feedback honesto. Vamos melhorar nossos serviços.";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="cell-md-8 cell-lg-6 offset-md-2 offset-lg-3">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">
                <FontAwesomeIcon icon={faHeart} className="mr-2" />
                Obrigado!
              </h3>
            </div>
            <div className="card-content p-4">
              <div className="text-center mb-4">
                <div className="success-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h4 className="mt-3">Avaliação Enviada com Sucesso!</h4>
                <p className="lead">
                  {getSatisfactionMessage()}
                </p>
              </div>

              <div className="final-summary">
                <h5>Resumo da sua avaliação:</h5>
                <div className="summary-stats">
                  <div className="stat-item">
                    <FontAwesomeIcon icon={faStar} className="stat-icon" />
                    <div className="stat-content">
                      <span className="stat-label">Média Geral</span>
                      <span className="stat-value">{getAverageRating()}/5</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FontAwesomeIcon icon={faHeart} className="stat-icon" />
                    <div className="stat-content">
                      <span className="stat-label">Recomendação</span>
                      <span className="stat-value">
                        {formData.wouldRecommend ? 'Sim' : 'Não'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {formData.comments && (
                <div className="comments-section">
                  <h5>Seus comentários:</h5>
                  <div className="comment-box">
                    "{formData.comments}"
                  </div>
                </div>
              )}

              <div className="user-info">
                <p><strong>Cliente:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
              </div>

              <div className="text-center mt-4">
                <button
                  type="button"
                  className="button secondary"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Sair
                </button>
              </div>

              <style jsx>{`
                .success-icon {
                  font-size: 4rem;
                  color: #28a745;
                  margin-bottom: 1rem;
                }
                
                .final-summary {
                  background-color: #f8f9fa;
                  padding: 1.5rem;
                  border-radius: 8px;
                  margin: 2rem 0;
                }
                
                .summary-stats {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 1rem;
                  margin-top: 1rem;
                }
                
                .stat-item {
                  display: flex;
                  align-items: center;
                  padding: 1rem;
                  background-color: white;
                  border-radius: 8px;
                  border: 1px solid #e9ecef;
                }
                
                .stat-icon {
                  font-size: 1.5rem;
                  color: #007bff;
                  margin-right: 1rem;
                }
                
                .stat-content {
                  display: flex;
                  flex-direction: column;
                }
                
                .stat-label {
                  font-size: 0.9rem;
                  color: #6c757d;
                }
                
                .stat-value {
                  font-size: 1.2rem;
                  font-weight: bold;
                  color: #333;
                }
                
                .comments-section {
                  margin: 2rem 0;
                }
                
                .comment-box {
                  background-color: #f8f9fa;
                  padding: 1rem;
                  border-radius: 8px;
                  border-left: 4px solid #007bff;
                  font-style: italic;
                  color: #495057;
                }
                
                .user-info {
                  background-color: #e9ecef;
                  padding: 1rem;
                  border-radius: 8px;
                  margin: 2rem 0;
                }
                
                .user-info p {
                  margin: 0.5rem 0;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouStep; 