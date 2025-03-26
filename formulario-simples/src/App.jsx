import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm'; 
import Tanks from './components/Tanks';

const App = () => {

    const formComponents=[
        <UserForm/>,<ReviewForm/>,<Tanks/>]
  return (
    <div className='app'>
      <div className="header">
        <h2>Avalie nossa loja:</h2>
        <p>Obrigado por usar nossos serviços!</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
            <div className="inputs-container">
                {formComponents[0]}
            </div>
          <div className="action">
            <button type='button'>
              <GrFormPrevious />
              <span>voltar</span>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
