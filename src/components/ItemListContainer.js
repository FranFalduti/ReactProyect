import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{

    const alAgregar = (cantidad) => {
        console.log(cantidad);
    }
    
    return (
        <div>
            <p className="saludo">{greeting}</p>
            <ItemCount stock={5} inicial={1} alAgregar={alAgregar}/>
            <ItemList />
        </div>
    );

}

export default ItemListContainer;
