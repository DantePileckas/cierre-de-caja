import React, {Component} from "react";


class Formulario extends Component{

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
                <input required ref={this.ingreso} className="u-full-width" type="number" placeholder="Ej. $300" />
            </div>
        
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
      

  </form>
    
        )

    
        
    }
}

export default Formulario;
