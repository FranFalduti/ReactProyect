import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) =>{

    const alAgregar = (cantidad) => {
        console.log(cantidad);
    }
    
    return (
        <div>
            <p className="saludo">{greeting}</p>
            <ItemCount stock={5} inicial={1} alAgregar={alAgregar}/>
        </div>
    );

}

export default ItemListContainer;
