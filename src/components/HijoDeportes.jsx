import { Component } from "react";

class HijoDeportes extends Component{
    //si quiero q sea independiente
    /*state={
        favorito:" "
    }

    mostrarFav =()=>{
        this.setState({
            favorito:this.props.nombre
        })
    }*/

    seleccionarFavorito = () =>{
        //CAPTURAMOS EL DEPORTE DEL PROPIO COMPONENT EN PROPS
        var deporte =this.props.nombre
        //REALIZAMOS LA PETICION AL PARENT
        this.props.mostrarFavorito(deporte)
    }
    

    render(){
        return(<div>
            <h2 style={{color:"blueviolet"}}>Hijo</h2>
            <h3 style={{color:"red"}}>Deporte: {this.props.nombre}</h3>
            {/* <h4 style={{color:"violet"}}>Deporte favorito: {this.state.favorito}</h4>  onClick={this.mostrarFav} en el button*/}
            
            <button onClick={this.seleccionarFavorito}>Selecciona tu favorito</button>
        </div>)
    }
}

export default HijoDeportes