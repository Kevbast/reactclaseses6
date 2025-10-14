import { Component } from "react";

class HijoDeportes extends Component{

    state={
        favorito:" "
    }

    mostrarFav =()=>{
        this.setState({
            favorito:this.props.nombre
        })
    }

    render(){
        return(<div>
            <h2 style={{color:"blueviolet"}}>Hijo</h2>
            <h3 style={{color:"red"}}>Deporte: {this.props.nombre}</h3>
            <h4 style={{color:"violet"}}>Deporte favorito: {this.state.favorito}</h4>
            <button onClick={this.mostrarFav}>Selecciona tu favorito</button>
        </div>)
    }
}

export default HijoDeportes