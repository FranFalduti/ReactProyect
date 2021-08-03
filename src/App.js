import {useState} from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./estilos.css";

const App = () => {
    
    const usuarios = [{nombre: "Franco"} , {nombre: "Julián"}];

    const [contador,setContador] = useState(0);
 
    const sumarContador = () => {
        console.log("Hola Mundo");
        setContador(contador + 1);
    }

    return (
        <>
            <CartWidget/>
            <ItemListContainer greeting="Hola Mundo"/>
            <Header test test2 nombre="Franco" edad={25} usuario={usuarios} />
            <NavBar/>
            <p>Contador Actual: {contador}</p>
            <button onClick={sumarContador}>Sumar</button>
        </>
    )

}
export default App;