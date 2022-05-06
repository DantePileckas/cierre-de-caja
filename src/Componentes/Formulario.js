import React, {Component} from "react";


class Formulario extends Component{

/*     canitdadIngreso = React.createRef()    

    crearIngreso = (e) => {

        e.preventDefault();

        const ingreso = parseInt(this.canitdadIngreso.current.value);
        
        console.log(ingreso)

        this.props.agregarIngreso(ingreso)

        e.currentTarget.reset()

    } */
   
  
        ingreso = React.createRef();

        acumularIngreso = (e) => {
            e.preventDefault();
            let i = this.ingreso.current.value;
            this.props.sumarIngreso(i)
            console.log(i)
            e.currentTarget.reset();
        }



    render(){
        return(
            <form onSubmit={this.acumularIngreso}>
            <h2>Agrega tus ingresos aquí</h2>

            <div className="campo">
                <label>Ingrese el valor</label>
                <input ref={this.ingreso} className="u-full-width" type="text" placeholder="Ej. $300" />
            </div>
        
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
      
{/*                    <button onClick={this.acumularIngreso} type="submit" className="button-primary u-full-width">Agregar</button>
 */}
  </form>
    
        )

    
        
    }
}

export default Formulario;
