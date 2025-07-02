import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm'; 
import Tanks from './components/Tanks';

const App = () => {

    const formComponents=[
        <UserForm/>,<ReviewForm/>,<Tanks/>]

    const [currentStep,currentComponent,changeStep] = useForm(formComponents);
  return (
    <div className='app'>
      <div className="header">
        <h2>Avalie nossa loja:</h2>
        <p>Obrigado por usar nossos serviços!</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">

          </div>
          <div className="action">
            <button type='button' onClick={() => changeStep(currentStep - 1)}>
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
