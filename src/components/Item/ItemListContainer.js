import CartCount from "../Cart/CartCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{

    const alAgregar = (cantidad) => {
        console.log(cantidad);
    }
    
    return (
        <div>
            <p className="saludo">{greeting}</p>
            <CartCount stock={5} inicial={1} alAgregar={alAgregar}/>
            <ItemList />
        </div>
    );

}

export default ItemListContainer;
