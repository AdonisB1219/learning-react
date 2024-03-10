import React, {Component} from "react";
import Header from "./components/header";
import Boton from "./components/boton";
import Ficha from "./components/Ficha";
import './App.css';

class App extends Component {
  render () {
    return(
      <div className="App">
        <Header/>
        <Boton titulo="Hola"/>
        <Ficha
        titulo="Fondo"
        descripcion="Imagen azul con gris"
        url="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400"/>
      </div>
      
    )
  }
}

export default App;
