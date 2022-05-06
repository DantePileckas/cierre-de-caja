import '../Css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Total  from './Total';

function App() {
  return (
    <div className="App container">
      <Header 
      titulo ='Cierre de Caja'
      />
  <div className="contenido-principal contenido">
      <div className="row">
              <div className="one-half column">
                  <Formulario 
                  />
              </div>
              <div className="one-half column">
              <Total 
                  />
              </div>
          </div>
     </div>
  </div>
  );
}

export default App;
