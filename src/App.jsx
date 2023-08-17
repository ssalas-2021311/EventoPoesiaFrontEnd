import { useNavigate } from 'react-router-dom';
import '../src/assets/style.css';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
  }, []);
  return (
    <>
      <div className='container'>
        <div className='Principal'>
          <div className="card mb-3">
            <img src="../src/assets/img/Banner.png" className="card-img-top" alt="..." />
            <div className="card-body fondoCard">
              <h5 className="card-title titulo">Gran concurso de declamación</h5>
              <p className="card-text texto">Se participe de este concurso que se llevara acavo en la Universidad de Guatemala este agosto, inscríbete!!!</p>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" onClick={() => navigate('/UseForms')} type="button">Clic para registrarte</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
