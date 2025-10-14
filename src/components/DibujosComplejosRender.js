import { Component } from "react";

class DibujosComplejosRender extends Component{
    //NECESITAMOS UN ARRAY CON NMBRES Y DICHO ARRAY DEBE ESTAR DECLARADO EN STATE PARA ACTUALIZAR EL DIBUJO
    state= {
        nombres:["Aida","Lucas","Mateo","Raul","Nayara","David"]
    }

    //creamos un método
    generarNombre =()=>{
        //AÑADE un nuevo nombre
        this.state.nombres.push("NUEVO NOMBRE")
        //Guarda el nombre
        this.setState({
            nombres:this.state.nombres
        })
    }

    render(){

        return(<div>
            <h1>Dibujos complejos render</h1>
            <button onClick={this.generarNombre}>Añade un nombre</button>
            {
                //ESTE CÓDIGO ES JSX DE REACT,AQUÍ EMPEZAREMOS 
                //EL CÓDIGO LÓGICO DEBE CONTENER UN RETURN
                this.state.nombres.map((nombre,index) => {
                    //este código no puede estar vacío,necesita un return para el dibujo
                    return(<h3 style={{color:"violet"}} key={index}>
                        {nombre}
                    </h3>);
                })//final map
            }
            
        </div>)
    }
} 
export default DibujosComplejosRender;