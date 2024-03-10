import Descripcion from "./Descripcion";
import Titulo from "./Titulo";

export const Ficha = (proyecto)=>{
    return(
        <div>
        <Titulo titulo={proyecto}/>
        <Descripcion descripcion={proyecto}/>
        <img src={proyecto.img}/>
        </div>
    );
}

export default Ficha;