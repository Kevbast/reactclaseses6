import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component{

    deportes =["fútbol","basket","skate","tenis","hockey"]

    render(){
        return(<div>
            <h1>PADRE DEPORTES</h1>
            {
                this.deportes.map((deporte,index)=>{
                    //dibujamos un hijo deporte por cada uno q haya
                    return(<HijoDeportes key={index} nombre={deporte}/>)
                })
            }
        </div>)
    }
}

export default PadreDeportes