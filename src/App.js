import Header from "./components/Main/Header";
import CartWidget from "./components/Cart/CartWidget";
import "./estilos.css";
import AppRouter from "./components/AppRouter";

const App = () => {
    
    const usuarios = [{nombre: "Franco"} , {nombre: "Julián"}];

    return (
        <>
            <AppRouter>
                <CartWidget/>
                <Header test test2 nombre="Franco" edad={25} usuario={usuarios} />
            </AppRouter>
        </>
    );

}

export default App;