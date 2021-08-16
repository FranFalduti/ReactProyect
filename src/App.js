import Header from "./components/Main/Header";
import CartWidget from "./components/Cart/CartWidget";
import ItemListContainer from "./components/Item/ItemListContainer";
import "./estilos.css";
import AppRouter from "./components/AppRouter";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";


const App = () => {
    
    const usuarios = [{nombre: "Franco"} , {nombre: "Julián"}];

    return (
        <>
            <AppRouter/>
            <CartWidget/>
            <Header test test2 nombre="Franco" edad={25} usuario={usuarios} />
            <ItemListContainer />
            <ItemDetailContainer/>
        </>
    );
    
}

export default App;