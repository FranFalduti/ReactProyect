const ItemDetail = ({pictureURL, description, price}) => {

    return (
        <div className="Item">
            <div><img src={pictureURL}></img></div>
            <div>Descripción: {description}</div>
            <div>Precio: {price}</div>
        </div>
    );
}

export default ItemDetail;