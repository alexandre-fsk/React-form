import React from 'react';

const App = () => {
  return (
    <div className='app'>
      <div className="header">
        <h2>Avalie nossa loja:</h2>
        <p>Obrigado por usar nossos serviços!</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="action">
            <button type='button'>Voltar</button>
            <button type='submit'>Avançar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
