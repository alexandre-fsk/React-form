import React from 'react';
import { SatisfactionFormData } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faComment, 
  faThumbsUp, 
  faThumbsDown,
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';

interface SatisfactionStep3Props {
  formData: SatisfactionFormData;
  updateFormData: (data: Partial<SatisfactionFormData>) => void;
}

const SatisfactionStep3: React.FC<SatisfactionStep3Props> = ({ formData, updateFormData }) => {
  const handleCommentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({ comments: e.target.value });
  };

  const handleRecommendationChange = (wouldRecommend: boolean) => {
    updateFormData({ wouldRecommend });
  };

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

  return (
    <div className="container">
      <div className="row">
        <div className="cell-md-8 cell-lg-6 offset-md-2 offset-lg-3">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">
                <FontAwesomeIcon icon={faComment} className="mr-2" />
                Comentários Finais
              </h3>
            </div>
            <div className="card-content p-4">
              <div className="text-center mb-4">
                <p className="lead">
                  Quase terminamos! Conte-nos mais sobre sua experiência
                </p>
              </div>

              <div className="rating-summary mb-4">
                <h5>Resumo das suas avaliações:</h5>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span>Avaliação Geral:</span>
                    <span className="rating-value">{formData.overallSatisfaction}/5</span>
                  </div>
                  <div className="summary-item">
                    <span>Qualidade do Produto:</span>
                    <span className="rating-value">{formData.productQuality}/5</span>
                  </div>
                  <div className="summary-item">
                    <span>Atendimento:</span>
                    <span className="rating-value">{formData.customerService}/5</span>
                  </div>
                  <div className="summary-item">
                    <span>Entrega:</span>
                    <span className="rating-value">{formData.deliverySpeed}/5</span>
                  </div>
                  <div className="summary-item">
                    <span>Custo-Benefício:</span>
                    <span className="rating-value">{formData.valueForMoney}/5</span>
                  </div>
                  <div className="summary-item average">
                    <span><strong>Média Geral:</strong></span>
                    <span className="rating-value average-value">{getAverageRating()}/5</span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="comments">
                  <FontAwesomeIcon icon={faComment} className="mr-2" />
                  Comentários Adicionais (Opcional)
                </label>
                <textarea
                  id="comments"
                  className="form-control"
                  rows={4}
                  placeholder="Conte-nos mais sobre sua experiência, sugestões de melhoria, ou qualquer outro comentário que gostaria de compartilhar..."
                  value={formData.comments}
                  onChange={handleCommentsChange}
                />
              </div>

              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  Você recomendaria nossos serviços para amigos e familiares?
                </label>
                <div className="recommendation-buttons">
                  <button
                    type="button"
                    className={`recommendation-btn ${formData.wouldRecommend === true ? 'active' : ''}`}
                    onClick={() => handleRecommendationChange(true)}
                  >
                    <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
                    Sim, definitivamente!
                  </button>
                  <button
                    type="button"
                    className={`recommendation-btn ${formData.wouldRecommend === false ? 'active' : ''}`}
                    onClick={() => handleRecommendationChange(false)}
                  >
                    <FontAwesomeIcon icon={faThumbsDown} className="mr-2" />
                    Não, não recomendaria
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionStep3; 