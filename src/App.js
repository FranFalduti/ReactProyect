import Header from "./components/Header";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./estilos.css";


const App = () => {
    
    const usuarios = [{nombre: "Franco"} , {nombre: "Julián"}];

    return (
        <>
            <CartWidget/>
            <Header test test2 nombre="Franco" edad={25} usuario={usuarios} />
            <ItemListContainer greeting="Hola Mundo"/>
        </>
    );

}
export default App;