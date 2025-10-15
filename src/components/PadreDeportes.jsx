import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component{

    deportes =["fútbol","basket","skate","tenis","hockey"]
    //NECESITAMOS UNA VARIABLE STATE PARA VISUALIZAR EL DEPORTE FAVORITO
    state ={
        favorito:" "
    }
    //DEBEMOS TENER UN MÉTODO QUE SERÁ INVOCADO POR EL HIJO AL PULSAR SOBRE EL BOTON DE SELECIONAR
    mostrarFav =(deporteSelect)=>{
        this.setState({
            favorito:deporteSelect
        })
    }
    render(){
        return(<div>
            <h1>PADRE DEPORTES</h1>
            <h4 style={{backgroundColor:"lightgreen"}}>Su deporte favorito es: {this.state.favorito}</h4>
            {
                this.deportes.map((deporte,index)=>{
                    //dibujamos un hijo deporte por cada uno q haya
                    return(<HijoDeportes key={index} nombre={deporte} mostrarFavorito={this.mostrarFav}/>)
                })
            }
        </div>)
    }
}

export default PadreDeportes