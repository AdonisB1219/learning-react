import React, {Component} from "react";

class Header extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Experiencia</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header;
