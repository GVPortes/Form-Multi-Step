import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import UserForm from './components/UserForm';
import Thanks from './components/Thanks';
import ReviewForm from './components/ReviewForm';

function App() {

  const formComponents = [
    <UserForm></UserForm>,
    <ReviewForm></ReviewForm>,
    <Thanks></Thanks>
  ];

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Avalie no formulario abaixo:</p>
      </div>
      <div className="form-container">
        <p>Etapas:</p>
        <form>
          <div className="inputs-container">
            {/* Aqui iriam os inputs do formulário */}
            <UserForm />
            <ReviewForm />
            <Thanks />
          </div>
          <div className="actions">
            <button type="button" className="button">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="button" className="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
