import Header from "./components/Header";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./estilos.css";
import AppRouter from "./components/AppRouter";


const App = () => {
    
    const usuarios = [{nombre: "Franco"} , {nombre: "Julián"}];

    return (
        <>
            <AppRouter/>
            <CartWidget/>
            <Header test test2 nombre="Franco" edad={25} usuario={usuarios} />
            <ItemListContainer />
        </>
    );
    
}

export default App;