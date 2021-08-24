import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{
    
    return (
        <div>
            <p className="saludo">{greeting}</p>
            <ItemList />
        </div>
    );

}

export default ItemListContainer;
