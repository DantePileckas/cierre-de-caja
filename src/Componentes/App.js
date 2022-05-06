import React, {Component} from 'react';
import '../Css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Total from './Total';
import { calcularTotal } from '../helper';

class App extends Component{
 
  state = {
    acumulado:0,
    ingreso: 0
  }
 

/*    agregarIngreso = ingreso => {
    const ingreso = this.state.ingreso;
    console.log(ingreso);
    ingreso[`ingreso${Date.now()}`] = ingreso;
    this.setState({
      ingreso
    })
  }  */

  sumar() {
    this.setState((state) => {
      // Importante: lee `state` en vez de `this.state` al actualizar.
      return {acumulado: state.acumulado + parseInt(this.props.ingreso)}
    });
  }

  sumarIngreso = (ingreso) => {
    const numero = parseInt(ingreso);
/*     let total = calcularTotal(numero)
 */   
    this.setState({
      acumulado: this.state.acumulado + numero
    })
  }



  render(){
  return (
    <div className='App container'>

    <Header
      titulo ='Cierre de Caja'
    />
    
    <div className="contenido-principal contenido">
          <div className="row">
              <div className="one-half column">
                  <Formulario 
                 sumarIngreso = {this.sumarIngreso}
                 />
              </div>
              <div className="one-half column">
              <Total 
              acumulado = {this.state.acumulado}
              />
              </div>
          </div>
     </div>
    </div>


    );
 }
}

export default App;