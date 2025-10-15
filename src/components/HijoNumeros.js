import { Component } from "react";

class HijoNumeros extends Component{

    seleccionarNumber =()=>{
        //capturamos el numero del component en props
        var numeroSelect =this.props.numero
        //realizamos la petición al parent
        this.props.sumarNumbers(numeroSelect)
    }

    render(){
        return(<div>
            <h2>Hijo Números</h2>
            <h3 style={{color:"red"}}>Número: {this.props.numero}</h3>
            <button style={{borderColor:"blueviolet"}} onClick={this.seleccionarNumber}>Sumar {this.props.numero}</button>
        </div>)
    }
}
export default HijoNumeros;