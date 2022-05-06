import React, {Component} from 'react';

class Total extends Component{
    
    render(){
        const acumulado = parseInt(this.props.acumulado);
        return(
            <div className='ingresos-realizados'>
                <h2>Total</h2>
              <h1> $ {acumulado} </h1> 
            </div>
        )
    }
}

export default Total