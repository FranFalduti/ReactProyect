const ItemDetail = ({pictureURL, description, price}) => {

    return (
        <div className="Item">
            <ul>
                <li><img src={pictureURL}></img></li>
                <li>Descripción: {description}</li>
                <li>Precio: {price}</li>
            </ul>
        </div>
    );
}

export default ItemDetail;