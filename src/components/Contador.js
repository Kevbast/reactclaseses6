import { Component } from "react";

//PODEMOS DECLARAR MÉTODOS FUERA DE LA CLASE PERO NO PUEDEN UTILIZAR NADA DEL COMPONENT

function metodoRandom() {
    console.log("HOLA SOY EL METODO RANDOM");
}

class Contador extends Component{
    //LAS VARIABLES SE DECLARAN A NIVEL DE CLASE
    //NO SE UTILIZAN PALABRAS COMO VAR,LET O CONST

    numero=1;
    //number=this.props.inicio
    
    //CON LOS MÉTODOS SUCEDE EXACTAMENTE LO MISMO,SOLO LA DECLARACIÓN
    incrementarNumero= ()=>{
        this.numero +=1;
        console.log("Valor de numero "+ this.numero);
    }

    //LAS VARIABLES STATE SON DECLARADAS EN EL OBJETO DE LA CLASE
    state ={
        valor:parseInt(this.props.inicio)//que hemos pasado dese el parent
    }

    incrementarValor =() =>{
        //EN SETSTATE SE MODIFICAN OBJETOS CON SU KEY:VALUE
        this.setState({
            valor:this.state.valor + 1
        });   
    }

    //LA SINTAXIS DEL CODIGO HTML HA CAMBIADO
    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>Ejemplo Contador JSX {this.props.inicio}</h1>
                <h3 style={{color:"green"}}>Valor {this.state.valor}</h3>
                {/* <h3 style={{color:"green"}}>{this.numero}</h3> */}
                {/* LA LLAMADA A LOS MÉTODOS SE REALIZA CON this y no se utiliza ni lambda ni parentesis */}
                <button onClick={this.incrementarNumero}>Incrementar numero(console log):</button>
                <button onClick={this.incrementarValor}>Incrementar numero valor:</button>

                
                <button onClick={()=>{
                    //CÓDIGO JSX
                    metodoRandom();//si es externo, no lleva this
                    this.incrementarNumero();
                }}>OTRA SINTAXIS CON FUCIÓN ANÓNIMA LAMBDA</button>
            </div>
        )
    }

}

export default Contador;