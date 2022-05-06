import React, {Component} from "react";


class FormularioIngreso extends Component{

    /* canitdadIngreso = React.createRef()    

    crearIngreso = (e) => {

        e.preventDefault();

        const ingreso ={
            cantidadIngreso : this.canitdadIngreso.current.value
        }

        console.log(ingreso)

        this.props.agregarIngreso(ingreso)

        e.currentTarget.reset()

    } */


    render(){
        return(
            <form onSubmit={this.crearIngreso}>
            <h2>Agrega tus ingresos aquí</h2>

            <div className="campo">
                <label>Ingrese el valor</label>
                <input ref={this.canitdadIngreso} className="u-full-width" type="text" placeholder="Ej. $300" />
            </div>
        
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
        </form>
    
        )

    
        
    }
}

export default FormularioIngreso;