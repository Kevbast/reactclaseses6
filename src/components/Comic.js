import { Component } from "react";

class Comic extends Component{
render(){

    

    return(<div>
        <h2 style={{color:"red"}}>COMIC: {this.props.comic.titulo}</h2>
        <p>{this.props.comic.descripcion}</p>
        <img src={this.props.comic.imagen} style={{width:"100px",height:"auto"}}></img><br></br>
        <button onClick={()=>{
            //LLAMAMOS LA MÉTODO DEL PADRE COMICS
            this.props.seleccionarFav(this.props.comic)
        }}>seleccionar favorito</button>
        {/* funcion anónima lambda para eliminar el cómic selecionado pasando el index */}
        <button onClick={()=>{
            //se puede hacer un parse int,es conveniente
            var index =parseInt(this.props.index);
            this.props.deleteComic(index);
        }}>
            Borrar comic
        </button>
    </div>)
}
}
export default Comic