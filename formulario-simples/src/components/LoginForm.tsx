import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const success = await login(email, password);
    if (!success) {
      setError('Email ou senha incorretos');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="cell-md-6 cell-lg-4 offset-md-3 offset-lg-4">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login do Cliente
              </h3>
            </div>
            <div className="card-content p-4">
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-danger">
                    <span className="mif-warning"></span>
                    {error}
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Digite seu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="button primary w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="mif-spinner mif-ani-spin"></span>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                        Entrar
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <small className="text-muted">
                  <strong>Credenciais de teste:</strong><br />
                  Email: customer@example.com<br />
                  Senha: password123
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 