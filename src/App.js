import NavBar from "./NavBar";
import Header from "./Header";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const App = () => {
    
    const usuarios = [{nombre: "Franco"} , {nombre: "Julián"}]

    return (
        <>
            <CartWidget/>
            <ItemListContainer greeting="Hola Mundo"/>
            <Header test test2 nombre="Franco" edad={25} usuario={usuarios} />
            <NavBar/>
        </>
    )

}
export default App;