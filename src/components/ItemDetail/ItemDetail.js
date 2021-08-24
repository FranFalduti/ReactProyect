import { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "../Cart/ItemCount";

const ItemDetail = ({pictureURL, description, price, stock, amount}) => {

    const [showItemCount, setShowItemCount] = useState(true);

    function onAddCount(quantity) {
        setShowItemCount(false);
         
    }

    return (
        <div className="Item">
            <div><img src={pictureURL}></img></div>
            <div className="DescripcionPrecio">
                <div>Descripción: {description}</div>
                <div>Precio: {price}</div>
                { 
                    (showItemCount) ? 
                        <ItemCount stock={stock} amount={amount} onAdd={onAddCount} ></ItemCount>
                        :
                        <NavLink exact to="/cart" activeClassName="active">Terminar mi compra</NavLink>
                }
            </div>
        </div>
    );
}

export default ItemDetail;