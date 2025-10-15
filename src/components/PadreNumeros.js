import { Component } from "react";
import HijoNumeros from "./HijoNumeros";

class PadreNumeros extends Component{

    //Se almacena en el state pq se renderiza
    state= {   
        numbers:[77,93,22,40,65,9],
        total:0
    }

    generarNumber =()=>{
        //AÑADE un nuevo number
        this.state.numbers.push(parseInt(Math.random()*100)+ 1)
        //Guarda el number
        this.setState({
            numbers:this.state.numbers
        })
    }

    //Función suma pasamos al hijo
    sumarNumbers=(numeroSelect)=>{
        //mejor declarar una variable con la suma fuera,ya que cambia,aunque se podría hacer dentro directamente
        var suma = this.state.total + numeroSelect
        this.setState({
            total:suma
        })
    }

    render(){
        return(<div style={{marginLeft:"20px"}}>
            <h1>Padre Números</h1>
            <h3 style={{backgroundColor:"yellow"}}>Total suma: {this.state.total}</h3>
            <button onClick={this.generarNumber} style={{borderColor:"red",borderRadius:"10px"}}>Generar número</button>
            {
                this.state.numbers.map((numero,index)=>{
                    //Dibujamos cada hijo por cada numero que haya en el array
                    return(<HijoNumeros key={index} numero={numero} sumarNumbers={this.sumarNumbers}/>)
                })
            }

        </div>)
    }
}
export default PadreNumeros;