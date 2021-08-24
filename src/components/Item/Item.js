import { NavLink } from "react-router-dom";

const Item = ({pictureURL, id, title, description, price}) => {

    return (
        <NavLink to={`/item/${id}`}>
            <div className="Item">
                <div><img src={pictureURL}></img></div>
                <div>Título: {title}</div>
                <div>Descripción: {description}</div>
                <div>Precio: {price}</div>
                
            </div>
        </NavLink>
    );
}

export default Item;