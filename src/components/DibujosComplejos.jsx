import { Component } from "react";

class DibujosComplejos extends Component{

    dibujarNumeros=()=>{
        var lista =[];

        for (let i = 1; i <= 7; i++) {
            var numero= parseInt(Math.random()*100)+ 1;
            //MEDIANTE PUSH VAMOS AÑADIENDO ELEMENTOS A LA LISTA
            lista.push(<li key={i}>{numero}</li>);//key única a los elementos dinámicos 
        }
        return lista;
    }
    render(){

        return(<div>
            <h1>Dibujos dinámicos React</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
        </div>)
    }
}
export default DibujosComplejos;