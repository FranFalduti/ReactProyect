// 1) Tener REACT en scope
import React from "react";

// 2) Tener REACT_DOM en scope
import ReactDOM from "react-dom"

import App from "./App"

// 3) Crear un componente 
//const App = () => "Hola Mundo"

// 4) Renderizar la aplicación una única vez
ReactDOM.render(<App/>, document.getElementById("root"))